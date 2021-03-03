(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"03dC":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return E}));var n=t("q1tI"),o=t.n(n),l=t("4/Vk"),r=t("7oih"),i=t("7vrA"),c=t("6+GL"),s=t("3Z9Z"),m=t("59G+"),u=t("pJaR"),d=t("Wbzz"),p=t("Hrqu"),f=t("JI6e"),b=t("ZJrt"),h=t("eynx"),g=t("ihcr"),v=t("gMBH");function E(){return o.a.createElement(r.a,{title:"Violin plot",isTocEnabled:!0,seoDescription:"A collection of violin plot examples made with Python, coming with explanation and reproducible code"},o.a.createElement(l.a,{title:"Violin plot",description:"<p>A <a href='https://www.data-to-viz.com/graph/violin.html'>violint plot</a> allow to visualize the distribution of a numeric variable for one or several groups. <code>Seaborn</code> is particularly adapted to build it thanks to its <code>violin()</code> function. Violinplots deserve more attention compared to <a href='https://www.python-graph-gallery.com/boxplot'>boxplots</a> that can sometimes hide features of the data.</p>"}),o.a.createElement(i.a,null,o.a.createElement("h2",{id:"Quick start"},"⏱ Quick start"),o.a.createElement(s.a,{className:"align-items-center"},o.a.createElement(f.a,{md:6},o.a.createElement("p",null,o.a.createElement("code",null,"Seaborn")," is definitely the best library to quickly build a violin plot. It offers a dedicated ",o.a.createElement("code",null,"violinplot()")," function that roughly works as follows:🔥")),o.a.createElement(f.a,{md:6},o.a.createElement(d.Link,{to:"/50-basic-violinplot-and-input-formats"},o.a.createElement(h.a,{imgName:"50_Basic_Violin_seaborn2",caption:"The most basic violin plot one can make with python and seaborn"})))),o.a.createElement(b.a,null,'# library & dataset\nimport seaborn as sns\ndf = sns.load_dataset(\'iris\')\n\n# plot\nsns.violinplot(x=df["species"], y=df["sepal_length"])\n')),o.a.createElement(v.a,null),o.a.createElement(i.a,null,o.a.createElement("h2",{id:"Seaborn"},o.a.createElement(p.e,null),"Violin charts with ",o.a.createElement("code",null,"Seaborn")),o.a.createElement("p",null,o.a.createElement("code",null,"Seaborn")," is a python library allowing to make better charts easily. It is well adapted to build density charts thanks to its ",o.a.createElement("code",null,"violin")," function. The following charts will guide you through its usage, going from a very"," ",o.a.createElement(d.Link,{to:"/50-basic-violinplot-and-input-formats"},"basic violin plot")," to something much more"," ",o.a.createElement(d.Link,{to:"/52-custom-seaborn-violinplot"},"customized"),"."),o.a.createElement(s.a,null,o.a.createElement(m.a,{imgName:"50_Basic_Violin_seaborn1",caption:"How to build a very basic violin. Shows example based on different input formats.",linkTo:"/50-basic-violinplot-and-input-formats"}),o.a.createElement(m.a,{imgName:"51_Horizontal_violinplot_Seaborn",caption:"Make your violin chart horizontal to make labels more readable",linkTo:"/51-horizontal-violinplot"}),o.a.createElement(m.a,{imgName:"52_Custom_violinplot_Appearance_Seaborn1",caption:"Chart appearance: control violin width, stroke width and more",linkTo:"/52-custom-seaborn-violinplot"}),o.a.createElement(m.a,{imgName:"53_Custom_violinplot_color_Seaborn3",caption:"How to manage colors on a python violin plot",linkTo:"/53-control-color-of-seaborn-violinplot"}),o.a.createElement(m.a,{imgName:"55_Specific_order_violinplot_Seaborn2",caption:"Control the groups order, very useful if you want to display them by increasing mean",linkTo:"/55-control-order-of-groups-in-violinplot-seaborn"}),o.a.createElement(m.a,{imgName:"54_Grouped_violinplot_Seaborn",caption:"If you have both groups and subgroups, you'll be interested in a grouped violin plot",linkTo:"/54-grouped-violinplot"}),o.a.createElement(m.a,{imgName:"58_Number_of_obs_on_violinplot_seaborn",caption:"Show the number of observations per group",linkTo:"/58-show-number-of-observation-on-violinplot"}),o.a.createElement(m.a,{imgName:"54_Grouped_violinplot_Seaborn",caption:"If you have both groups and subgroups, you'll be interested in a grouped violin plot",linkTo:"/54-grouped-violinplot"}))),o.a.createElement(v.a,null),o.a.createElement("div",{className:"greySection"},o.a.createElement(i.a,null,o.a.createElement(g.a,{functionName:"violin"}))),o.a.createElement(v.a,null),o.a.createElement("div",{className:"greySection",id:"related"},o.a.createElement(i.a,null,o.a.createElement(u.a,{chartFamily:"distribution"}))),o.a.createElement(v.a,null),o.a.createElement(i.a,null,o.a.createElement(c.a,null)),o.a.createElement(v.a,null))}},"59G+":function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t("q1tI"),o=t.n(n),l=t("eynx"),r=t("JI6e"),i=t("Wbzz");function c(e){var a=e.imgName,t=e.caption,n=e.linkTo;return o.a.createElement(r.a,{xs:12,md:4},o.a.createElement(i.Link,{to:n},o.a.createElement(l.a,{imgName:a,caption:t})))}},"7xSO":function(e,a,t){},eynx:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));t("2mCb");var n=t("q1tI"),o=t.n(n),l=t("Wbzz"),r=t("9eSz"),i=t.n(r),c=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function s(e){var a=e.imgName,t=e.caption;if(c.includes(a))return o.a.createElement("p",null,"TODO");var n=Object(l.useStaticQuery)("3289484431").allFile.edges.find((function(e){return e.node.name.includes(a)}));return n?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"chartImageContainer"},o.a.createElement(i.a,{alt:a,fluid:n.node.childImageSharp.fluid,className:"chartImageImg"}),o.a.createElement("div",{className:"chartImageOverlay"},o.a.createElement("div",{className:"chartImageOverlayText"},o.a.createElement("p",null,t))))):null}},hlKo:function(e,a,t){"use strict";var n=t("k1TG"),o=t("8o2o"),l=t("TSYQ"),r=t.n(l),i=t("q1tI"),c=t.n(i),s=t("cWnB"),m=function(){},u=c.a.forwardRef((function(e,a){var t=e.children,l=e.name,u=e.className,d=e.checked,p=e.type,f=e.onChange,b=e.value,h=e.disabled,g=e.inputRef,v=Object(o.a)(e,["children","name","className","checked","type","onChange","value","disabled","inputRef"]),E=Object(i.useState)(!1),y=E[0],_=E[1],k=Object(i.useCallback)((function(e){"INPUT"===e.target.tagName&&_(!0)}),[]),w=Object(i.useCallback)((function(e){"INPUT"===e.target.tagName&&_(!1)}),[]);return c.a.createElement(s.a,Object(n.a)({},v,{ref:a,className:r()(u,y&&"focus",h&&"disabled"),type:void 0,active:!!d,as:"label"}),c.a.createElement("input",{name:l,type:p,value:b,ref:g,autoComplete:"off",checked:!!d,disabled:!!h,onFocus:k,onBlur:w,onChange:f||m}),t)}));u.displayName="ToggleButton",a.a=u},ihcr:function(e,a,t){"use strict";t.d(a,"a",(function(){return f}));t("Wbzz");var n=t("q1tI"),o=t.n(n),l=t("hlKo"),r=t("k1TG"),i=t("8o2o"),c=t("TSYQ"),s=t.n(c),m=t("vUet"),u=o.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.size,l=e.toggle,c=e.vertical,u=e.className,d=e.as,p=void 0===d?"div":d,f=Object(i.a)(e,["bsPrefix","size","toggle","vertical","className","as"]),b=Object(m.a)(t,"btn-group"),h=b;return c&&(h=b+"-vertical"),o.a.createElement(p,Object(r.a)({},f,{ref:a,className:s()(u,h,n&&b+"-"+n,l&&b+"-toggle")}))}));u.displayName="ButtonGroup",u.defaultProps={vertical:!1,toggle:!1,role:"group"};var d=u,p={kdeplot:{description:"",docUrl:"https://seaborn.pydata.org/generated/seaborn.kdeplot.html",basicUsage:"",parameters:[{name:"fill",description:"color under the curve",type:"boolean",relatedChart:"70_deffffed"},{name:"bw",description:"control how density is computed",type:"boolean",relatedChart:"70_deffffed"},{name:"color",description:"control the color",type:"boolean",relatedChart:"70_deffffed"}]},violin:{description:"",docUrl:"https://seaborn.pydata.org/generated/seaborn.violinplot.html",basicUsage:"",parameters:[{name:"width",description:"color under the curve",type:"boolean",relatedChart:"70_deffffed"},{name:"bw",description:"control how density is computed",type:"boolean",relatedChart:"70_deffffed"},{name:"color",description:"controls the color",type:"string",relatedChart:"70_deffffed"}]}};t("7xSO");function f(e){var a,t=e.functionName,n=p[t],r=o.a.useState(n.parameters[0].name),i=r[0],c=r[1],s=n.parameters.filter((function(e){return e.name===i}))[0],m=n.parameters.map((function(e,a){return o.a.createElement(l.a,{type:"radio",active:!0,key:a,className:"functionButton",variant:"secondary",size:"sm",value:e.name,checked:i===e.name,onChange:function(e){return c(e.currentTarget.value)}},e.name)}));return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:(a=t+"() details","string"!=typeof a?"":a.charAt(0).toUpperCase()+a.slice(1))},"🔎 ",o.a.createElement("code",null,t)," function parameters",o.a.createElement("a",{style:{marginLeft:"15px",fontSize:"14px"},href:n.docUrl},"→ see full doc")),o.a.createElement(d,{toggle:!0},m),o.a.createElement("div",null,o.a.createElement("code",null,"string"),o.a.createElement("span",null,"→ ",s.description)),o.a.createElement("br",null),o.a.createElement("br",null))}}}]);
//# sourceMappingURL=component---src-pages-violin-plot-js-858bb2cf87b3233a5227.js.map