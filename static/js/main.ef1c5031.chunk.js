(this["webpackJsonp@netatt/app"]=this["webpackJsonp@netatt/app"]||[]).push([[0],{156:function(e,t,n){"use strict";var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.api=o(n(740)),t.graphql=o(n(758));var i=n(759);Object.defineProperty(t,"typeDefs",{enumerable:!0,get:function(){return i.default}})},530:function(e,t,n){e.exports=n(776)},550:function(e,t){},552:function(e,t){},740:function(e,t,n){"use strict";var a=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.authCheck=t.apiCall=void 0;var o,i=r(n(741)),c=n(774),l=r(n(297)),s=r(n(35));t.apiCall=function(e,t,n,a){return i.default({url:e,method:"post",headers:t?{authorization:"Bearer "+t}:null,data:{query:c.print(n),variables:a}}).then((function(e){return e.data})).catch((function(r){throw r.response&&404===r.response.status?new Error("API Url not found: "+e):r.code&&"ECONNREFUSED"===r.code?new Error("Connection refused. Could not contact: '"+e+"'"):(s.default.error({url:e,jwt:t,query:c.print(n),variables:a}),r)}))},t.authCheck=function(e,n){return t.apiCall(e,n,l.default(o||(o=a(["\n            query AuthCall {\n                auth {\n                    loggedIn\n                    userPool\n                    clientId\n                    region\n                }\n            }\n        "],["\n            query AuthCall {\n                auth {\n                    loggedIn\n                    userPool\n                    clientId\n                    region\n                }\n            }\n        "]))),{})}},758:function(e,t,n){"use strict";var a=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.queries=t.fragments=void 0;var o,i,c,l,s,d,u=r(n(297));t.fragments={record:u.default(o||(o=a(["\n        fragment recordFragment on Record {\n            id\n            ds\n            catchGeom {\n                geom\n                bbox\n            }\n            reachGeom {\n                bbox\n            }\n            metrics\n            nhdProps\n            __typename\n        }\n    "],["\n        fragment recordFragment on Record {\n            id\n            ds\n            catchGeom {\n                geom\n                bbox\n            }\n            reachGeom {\n                bbox\n            }\n            metrics\n            nhdProps\n            __typename\n        }\n    "])))},t.queries={fieldDefs:u.default(i||(i=a(["\n        query fieldDefs {\n            fieldDefs\n        }\n    "],["\n        query fieldDefs {\n            fieldDefs\n        }\n    "]))),geoRecord:u.default(c||(c=a(["\n        query geoRecord($lngLat: [Float]!) {\n            geoRecord(lngLat: $lngLat) {\n                ...recordFragment\n            }\n        }\n        ","\n    "],["\n        query geoRecord($lngLat: [Float]!) {\n            geoRecord(lngLat: $lngLat) {\n                ...recordFragment\n            }\n        }\n        ","\n    "])),t.fragments.record),record:u.default(l||(l=a(["\n        query record($id: ID!) {\n            record(id: $id) {\n                ...recordFragment\n            }\n        }\n        ","\n    "],["\n        query record($id: ID!) {\n            record(id: $id) {\n                ...recordFragment\n            }\n        }\n        ","\n    "])),t.fragments.record),geoRecordEPSG:u.default(s||(s=a(["\n        query geoRecordEPSG($lngLat: [Float]!, $epsg: Int!) {\n            geoRecordEPSG(lngLat: $lngLat, epsg: $epsg) {\n                ...recordFragment\n            }\n        }\n        ","\n    "],["\n        query geoRecordEPSG($lngLat: [Float]!, $epsg: Int!) {\n            geoRecordEPSG(lngLat: $lngLat, epsg: $epsg) {\n                ...recordFragment\n            }\n        }\n        ","\n    "])),t.fragments.record),upstreamCatchment:u.default(d||(d=a(["\n        query upstreamCatchment($id: ID!) {\n            upstreamCatchment(id: $id)\n        }\n    "],["\n        query upstreamCatchment($id: ID!) {\n            upstreamCatchment(id: $id)\n        }\n    "])))}},759:function(e,t,n){"use strict";var a=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o,i=r(n(297)).default(o||(o=a(["\n    # Check out the cheat sheet:\n    # https://raw.githubusercontent.com/sogko/graphql-shorthand-notation-cheat-sheet/master/graphql-shorthand-notation-cheat-sheet.png\n\n    schema {\n        query: Query\n        # mutation: Mutation\n    }\n\n    type Query {\n        auth: AuthParams\n\n        fieldDefs: String\n        geoRecord(lngLat: [Float]!): Record\n        geoRecordEPSG(lngLat: [Float]!, epsg: Int!): Record\n        upstreamCatchment(id: ID!): RecordGeometry\n\n        record(id: ID!, ds: [String]): Record\n        records(ids: [ID]!, ds: [String]): [RecordSet]\n    }\n\n    # this schema allows the following mutation:\n    # type Mutation {\n    # signal a deletion of a record\n    # insertRecords(id: [ID]!, ds: String!): [Record]!\n    # deleteRecords(id: [ID]!, ds: String!): [ID]!\n    # wipeDS(ds: String!): String\n    # }\n\n    type RecordGeometry {\n        geom: String\n        bbox: String\n    }\n\n    type AuthParams {\n        loggedIn: Boolean\n        userPool: String\n        clientId: String\n        region: String\n    }\n\n    type RecordSet {\n        id: ID!\n        records: [Record]\n    }\n\n    type Record {\n        id: ID!\n        ds: String\n        catchGeom: RecordGeometry\n        reachGeom: RecordGeometry\n        metrics: String\n        nhdProps: String\n    }\n"],["\n    # Check out the cheat sheet:\n    # https://raw.githubusercontent.com/sogko/graphql-shorthand-notation-cheat-sheet/master/graphql-shorthand-notation-cheat-sheet.png\n\n    schema {\n        query: Query\n        # mutation: Mutation\n    }\n\n    type Query {\n        auth: AuthParams\n\n        fieldDefs: String\n        geoRecord(lngLat: [Float]!): Record\n        geoRecordEPSG(lngLat: [Float]!, epsg: Int!): Record\n        upstreamCatchment(id: ID!): RecordGeometry\n\n        record(id: ID!, ds: [String]): Record\n        records(ids: [ID]!, ds: [String]): [RecordSet]\n    }\n\n    # this schema allows the following mutation:\n    # type Mutation {\n    # signal a deletion of a record\n    # insertRecords(id: [ID]!, ds: String!): [Record]!\n    # deleteRecords(id: [ID]!, ds: String!): [ID]!\n    # wipeDS(ds: String!): String\n    # }\n\n    type RecordGeometry {\n        geom: String\n        bbox: String\n    }\n\n    type AuthParams {\n        loggedIn: Boolean\n        userPool: String\n        clientId: String\n        region: String\n    }\n\n    type RecordSet {\n        id: ID!\n        records: [Record]\n    }\n\n    type Record {\n        id: ID!\n        ds: String\n        catchGeom: RecordGeometry\n        reachGeom: RecordGeometry\n        metrics: String\n        nhdProps: String\n    }\n"])));t.default=i},770:function(e,t,n){},776:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(40),i=n.n(o),c=n(510),l=n(33),s=n(72),d=n(35),u=n.n(d);const m="pk.eyJ1IjoicmF5Y2hhc2VyIiwiYSI6IlFHWHVMSW8ifQ.emd44Ibp4cmT9YXitY1ziw",p="https://64ggxqpm82.execute-api.us-west-2.amazonaws.com/prod/api",h=(Object({NODE_ENV:"production",PUBLIC_URL:"/net_att",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_MAPBOX_TOKEN:"pk.eyJ1IjoicmF5Y2hhc2VyIiwiYSI6IlFHWHVMSW8ifQ.emd44Ibp4cmT9YXitY1ziw",REACT_APP_RS_TILES_CDN:"https://d2hsyhl6qlaiyu.cloudfront.net",REACT_APP_RS_CDN:"https://d18emzkyqtselk.cloudfront.net",REACT_APP_GRAPHQL:"https://64ggxqpm82.execute-api.us-west-2.amazonaws.com/prod/api",REACT_APP_AWS_REGION:"us-west-2",REACT_APP_COGNITO_USER_POOL_ID:"us-west-2_e7COHULVp",REACT_APP_COGNITO_CLIENT_ID:"4j2m8a80sd7l7mu5a9g7udq6bg",REACT_APP_HOSTED_DOMAIN:"riverscapes-dev.auth.us-west-2.amazoncognito.com",REACT_APP_VERSION:"0.1.24",REACT_APP_CONTACT_EMAIL:"info@northarrowresearch.com"}).REACT_APP_CDN,{REACT_APP_MAPBOX_TOKEN:"pk.eyJ1IjoicmF5Y2hhc2VyIiwiYSI6IlFHWHVMSW8ifQ.emd44Ibp4cmT9YXitY1ziw",REACT_APP_VERSION:"0.1.24",REACT_APP_CONTACT_EMAIL:"info@northarrowresearch.com",REACT_APP_GRAPHQL:"https://64ggxqpm82.execute-api.us-west-2.amazonaws.com/prod/api"});Object.keys(h).forEach(e=>{h[e]||u.a.error("You must set environment variable: ".concat(e))});Object({NODE_ENV:"production",PUBLIC_URL:"/net_att",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_MAPBOX_TOKEN:"pk.eyJ1IjoicmF5Y2hhc2VyIiwiYSI6IlFHWHVMSW8ifQ.emd44Ibp4cmT9YXitY1ziw",REACT_APP_RS_TILES_CDN:"https://d2hsyhl6qlaiyu.cloudfront.net",REACT_APP_RS_CDN:"https://d18emzkyqtselk.cloudfront.net",REACT_APP_GRAPHQL:"https://64ggxqpm82.execute-api.us-west-2.amazonaws.com/prod/api",REACT_APP_AWS_REGION:"us-west-2",REACT_APP_COGNITO_USER_POOL_ID:"us-west-2_e7COHULVp",REACT_APP_COGNITO_CLIENT_ID:"4j2m8a80sd7l7mu5a9g7udq6bg",REACT_APP_HOSTED_DOMAIN:"riverscapes-dev.auth.us-west-2.amazoncognito.com",REACT_APP_VERSION:"0.1.24",REACT_APP_CONTACT_EMAIL:"info@northarrowresearch.com"}).REACT_APP_GA_TOKEN;const f=new URL("/net_att/",window.location.origin),g={Auth:{region:"us-west-2",userPoolId:"us-west-2_e7COHULVp",userPoolWebClientId:"4j2m8a80sd7l7mu5a9g7udq6bg",mandatorySignIn:!0,oauth:{domain:"riverscapes-dev.auth.us-west-2.amazoncognito.com",scope:["email","profile","openid"],redirectSignIn:f.toString(),redirectSignOut:f.toString(),responseType:"code"}}},b={version:"0.1.24",viewport:{latitude:44.2983897312401,longitude:-114.374749399575},metricPrefs:{pinned:[],accordion:{}},selectedReachId:void 0};var v=n(139);var y=()=>{const e=Object(v.useLocalStorage)("INIT_STATE",b),t=Object(s.a)(e,2),n=t[0],r=t[1];Object(a.useEffect)(()=>{"0.1.24"!==n.version&&(u.a.warn("Version upgrade detected, wiping slate!"),r(b))},[n.version,r]);const o=Object(a.useCallback)(e=>{r(Object(l.a)(Object(l.a)({},n),e))},[n,r]);return[n,o]},O=n(481),_=n(156),E=n(390),S=n(395),w=n(391),C=n(388),j=n(392),P=n(514),R=n(126),x=n(6),T=n(499),N=n.n(T),k=n(21);const D=Object(E.a)(e=>({root:{display:"flex",alignItems:"center",width:"100%",padding:e.spacing(0,1),textShadow:"3px 3px 3px rgba(0,0,0,0.7)",backgroundImage:"url(https://northarrowresearchlabs.github.io/riverscapes/HeaderBackground.png)",backgroundRepeat:"no-repeat",backgroundPosition:"0% 50%",backgroundSize:"cover",backgroundColor:"#444444"},version:{paddingLeft:e.spacing(1)},logo:{height:40,width:40,marginRight:e.spacing(2)},programChooser:{margin:e.spacing(0,1),color:e.palette.primary.contrastText,"& svg":{color:e.palette.primary.contrastText},"&:before":{borderColor:e.palette.primary.contrastText},"&:after":{borderColor:e.palette.primary.contrastText}},transparent:{backgroundColor:"transparent",background:"none",color:e.palette.text.primary},search:{position:"relative",border:"1px solid white",borderRadius:e.shape.borderRadius,backgroundColor:Object(k.d)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(k.d)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,flexGrow:1,maxWidth:"20rem",[e.breakpoints.up("sm")]:{marginLeft:e.spacing(3),width:"auto"}},searchError:{border:"1px solid red"},searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},spacer:{flexGrow:1},inputInput:{padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%",[e.breakpoints.up("sm")]:{width:200}},sectionDesktop:{display:"none",[e.breakpoints.up("sm")]:{display:"flex",flexGrow:1}},sectionMobile:{display:"flex",flexGrow:1,[e.breakpoints.up("sm")]:{display:"none"}}})),I={text:""};var A=({title:e,searchSubmit:t,signOut:n})=>{const o=D(),i=Object(a.useState)(I),c=Object(s.a)(i,2),d=c[0],m=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{position:"static"},r.a.createElement(S.a,{className:o.root,disableGutters:!0},r.a.createElement("a",{href:"http://riverscapes.xyz/"},r.a.createElement("img",{className:o.logo,src:"https://riverscapes.xyz/assets/images/RiverscapesLogo.png",alt:"logo"})),r.a.createElement(C.a,{variant:"subtitle1"},e),r.a.createElement(C.a,{variant:"overline",className:o.version},"v.","0.1.24"),r.a.createElement("div",{className:o.spacer}),d.error&&r.a.createElement(C.a,{variant:"subtitle1",color:"error"},d.error),r.a.createElement("div",{className:Object(x.default)(o.search,{[o.searchError]:Boolean(d.error)})},r.a.createElement("div",{className:o.searchIcon},r.a.createElement(N.a,null)),r.a.createElement(P.a,{placeholder:"NHDPlusID\u2026 (55000600125036)",onKeyDown:e=>{var n;"Enter"===e.key&&(u.a.debug("searchSubmitHandle ENTER DETECTED",e),(n=d.text)&&n.length>0&&R.util.isNumeric(n)?(m(Object(l.a)(Object(l.a)({},d),{},{error:void 0})),u.a.debug("searchSubmitHandle called",n),t(parseInt(n,10)).then(()=>{m(I)})):(u.a.debug("searchSubmitHandle ERROR non numeric"),m(Object(l.a)(Object(l.a)({},d),{},{error:"Non-Numberic nhdid"}))))},value:d.text,onChange:e=>m(Object(l.a)(Object(l.a)({},d),{},{text:e.target.value})),classes:{root:o.inputRoot,input:o.inputInput},inputProps:{"aria-label":"search"}})),r.a.createElement(j.a,{color:"inherit",onClick:()=>n()},"Sign Out"))))},L=n(111),F=n(195),G=n(182),M=n(502),H=n.n(M),q=n(501),B=n.n(q),z=n(503),W=n.n(z);const V=Object(E.a)(e=>({root:{},icon:{zIndex:100,width:20,height:20,position:"absolute",top:"50%",left:"50%",textAlign:"center",transformOrigin:"50% 50%",transform:"translateY(-50%) translateX(-50%)"}}));var J=({latLng:e,Icon:t,align:n})=>{const a=V(),o={};if(n){switch(n[0]){case"bottom":o.transform="translateY(-100%)";break;case"top":o.transform="translateY(0%)";break;case"center":o.transform="translateY(-50%)";break;default:throw new Error("Must specify vertical placement of align")}switch(n[1]){case"left":o.transform+=" translateX(0%)";break;case"right":o.transform+=" translateX(-100%)";break;case"center":o.transform+=" translateX(-50%)";break;default:throw new Error("Must specify horizontal placement of align")}}return r.a.createElement(L.Marker,{className:a.root,longitude:e[0],latitude:e[1]},r.a.createElement("div",{className:a.root},r.a.createElement(t,{className:a.icon,style:o})))};var $=({vectorTiles:e,selectedReach:t,initialViewport:n,handleMapClick:o})=>{const i=Object(a.useState)(0),c=Object(s.a)(i,2),d=c[0],p=c[1],h=Object(a.useState)(),f=Object(s.a)(h,2),g=f[0],b=f[1],v=Object(a.useRef)(),y=Object(a.useRef)(),O=Object(a.useState)(),_=Object(s.a)(O,2),E=_[0],S=_[1],w=Object(a.useMemo)(()=>e?Object(G.combineStyles)(G.MapStyles[d].style,(e=>{u.a.info("VECTORTILES",e);const t=Object.keys(e).reduce((t,n)=>{const a=e[n];return Object(l.a)(Object(l.a)({},t),{},{[a.sourceName]:{tiles:[a.url],type:"vector",minzoom:a.minZoom,maxzoom:a.maxZoom,bounds:a.bounds}})},{}),n=[{id:"NHDFlowlines_lines",type:"line",source:e.NHDFlowline.sourceName,"source-layer":"NHDFlowlines",minzoom:e.NHDFlowline.minZoom,maxzoom:16.5,layout:{visibility:"visible"},paint:{"line-opacity":["interpolate",["linear"],["zoom"],e.NHDFlowline.minZoom,0,8,1],"line-width":["interpolate",["linear"],["zoom"],e.NHDFlowline.minZoom,.5,16,3],"line-color":["match",["get","NHDPlusID"],[-1],"#FFFF00",["step",["get","FType"],"#FF0000",460,"#0000FF"]]}}];return{version:8,name:"Outdoors",metadata:{"mapbox:type":"default","mapbox:origin":"outdoors-v11","mapbox:autocomposite":!0,"mapbox:groups":{},"mapbox:sdk-support":{js:"0.50.0",android:"6.7.0",ios:"4.6.0"}},sources:Object(l.a)({},t),sprite:"mapbox://sprites/pipbailey/cjvfq2uwm0vqk1foby0dtwdmk/ayuihl2d38ufkjhmu0pwx0cto",glyphs:"mapbox://fonts/pipbailey/{fontstack}/{range}.pbf",layers:[...n],created:"2019-05-08T21:16:06.811Z",id:"cjvfq2uwm0vqk1foby0dtwdmk",modified:"2019-05-08T22:02:34.939Z",owner:"pipbailey",visibility:"private",draft:!1}})(e)):null,[d,e]);Object(a.useLayoutEffect)(()=>{if(t){if((null===t||void 0===t?void 0:t.reachBBox)&&v.current){var e;const n=v.current,a=n.getLayer("NHDFlowlines_lines"),r=a.getPaintProperty("line-color");r[2]=[parseInt(null===t||void 0===t||null===(e=t.nhdProps)||void 0===e?void 0:e.nhdplusid,10)],u.a.debug("line-color",r,a),n.setPaintProperty("NHDFlowlines_lines","line-color",r)}if((null===t||void 0===t?void 0:t.catchBBox)||(null===t||void 0===t?void 0:t.reachBBox)){const e=(null===t||void 0===t?void 0:t.catchBBox)||(null===t||void 0===t?void 0:t.reachBBox);if(!e.coordinates)return void u.a.error("coordinates missing");const n=[Math.min(...e.coordinates[0].map(e=>e[0])),Math.min(...e.coordinates[0].map(e=>e[1])),Math.max(...e.coordinates[0].map(e=>e[0])),Math.max(...e.coordinates[0].map(e=>e[1]))];if(4===n.length&&n.every(R.util.isNumeric)){const e=[(n[0]+n[2])/2,(n[1]+n[3])/2];y.current&&n.every((e,t)=>!y.current||e===y.current[t])||(y.current=n,S({transitionDuration:2e3,transitionInterpolator:new L.FlyToInterpolator,transitionEasing:F.b}),setTimeout(()=>S(void 0),2e3),b(n),u.a.debug("Mapbounds Set",{bounds:n,lngLat:e}))}}}},[t]);const C=t&&t.clickCoords&&t.intersect?{type:"Feature",properties:{percentile:0},geometry:{type:"LineString",coordinates:[t.clickCoords,t.intersect]}}:null,j=t&&t.catchGeo?{type:"Feature",properties:{},geometry:t.catchGeo}:null,P=Object(a.useMemo)(()=>r.a.createElement(G.StyleButtons,{controlPadding:{},currStyle:d,mapStyles:G.MapStyles,setCurrStyle:e=>p(e)}),[d]);return r.a.createElement(G.BaseMap,{mapBoxToken:m,reactMapGLProps:{clickRadius:2,maxZoom:16,minZoom:6,onClick:(e,t)=>{S(null),o(e,t)}},bounds:g,showMe:!0,viewport:n,mapStyles:[{style:w}],transition:E,onTransitionStart:()=>{u.a.debug("onTransition START")},onTransitionEnd:()=>{u.a.debug("onTransition END"),S(null)}},P,t&&t.intersect&&r.a.createElement(J,{latLng:t.intersect,Icon:B.a}),t&&t.clickCoords&&r.a.createElement(J,{key:"ch_clickMarker",latLng:t.clickCoords,Icon:t.loading?H.a:W.a,align:["bottom","center"]}),C&&r.a.createElement(L.Source,{type:"geojson",data:C,key:"ch_connect_line"},r.a.createElement(L.Layer,{id:"connect_line",type:"line",paint:{"line-color":"#FF0090","line-opacity":1,"line-width":["interpolate",["linear"],["zoom"],8,.5,16,3]}})),j&&r.a.createElement(L.Source,{type:"geojson",data:j,key:"ch_upstream_line"},r.a.createElement(L.Layer,{id:"upstream_line",type:"line",paint:{"line-color":"#9933ff","line-opacity":1,"line-width":1}}),r.a.createElement(L.Layer,{id:"upstream_fill",type:"fill",paint:{"fill-opacity":["interpolate",["linear"],["zoom"],6,.5,16,.2],"fill-color":"#9933ff"}})))},Y=n(785),U=n(828),K=n(830),Q=n(829),X=n(506),Z=n.n(X),ee=n(837),te=n(305),ne=n.n(te),ae=n(504),re=n.n(ae),oe=n(505),ie=n.n(oe);const ce=["nhdplusid","vpuid","reachcode","permanent_identifier","fromnode","tonode","hydroseq","levelpathi","terminalpa","dnlevelpat","dnhydroseq"],le=Object(E.a)(e=>({root:{display:"flex",width:"100%",overflow:"hidden",borderBottom:"1px solid #DEDEDE"},rootHover:{background:"#eee"},inner:{display:"flex",width:"100%",overflow:"hidden"},noval:{color:"#999999"},pinned:{background:e.palette.secondary.main,borderBottom:"1px solid ".concat(e.palette.secondary.main),color:e.palette.secondary.contrastText},name:{padding:"3px",flex:"1 1 70%",textAlign:"left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},value:{lineHeight:"1.5rem",padding:"3px",flex:"1 1 20%",textAlign:"right"},idVal:{color:e.palette.text.secondary,padding:e.spacing(.5,1),border:"1px solid #dddddd",background:"#eeeeee"},stringVal:{textAlign:"left"},unit:{lineHeight:"1.5rem",padding:"3px",paddingLeft:e.spacing(1)/2,flex:"0 1 5%",textAlign:"left"},pinButton:{opacity:0},buttonHover:{flex:"0 0",opacity:1}}));var se=({def:e,val:t,isPinned:n,onPinToggle:o})=>{const i=le(),c=Object(a.useState)(!1),l=Object(s.a)(c,2),d=l[0],u=l[1],m=e.metric_type?e.metric_type:ce.indexOf(e.metric_key)>-1?"id":"unknown",p=void 0===t?" ":function(e,t,n,a){if(null===a)return r.a.createElement("em",null,"NULL");if(!e)return R.util.isNumeric(a)?"spheroid_dist"===t?R.util.formatNum(a,6):R.util.formatNum(a,3):a.toString();switch(e){case"string":case"id":return a;case"float":return R.util.isNumeric(a)?n&&n.length>0?ne()(a).format(n):R.util.formatNum(a,3):a;default:return a}}(m,e.metric_key,e.format_string,t);return r.a.createElement("div",{className:Object(x.default)(i.root,{[i.pinned]:n,[i.rootHover]:!n&&d}),onMouseOver:()=>u(!0),onMouseOut:()=>u(!1),onDoubleClick:()=>o(e.metric_key)},r.a.createElement(ee.a,{title:r.a.createElement("div",null,r.a.createElement(C.a,{variant:"body1"},e.metric_name,e.units?" (".concat(e.units,")"):""),e.description&&r.a.createElement(C.a,{variant:"body2"},e.description))},r.a.createElement("div",{className:Object(x.default)(i.inner,{[i.noval]:!n&&(void 0===t||null===t)})},r.a.createElement(C.a,{variant:"body1",className:i.name},e.metric_name),r.a.createElement("div",{className:i.value},r.a.createElement(C.a,{variant:"id"===m||void 0===t?"overline":"body2",className:Object(x.default)({[i.idVal]:void 0!==t&&"id"===m,[i.stringVal]:void 0!==t&&"string"===m})},p)),r.a.createElement(C.a,{variant:"caption",className:i.unit},void 0===t?"":e.units))),r.a.createElement(ee.a,{title:n?"Unpin this metric":"Pin this metric"},r.a.createElement(Y.a,{size:"small",className:Object(x.default)(i.pinButton,{[i.buttonHover]:d}),onClick:()=>o(e.metric_key),color:"inherit"},n?r.a.createElement(re.a,null):r.a.createElement(ie.a,null))))};const de=Object(E.a)(e=>({root:{overflow:"scroll"},accordion:{border:"1px solid rgba(0, 0, 0, .125)",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{margin:"auto"}},accordionExpanded:{},summary:{display:"flex"},summaryExpanded:{},summaryContent:{"&$expanded":{margin:"12px 0"}},details:{display:"flex",flexDirection:"column",padding:e.spacing(1,1,1,2)},fieldTitle:{flexGrow:1},fieldCount:{}}));var ue=({groups:e,pinned:t,onPinToggle:n,metricPrefs:a,onAccordionToggle:o})=>{const i=de();return r.a.createElement("div",{className:i.root},t.map(({def:e,val:t},a)=>r.a.createElement(se,{key:"mrow-pinned-".concat(a),def:e,val:t,isPinned:!0,onPinToggle:n})),e.map(({name:e,fields:t},c)=>r.a.createElement(U.a,{key:"accordion-".concat(c),square:!0,classes:{root:i.accordion,expanded:i.accordionExpanded},expanded:Boolean(a.accordion&&a.accordion[e]),onChange:()=>o(e)},r.a.createElement(K.a,{expandIcon:r.a.createElement(Z.a,null),classes:{root:i.summary,expanded:i.summaryExpanded,content:i.summaryContent}},r.a.createElement(C.a,{className:i.fieldTitle},e),r.a.createElement(C.a,{className:i.fieldCount,variant:"caption"},t.reduce((e,t)=>t.val?e+1:e,0),"/",t.length)),r.a.createElement(Q.a,{className:i.details},t.filter(e=>!a.pinned||-1===a.pinned.indexOf(e.metric_key)).map(({def:e,val:t},a)=>r.a.createElement(se,{key:"mrow-".concat(c,"-").concat(a),def:e,val:t,onPinToggle:n}))))))},me=n(831),pe=n(833),he=n(834),fe=n(396),ge=n(839),be=n(835),ve=n(300),ye=n(477),Oe=n(394),_e=n(507),Ee=n.n(_e);const Se=Object(E.a)(e=>({root:{display:"flex",width:"100%",overflow:"hidden"},tabs:{},dlgContent:{height:"100%",display:"flex",flexDirection:"column"},codeContainer:{padding:e.spacing(1,.5),minWidth:"60hw",overflow:"hidden"},code:{color:"#cccccc",background:"#444444"},inputText:{padding:e.spacing(1,.5),fontFamily:"Courier New,Courier,Lucida Sans Typewriter,Lucida Typewriter,monospace",color:"#cccccc"}}));var we;!function(e){e[e.JSON=0]="JSON",e[e.CSV=1]="CSV"}(we||(we={}));var Ce=({data:e,open:t,handleClose:n})=>{const o=Se(),i=Object(a.useRef)(),c=Object(a.useState)(we.JSON),d=Object(s.a)(c,2),u=d[0],m=d[1],p=Object(a.useState)(!1),h=Object(s.a)(p,2),f=h[0],g=h[1],b=Object(a.useMemo)(()=>{let t="";const n=e.reduce((e,t)=>Object(l.a)(Object(l.a)({},e),{},{[t.name]:t.fields.reduce((e,{def:t,val:n})=>Object(l.a)(Object(l.a)({},e),{},{[t.metric_name]:n}),{})}),{});switch(u){case we.JSON:t=JSON.stringify(n,null,4);break;default:t=Object.keys(n).reduce((e,t)=>[...e,...Object.keys(n[t]).map(e=>"".concat(t,",").concat(e,",").concat(n[t][e]?n[t][e]:""))],["Group,Name,Value"]).join("\r\n")}return t},[e,u]),v=Object(a.useCallback)(()=>{t&&i.current&&i.current.select()},[t]);return Object(a.useEffect)(()=>{t&&(Ee()(b),g(!0))},[t,b]),r.a.createElement(r.a.Fragment,null,r.a.createElement(me.a,{open:t,onClose:n,"aria-labelledby":"form-dialog-title",maxWidth:"md",fullWidth:!0},r.a.createElement(he.a,{className:o.dlgContent},r.a.createElement(ge.a,{className:o.tabs,value:u,onChange:(e,t)=>m(t),"aria-label":"Data selector tabs"},r.a.createElement(be.a,{label:"JSON",value:we.JSON}),r.a.createElement(be.a,{label:"CSV",value:we.CSV})),r.a.createElement(ve.a,{className:o.codeContainer},r.a.createElement(fe.a,{multiline:!0,fullWidth:!0,inputRef:i,inputProps:{className:o.inputText,readOnly:!0,wrap:"soft"},className:o.code,rows:10,onFocus:v,onSelect:v,onChange:v,"aria-label":"maximum height",placeholder:"Maximum 4 rows",value:b}))),r.a.createElement(pe.a,null,r.a.createElement(j.a,{onClick:n,color:"primary"},"Cancel"))),r.a.createElement(Oe.a,{anchorOrigin:{vertical:"top",horizontal:"center"},color:"secondary",open:f,autoHideDuration:3e3,onClose:()=>g(!1)},r.a.createElement(ye.a,{elevation:6,variant:"filled",severity:"info"},u===we.JSON&&"JSON ",u===we.CSV&&"CSV ","Copied to clipboard")))},je=n(508),Pe=n.n(je);const Re=Object(E.a)(e=>({root:{height:"100%",overflow:"hidden","& *":{userSelect:"text"},display:"flex",flexDirection:"column"},title:{flexGrow:1}}));var xe=({metrics:e,loading:t,nhdProps:n,fieldDefs:o,metricPrefs:i,setOfflineState:c})=>{const d=Re(),m=Object(a.useState)(!1),p=Object(s.a)(m,2),h=p[0],f=p[1],g=Object(a.useCallback)(e=>{const t=Object(l.a)({},i.accordion);c({metricPrefs:Object(l.a)(Object(l.a)({},i),{},{accordion:Object(l.a)(Object(l.a)({},t),{},{[e]:!Boolean(t[e])})})})},[i,c]);if(t)return r.a.createElement(C.a,null,"Loading...");u.a.debug("MarkerFields::",{metrics:e,loading:t,nhdProps:n,fieldDefs:o,metricPrefs:i});const b=Object(l.a)(Object(l.a)({},e.catch_metrics),e.wing_metrics),v=Array.from(new Set(o.map(e=>e.group_name))),y=Array.from(new Set(o.map(e=>e.metric_key))),O=v.map(e=>({name:e,fields:o.map(e=>({def:e,val:null===b?null:b[e.metric_key]}))}));Object.keys(O).forEach(e=>{O[e].fields.sort((e,t)=>e.def.metric_name.toLowerCase().localeCompare(t.def.metric_name.toLowerCase()))});O.push({name:"Other",fields:b?Object.keys(b).filter(e=>-1===y.indexOf(e)).map(e=>Ne(e,n[e])):[]}),O.push({name:"NHD Fields",fields:Object.keys(n).map(e=>Ne(e,n[e]))});const _=i.pinned?i.pinned.map(e=>({def:o.find(t=>t.metric_key===e)||Ne(e,b[e]).def,val:b[e]||n[e]})):[],E=O.map(({name:e,fields:t})=>({name:e,fields:t.filter(e=>-1===i.pinned.indexOf(e.def.metric_key))}));return r.a.createElement("div",{className:d.root},r.a.createElement(w.a,{position:"static"},r.a.createElement(S.a,null,r.a.createElement(C.a,{variant:"subtitle1",className:d.title},"NHDPlusID: ",n.nhdplusid),r.a.createElement(Y.a,{className:d.dwnldBtn,color:"inherit",onClick:()=>f(!0)},r.a.createElement(Pe.a,null)))),r.a.createElement(ue,{groups:E,pinned:_,metricPrefs:i,onPinToggle:e=>{const t=i.pinned&&i.pinned.indexOf(e)>-1,n=i.pinned||[];c({metricPrefs:Object(l.a)(Object(l.a)({},i),{},{pinned:t?n.filter(t=>t!==e):[...n,e]})})},onAccordionToggle:g}),r.a.createElement(Ce,{data:O,open:h,handleClose:()=>f(!1)}))};const Te={spheroid_dist:{group_name:"NHD Fields",metric_key:"spheroid_dist",metric_type:"float",metric_name:"Distance to Reach",description:"Distance from the point you clicked to the nearest point on the reach.",units:"m",format_string:"0,0.0"},fcode:{group_name:"NHD Fields",metric_key:"fcode",metric_type:"id",metric_name:"FCode",description:null,units:null,format_string:null}};function Ne(e,t){return Te[e]?{def:Te[e],val:t}:{def:{group_name:"NHD Fields",metric_key:e,metric_name:e,description:null,units:null,format_string:null},val:t}}var ke=n(212);const De=Object(E.a)(e=>({appFrame:{height:"100%"},parentContainer:{display:"flex",flexDirection:"row",height:"100%",overflow:"hidden"},mapContainer:{overflow:"hidden",flex:"1 1 75%"},drawerContainer:{flex:"0 0 25%",wordWrap:"break-word",maxWidth:"25%"}}));var Ie=({error:e,offlineState:t,setOfflineState:n,ephemeralState:a,handleMapClick:o,searchSubmit:i,signOut:c})=>{var l,s;const d=De();return r.a.createElement(v.AppFrame,{className:d.appFrame,topbar:r.a.createElement(A,{title:"Network Attributes",searchSubmit:i,signOut:c}),fullWidth:!0,noScroll:!0},r.a.createElement("div",{className:d.parentContainer},e&&r.a.createElement(ke.a,null,r.a.createElement(C.a,{color:"error",variant:"body2"},e)),!e&&a&&a.selectedReach&&r.a.createElement("div",{id:"drawer-container",className:d.drawerContainer},r.a.createElement(xe,{loading:a.selectedReach.loading,metrics:null===(l=a.selectedReach)||void 0===l?void 0:l.metrics,nhdProps:null===(s=a.selectedReach)||void 0===s?void 0:s.nhdProps,fieldDefs:a.fieldDefs.defs||[],metricPrefs:t.metricPrefs,setOfflineState:n})),!e&&r.a.createElement("div",{className:d.mapContainer},r.a.createElement($,{initialViewport:t.viewport,vectorTiles:a.vectorTileDefs.tiles,selectedReach:a.selectedReach,handleMapClick:o}))))};const Ae={fieldDefs:{loading:!0},vectorTileDefs:{loading:!0}};var Le=()=>{const e=Object(a.useState)(!0),t=Object(s.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(),d=Object(s.a)(i,2),m=d[0],h=d[1],f=y(),b=Object(s.a)(f,2),v=b[0],E=b[1],S=Object(a.useState)(Ae),w=Object(s.a)(S,2),C=w[0],j=w[1],P=Object(O.useHosted)(g,!0,!1),R=P.isAuthenticated,x=P.getCurrentToken,T=P.signIn,N=P.signOut,k=Object(a.useRef)();k.current={offline:v,ephemeral:C},Object(a.useEffect)(()=>{const e=!C||C.fieldDefs.loading||C.vectorTileDefs.loading;e!==n&&o(e)},[C,n]);const D=Object(a.useCallback)(e=>{var t;j(Object(l.a)(Object(l.a)({},null===(t=k.current)||void 0===t?void 0:t.ephemeral),e))},[j]);Object(a.useEffect)(()=>{var e;if(!(null===(e=k.current)||void 0===e?void 0:e.ephemeral.vectorTileDefs.loading))return;const t="".concat("https://d2hsyhl6qlaiyu.cloudfront.net","/").concat("NET_ATT/BLM/NHDFlowline","/metadata.json");u.a.info("URL",t),fetch(t).then(e=>e.json()).then(e=>(e.bounds=JSON.parse("[".concat(e.bounds,"]")),e.center=JSON.parse("[".concat(e.center,"]")),Object(l.a)(Object(l.a)({},e),{},{sourceName:"NHDFlowline",url:"".concat("https://d2hsyhl6qlaiyu.cloudfront.net","/").concat("NET_ATT/BLM/NHDFlowline","/{z}/{x}/{y}.pbf"),json:JSON.parse(e.json),zoom:14,minZoom:parseInt(e.minzoom,10),maxZoom:parseInt(e.maxzoom,10),longitude:e.center[0],latitude:e.center[1]}))).then(e=>{u.a.debug("RESP",e),D({vectorTileDefs:{tiles:{NHDFlowline:e},loading:!1}})}).catch(e=>{u.a.error("DATA::fetch_tile::err:",e),h("Error fetching vector tile definitions"),D({vectorTileDefs:{tiles:void 0,loading:!1}})})},[D]),Object(a.useEffect)(()=>{R&&x().then(e=>_.api.apiCall(p,e,_.graphql.queries.fieldDefs,{}).then(e=>{e.data.fieldDefs&&D({fieldDefs:{defs:JSON.parse(e.data.fieldDefs),loading:!1}})}).catch(e=>{u.a.error("DATA::fetch_tile::err:",e),h("Error fetching field definitions"),D({fieldDefs:{defs:void 0,loading:!1}})}))},[x,D,R]);const I=Object(a.useCallback)(e=>{try{var t;u.a.debug("handleGotRecord:: Record",e);const n=JSON.parse(e.nhdProps),a=n.cp_line_pt,r=n.pt,o=Object(c.a)(n,["cp_line_pt","pt"]),i=e.metrics?JSON.parse(e.metrics):{};u.a.debug("handleGotRecord:: Record data parsed",{cpLinePt:a,pt:r,nhdProps:o});const s=a?JSON.parse(a):void 0;D({selectedReach:Object(l.a)(Object(l.a)({},null===(t=k.current)||void 0===t?void 0:t.ephemeral.selectedReach),{},{loading:!1,intersect:s?s.coordinates:void 0,catchGeo:e.catchGeom.bbox?JSON.parse(e.catchGeom.geom):void 0,catchBBox:e.catchGeom.bbox?JSON.parse(e.catchGeom.bbox):void 0,reachBBox:e.reachGeom.bbox?JSON.parse(e.reachGeom.bbox):void 0,metrics:i,nhdProps:o})})}catch(a){var n;u.a.error("DATA::handleGotRecord::err:",{err:a,record:e}),h("Error parsing record from database"),D({selectedReach:Object(l.a)(Object(l.a)({},null===(n=k.current)||void 0===n?void 0:n.ephemeral.selectedReach),{},{loading:!1})})}},[D]),A=Object(a.useCallback)(({lngLat:e})=>{var t;return R?(D({selectedReach:Object(l.a)(Object(l.a)({},null===(t=k.current)||void 0===t?void 0:t.ephemeral.selectedReach),{},{clickCoords:e,loading:!0,intersect:void 0})}),x().then(t=>_.api.apiCall(p,t,_.graphql.queries.geoRecord,{lngLat:e}).then(e=>I(e.data.geoRecord)))):Promise.resolve()},[x,D,R,I]),L=Object(a.useCallback)(e=>R?x().then(t=>_.api.apiCall(p,t,_.graphql.queries.record,{id:e}).then(e=>{if(e.data.record)return I(e.data.record);throw new Error("response.data.record not found")}).catch(e=>{var t;u.a.error("DATA::handleSearchSubmit::err:",{err:e}),h("Error retrieving record from database"),D({selectedReach:Object(l.a)(Object(l.a)({},null===(t=k.current)||void 0===t?void 0:t.ephemeral.selectedReach),{},{loading:!1})})})):Promise.resolve(),[x,I,D,R]);return Object(a.useEffect)(()=>{var e;R&&!(null===(e=k.current)||void 0===e?void 0:e.ephemeral.selectedReach)&&v.selectedReachId&&L(v.selectedReachId)},[v,L,R]),R?r.a.createElement(Ie,{error:m,offlineState:v,setOfflineState:E,ephemeralState:C,handleMapClick:A,searchSubmit:L,signOut:N}):r.a.createElement("div",null,r.a.createElement("button",{onClick:()=>T()},"Logged Out"))};const Fe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ge(e,t){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=()=>{const n=e.installing;null!=n&&(n.onstatechange=()=>{"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(e=>{console.error("Error during service worker registration:",e)})}var Me=n(509),He=n(62);n(769),n(770);n(771),Object(v.devSetup)(),i.a.render(r.a.createElement(Me.a,{basename:"/"},r.a.createElement(He.a,{path:"*",component:Le})),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/net_att",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",()=>{const t="".concat("/net_att","/service-worker.js");Fe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then(n=>{const a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):Ge(e,t)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):Ge(t,e)})}}()}},[[530,1,2]]]);
//# sourceMappingURL=main.ef1c5031.chunk.js.map