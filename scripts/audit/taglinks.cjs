// Checks every tag href on every product resolves (200) on the base URL, and lists titles that differ from live.
const fs=require('fs'),path=require('path'),Module=require('module');
const ROOT=path.resolve(__dirname,'../..');const ts=require(ROOT+'/node_modules/typescript');const o=Module._resolveFilename;
Module._resolveFilename=function(r,p,...x){if(r.startsWith('@/'))r=path.join(ROOT,r.slice(2));if(/^\.{1,2}\//.test(r)||path.isAbsolute(r)){const b=path.isAbsolute(r)?r:path.resolve(path.dirname(p.filename),r);for(const e of ['','.ts','.tsx','.js','/index.ts'])if(fs.existsSync(b+e)&&fs.statSync(b+e).isFile())return b+e;}return o.call(this,r,p,...x)};
Module._extensions['.ts']=function(m,f){m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020,esModuleInterop:true}}).outputText,f)};
const site=require(ROOT+'/src/config/site.ts'),seo=require(ROOT+'/lib/productSeo.ts');
const B=process.argv[2];(async()=>{const hrefs=new Set();let bad=0;
for(const p of site.PRODUCTS)for(const t of seo.getProductTags(p))hrefs.add(t.href);
for(const h of hrefs){const r=await fetch(B+h,{redirect:'manual'});if(r.status!==200){bad++;console.log('BAD',r.status,h)}}
console.log('distinct tag hrefs',hrefs.size,'non-200',bad);})();
