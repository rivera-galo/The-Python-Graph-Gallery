"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[9672],{9935:function(e,t,l){l.d(t,{Z:function(){return i}});var a=l(7294),n=l(5444),o=l(1496),r=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function i(e){var t=e.imgName,l=e.caption;if(r.includes(t))return a.createElement("p",null,"TODO");var i=(0,n.useStaticQuery)("3289484431").allFile.edges.find((function(e){return e.node.name.includes(t)}));return i?a.createElement(a.Fragment,null,a.createElement("div",{className:"chartImageContainer"},a.createElement(o.Z,{alt:l,fluid:i.node.childImageSharp.fluid,className:"chartImageImg"}),a.createElement("div",{className:"chartImageOverlay"},a.createElement("div",{className:"chartImageOverlayText"},a.createElement("p",null,l))))):null}},7834:function(e,t,l){l.d(t,{Z:function(){return i}});var a=l(7294),n=l(9935),o=l(7408),r=l(5444);function i(e){var t=e.imgName,l=e.caption,i=e.linkTo;return a.createElement(o.Z,{xs:12,md:4},a.createElement(r.Link,{to:i},a.createElement(n.Z,{imgName:t,caption:l})))}},7210:function(e,t,l){l.r(t),l.d(t,{default:function(){return g}});var a=l(7294),n=l(1006),o=l(3203),r=l(6187),i=l(7567),c=l(994),m=l(7834),s=l(9869),u=l(5444),b=l(3727),p=l(7408),h=l(3026),d=l(9935),E=l(458);function g(){return a.createElement(o.Z,{title:"Bubble plot",isTocEnabled:!0,seoDescription:"A collection of bubble chart examples made with Python, coming with explanation and reproducible code"},a.createElement(n.Z,{title:"Bubble plot",description:"<p>A <a href='https://www.data-to-viz.com/graph/bubble.html'>bubble plot</a> is a <a href='https://www.python-graph-gallery.com/scatter-plot'>scatterplot</a> where the circle size is mapped to the value of a third numeric variable. This section shows many bubble plots made with <code>Python</code>, using both the <code>Matplotlib</code> and <code>Seaborn</code> libraries.</p>"}),a.createElement(E.Z,null),a.createElement(r.Z,null,a.createElement("h2",{id:"Quick"},"⏱ Quick start"),a.createElement(c.Z,{className:"align-items-center"},a.createElement(p.Z,{md:6},a.createElement("p",null,"The ",a.createElement("code",null,"scatterplot()")," function of ",a.createElement("code",null,"seaborn")," also allows to build bubble charts. Indeed, it has a ",a.createElement("code",null,"size")," parameter that controls circle size according to a numeric variable of the dataset.🔥")),a.createElement(p.Z,{md:6},a.createElement(u.Link,{to:"/bubble-plot-with-seaborn"},a.createElement(d.Z,{imgName:"bubble-plot-with-seaborn",caption:"Basic bubble chart with Python and Seaborn."})))),a.createElement(h.Z,null,'# libraries\nimport matplotlib.pyplot as plt\nimport seaborn as sns\nfrom gapminder import gapminder # data set\n\n# data\ndata = gapminder.loc[gapminder.year == 2007]\n\n# use the scatterplot function to build the bubble map\nsns.scatterplot(data=data, x="gdpPercap", y="lifeExp", size="pop", legend=False, sizes=(20, 2000))\n\n# show the graph\nplt.show()\n'),a.createElement("br",null)),a.createElement(E.Z,null),a.createElement(r.Z,null,a.createElement("h2",{id:"Seaborn"},a.createElement(b._I,null),"Bubble plot with ",a.createElement("code",null,"Seaborn")),a.createElement("p",null,a.createElement("code",null,"Seaborn")," is the best tool to quickly build a quality bubble chart. The example below are based on the famous ",a.createElement("code",null,"gapminder")," dataset that shows the relationship between gdp per capita, life expectancy and population of world countries."),a.createElement("p",null,"The examples below start simple by calling the ",a.createElement("code",null,"scatterplot()")," function with the minimum set of parameters. It then show how to change bubble colors to represent a fourth variable, improve general styling, tweak the legend and more."),a.createElement(c.Z,null,a.createElement(m.Z,{imgName:"bubble-plot-with-seaborn",caption:"Basic bubble chart with Python and Seaborn.",linkTo:"/bubble-plot-with-seaborn"}))),a.createElement(E.Z,null),a.createElement(r.Z,null,a.createElement("h2",{id:"Matplotlib"},a.createElement(b.rS,null),"Bubble plot with ",a.createElement("code",null,"Matplotlib")),a.createElement("p",null,"As for ",a.createElement(u.Link,{to:"/scatter-plot"},"scatterplots"),", ",a.createElement("code",null,"Matplotlib")," will help us build a bubble plot thanks to the the ",a.createElement("code",null,"plt.scatter()")," function. This function provides a ",a.createElement("code",null,"s")," parameter allowing to pass a third variable that will be mapped to the markers size."),a.createElement(c.Z,null,a.createElement(m.Z,{imgName:"270_Basic_Bubble_plot",caption:"Most basic bubble plot with Python and Matplotlib",linkTo:"/270-basic-bubble-plot"}),a.createElement(m.Z,{imgName:"271_Bubble_plot_customization1",caption:"Bubble plot customization: color",linkTo:"/271-custom-your-bubble-plot"}),a.createElement(m.Z,{imgName:"271_Bubble_plot_customization2",caption:"Bubble plot customization: shape",linkTo:"/271-custom-your-bubble-plot"}),a.createElement(m.Z,{imgName:"271_Bubble_plot_customization3",caption:"Bubble plot customization: size",linkTo:"/271-custom-your-bubble-plot"}),a.createElement(m.Z,{imgName:"271_Bubble_plot_customization4",caption:"Bubble plot customization: stroke",linkTo:"/271-custom-your-bubble-plot"})),a.createElement("p",null,"Note that it is a common practice to map a fourth variable to the markers colors thanks to the ",a.createElement("code",null,"c")," parameter. This way, you're now looking a 4 variables in the same time, on the same chart 🎉."),a.createElement(c.Z,null,a.createElement(m.Z,{imgName:"272_Bubble_plot_with_mapped_color",caption:"A bubble chart width 4 dimensions: x, y, size & color",linkTo:"/272-map-a-color-to-bubble-plot"}),a.createElement(m.Z,{imgName:"bubble-plot-gapminder",caption:"Bubble plot of the gapminder dataset",linkTo:"/341-python-gapminder-animation"}))),a.createElement(E.Z,null),a.createElement(r.Z,null,a.createElement("h2",{id:"From the web"},a.createElement(b.rS,null),"From the web"),a.createElement("p",null,"The web is full of astonishing charts made by awesome bloggers, (often using ",a.createElement("a",{href:"https://www.r-graph-gallery.com"},"R"),"). The ",a.createElement("a",{href:"https://www.python-graph-gallery.com"},"Python graph gallery")," tries to display (or translate from R) some of the best creations and explain how their source code works. If you want to display your work here, please drop me a word or even better, submit a ",a.createElement("a",{href:"https://github.com/holtzy/The-Python-Graph-Gallery"},"Pull Request"),"!"),a.createElement(c.Z,null,a.createElement(p.Z,{xs:12,md:6},a.createElement(u.Link,{to:"/web-text-repel-with-matplotlib"},a.createElement(d.Z,{imgName:"web-text-repel-with-matplotlib-square",caption:"Learn how to use the adjustText library to add many labels with no overlaps."}))))),a.createElement(E.Z,null),a.createElement("div",{className:"greySection",id:"related"},a.createElement(r.Z,null,a.createElement(s.Z,{chartFamily:"correlation"}))),a.createElement(E.Z,null),a.createElement(r.Z,null,a.createElement(i.Z,null)),a.createElement(E.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-bubble-plot-js-190bf2eb754279779ea1.js.map