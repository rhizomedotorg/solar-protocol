(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"+oIS":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a);t.a=function(e){var t=e.blockTitle,n=e.blockContent;return r.a.createElement("section",{className:"further"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 col-sm-4 col-xs-12"},r.a.createElement("h2",null,t)),r.a.createElement("div",{className:"col-md-8 col-sm-8 col-xs-12"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:n.childMarkdownRemark.html}}))))}},"5HML":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),l=n("9eSz"),o=n.n(l);t.a=function(e){var t=e.slides;e.length;return r.a.createElement("div",{id:"myCarousel",className:"row carousel slide","data-ride":"carousel"},r.a.createElement("ol",{className:"carousel-indicators"},t.map((function(e,t){e.sizes;var n=t,a=0===t?"active":"";return r.a.createElement("li",{"data-target":"#myCarousel","data-slide-to":n,className:a})}))),r.a.createElement("div",{className:"carousel-inner",role:"listbox"},t.map((function(e,t){var n=e.fluid,a=e.description,l=0===t?"carousel-item active":"carousel-item";return r.a.createElement("div",{className:l},r.a.createElement("div",{className:"col-md-12 col-sm-12 col-xs-12"},r.a.createElement("div",{className:"image-wrapper 3-col"},r.a.createElement(o.a,{alt:"FeaturedImage",fluid:Object.assign({},n,{aspectRatio:16/9})})),r.a.createElement("p",null,a)))}))),r.a.createElement("a",{className:"carousel-control-prev",href:"#myCarousel",role:"button","data-slide":"prev"},r.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Previous")),r.a.createElement("a",{className:"carousel-control-next",href:"#myCarousel",role:"button","data-slide":"next"},r.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Next")))}},d0S5:function(e,t,n){"use strict";n.r(t);var a=n("dI71"),r=n("q1tI"),l=n.n(r),o=n("TJpk"),c=n.n(o),s=n("mwIZ"),i=n.n(s),u=n("9eSz"),d=n.n(u),m=n("Bl7J"),p=n("+oIS"),f=n("5HML"),E=n("o0o1"),h=n.n(E),v=(n("ls82"),n("HaE+")),w="https://js.stripe.com/v3",g=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,S="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",y=null,b=function(e){return null!==y?y:y=new Promise((function(t,n){if("undefined"!=typeof window)if(window.Stripe&&e&&console.warn(S),window.Stripe)t(window.Stripe);else try{var a=function(){for(var e=document.querySelectorAll('script[src^="'.concat(w,'"]')),t=0;t<e.length;t++){var n=e[t];if(g.test(n.src))return n}return null}();a&&e?console.warn(S):a||(a=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(w).concat(t);var a=document.head||document.body;if(!a)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return a.appendChild(n),n}(e)),a.addEventListener("load",(function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))})),a.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(r){return void n(r)}else t(null)}))},I=function(e,t,n){if(null===e)return null;var a=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.13.1",startTime:t})}(a,n),a},N=Promise.resolve().then((function(){return b(null)})),x=!1;N.catch((function(e){x||console.warn(e)}));var k,C={}.STRIPE_PUBLISHABLE_TEST_KEY,T={fontSize:".9em",textAlign:"center",color:"#000",padding:"8px 12px",letterSpacing:"0.1em",textTransform:"uppercase",border:"#000 2px solid",borderRadius:"5px",background:"transparent"},L={opacity:"0.5",cursor:"not-allowed"},j=["AT","BE","HR","BG","CY","CZ","DK","EE","FI","FR","DE","GR","HU","IE","IT","LV","LT","LU","MT","NL","PL","PT","RO","SK","SI","ES","SE","GB","US","CA"],B=function(){return k||(k=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];x=!0;var a=Date.now();return N.then((function(e){return I(e,t,a)}))}(C)),k},R=function(e){var t=e.slug,n=e.priceID,a=window.location.origin+"/edition/"+t,o=Object(r.useState)(!1),c=o[0],s=o[1],i=function(){var e=Object(v.a)(h.a.mark((function e(t){var r,l,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s(!0),e.next=4,B();case 4:return r=e.sent,e.next=7,r.redirectToCheckout({mode:"payment",lineItems:[{price:n,quantity:1}],shippingAddressCollection:{allowedCountries:j},successUrl:a+"?checkout=success",cancelUrl:a+"?checkout=cancel"});case 7:l=e.sent,(o=l.error)&&(console.warn("Error:",o),s(!1));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement("button",{disabled:c,style:c?Object.assign({},T,L):T,onClick:i},"Buy the edition")},_=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).getChechoutStatus=function(){console.log("location:",window.location);var e="undefined"!=typeof window?window.location.href:"";return e.indexOf("checkout")>0?e.substr(e.indexOf("=")+1):"initial"},t}return Object(a.a)(t,e),t.prototype.render=function(){console.log("props:",window.location);var e,t,n=i()(this.props,"data.contentfulEdition");console.log(n),e=null!=n.editionImpressionsSlideshow?l.a.createElement(f.a,{slides:n.editionImpressionsSlideshow,length:n.editionImpressionsSlideshow.length}):l.a.createElement(d.a,{alt:"FeaturedImage",fluid:Object.assign({},n.featuredImage.fluid,{aspectRatio:16/9})}),n.furtherInformationBlocks&&(t=n.furtherInformationBlocks.map((function(e){var t=e.id,n=e.title,a=e.childContentfulContentBlockBlockContentTextNode;return l.a.createElement(p.a,{key:t,blockTitle:n,blockContent:a})})));var a,r=this.getChechoutStatus();return n.stripePriceId&&(a="success"===r?l.a.createElement("div",{className:"alert alert-success"},l.a.createElement("p",null,l.a.createElement("strong",null,"Thank you for your purchase.")),l.a.createElement("p",null,"Once we receive your payment, we will contact you for shipping details."),l.a.createElement("p",null," Enjoy the edition!")):l.a.createElement(R,{slug:n.slug,priceID:n.stripePriceId})),l.a.createElement(m.a,null,l.a.createElement("main",null,l.a.createElement(c.a,{title:""+n.title}),l.a.createElement("section",{className:"head"},l.a.createElement("div",{className:"row headline"},l.a.createElement("div",{className:"col-md-12 col-sm-12 col-xs-12"},l.a.createElement("h1",null,n.title),l.a.createElement("div",{className:"subtitle",dangerouslySetInnerHTML:{__html:n.subtitleShortDescription.childMarkdownRemark.html}}),e))),l.a.createElement("section",{className:"further"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4 col-sm-4 col-xs-12"},l.a.createElement("h2",null,"About the edition"),a),l.a.createElement("div",{className:"col-md-8 col-sm-8 col-xs-12"},l.a.createElement("div",{dangerouslySetInnerHTML:{__html:n.description.childMarkdownRemark.html}})))),t))},t}(l.a.Component);t.default=_}}]);
//# sourceMappingURL=component---src-templates-edition-js-bddba8f6e293dda41905.js.map