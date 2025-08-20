import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message } = body;
    if (!message) {
      return new Response(JSON.stringify({ error: 'No message provided' }), { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'Gemini API key not set' }), { status: 500 });
    }

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: message }] }],
      }),
    });
    const data = await response.json();
    if (!response.ok) {
      console.error('Gemini API error:', data);
      // Return Gemini error message to frontend for debugging
      return new Response(JSON.stringify({ reply: data.error?.message || 'Failed to fetch response from Gemini.' }), { status: 200 });
    }
    let reply = '';
    if (data?.candidates?.[0]?.content?.parts?.[0]?.text) {
      reply = data.candidates[0].content.parts[0].text;
    } else {
      reply = 'Sorry, I could not generate a response.';
      console.error('Gemini API returned empty response:', data);
    }
    return new Response(JSON.stringify({ reply }), { status: 200 });
  } catch (error) {
    console.error('Gemini API fetch error:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch response from Gemini.' }), { status: 500 });
  }
}
