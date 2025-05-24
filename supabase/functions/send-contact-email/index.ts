
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (req) => {
  console.log('=== Function started ===')
  console.log('Request method:', req.method)
  console.log('Request URL:', req.url)
  
  // Handle CORS
  if (req.method === 'OPTIONS') {
    console.log('Handling CORS preflight request')
    return new Response('ok', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
      }
    })
  }

  try {
    console.log('=== Starting email process ===')
    console.log('RESEND_API_KEY exists:', !!RESEND_API_KEY)
    console.log('RESEND_API_KEY length:', RESEND_API_KEY?.length || 0)
    
    // Check if API key is available
    if (!RESEND_API_KEY) {
      console.error('❌ RESEND_API_KEY is not set in environment variables')
      return new Response(
        JSON.stringify({ 
          error: 'API key not configured',
          details: 'RESEND_API_KEY environment variable is missing'
        }),
        { 
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          }
        }
      )
    }

    console.log('✅ API key is available')
    
    // Parse request body
    let requestData
    try {
      requestData = await req.json()
      console.log('✅ Request body parsed successfully')
      console.log('Request data keys:', Object.keys(requestData))
    } catch (parseError) {
      console.error('❌ Failed to parse request body:', parseError)
      return new Response(
        JSON.stringify({ 
          error: 'Invalid request body',
          details: 'Could not parse JSON from request body'
        }),
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          }
        }
      )
    }

    const { name, email, message } = requestData
    console.log('Form data received:', { 
      name: name ? '✅' : '❌', 
      email: email ? '✅' : '❌', 
      message: message ? `✅ (${message.length} chars)` : '❌'
    })

    // Validate required fields
    if (!name || !email || !message) {
      console.error('❌ Missing required fields:', { 
        name: !!name, 
        email: !!email, 
        message: !!message 
      })
      return new Response(
        JSON.stringify({ 
          error: 'Missing required fields',
          details: 'Name, email, and message are all required'
        }),
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          }
        }
      )
    }

    console.log('✅ All required fields present')
    console.log('=== Preparing to send email via Resend ===')
    
    const emailPayload = {
      from: 'Portfolio Contact <noreply@resend.dev>',
      to: ['dapravitrotha@gmail.com'],
      subject: `New Contact Form Message from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <br>
        <p><em>This message was sent from your portfolio website contact form.</em></p>
      `,
    }
    
    console.log('Email payload prepared:', {
      from: emailPayload.from,
      to: emailPayload.to,
      subject: emailPayload.subject,
      htmlLength: emailPayload.html.length
    })
    
    // Send email using Resend
    console.log('🚀 Sending request to Resend API...')
    let emailResponse
    try {
      emailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailPayload),
      })
      console.log('✅ Resend API request completed')
      console.log('Resend API response status:', emailResponse.status)
      console.log('Resend API response headers:', Object.fromEntries(emailResponse.headers.entries()))
    } catch (fetchError) {
      console.error('❌ Failed to fetch Resend API:', fetchError)
      throw new Error(`Network error when calling Resend API: ${fetchError.message}`)
    }
    
    if (!emailResponse.ok) {
      let errorText
      try {
        errorText = await emailResponse.text()
        console.error('❌ Resend API error response:', errorText)
      } catch (textError) {
        console.error('❌ Could not read error response:', textError)
        errorText = 'Could not read error response'
      }
      
      throw new Error(`Resend API error: ${emailResponse.status} - ${errorText}`)
    }

    let emailResult
    try {
      emailResult = await emailResponse.json()
      console.log('✅ Email sent successfully!')
      console.log('Email result:', emailResult)
    } catch (jsonError) {
      console.error('❌ Could not parse success response:', jsonError)
      // Still consider it successful if we got a 2xx status
      console.log('✅ Email appears to have been sent (status was successful)')
    }

    console.log('=== Returning success response ===')
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully',
        emailId: emailResult?.id || 'unknown'
      }),
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      }
    )

  } catch (error) {
    console.error('💥 FATAL ERROR:', error)
    console.error('Error name:', error.name)
    console.error('Error message:', error.message)
    console.error('Error stack:', error.stack)
    
    return new Response(
      JSON.stringify({ 
        error: 'Failed to send email',
        details: error.message || 'Unknown error occurred',
        errorType: error.name || 'UnknownError'
      }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      }
    )
  }
})
