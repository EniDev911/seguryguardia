import{r as i,f as l,j as n,g as m,h as N,i as t,k as f}from"./index.31b8c980.js";const p=i.exports.forwardRef(({bsPrefix:d,className:c,variant:e,as:s="img",...o},r)=>{const a=l(d,"card-img");return n(s,{ref:r,className:m(e?`${a}-${e}`:a,c),...o})});p.displayName="CardImg";const $=p,x=i.exports.forwardRef(({bsPrefix:d,className:c,as:e="div",...s},o)=>{const r=l(d,"card-header"),a=i.exports.useMemo(()=>({cardHeaderBsPrefix:r}),[r]);return n(N.Provider,{value:a,children:n(e,{ref:o,...s,className:m(c,r)})})});x.displayName="CardHeader";const H=x,b=f("h5"),I=f("h6"),u=t("card-body"),P=t("card-title",{Component:b}),B=t("card-subtitle",{Component:I}),k=t("card-link",{Component:"a"}),S=t("card-text",{Component:"p"}),T=t("card-footer"),j=t("card-img-overlay"),w={body:!1},C=i.exports.forwardRef(({bsPrefix:d,className:c,bg:e,text:s,border:o,body:r,children:a,as:y="div",...g},v)=>{const h=l(d,"card");return n(y,{ref:v,...g,className:m(c,h,e&&`bg-${e}`,s&&`text-${s}`,o&&`border-${o}`),children:r?n(u,{children:a}):a})});C.displayName="Card";C.defaultProps=w;const R=Object.assign(C,{Img:$,Title:P,Subtitle:B,Body:u,Link:k,Text:S,Header:H,Footer:T,ImgOverlay:j});export{R as C};
