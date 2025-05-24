import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    console.log('Starting send-contact-email function');
    
    // Check if API key is available
    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set')
      return new Response(
        JSON.stringify({ 
          error: 'Server configuration error',
          message: 'Email service is not properly configured. Please contact the administrator.'
        }),
        { 
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          }
        }
      )
    }
    
    // Parse request body
    const { name, email, message } = await req.json()
    console.log('Received form data:', { name, email, message: message?.substring(0, 50) + '...' });

    // Validate required fields
    if (!name || !email || !message) {
      console.error('Missing required fields:', { name: !!name, email: !!email, message: !!message });
      return new Response(
        JSON.stringify({ 
          error: 'Missing required fields',
          message: 'Name, email, and message are all required'
        }),
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          }
        }
      )
    }

    console.log('Sending email via Resend API...');

    // Send email using Resend - using the default testing email
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Acme <onboarding@resend.dev>',
        to: ['dapravithrotha@gmail.com'],
        subject: `New Portfolio Contact: ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #4F46E5; margin-top: 0;">Contact Details:</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
            </div>
            
            <div style="background-color: #fff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">Message:</h3>
              <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef; color: #666; font-size: 14px;">
              <p><em>This message was sent from your portfolio website contact form.</em></p>
              <p><strong>Reply to:</strong> ${email}</p>
            </div>
          </div>
        `,
      }),
    })
    
    console.log('Resend API response status:', emailResponse.status);
    
    if (!emailResponse.ok) {
      const errorText = await emailResponse.text()
      console.error('Resend API error response:', errorText)
      
      // Parse the error to provide better user feedback
      let userMessage = 'Email service error. Please try again later.';
      try {
        const errorData = JSON.parse(errorText);
        if (errorData.message?.includes('domain')) {
          userMessage = 'Email service configuration needed. The message was received but email delivery requires domain verification.';
        }
      } catch (e) {
        // Keep default message if parsing fails
      }
      
      return new Response(
        JSON.stringify({ 
          error: 'Failed to send email',
          message: userMessage
        }),
        { 
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          }
        }
      )
    }

    const emailResult = await emailResponse.json()
    console.log('Email sent successfully:', emailResult)

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Thank you for your message! I will get back to you soon.'
      }),
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        }
      }
    )

  } catch (error) {
    console.error('Error in send-contact-email function:', error)
    
    return new Response(
      JSON.stringify({ 
        error: 'Failed to send email',
        message: 'There was an unexpected error sending your message. Please try again later.'
      }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        }
      }
    )
  }
})
