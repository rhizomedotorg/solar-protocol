"use strict";(self.webpackChunkpanke_gallery_website=self.webpackChunkpanke_gallery_website||[]).push([[651],{8195:function(e,t,n){var a=n(1721),r=n(7294),l=n(381),s=n.n(l);let i=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){var e,t=this.props.event,n=s()(t.date).format("DD MMMM YYYY"),a=s()(t.date).format("HH:mm");return e=t.openEnd?"open end":s()(t.endTime).format("HH:mm"),r.createElement("span",null,n," from ",a,"  – ",e)},t}(r.Component);t.Z=i},3442:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(1721),r=n(7294),l=n(4160),s=n(8195);function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var o=function(e){function t(t){var n;return(n=e.call(this,t)||this).componentDidUpdate=()=>{n.state.isToggleOn!==n.props.filterIsOn&&n.setState((e=>({isToggleOn:n.props.filterIsOn})))},n.handleTagClick=()=>{n.props.handleClick(n.props.tag.slug),n.setState((e=>({isToggleOn:!e.isToggleOn})))},n.state={isToggleOn:!1},n.handleTagClick=n.handleTagClick.bind(i(n)),n.componentDidUpdate=n.componentDidUpdate.bind(i(n)),n}return(0,a.Z)(t,e),t.prototype.render=function(){const e=this.props.tag,t=this.props.type,n=this.state.isToggleOn;if("eventSeries"===t&&n)var a="tag eventSeries tag-selected";else a="eventSeries"!==t||n?"tag":"tag eventSeries";return this.props.noClick?r.createElement("button",{ref:"tag",className:a,"aria-label":"Tagged with "+e.name,tabindex:"-100"},e.name):r.createElement("button",{ref:"tag",className:a,onClick:this.handleTagClick,onKeyDown:this.handleTagClick,"aria-label":"Tagged with "+e.name,tabindex:"-100"},e.name)},t}(r.Component);let c=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){var e,t=this.props.event;return null!=t.eventSeries&&(e=r.createElement(o,{ref:this.tagElement,tag:t.eventSeries,type:"eventSeries",handleClick:this.props.handleClick,filterIsOn:this.props.filterIsOn})),r.createElement("article",{className:"news-item"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-md-4 col-sm-4 col-xs-12"},e),r.createElement("div",{className:"col-md-8 col-sm-8 col-xs-12"},r.createElement("h3",null,r.createElement(l.rU,{to:"/event/"+t.slug},t.title)),r.createElement("div",{dangerouslySetInnerHTML:{__html:t.subtitleShortDescription.childMarkdownRemark.html}}),r.createElement("p",{className:"meta"},r.createElement(s.Z,{event:t})))))},t}(r.Component);var m=c},148:function(e,t,n){n.r(t);var a=n(1721),r=n(7294),l=n(4593),s=n(7361),i=n.n(s),o=n(1501),c=n(3442);let m=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(t=e.call.apply(e,[this].concat(a))||this).state={isFilterOn:!1,filterby:""},t.handleEventsClick=e=>{t.setState((t=>({isFilterOn:!t.isFilterOn,filterby:{tagSlug:e}})))},t.passFilter=e=>!t.state.isFilterOn||!!e.eventSeries&&t.state.filterby.tagSlug===e.eventSeries.slug,t.returnEventListItem=e=>r.createElement(c.Z,{key:e.slug,event:e,handleClick:t.handleEventsClick,filterIsOn:t.state.isFilterOn}),t.componentDidMount=()=>{t.props.series&&t.setState({isFilterOn:!0,filterby:{tagSlug:t.props.series}})},t}return(0,a.Z)(t,e),t.prototype.render=function(){const e=i()(this,"props.data.allContentfulEvent.edges");const t=e.filter((function(e){var t=new Date;return new Date(e.node.date)>=t}));t.reverse();const n=e.filter((function(e){var t=new Date;return new Date(e.node.date)<t}));var a,s;return t.length>0&&(a=r.createElement("section",{className:"upcoming"},r.createElement("div",{className:"row headline"},r.createElement("div",{className:"col-md-12 col-sm-12 col-xs-12"},r.createElement("h2",null,"Upcoming events"))),t.map((e=>{let{node:t}=e;return this.passFilter(t)?this.returnEventListItem(t):null})))),n.length>0&&(s=r.createElement("section",{className:"past"},r.createElement("div",{className:"row headline"},r.createElement("div",{className:"col-md-12 col-sm-12 col-xs-12"},r.createElement("h2",null,"Past events"))),n.map((e=>{let{node:t}=e;return this.passFilter(t)?this.returnEventListItem(t):null})))),r.createElement(o.Z,null,r.createElement(l.Z,{title:"Events",meta:[{name:"description",content:"Upcoming and past events of panke.gallery in Berlin-Wedding. The gallery seeks to open up a dialogue between established and emerging artists whose work comes out of the connections between digital or net-based art and club culture."}]}),a,s)},t}(r.Component);t.default=m}}]);
//# sourceMappingURL=component---src-pages-events-js-d689928a14676934e8f2.js.map