webpackJsonp([22],{157:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(11),i=s(r),u=a(2),l=s(u),n=a(12),_=s(n),f=a(4),o=s(f),d=a(3),c=s(d),v=a(1),p=s(v),m=a(171),w=s(m),h=function(e){function t(){return(0,l.default)(this,t),(0,o.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,_.default)(t,[{key:"render",value:function(){var e=this.props.num,t=w.default.star0;switch(e){case 0:t=w.default.star0;break;case 1:t=w.default.star1;break;case 2:t=w.default.star2;break;case 3:t=w.default.star3;break;case 4:t=w.default.star4;break;case 5:t=w.default.star5;break;default:t=w.default.star0}return p.default.createElement("div",{className:w.default.star},p.default.createElement("i",{className:t}))}}]),t}(v.Component);t.default=h},171:function(e,t){e.exports={star:"Star__star___j4CGX",star0:"Star__star0___rmfKj",star1:"Star__star1___3rf9o",star2:"Star__star2___3DTSf",star3:"Star__star3___KLQ7o",star4:"Star__star4___3QOSy",star5:"Star__star5___1lUMp"}},195:function(e,t,a){var s=a(176),r=s("isNull",a(204),a(203));r.placeholder=a(150),e.exports=r},204:function(e,t){function a(e){return null===e}e.exports=a},488:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return(0,f.default)({},o.CALL_API,{endpoint:c.default.api_root_v1+"/offers/"+e+"/reviews?page="+t,method:"GET",headers:c.default.headers,types:[v,{type:p,payload:function(e,t,a){return a.json()}},m]})}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments[1],a=w[t.type];return a?a(e,t):e}Object.defineProperty(t,"__esModule",{value:!0}),t.actions=t.FETCH_REVIEWS_FAILURE=t.FETCH_REVIEWS_SUCCESS=t.FETCH_REVIEWS_REQUEST=void 0;var u,l=a(6),n=s(l),_=a(8),f=s(_);t.fetchReviews=r,t.default=i;var o=a(41),d=a(29),c=s(d),v=t.FETCH_REVIEWS_REQUEST="FETCH_REVIEWS_REQUEST",p=t.FETCH_REVIEWS_SUCCESS="FETCH_REVIEWS_SUCCESS",m=t.FETCH_REVIEWS_FAILURE="FETCH_REVIEWS_FAILURE",w=(t.actions={fetchReviews:r},u={},(0,f.default)(u,v,function(e,t){return(0,n.default)({},e,{isFetching:!0,error:{},items:[]})}),(0,f.default)(u,p,function(e,t){return(0,n.default)({},e,{isFetching:!1,error:{},lastUpdate:Date.now(),items:t.payload})}),(0,f.default)(u,m,function(e,t){return(0,n.default)({},e,{isFetching:!1,error:{},items:[]})}),u),h={isFetching:!1,error:{},items:[]}},806:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(11),i=s(r),u=a(2),l=s(u),n=a(12),_=s(n),f=a(4),o=s(f),d=a(3),c=s(d),v=a(195),p=s(v),m=a(1),w=s(m),h=a(125),E=s(h),R=a(62),S=s(R),T=a(157),g=s(T),y=a(1146),C=s(y),N=function(e){function t(e){(0,l.default)(this,t);var a=(0,o.default)(this,(t.__proto__||(0,i.default)(t)).call(this,e));return a.state={a:"",b:"",reviews:[],page:1,firstTime:!0,count:1},a}return(0,c.default)(t,e),(0,_.default)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.fetchReviews,a=e.params,s=a.message.split("-");t(s[0]),this.setState({a:s[1],b:s[2]})}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.reviews.lastUpdate&&e.reviews.lastUpdate!==this.props.reviews.lastUpdate&&(this.setState({reviews:(0,E.default)(this.state.reviews,{$push:[e.reviews.items]}),page:this.state.page+1}),this.state.firstTime&&(this.props.fetchReviews(this.props.params.message.split("-")[0],2),this.setState({firstTime:!1})))}},{key:"fetchMoreReviews",value:function(e){var t=this.props,a=t.params,s=t.fetchReviews;s(a.message.split("-")[0],e),this.setState({count:this.state.count+1})}},{key:"render",value:function(){var e=this,t=this.props.reviews,a=t.error,s=t.isFetching,r=t.items,i=!0;this.state.reviews[this.state.count]&&0==this.state.reviews[this.state.count].length&&(i=!1);for(var u=[],l=0;l<this.state.count;l++)this.state.reviews[l]&&(u=(0,E.default)(u,{$push:this.state.reviews[l]}));return w.default.createElement("div",null,s&&0===r.length&&w.default.createElement("div",{className:"loading"},w.default.createElement(S.default,null)),!s&&!a&&0===r.length&&w.default.createElement("h3",null,"服务器异常，刷新重新获取数据"),u.length>0&&w.default.createElement("div",{className:C.default.reviewsBox},w.default.createElement("div",{className:C.default.houseReviews},w.default.createElement("span",{className:C.default.reviewsTitle},"评价"),0!==parseInt(this.state.b)&&w.default.createElement("div",{className:C.default.starRank},w.default.createElement(g.default,{num:parseInt(this.state.b)})),w.default.createElement("span",{className:C.default.reviewsCount},"（",this.state.a,"条）")),u.map(function(e,t){return w.default.createElement("div",{className:C.default.reviewsShow,key:t},w.default.createElement("div",{className:C.default.reviewsUser},w.default.createElement("img",{className:C.default.avatarImg,src:e.user.avatar.small_url}),w.default.createElement("span",{className:C.default.userName},e.user.name),w.default.createElement("br",null),w.default.createElement("div",{className:C.default.starRank},w.default.createElement(g.default,{num:parseInt(e.rating)})),!(0,p.default)(e.review_at)&&w.default.createElement("span",{className:C.default.reviewTime},e.review_at.split("T")[0])),w.default.createElement("div",{className:C.default.reviewText},e.body))})),i&&w.default.createElement("div",{className:C.default.loadMoreBtn,onClick:function(){return e.fetchMoreReviews(e.state.page)}},"加载更多",w.default.createElement("i",{className:C.default.loadMoreBtnArrow})))}}]),t}(m.Component);N.propTypes={params:w.default.PropTypes.object.isRequired,fetchReviews:w.default.PropTypes.func.isRequired,reviews:w.default.PropTypes.object.isRequired},N.contextTypes={router:w.default.PropTypes.object.isRequired},t.default=N},807:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(28),i=a(488),u=a(806),l=s(u),n={fetchReviews:i.fetchReviews},_=function(e){return{reviews:e.reviews}};t.default=(0,r.connect)(_,n)(l.default)},1146:function(e,t){e.exports={reviewsBox:"Reviews__reviewsBox___2hfMA",houseReviews:"Reviews__houseReviews___1KNIH",reviewsTitle:"Reviews__reviewsTitle___2V-mP",reviewsRank:"Reviews__reviewsRank___1zXtV",reviewsCount:"Reviews__reviewsCount___fF6Cp",starRank:"Reviews__starRank___206Vt",reviewsShow:"Reviews__reviewsShow___3TyqK",reviewsUser:"Reviews__reviewsUser___3HvL4",avatarImg:"Reviews__avatarImg___3K9cV",userName:"Reviews__userName___1WOJa",reviewTime:"Reviews__reviewTime___1SeTY",reviewText:"Reviews__reviewText___3FzeY",loadMoreBtn:"Reviews__loadMoreBtn___1Rddp",loadMoreBtnArrow:"Reviews__loadMoreBtnArrow___11NMd"}}});