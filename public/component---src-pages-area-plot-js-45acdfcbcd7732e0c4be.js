(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"59G+":function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t("q1tI"),l=t.n(n),r=t("eynx"),c=t("JI6e"),i=t("Wbzz");function o(e){var a=e.imgName,t=e.caption,n=e.linkTo;return l.a.createElement(c.a,{xs:12,md:4},l.a.createElement(i.Link,{to:n},l.a.createElement(r.a,{imgName:a,caption:t})))}},SUtS:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return f}));var n=t("q1tI"),l=t.n(n),r=t("4/Vk"),c=t("7oih"),i=t("7vrA"),o=t("6+GL"),m=t("3Z9Z"),s=t("59G+"),h=t("pJaR"),u=t("Wbzz"),p=t("Hrqu"),d=t("JI6e"),E=t("ZJrt"),b=t("eynx"),g=t("gMBH");function f(){return l.a.createElement(c.a,{title:"Area chart",isTocEnabled:!0,seoDescription:"A collection of area chart examples made with Python, coming with explanation and reproducible code"},l.a.createElement(r.a,{title:"Area Chart",description:"<p>An <a href='https://www.data-to-viz.com/graph/area.html'>area chart</a> is really similar to a <a href='http://python-graph-gallery.com/line-chart/'>line chart</a>, except that the area between the x axis and the line is filled in with color or shading. It represents the evolution of a numeric variable. This section starts by considering <code>matplotlib</code> and <code>seaborn</code> as tools to build area charts. It then shows a few other options for timeseries.</p>"}),l.a.createElement(i.a,null,l.a.createElement("h2",{id:"Quick"},"⏱ Quick start"),l.a.createElement(m.a,{className:"align-items-center"},l.a.createElement(d.a,{md:6},l.a.createElement("p",null,"There are 2 main ways to build an area chart with Matplotlib. In both case it requires 2 numeric vectors of values as input."),l.a.createElement("ul",null,l.a.createElement("li",null,"The ",l.a.createElement("code",null,"fill_between()")," function"),l.a.createElement("li",null,"The ",l.a.createElement("code",null,"stackplot()")," function that is more useful for ",l.a.createElement(u.Link,{to:"/stacked-area-plot"},"stacked area")," charts"))),l.a.createElement(d.a,{md:6},l.a.createElement(u.Link,{to:"/240-basic-area-chart"},l.a.createElement(b.a,{imgName:"240_basic_area_chart",caption:"The most basic area chart one can make with python and matplotlib"})))),l.a.createElement(E.a,null,"# library\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# Create data\nx=range(1,6)\ny=[1,4,6,8,4]\n\n# Area plot\nplt.fill_between(x, y)\nplot.show()\n")),l.a.createElement(g.a,null),l.a.createElement(i.a,null,l.a.createElement("h2",{id:"Matplotlib"},l.a.createElement(p.b,null),"Area chart with ",l.a.createElement("code",null,"Matplotlib")),l.a.createElement("p",null,l.a.createElement("code",null,"Matplotlib")," is a great fit to build an area chart thanks to its ",l.a.createElement("code",null,"fill_between()")," function. Here are a few examples explaining its basics and how to apply some common customization."),l.a.createElement(m.a,null,l.a.createElement(s.a,{imgName:"240_basic_area_chart",caption:"The most basic area chart one can make with python and matplotlib",linkTo:"/240-basic-area-chart"}),l.a.createElement(s.a,{imgName:"241_custom_area_chart1",caption:"Control chart color (Matplotlib)",linkTo:"/241-improve-area-chart"}),l.a.createElement(s.a,{imgName:"241_custom_area_chart2",caption:"Control line color",linkTo:"/241-improve-area-chart"})),l.a.createElement("div",{style:{maxWidth:"600px",margin:"0 auto",padding:30}},l.a.createElement(u.Link,{to:"/243-area-chart-with-white-grid"},l.a.createElement(b.a,{imgName:"243_another_area_chart",caption:"Area chart with custom grid"})))),l.a.createElement(g.a,null),l.a.createElement(i.a,null,l.a.createElement("h2",{id:"Seaborn"},l.a.createElement(p.e,null),"Area chart with ",l.a.createElement("code",null,"Seaborn")),l.a.createElement("p",null,l.a.createElement("code",null,"Seaborn")," is another great alternative to build an area chart with ",l.a.createElement("code",null,"python"),". The below examples show how to start basic, apply usual customization, and use the small multiple technique for when you have several groups to compare."),l.a.createElement("div",{style:{maxWidth:"600px",margin:"0 auto",padding:30}},l.a.createElement(u.Link,{to:"/242-area-chart-and-faceting"},l.a.createElement(b.a,{imgName:"242_area_chart_and_faceting",caption:"Area chart with small multiple, seaborn"})))),l.a.createElement(g.a,null),l.a.createElement("div",{className:"greySection",id:"related"},l.a.createElement(i.a,null,l.a.createElement(h.a,{chartFamily:"evolution"}))),l.a.createElement(g.a,null),l.a.createElement(i.a,null,l.a.createElement(o.a,null)),l.a.createElement(g.a,null))}},eynx:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));t("2mCb");var n=t("q1tI"),l=t.n(n),r=t("Wbzz"),c=t("9eSz"),i=t.n(c),o=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function m(e){var a=e.imgName,t=e.caption;if(o.includes(a))return l.a.createElement("p",null,"TODO");var n=Object(r.useStaticQuery)("3289484431").allFile.edges.find((function(e){return e.node.name.includes(a)}));return n?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"chartImageContainer"},l.a.createElement(i.a,{alt:a,fluid:n.node.childImageSharp.fluid,className:"chartImageImg"}),l.a.createElement("div",{className:"chartImageOverlay"},l.a.createElement("div",{className:"chartImageOverlayText"},l.a.createElement("p",null,t))))):null}}}]);
//# sourceMappingURL=component---src-pages-area-plot-js-45acdfcbcd7732e0c4be.js.map