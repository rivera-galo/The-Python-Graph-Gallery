(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"59G+":function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),l=a.n(n),r=a("eynx"),i=a("JI6e"),o=a("Wbzz");function c(e){var t=e.imgName,a=e.caption,n=e.linkTo;return l.a.createElement(i.a,{xs:12,md:4},l.a.createElement(o.Link,{to:n},l.a.createElement(r.a,{imgName:t,caption:a})))}},"7xSO":function(e,t,a){},S3j1:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return E}));var n=a("q1tI"),l=a.n(n),r=a("4/Vk"),i=a("7oih"),o=a("7vrA"),c=a("6+GL"),s=a("3Z9Z"),m=a("59G+"),d=a("pJaR"),u=a("Wbzz"),p=a("Hrqu"),h=a("JI6e"),b=a("ZJrt"),g=a("eynx"),y=a("ihcr"),f=a("gMBH");function E(){return l.a.createElement(i.a,{title:"Density chart",isTocEnabled:!0,seoDescription:"A collection of density plot examples made with Python, coming with explanation and reproducible code"},l.a.createElement(r.a,{title:"Density chart",description:"<p>Density plots allow to visualize the distribution of a numeric variable for one or several groups. They are very well adapted for large dataset, as stated in data-to-viz.com. Note that 2 approaches exist to build them in python: the first one consists in computing a kernel density estimate, the second one in building a high resolution histogram.</p>"}),l.a.createElement(o.a,null,l.a.createElement("h2",{id:"Quick start"},"⏱ Quick start"),l.a.createElement(s.a,{className:"align-items-center"},l.a.createElement(h.a,{md:6},l.a.createElement("p",null,"If you are in a rush, the most straightforward way to build a density chart is to use ",l.a.createElement("code",null,"Seaborn")," and its ",l.a.createElement("code",null,"kdeplot()")," function. You just need to provide it with a numeric variable from your dataset. 🔥")),l.a.createElement(h.a,{md:6},l.a.createElement(u.Link,{to:"/70-basic-density-plot-with-seaborn"},l.a.createElement(g.a,{imgName:"70_Basic_density_plot_Seaborn",caption:"The most basic density plot one can make with python and seaborn"})))),l.a.createElement(b.a,null,"# library & dataset\nimport seaborn as sns\ndf = sns.load_dataset('iris')\n\n# Make default density plot\nsns.kdeplot(df['sepal_width'])\n")),l.a.createElement(f.a,null),l.a.createElement(o.a,null,l.a.createElement("h2",{id:"Seaborn"},l.a.createElement(p.e,null),"Density charts with ",l.a.createElement("code",null,"Seaborn")),l.a.createElement("p",null,l.a.createElement("code",null,"Seaborn")," is a python library allowing to make better charts easily. It is well adapted to build density charts thanks to its ",l.a.createElement("code",null,"kdeplot")," function. The following charts will guide you through its usage, going from a very"," ",l.a.createElement(u.Link,{to:""},"basic density plot")," to something much more"," ",l.a.createElement(u.Link,{to:""},"customized"),"."),l.a.createElement(s.a,null,l.a.createElement(m.a,{imgName:"70_Basic_density_plot_Seaborn",caption:"The most basic density plot one can make with python and seaborn",linkTo:"/70-basic-density-plot-with-seaborn"}),l.a.createElement(m.a,{imgName:"71_Shaded_density_plot_Seaborn",caption:"seaborn densty chart with filled area",linkTo:"/71-density-plot-with-shade-seaborn"}),l.a.createElement(m.a,{imgName:"72_Horizontal_density_plot_Seaborn",caption:"vertical seaborn density chart",linkTo:"/72-horizontal-density-plot"}),l.a.createElement(m.a,{imgName:"73_Control_bandwidth_densityplot_Seaborn1",caption:"control density chart color",linkTo:"/73-control-bandwidth-of-seaborn-density-plot"}),l.a.createElement(m.a,{imgName:"73_Control_bandwidth_densityplot_Seaborn2",caption:"Changed the bandwidth used to compute the density",linkTo:"/73-control-bandwidth-of-seaborn-density-plot"}),l.a.createElement(m.a,{imgName:"74_density_plot_multi_variables",caption:"Density chart with several displayed groups",linkTo:"/74-density-plot-of-several-variables"}),l.a.createElement(m.a,{imgName:"density-mirror",caption:"Mirror density chart to compare the distribution of 2 variables",linkTo:"/density-mirror"}))),l.a.createElement(f.a,null),l.a.createElement(o.a,null,l.a.createElement("h2",{id:"Multiple groups"},l.a.createElement(p.e,null),"Density charts, ",l.a.createElement("code",null,"Seaborn")," and multiple groups"),l.a.createElement("p",null,"It is a common use case to compare the density of several groups in a dataset. Several options exist to do so. You can plot all items on the same chart, using transparency and annotation to make the comparison possible. Or you can a technique called small multiples where the graph window is split in individual charts, avoiding group overlaps that are sometimes hard to read."),l.a.createElement(s.a,null,l.a.createElement(m.a,{imgName:"density-chart-multiple-groups-seaborn1",caption:"Density chart with multiple groups overlapped",linkTo:"/density-chart-multiple-groups-seaborn"}),l.a.createElement(m.a,{imgName:"density-chart-multiple-groups-seaborn3",caption:"Density chart with multiple groups overlapped",linkTo:"/density-chart-multiple-groups-seaborn"}),l.a.createElement(m.a,{imgName:"density-chart-multiple-groups-seaborn4",caption:"Density chart with multiple groups overlapped",linkTo:"/density-chart-multiple-groups-seaborn"})),l.a.createElement("div",{style:{margin:"0 auto",padding:0}},l.a.createElement(u.Link,{to:"/density-chart-multiple-groups-seaborn"},l.a.createElement(g.a,{imgName:"density-chart-multiple-groups-seaborn5",caption:"A seaborn heatmap with clusterization and dendrogram applied"})))),l.a.createElement(f.a,null),l.a.createElement("div",{className:"greySection"},l.a.createElement(o.a,null,l.a.createElement(y.a,{functionName:"kdeplot"}))),l.a.createElement(f.a,null),l.a.createElement(o.a,null,l.a.createElement("h2",{id:"Matplotlib"},l.a.createElement(p.b,null)," Density charts with ",l.a.createElement("code",null,"Matplotlib")),l.a.createElement("p",null,"It is possible to build a density chart with ",l.a.createElement("code",null,"matplotlib"),", but it is truely a struggle compared to making it with ",l.a.createElement("code",null,"seaborn")," as shown above. Here is an example to prove it is doable, but I strongly advise to go for ",l.a.createElement("code",null,"seaborn"),"."),l.a.createElement(s.a,null,l.a.createElement(m.a,{imgName:"density-chart-matplotlib-vector",caption:"Basic density chart with python and matplotlib from a vector of data",linkTo:"/density-chart-matplotlib"}),l.a.createElement(m.a,{imgName:"density-chart-matplotlib-csv",caption:"Read a csv file and plot the density of a column",linkTo:"/density-chart-matplotlib"}))),l.a.createElement(f.a,null),l.a.createElement("div",{className:"greySection",id:"related"},l.a.createElement(o.a,null,l.a.createElement(d.a,{chartFamily:"distribution"}))),l.a.createElement(f.a,null),l.a.createElement(o.a,null,l.a.createElement(c.a,null)),l.a.createElement(f.a,null))}},eynx:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));a("2mCb");var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),i=a("9eSz"),o=a.n(i),c=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function s(e){var t=e.imgName,a=e.caption;if(c.includes(t))return l.a.createElement("p",null,"TODO");var n=Object(r.useStaticQuery)("3289484431").allFile.edges.find((function(e){return e.node.name.includes(t)}));return n?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"chartImageContainer"},l.a.createElement(o.a,{alt:t,fluid:n.node.childImageSharp.fluid,className:"chartImageImg"}),l.a.createElement("div",{className:"chartImageOverlay"},l.a.createElement("div",{className:"chartImageOverlayText"},l.a.createElement("p",null,a))))):null}},hlKo:function(e,t,a){"use strict";var n=a("k1TG"),l=a("8o2o"),r=a("TSYQ"),i=a.n(r),o=a("q1tI"),c=a.n(o),s=a("cWnB"),m=function(){},d=c.a.forwardRef((function(e,t){var a=e.children,r=e.name,d=e.className,u=e.checked,p=e.type,h=e.onChange,b=e.value,g=e.disabled,y=e.inputRef,f=Object(l.a)(e,["children","name","className","checked","type","onChange","value","disabled","inputRef"]),E=Object(o.useState)(!1),v=E[0],w=E[1],k=Object(o.useCallback)((function(e){"INPUT"===e.target.tagName&&w(!0)}),[]),N=Object(o.useCallback)((function(e){"INPUT"===e.target.tagName&&w(!1)}),[]);return c.a.createElement(s.a,Object(n.a)({},f,{ref:t,className:i()(d,v&&"focus",g&&"disabled"),type:void 0,active:!!u,as:"label"}),c.a.createElement("input",{name:r,type:p,value:b,ref:y,autoComplete:"off",checked:!!u,disabled:!!g,onFocus:k,onBlur:N,onChange:h||m}),a)}));d.displayName="ToggleButton",t.a=d},ihcr:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));a("Wbzz");var n=a("q1tI"),l=a.n(n),r=a("hlKo"),i=a("k1TG"),o=a("8o2o"),c=a("TSYQ"),s=a.n(c),m=a("vUet"),d=l.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.size,r=e.toggle,c=e.vertical,d=e.className,u=e.as,p=void 0===u?"div":u,h=Object(o.a)(e,["bsPrefix","size","toggle","vertical","className","as"]),b=Object(m.a)(a,"btn-group"),g=b;return c&&(g=b+"-vertical"),l.a.createElement(p,Object(i.a)({},h,{ref:t,className:s()(d,g,n&&b+"-"+n,r&&b+"-toggle")}))}));d.displayName="ButtonGroup",d.defaultProps={vertical:!1,toggle:!1,role:"group"};var u=d,p={kdeplot:{description:"",docUrl:"https://seaborn.pydata.org/generated/seaborn.kdeplot.html",basicUsage:"",parameters:[{name:"fill",description:"color under the curve",type:"boolean",relatedChart:"70_deffffed"},{name:"bw",description:"control how density is computed",type:"boolean",relatedChart:"70_deffffed"},{name:"color",description:"control the color",type:"boolean",relatedChart:"70_deffffed"}]},violin:{description:"",docUrl:"https://seaborn.pydata.org/generated/seaborn.violinplot.html",basicUsage:"",parameters:[{name:"width",description:"color under the curve",type:"boolean",relatedChart:"70_deffffed"},{name:"bw",description:"control how density is computed",type:"boolean",relatedChart:"70_deffffed"},{name:"color",description:"controls the color",type:"string",relatedChart:"70_deffffed"}]}};a("7xSO");function h(e){var t,a=e.functionName,n=p[a],i=l.a.useState(n.parameters[0].name),o=i[0],c=i[1],s=n.parameters.filter((function(e){return e.name===o}))[0],m=n.parameters.map((function(e,t){return l.a.createElement(r.a,{type:"radio",active:!0,key:t,className:"functionButton",variant:"secondary",size:"sm",value:e.name,checked:o===e.name,onChange:function(e){return c(e.currentTarget.value)}},e.name)}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{id:(t=a+"() details","string"!=typeof t?"":t.charAt(0).toUpperCase()+t.slice(1))},"🔎 ",l.a.createElement("code",null,a)," function parameters",l.a.createElement("a",{style:{marginLeft:"15px",fontSize:"14px"},href:n.docUrl},"→ see full doc")),l.a.createElement(u,{toggle:!0},m),l.a.createElement("div",null,l.a.createElement("code",null,"string"),l.a.createElement("span",null,"→ ",s.description)),l.a.createElement("br",null),l.a.createElement("br",null))}}}]);
//# sourceMappingURL=component---src-pages-density-plot-js-19367d7d75c2f1593048.js.map