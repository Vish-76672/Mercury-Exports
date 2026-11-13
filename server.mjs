import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
const root = process.cwd();
const mime = { '.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml' };
const port = Number(process.env.PORT || 4173);
http.createServer(async (req,res)=>{
  try {
    const pathname = decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    const safe = normalize(pathname).replace(/^([.][.][/\\])+/, '').replace(/^[/\\]+/, '');
    let file = join(root, safe || 'index.html');
    try { const data = await readFile(file); res.writeHead(200, {'Content-Type': mime[extname(file)] || 'application/octet-stream'}); res.end(data); }
    catch { const data = await readFile(join(root,'index.html')); res.writeHead(200, {'Content-Type':mime['.html']}); res.end(data); }
  } catch { res.writeHead(500); res.end('Unable to serve this page'); }
}).listen(port,()=>console.log(`Mercury Experts available at http://localhost:${port}`));
