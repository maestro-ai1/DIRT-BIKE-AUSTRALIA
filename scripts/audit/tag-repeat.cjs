const fs=require('fs'),path=require('path'),Module=require('module');
const ROOT=path.resolve(__dirname,'../..');const ts=require(ROOT+'/node_modules/typescript');const o=Module._resolveFilename;
Module._resolveFilename=function(r,p,...x){if(r.startsWith('@/'))r=path.join(ROOT,r.slice(2));if(/^\.{1,2}\//.test(r)||path.isAbsolute(r)){const b=path.isAbsolute(r)?r:path.resolve(path.dirname(p.filename),r);for(const e of ['','.ts','.tsx','.js','/index.ts'])if(fs.existsSync(b+e)&&fs.statSync(b+e).isFile())return b+e;}return o.call(this,r,p,...x)};
Module._extensions['.ts']=function(m,f){m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020,esModuleInterop:true}}).outputText,f)};
const site=require(ROOT+'/src/config/site.ts'),seo=require(ROOT+'/lib/productSeo.ts');
const c=new Map();let total=0;for(const p of site.PRODUCTS)for(const t of seo.getProductTags(p)){total++;c.set(t.label.toLowerCase(),(c.get(t.label.toLowerCase())||0)+1)}
const v=[...c.entries()].sort((a,b)=>b[1]-a[1]);
console.log('tags',total,'distinct',c.size,'products',site.PRODUCTS.length);
console.log('used on >10 products:',v.filter(x=>x[1]>10).length,'| top:',v.slice(0,12).map(x=>x[0]+' x'+x[1]).join('; '));
console.log('unique-to-one-product:',v.filter(x=>x[1]===1).length);
