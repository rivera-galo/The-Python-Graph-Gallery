(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"2Bqf":function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));t("AK/e");var n=t("Wbzz"),l=t("q1tI"),r=t.n(l),i=t("NDdm"),c=t("qXiB").a.filter((function(e){return"general"===e.family})).map((function(e){return e.logo}));function o(e){var a=e.chartType,t=e.caption,l=e.link,o=c.includes(a);return r.a.createElement(r.a.Fragment,null,o?r.a.createElement(r.a.Fragment,null,r.a.createElement(n.Link,{to:l},r.a.createElement(i.a,{chartType:a})),r.a.createElement("p",{className:"distributionSection sectionLogoCaption"},t)):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"sectionLogoContainer"},r.a.createElement(n.Link,{to:l},r.a.createElement(i.a,{chartType:a}),r.a.createElement("div",{className:"sectionLogoOverlay"},r.a.createElement("div",{className:"sectionLogoOverlayText"},"+")))),r.a.createElement("p",{className:"distributionSection sectionLogoCaption"},t)))}},"2mCb":function(e,a,t){},"3Z9Z":function(e,a,t){"use strict";var n=t("k1TG"),l=t("8o2o"),r=t("TSYQ"),i=t.n(r),c=t("q1tI"),o=t.n(c),m=t("vUet"),s=["xl","lg","md","sm","xs"],u=o.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,c=e.noGutters,u=e.as,d=void 0===u?"div":u,p=Object(l.a)(e,["bsPrefix","className","noGutters","as"]),h=Object(m.a)(t,"row"),f=h+"-cols",E=[];return s.forEach((function(e){var a,t=p[e];delete p[e];var n="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"==typeof t?t.cols:t)&&E.push(""+f+n+"-"+a)})),o.a.createElement(d,Object(n.a)({ref:a},p,{className:i.a.apply(void 0,[r,h,c&&"no-gutters"].concat(E))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},a.a=u},"4/Vk":function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));t("a4DA");var n=t("q1tI"),l=t.n(n),r=t("AkXV"),i=t("cWnB"),c=t("Wbzz"),o=t("qXiB"),m=t("jhdv"),s=(t("mnr7"),t("7vrA")),u=t("3Z9Z"),d=t("JI6e"),p=(t("2mCb"),t("9eSz")),h=t.n(p);function f(e){var a=e.imgName,t=e.caption,n=Object(c.useStaticQuery)("2246482915").allFile.edges.find((function(e){return e.node.name.includes(a)}));return n?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"chartImageContainer"},l.a.createElement(h.a,{alt:a,fluid:n.node.childImageSharp.fluid,className:"chartImageImg"}),l.a.createElement("div",{className:"chartImageOverlay"},l.a.createElement("div",{className:"chartImageOverlayText"},l.a.createElement("p",null,t))))):null}var E=t("gMBH");function g(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"sponsorsBanner"},l.a.createElement(s.a,null,l.a.createElement(u.a,null,l.a.createElement(d.a,{md:3},l.a.createElement("a",{href:"https://www.dataquest.io/course/storytelling-data-visualization?utm_source=python%20graph%20gallery&utm_medium=banner&utm_content=storytelling%20with%20data",onClick:"trackOutboundLink('https://www.dataquest.io/course/storytelling-data-visualization?utm_source=python%20graph%20gallery&utm_medium=banner&utm_content=storytelling%20with%20data'); return false;"},l.a.createElement(f,{imgName:"data-vis-ad",caption:"Dataquest"}))),l.a.createElement(d.a,{md:3},l.a.createElement("a",{href:"https://www.datacamp.com?tap_a=5644-dce66f&tap_s=230804-f65650",title:"Datacamp",onClick:"trackOutboundLink('https://www.datacamp.com?tap_a=5644-dce66f&tap_s=230804-f65650'); return false;"},l.a.createElement(f,{imgName:"datacamp",caption:"Datacamp"}))),l.a.createElement(d.a,{md:3},l.a.createElement("a",{href:"https://365datascience.pxf.io/qRPNb",title:"365DataScience",onClick:"trackOutboundLink('https://365datascience.pxf.io/qRPNb'); return false;"},l.a.createElement(f,{imgName:"365_data_science",caption:"365 Data Science"}))),l.a.createElement(d.a,{md:3},l.a.createElement("a",{href:"https://gumroad.com/a/280032371/uTxEFw",title:"StackAbuse",onClick:"trackOutboundLink('https://gumroad.com/a/280032371/uTxEFw'); return false;"},l.a.createElement(f,{imgName:"stackabuse",caption:"Stack Abuse book"})))))),l.a.createElement(E.a,null))}function b(e){var a=e.title,t=e.description,n=e.chartType,s=o.a.filter((function(e){return e.id===n}))[0];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"titleAndDescription"},l.a.createElement("h1",{className:"mainTitle"},a),l.a.createElement("hr",{className:"smallHr"}),l.a.createElement(r.a,null),l.a.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:t}}),n&&l.a.createElement("div",{style:{marginTop:"10px"}},l.a.createElement(c.Link,{to:Object(m.a)(s.pythonURL)},l.a.createElement(i.a,{size:"sm"},s.label+" section")),l.a.createElement("a",{href:s.dataToVizURL},l.a.createElement(i.a,{size:"sm"},"About this chart")))),l.a.createElement(g,null))}},"59G+":function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t("q1tI"),l=t.n(n),r=t("eynx"),i=t("JI6e"),c=t("Wbzz");function o(e){var a=e.imgName,t=e.caption,n=e.linkTo;return l.a.createElement(i.a,{xs:12,md:4},l.a.createElement(c.Link,{to:n},l.a.createElement(r.a,{imgName:a,caption:t})))}},"9d5C":function(e,a,t){},"AK/e":function(e,a,t){},"Hj+9":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return f}));var n=t("q1tI"),l=t.n(n),r=t("4/Vk"),i=t("7oih"),c=t("7vrA"),o=t("6+GL"),m=t("3Z9Z"),s=t("59G+"),u=t("pJaR"),d=t("Wbzz"),p=t("eynx"),h=t("gMBH");function f(){return l.a.createElement(i.a,{title:"Background Map",isTocEnabled:!0,seoDescription:"A collection of hexbin map examples made with Python, coming with explanation and reproducible code"},l.a.createElement(r.a,{title:"Hexbin Map",description:"<p>A <a href='https://www.data-to-viz.com/graph/hexbinmap.html'>hexbin map</a> is a specific type of map where each region is represented as a hexagone. This section explains how to build a hexbin map with python and libraries like <code>geopandas</code> and <code>geoplot</code>.</p>"}),l.a.createElement(h.a,null),l.a.createElement("div",{className:"greySection",id:"related"},l.a.createElement(c.a,null,l.a.createElement("h2",{id:"Overview"},"🔎  2 kinds of hexbin maps ⭐ "),l.a.createElement("p",null,"There are 2 different kinds of hexbin maps as explained in ",l.a.createElement("a",{href:"https://www.data-to-viz.com/graph/hexbinmap.html"},"data-to-viz.com"),":"),l.a.createElement("ul",null,l.a.createElement("li",null,"from a ",l.a.createElement("u",null,"hexagonal geospatial object"),". Example: you find a `geoJson` file of US counties where each county is represented as a hexagon instead of with its real shape."),l.a.createElement("br",null),l.a.createElement("li",null,"from a ",l.a.createElement("u",null,"2d density")," technique. A set of coordinates is provided. The map is split in many hexagones and the number of data points is represented as a color in each hexagone.")))),l.a.createElement(h.a,null),l.a.createElement(c.a,null,l.a.createElement("h2",{id:"From geospatial"},"Hexbin map from geospatial object"),l.a.createElement("p",null,l.a.createElement("code",null,"Seaborn")," is another great alternative to build an area chart with ",l.a.createElement("code",null,"python"),". The below examples show how to start basic, apply usual customization, and use the small multiple technique for when you have several groups to compare."),l.a.createElement(m.a,null,l.a.createElement(s.a,{imgName:"hexbin-map-from-geojson-python-1",caption:"Most basic hexbin map from geoJson with python.",linkTo:"/hexbin-map-from-geojson-python"}),l.a.createElement(s.a,{imgName:"hexbin-map-from-geojson-python-2",caption:"Compute polygon centroid to add labels.",linkTo:"/hexbin-map-from-geojson-python"})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("p",null,"This is what you get with a bit of ",l.a.createElement("code",null,"matplotlib")," tweaking:"),l.a.createElement("div",{style:{margin:"0 auto",padding:0}},l.a.createElement(d.Link,{to:"/hexbin-map-from-geojson-python"},l.a.createElement(p.a,{imgName:"hexbin-map-from-geojson-python-orig",caption:"Clean hexbin map with python, geopandas and matplotlib"})))),l.a.createElement(h.a,null),l.a.createElement("div",{className:"greySection",id:"related"},l.a.createElement(c.a,null,l.a.createElement(u.a,{chartFamily:"map"}))),l.a.createElement(h.a,null),l.a.createElement(c.a,null,l.a.createElement(o.a,null)),l.a.createElement(h.a,null))}},JI6e:function(e,a,t){"use strict";var n=t("k1TG"),l=t("8o2o"),r=t("TSYQ"),i=t.n(r),c=t("q1tI"),o=t.n(c),m=t("vUet"),s=["xl","lg","md","sm","xs"],u=o.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,c=e.as,u=void 0===c?"div":c,d=Object(l.a)(e,["bsPrefix","className","as"]),p=Object(m.a)(t,"col"),h=[],f=[];return s.forEach((function(e){var a,t,n,l=d[e];if(delete d[e],"object"==typeof l&&null!=l){var r=l.span;a=void 0===r||r,t=l.offset,n=l.order}else a=l;var i="xs"!==e?"-"+e:"";a&&h.push(!0===a?""+p+i:""+p+i+"-"+a),null!=n&&f.push("order"+i+"-"+n),null!=t&&f.push("offset"+i+"-"+t)})),h.length||h.push(p),o.a.createElement(u,Object(n.a)({},d,{ref:a,className:i.a.apply(void 0,[r].concat(h,f))}))}));u.displayName="Col",a.a=u},a4DA:function(e,a,t){},eynx:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));t("2mCb");var n=t("q1tI"),l=t.n(n),r=t("Wbzz"),i=t("9eSz"),c=t.n(i),o=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function m(e){var a=e.imgName,t=e.caption;if(o.includes(a))return l.a.createElement("p",null,"TODO");var n=Object(r.useStaticQuery)("3289484431").allFile.edges.find((function(e){return e.node.name.includes(a)}));return n?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"chartImageContainer"},l.a.createElement(c.a,{alt:a,fluid:n.node.childImageSharp.fluid,className:"chartImageImg"}),l.a.createElement("div",{className:"chartImageOverlay"},l.a.createElement("div",{className:"chartImageOverlayText"},l.a.createElement("p",null,t))))):null}},mnr7:function(e,a,t){},pJaR:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));t("9d5C");var n=t("q1tI"),l=t.n(n),r=t("3Z9Z"),i=t("JI6e"),c=t("2Bqf"),o=t("qXiB"),m=t("jhdv"),s={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function u(e){var a=e.chartFamily,t=o.a.filter((function(e){return e.family===a})).map((function(e,a){var t=Object(m.a)(e.pythonURL);return l.a.createElement(i.a,{key:a,xs:4,md:2},l.a.createElement(c.a,{link:t,chartType:e.logo,caption:e.label}))}));return l.a.createElement("div",null,l.a.createElement("h2",{id:"Related charts",className:"sectionTitle "+a},null==s?void 0:s[a]),l.a.createElement(r.a,null,t))}}}]);
//# sourceMappingURL=component---src-pages-hexbin-map-js-fde3eb0400c6a9253eae.js.map