"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[5281],{7408:function(e,t,a){var l=a(7462),n=a(3366),o=a(5900),r=a.n(o),c=a(7294),i=a(9541),m=["bsPrefix","className","as"],s=["xl","lg","md","sm","xs"],u=c.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,u=e.as,p=void 0===u?"div":u,h=(0,n.Z)(e,m),d=(0,i.vE)(a,"col"),E=[],f=[];return s.forEach((function(e){var t,a,l,n=h[e];if(delete h[e],"object"==typeof n&&null!=n){var o=n.span;t=void 0===o||o,a=n.offset,l=n.order}else t=n;var r="xs"!==e?"-"+e:"";t&&E.push(!0===t?""+d+r:""+d+r+"-"+t),null!=l&&f.push("order"+r+"-"+l),null!=a&&f.push("offset"+r+"-"+a)})),E.length||E.push(d),c.createElement(p,(0,l.Z)({},h,{ref:t,className:r().apply(void 0,[o].concat(E,f))}))}));u.displayName="Col",t.Z=u},994:function(e,t,a){var l=a(7462),n=a(3366),o=a(5900),r=a.n(o),c=a(7294),i=a(9541),m=["bsPrefix","className","noGutters","as"],s=["xl","lg","md","sm","xs"],u=c.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,u=e.noGutters,p=e.as,h=void 0===p?"div":p,d=(0,n.Z)(e,m),E=(0,i.vE)(a,"row"),f=E+"-cols",g=[];return s.forEach((function(e){var t,a=d[e];delete d[e];var l="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&g.push(""+f+l+"-"+t)})),c.createElement(h,(0,l.Z)({ref:t},d,{className:r().apply(void 0,[o,E,u&&"no-gutters"].concat(g))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},t.Z=u},9869:function(e,t,a){a.d(t,{Z:function(){return s}});var l=a(7294),n=a(994),o=a(7408),r=a(1831),c=a(8544),i=a(9474),m={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function s(e){var t=e.chartFamily,a=c.c.filter((function(e){return e.family===t})).map((function(e,t){var a=(0,i.y)(e.pythonURL);return l.createElement(o.Z,{key:t,xs:4,md:2},l.createElement(r.Z,{link:a,chartType:e.logo,caption:e.label}))}));return l.createElement("div",null,l.createElement("h2",{id:"Related charts",className:"sectionTitle "+t},null==m?void 0:m[t]),l.createElement(n.Z,null,a))}},9935:function(e,t,a){a.d(t,{Z:function(){return c}});var l=a(7294),n=a(5444),o=a(1496),r=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function c(e){var t=e.imgName,a=e.caption;if(r.includes(t))return l.createElement("p",null,"TODO");var c=(0,n.useStaticQuery)("3289484431").allFile.edges.find((function(e){return e.node.name.includes(t)}));return c?l.createElement(l.Fragment,null,l.createElement("div",{className:"chartImageContainer"},l.createElement(o.Z,{alt:a,fluid:c.node.childImageSharp.fluid,className:"chartImageImg"}),l.createElement("div",{className:"chartImageOverlay"},l.createElement("div",{className:"chartImageOverlayText"},l.createElement("p",null,a))))):null}},1831:function(e,t,a){a.d(t,{Z:function(){return c}});var l=a(5444),n=a(7294),o=a(583),r=a(8544).c.filter((function(e){return"general"===e.family})).map((function(e){return e.logo}));function c(e){var t=e.chartType,a=e.caption,c=e.link,i=r.includes(t);return n.createElement(n.Fragment,null,i?n.createElement(n.Fragment,null,n.createElement(l.Link,{to:c},n.createElement(o.Z,{chartType:t})),n.createElement("p",{className:"distributionSection sectionLogoCaption"},a)):n.createElement(n.Fragment,null,n.createElement("div",{className:"sectionLogoContainer"},n.createElement(l.Link,{to:c},n.createElement(o.Z,{chartType:t}),n.createElement("div",{className:"sectionLogoOverlay"},n.createElement("div",{className:"sectionLogoOverlayText"},"+")))),n.createElement("p",{className:"distributionSection sectionLogoCaption"},a)))}},1006:function(e,t,a){a.d(t,{Z:function(){return m}});var l=a(7294),n=a(4839),o=a(6594),r=a(5444),c=a(8544),i=a(9474);function m(e){var t=e.title,a=e.description,m=e.chartType,s=c.c.filter((function(e){return e.id===m}))[0];return l.createElement(l.Fragment,null,l.createElement("div",{className:"titleAndDescription"},l.createElement("h1",{className:"mainTitle"},t),l.createElement("hr",{className:"smallHr"}),l.createElement(n.Z,null),l.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:a}}),m&&l.createElement("div",{style:{marginTop:"10px"}},l.createElement(r.Link,{to:(0,i.y)(s.pythonURL)},l.createElement(o.Z,{size:"sm"},s.label+" section")),l.createElement("a",{href:s.dataToVizURL},l.createElement(o.Z,{size:"sm"},"About this chart")))))}},5213:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var l=a(7294),n=a(1006),o=a(3203),r=a(6187),c=a(7567),i=a(9869),m=a(5444),s=a(9935),u=a(458),p=a(6594);function h(){return l.createElement(o.Z,{title:"Choropleth map",isTocEnabled:!0,seoDescription:"A collection of choropleth map examples made with Python, coming with explanation and reproducible code"},l.createElement(n.Z,{title:"Choropleth map",description:"<p>A <a href='https://www.data-to-viz.com/graph/choropleth.html'>choropleth map</a> displays divided geographical areas or regions that are coloured in relation to a numeric variable. This section explains how to build static choropleth with <code>geopandas</code> and <code>geoplot</code>, and interactive versions with tools like <code>folium</code> and <code>plotly</code>.</p>"}),l.createElement(r.Z,null,l.createElement("h2",{id:"Geopandas & Geoplot"},"Choropleth map with ",l.createElement("code",null,"Geopandas")," and ",l.createElement("code",null,"GeoPlot")),l.createElement("p",null,l.createElement("code",null,"Geoplot")," is a python library for geospatial data visualization. It works pretty well with ",l.createElement("code",null,"geopandas"),", another library made to deal with geospatial data objects."),l.createElement("p",null,l.createElement("code",null,"Geoplot")," has a ",l.createElement("code",null,"choropleth()")," function that allows to build a choropleth map easily as shown in the example below."),l.createElement("div",{style:{margin:"0 auto",padding:0}},l.createElement(m.Link,{to:"/choropleth-map-geopandas-python"},l.createElement(s.Z,{imgName:"choropleth-map-geopandas-python",caption:"Choropleth map of US counties with Python, Geopandas and Geoplot"}))),l.createElement(m.Link,{to:"/choropleth-map-geopandas-python"},l.createElement(p.Z,{size:"xl"},"Read post"))),l.createElement(u.Z,null),l.createElement(r.Z,null,l.createElement("h2",{id:"Folium"},l.createElement("code",null,"Folium")," for google maps style choropleth maps"),l.createElement("p",null,l.createElement("code",null,"Folium")," is a wrapper of the ",l.createElement("code",null,"Leaflet.js")," javascript library. It brings the power of javascript for data visualization, but still allows to do some data wrangling with Python. Building a choropleth with ",l.createElement("code",null,"Folium")," is quite straightforward thanks to the",l.createElement("code",null,"choropleth()")," function."),l.createElement("div",{className:"mx-auto"},l.createElement("iframe",{src:"/interactiveCharts/292-choropleth-map-with-folium.html",title:"Folium choropleth map",style:{border:"none",width:"800px",height:"430px"}})),l.createElement(m.Link,{to:"/292-choropleth-map-with-folium"},l.createElement(p.Z,{size:"sm"},"See code"))),l.createElement(u.Z,null),l.createElement(r.Z,null,l.createElement("h2",{id:"Plotly"},l.createElement("code",null,"Plotly")," for interactive choropleth maps"),l.createElement("p",null,l.createElement("code",null,"Seaborn")," is another great alternative to build an area chart with ",l.createElement("code",null,"python"),". The below examples show how to start basic, apply usual customization, and use the small multiple technique for when you have several groups to compare."),l.createElement("div",{className:"mx-auto"},l.createElement("iframe",{src:"/interactiveCharts/choropleth-map-plotly-python.html",title:"parallel coordinate chart with plotly",style:{border:"none",width:"800px",height:"500px"}})),l.createElement(m.Link,{to:"/choropleth-map-plotly-python"},l.createElement(p.Z,{size:"sm"},"See code"))),l.createElement(u.Z,null),l.createElement("div",{className:"greySection",id:"related"},l.createElement(r.Z,null,l.createElement(i.Z,{chartFamily:"map"}))),l.createElement(u.Z,null),l.createElement(r.Z,null,l.createElement(c.Z,null)),l.createElement(u.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-choropleth-map-js-cfe1272defc61e6b9146.js.map