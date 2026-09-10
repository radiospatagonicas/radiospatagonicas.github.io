export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const url = new URL(req.url);
  let targetUrl = url.searchParams.get('url');

  if (!targetUrl) {
    return new Response('Uso: /api/proxy?url=http://tu-servidor:puerto/stream', { status: 400 });
  }

  // Asegura prefijo http:// si no viene en el parámetro
  if (!targetUrl.startsWith('http://') && !targetUrl.startsWith('https://')) {
    targetUrl = 'http://' + targetUrl;
  }

  try {
    const streamRes = await fetch(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    });

    const headers = new Headers();
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
    headers.set('Content-Type', streamRes.headers.get('content-type') || 'audio/mpeg');

    return new Response(streamRes.body, {
      status: streamRes.status,
      headers: headers
    });
  } catch (err) {
    return new Response('Error al conectar con la radio: ' + err.message, { status: 500 });
  }
}
