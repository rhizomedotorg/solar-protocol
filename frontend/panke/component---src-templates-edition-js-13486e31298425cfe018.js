(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"+oIS":function(e,a,t){"use strict";var l=t("q1tI"),n=t.n(l);a.a=function(e){var a=e.blockTitle,t=e.blockContent;return n.a.createElement("section",{className:"further"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4 col-sm-4 col-xs-12"},n.a.createElement("h2",null,a)),n.a.createElement("div",{className:"col-md-8 col-sm-8 col-xs-12"},n.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.childMarkdownRemark.html}}))))}},"5HML":function(e,a,t){"use strict";var l=t("q1tI"),n=t.n(l),s=t("9eSz"),r=t.n(s);a.a=function(e){var a=e.slides;e.length;return n.a.createElement("div",{id:"myCarousel",className:"row carousel slide","data-ride":"carousel"},n.a.createElement("ol",{className:"carousel-indicators"},a.map((function(e,a){e.sizes;var t=a,l=0===a?"active":"";return n.a.createElement("li",{"data-target":"#myCarousel","data-slide-to":t,className:l})}))),n.a.createElement("div",{className:"carousel-inner",role:"listbox"},a.map((function(e,a){var t=e.sizes,l=e.description,s=0===a?"carousel-item active":"carousel-item";return n.a.createElement("div",{className:s},n.a.createElement("div",{className:"col-md-12 col-sm-12 col-xs-12"},n.a.createElement("div",{className:"image-wrapper 3-col"},n.a.createElement(r.a,{alt:"FeaturedImage",sizes:Object.assign({},t,{aspectRatio:16/9})})),n.a.createElement("p",null,l)))}))),n.a.createElement("a",{className:"carousel-control-prev",href:"#myCarousel",role:"button","data-slide":"prev"},n.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),n.a.createElement("span",{className:"sr-only"},"Previous")),n.a.createElement("a",{className:"carousel-control-next",href:"#myCarousel",role:"button","data-slide":"next"},n.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),n.a.createElement("span",{className:"sr-only"},"Next")))}},d0S5:function(e,a,t){"use strict";t.r(a);var l=t("dI71"),n=t("q1tI"),s=t.n(n),r=t("TJpk"),c=t.n(r),o=t("mwIZ"),i=t.n(o),m=t("9eSz"),d=t.n(m),u=t("Bl7J"),E=t("+oIS"),h=t("5HML"),p=function(e){function a(){return e.apply(this,arguments)||this}return Object(l.a)(a,e),a.prototype.render=function(){var e,a,t=i()(this.props,"data.contentfulEdition");return console.log(t),e=null!=t.editionImpressionsSlideshow?s.a.createElement(h.a,{slides:t.editionImpressionsSlideshow,length:t.editionImpressionsSlideshow.length}):s.a.createElement(d.a,{alt:"FeaturedImage",sizes:Object.assign({},t.featuredImage.sizes,{aspectRatio:16/9})}),t.furtherInformationBlocks&&(a=t.furtherInformationBlocks.map((function(e){var a=e.id,t=e.title,l=e.childContentfulContentBlockBlockContentTextNode;return s.a.createElement(E.a,{key:a,blockTitle:t,blockContent:l})}))),s.a.createElement(u.a,null,s.a.createElement("main",null,s.a.createElement(c.a,{title:""+t.title}),s.a.createElement("section",{className:"head"},s.a.createElement("div",{className:"row headline"},s.a.createElement("div",{className:"col-md-12 col-sm-12 col-xs-12"},s.a.createElement("h1",null,t.title),s.a.createElement("div",{className:"subtitle",dangerouslySetInnerHTML:{__html:t.subtitleShortDescription.childMarkdownRemark.html}}),e))),s.a.createElement("section",{className:"further"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-4 col-sm-4 col-xs-12"},s.a.createElement("h2",null,"About the edition")),s.a.createElement("div",{className:"col-md-8 col-sm-8 col-xs-12"},s.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.description.childMarkdownRemark.html}})))),a))},a}(s.a.Component);a.default=p}}]);
//# sourceMappingURL=component---src-templates-edition-js-13486e31298425cfe018.js.map