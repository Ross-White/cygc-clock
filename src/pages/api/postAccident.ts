import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const apiKey = process.env.ACCIDENTS_API_KEY
    const endpoint = process.env.ACCIDENTS_API_ENDPOINT

    if (!apiKey || !endpoint) {
      console.error('API Key is not set');
      res.status(500).json({ success: false, error: 'API Key is not set' });
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': apiKey
        },
        body: JSON.stringify(req.body)
      })
      const data = await response.json()
      res.status(200).json({ success: true, data })
    } catch (error: any) {
      res.status(500).json({ success: false, error: error.message })
    }
  }