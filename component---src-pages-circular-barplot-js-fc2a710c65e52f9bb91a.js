"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[3360],{7408:function(e,t,a){var l=a(7462),r=a(3366),n=a(5900),i=a.n(n),o=a(7294),c=a(9541),m=["bsPrefix","className","as"],s=["xl","lg","md","sm","xs"],u=o.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,u=e.as,p=void 0===u?"div":u,h=(0,r.Z)(e,m),d=(0,c.vE)(a,"col"),b=[],g=[];return s.forEach((function(e){var t,a,l,r=h[e];if(delete h[e],"object"==typeof r&&null!=r){var n=r.span;t=void 0===n||n,a=r.offset,l=r.order}else t=r;var i="xs"!==e?"-"+e:"";t&&b.push(!0===t?""+d+i:""+d+i+"-"+t),null!=l&&g.push("order"+i+"-"+l),null!=a&&g.push("offset"+i+"-"+a)})),b.length||b.push(d),o.createElement(p,(0,l.Z)({},h,{ref:t,className:i().apply(void 0,[n].concat(b,g))}))}));u.displayName="Col",t.Z=u},994:function(e,t,a){var l=a(7462),r=a(3366),n=a(5900),i=a.n(n),o=a(7294),c=a(9541),m=["bsPrefix","className","noGutters","as"],s=["xl","lg","md","sm","xs"],u=o.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,u=e.noGutters,p=e.as,h=void 0===p?"div":p,d=(0,r.Z)(e,m),b=(0,c.vE)(a,"row"),g=b+"-cols",E=[];return s.forEach((function(e){var t,a=d[e];delete d[e];var l="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&E.push(""+g+l+"-"+t)})),o.createElement(h,(0,l.Z)({ref:t},d,{className:i().apply(void 0,[n,b,u&&"no-gutters"].concat(E))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},t.Z=u},9869:function(e,t,a){a.d(t,{Z:function(){return s}});var l=a(7294),r=a(994),n=a(7408),i=a(1831),o=a(8544),c=a(9474),m={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function s(e){var t=e.chartFamily,a=o.c.filter((function(e){return e.family===t})).map((function(e,t){var a=(0,c.y)(e.pythonURL);return l.createElement(n.Z,{key:t,xs:4,md:2},l.createElement(i.Z,{link:a,chartType:e.logo,caption:e.label}))}));return l.createElement("div",null,l.createElement("h2",{id:"Related charts",className:"sectionTitle "+t},null==m?void 0:m[t]),l.createElement(r.Z,null,a))}},9935:function(e,t,a){a.d(t,{Z:function(){return o}});var l=a(7294),r=a(5444),n=a(1496),i=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function o(e){var t=e.imgName,a=e.caption;if(i.includes(t))return l.createElement("p",null,"TODO");var o=(0,r.useStaticQuery)("3289484431").allFile.edges.find((function(e){return e.node.name.includes(t)}));return o?l.createElement(l.Fragment,null,l.createElement("div",{className:"chartImageContainer"},l.createElement(n.Z,{alt:a,fluid:o.node.childImageSharp.fluid,className:"chartImageImg"}),l.createElement("div",{className:"chartImageOverlay"},l.createElement("div",{className:"chartImageOverlayText"},l.createElement("p",null,a))))):null}},7834:function(e,t,a){a.d(t,{Z:function(){return o}});var l=a(7294),r=a(9935),n=a(7408),i=a(5444);function o(e){var t=e.imgName,a=e.caption,o=e.linkTo;return l.createElement(n.Z,{xs:12,md:4},l.createElement(i.Link,{to:o},l.createElement(r.Z,{imgName:t,caption:a})))}},1831:function(e,t,a){a.d(t,{Z:function(){return o}});var l=a(5444),r=a(7294),n=a(583),i=a(8544).c.filter((function(e){return"general"===e.family})).map((function(e){return e.logo}));function o(e){var t=e.chartType,a=e.caption,o=e.link,c=i.includes(t);return r.createElement(r.Fragment,null,c?r.createElement("div",{className:"sectionLogoContainer"},r.createElement(l.Link,{to:o},r.createElement(n.Z,{chartType:t})),r.createElement("p",{className:"distributionSection sectionLogoCaption"},a)):r.createElement(r.Fragment,null,r.createElement("div",{className:"sectionLogoContainer"},r.createElement(l.Link,{to:o},r.createElement(n.Z,{chartType:t}),r.createElement("div",{className:"sectionLogoOverlay"},r.createElement("div",{className:"sectionLogoOverlayText"},"+")))),r.createElement("p",{className:"distributionSection sectionLogoCaption"},a)))}},1006:function(e,t,a){a.d(t,{Z:function(){return m}});var l=a(7294),r=a(4839),n=a(6594),i=a(5444),o=a(8544),c=a(9474);function m(e){var t=e.title,a=e.description,m=e.chartType,s=o.c.filter((function(e){return e.id===m}))[0];return l.createElement(l.Fragment,null,l.createElement("div",{className:"titleAndDescription"},l.createElement("h1",{className:"mainTitle"},t),l.createElement("hr",{className:"smallHr"}),l.createElement(r.Z,null),l.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:a}}),m&&l.createElement("div",{style:{marginTop:"10px"}},l.createElement(i.Link,{to:(0,c.y)(s.pythonURL)},l.createElement(n.Z,{size:"sm"},s.label+" section")),l.createElement("a",{href:s.dataToVizURL},l.createElement(n.Z,{size:"sm"},"About this chart")))))}},444:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var l=a(7294),r=a(1006),n=a(3203),i=a(6187),o=a(7567),c=a(994),m=a(7834),s=a(9869),u=a(3727),p=a(458),h=a(5444),d=a(9935),b=a(7408);function g(){return l.createElement(n.Z,{title:"Circular Barplot",isTocEnabled:!0,seoDescription:"A collection of circular barplot examples made with Python, coming with explanation and reproducible code"},l.createElement(r.Z,{title:"Circular Barplot",description:"<p>A <a href='https://www.data-to-viz.com/graph/circularbarplot.html'>circular barplot</a> is pretty much the same as a <a href='https://www.python-graph-gallery.com/barplot'>barplot</a>, but using polar coordinates instead of cartesian coordinates. They are a bit tricky to build with <code>Python</code> and less accurate than usual barplot, but they come with an eye-catching effect that sometimes make them worth it.</p>"}),l.createElement(i.Z,null,l.createElement("h2",{id:"Circular barplot"},l.createElement(u.rS,null),"Circular barplot with ",l.createElement("code",null,"Matplotlib")),l.createElement("p",null,l.createElement("code",null,"Matplotlib")," allows to build circular barplots thanks to the ",l.createElement("code",null,"polar")," Layout option of the ",l.createElement("code",null,"subplot()")," function. Examples below should guide you from the most simple version to some more customization."),l.createElement("p",null,"It starts by explaining how the polar coordinates of ",l.createElement("code",null,"matplotlib")," works, show how to use it to draw bars and finally goes into the trickiness of adding labels."),l.createElement(c.Z,null,l.createElement(m.Z,{imgName:"circular-barplot-basic1",caption:"Explanation of the polar coordinates with Matplotlib.",linkTo:"/circular-barplot-basic"}),l.createElement(m.Z,{imgName:"circular-barplot-basic2",caption:"Most basic circular barplot with Python and Matplotlib.",linkTo:"/circular-barplot-basic"}),l.createElement(m.Z,{imgName:"circular-barplot-basic4",caption:"Reorder items.",linkTo:"/circular-barplot-basic"})),l.createElement("div",{style:{maxWidth:"800px",margin:"0 auto",padding:30}},l.createElement(h.Link,{to:"/circular-barplot-basic"},l.createElement(d.Z,{imgName:"circular-barplot-basic3",caption:"Circular barplot with labels"})))),l.createElement(p.Z,null),l.createElement(i.Z,null,l.createElement("h2",{id:"Grouped & circular"},l.createElement(u.rS,null),"Grouped Circular barplot"),l.createElement("p",null,"This section extends the previous one by adding a grouping level to the circular barplot. It allows to check for the values of several items split by groups, each item being sorted by value inside its group. It requires quite a bit of matplotlib code but the step-by-step tutorial highlighted below should help go through it."),l.createElement(c.Z,null,l.createElement(m.Z,{imgName:"circular-barplot-with-groups1",caption:"How to add a gap in a circular barplot",linkTo:"/circular-barplot-with-groups"}),l.createElement(m.Z,{imgName:"circular-barplot-with-groups2",caption:"Group the circular barplot and add gaps between each group.",linkTo:"/circular-barplot-with-groups"}),l.createElement(m.Z,{imgName:"circular-barplot-with-groups3",caption:"Reorder items inside each group.",linkTo:"/circular-barplot-with-groups"})),l.createElement("div",{style:{maxWidth:"800px",margin:"0 auto",padding:30}},l.createElement(h.Link,{to:"/circular-barplot-basic"},l.createElement(d.Z,{imgName:"circular-barplot-with-groups4big",caption:"Final grouped circular barplot with labels, grid"})))),l.createElement(p.Z,null),l.createElement(i.Z,null,l.createElement("h2",{id:"From the web"},l.createElement(u.rS,null),"From the web"),l.createElement("p",null,"The web is full of astonishing charts made by awesome bloggers, (often using ",l.createElement("a",{href:"https://www.r-graph-gallery.com"},"R"),"). The ",l.createElement("a",{href:"https://www.python-graph-gallery.com"},"Python graph gallery")," tries to display (or translate from R) some of the best creations and explain how their source code works. If you want to display your work here, please drop me a word or even better, submit a ",l.createElement("a",{href:"https://github.com/holtzy/The-Python-Graph-Gallery"},"Pull Request"),"!"),l.createElement(c.Z,null,l.createElement(b.Z,{xs:12,md:6},l.createElement(h.Link,{to:"/web-circular-barplot-with-matplotlib"},l.createElement(d.Z,{imgName:"web-circular-barplot-with-matplotlib-square",caption:"A circular barchart with several features per group made with Python and Matplotlib."}))),l.createElement(b.Z,{xs:12,md:6},l.createElement(h.Link,{to:"/web-circular-lollipop-plot-with-matplotlib"},l.createElement(d.Z,{imgName:"web-circular-lollipop-plot-with-matplotlib-square",caption:"A circular lollipop plot with customized layout, great color palette and in circle legend."}))))),l.createElement(p.Z,null),l.createElement("div",{className:"greySection",id:"related"},l.createElement(i.Z,null,l.createElement(s.Z,{chartFamily:"ranking"}))),l.createElement(p.Z,null),l.createElement(i.Z,null,l.createElement(o.Z,null)),l.createElement(p.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-circular-barplot-js-fc2a710c65e52f9bb91a.js.map