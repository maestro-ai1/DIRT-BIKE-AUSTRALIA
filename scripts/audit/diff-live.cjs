const fs=require('fs'),path=require('path'),Module=require('module');
const ROOT=path.resolve(__dirname,'../..');const ts=require(ROOT+'/node_modules/typescript');const o=Module._resolveFilename;
Module._resolveFilename=function(r,p,...x){if(r.startsWith('@/'))r=path.join(ROOT,r.slice(2));if(/^\.{1,2}\//.test(r)||path.isAbsolute(r)){const b=path.isAbsolute(r)?r:path.resolve(path.dirname(p.filename),r);for(const e of ['','.ts','.tsx','.js','/index.ts'])if(fs.existsSync(b+e)&&fs.statSync(b+e).isFile())return b+e;}return o.call(this,r,p,...x)};
Module._extensions['.ts']=function(m,f){m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020,esModuleInterop:true}}).outputText,f)};
const site=require(ROOT+'/src/config/site.ts');
const L='https://electricdirtbikeaustralia.com.au',B='http://localhost:3210';
const g=(h,re)=>(h.match(re)||[,''])[1];
(async()=>{let t=0,d=0,c=0,a=0,tot=0;const ex=[];
for(const p of site.PRODUCTS){const u=`/shop/${p.slug}/`;const [x,y]=await Promise.all([fetch(L+u).then(r=>r.text()),fetch(B+u).then(r=>r.text())]);tot++;
if(g(x,/<title>([^<]*)/)!==g(y,/<title>([^<]*)/)){t++;if(ex.length<5)ex.push([g(x,/<title>([^<]*)/),g(y,/<title>([^<]*)/)])}
if(g(x,/name="description" content="([^"]*)"/)!==g(y,/name="description" content="([^"]*)"/))d++;
if(g(x,/rel="canonical" href="([^"]*)"/)!==g(y,/rel="canonical" href="([^"]*)"/))c++;
const al=(h)=>[...h.matchAll(/<img [^>]*width="1200"[^>]*>/g)].map(m=>g(m[0],/alt="([^"]*)"/)).join('|');if(al(x)!==al(y))a++;}
console.log({products:tot,titleChanged:t,descChanged:d,canonicalChanged:c,altChanged:a});console.log(ex);})();
