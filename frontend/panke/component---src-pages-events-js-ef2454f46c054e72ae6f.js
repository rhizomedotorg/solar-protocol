"use strict";(self.webpackChunkpanke_gallery_website=self.webpackChunkpanke_gallery_website||[]).push([[651],{8195:function(e,t,n){var r=n(1721),a=n(7294),l=n(3964),i=n.n(l),s=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e,t=this.props.event,n=i()(t.date).format("DD MMMM YYYY"),r=i()(t.date).format("HH:mm");return e=t.openEnd?"open end":i()(t.endTime).format("HH:mm"),a.createElement("span",null,n," from ",r,"  – ",e)},t}(a.Component);t.Z=s},3442:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(1721),a=n(7294),l=n(1082),i=n(8195);function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var o=function(e){function t(t){var n;return(n=e.call(this,t)||this).componentDidUpdate=function(){n.state.isToggleOn!==n.props.filterIsOn&&n.setState((function(e){return{isToggleOn:n.props.filterIsOn}}))},n.handleTagClick=function(){n.props.handleClick(n.props.tag.slug),n.setState((function(e){return{isToggleOn:!e.isToggleOn}}))},n.state={isToggleOn:!1},n.handleTagClick=n.handleTagClick.bind(s(n)),n.componentDidUpdate=n.componentDidUpdate.bind(s(n)),n}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this.props.tag,t=this.props.type,n=this.state.isToggleOn;if("eventSeries"===t&&n)var r="tag eventSeries tag-selected";else r="eventSeries"!==t||n?"tag":"tag eventSeries";return this.props.noClick?a.createElement("button",{ref:"tag",className:r,"aria-label":"Tagged with "+e.name,tabindex:"-100"},e.name):a.createElement("button",{ref:"tag",className:r,onClick:this.handleTagClick,onKeyDown:this.handleTagClick,"aria-label":"Tagged with "+e.name,tabindex:"-100"},e.name)},t}(a.Component),c=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e,t=this.props.event;return null!=t.eventSeries&&(e=a.createElement(o,{ref:this.tagElement,tag:t.eventSeries,type:"eventSeries",handleClick:this.props.handleClick,filterIsOn:this.props.filterIsOn})),a.createElement("article",{className:"news-item"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col-md-4 col-sm-4 col-xs-12"},e),a.createElement("div",{className:"col-md-8 col-sm-8 col-xs-12"},a.createElement("h3",null,a.createElement(l.rU,{to:"/event/"+t.slug},t.title)),a.createElement("div",{dangerouslySetInnerHTML:{__html:t.subtitleShortDescription.childMarkdownRemark.html}}),a.createElement("p",{className:"meta"},a.createElement(i.Z,{event:t})))))},t}(a.Component),u=c},148:function(e,t,n){n.r(t);var r=n(1721),a=n(7294),l=n(5414),i=n(7361),s=n.n(i),o=n(5689),c=n(3442),u=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=e.call.apply(e,[this].concat(r))||this).state={isFilterOn:!1,filterby:""},t.handleEventsClick=function(e){t.setState((function(t){return{isFilterOn:!t.isFilterOn,filterby:{tagSlug:e}}}))},t.passFilter=function(e){return!t.state.isFilterOn||!!e.eventSeries&&t.state.filterby.tagSlug===e.eventSeries.slug},t.returnEventListItem=function(e){return a.createElement(c.Z,{key:e.slug,event:e,handleClick:t.handleEventsClick,filterIsOn:t.state.isFilterOn})},t.componentDidMount=function(){t.props.series&&t.setState({isFilterOn:!0,filterby:{tagSlug:t.props.series}})},t}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this,t=s()(this,"props.data.allContentfulEvent.edges");var n=t.filter((function(e){var t=new Date;return new Date(e.node.date)>=t}));n.reverse();var r,i,c=t.filter((function(e){var t=new Date;return new Date(e.node.date)<t}));return n.length>0&&(r=a.createElement("section",{className:"upcoming"},a.createElement("div",{className:"row headline"},a.createElement("div",{className:"col-md-12 col-sm-12 col-xs-12"},a.createElement("h2",null,"Upcoming events"))),n.map((function(t){var n=t.node;return e.passFilter(n)?e.returnEventListItem(n):null})))),c.length>0&&(i=a.createElement("section",{className:"past"},a.createElement("div",{className:"row headline"},a.createElement("div",{className:"col-md-12 col-sm-12 col-xs-12"},a.createElement("h2",null,"Past events"))),c.map((function(t){var n=t.node;return e.passFilter(n)?e.returnEventListItem(n):null})))),a.createElement(o.Z,null,a.createElement(l.Z,{title:"Events",meta:[{name:"description",content:"Upcoming and past events of panke.gallery in Berlin-Wedding. The gallery seeks to open up a dialogue between established and emerging artists whose work comes out of the connections between digital or net-based art and club culture."}]}),r,i)},t}(a.Component);t.default=u}}]);
//# sourceMappingURL=component---src-pages-events-js-ef2454f46c054e72ae6f.js.map