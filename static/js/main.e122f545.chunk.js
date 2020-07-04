(this["webpackJsonp@netatt/app"]=this["webpackJsonp@netatt/app"]||[]).push([[0],{155:function(e,t,n){"use strict";var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.api=o(n(730)),t.graphql=o(n(748));var i=n(749);Object.defineProperty(t,"typeDefs",{enumerable:!0,get:function(){return i.default}})},520:function(e,t,n){e.exports=n(766)},540:function(e,t){},542:function(e,t){},730:function(e,t,n){"use strict";var a=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.authCheck=t.apiCall=void 0;var o,i=r(n(731)),c=n(764),l=r(n(286)),s=r(n(34));t.apiCall=function(e,t,n,a){return i.default({url:e,method:"post",headers:t?{authorization:"Bearer "+t}:null,data:{query:c.print(n),variables:a}}).then((function(e){return e.data})).catch((function(r){throw r.response&&404===r.response.status?new Error("API Url not found: "+e):r.code&&"ECONNREFUSED"===r.code?new Error("Connection refused. Could not contact: '"+e+"'"):(s.default.error({url:e,jwt:t,query:c.print(n),variables:a}),r)}))},t.authCheck=function(e,n){return t.apiCall(e,n,l.default(o||(o=a(["\n            query AuthCall {\n                auth {\n                    loggedIn\n                    userPool\n                    clientId\n                    region\n                }\n            }\n        "],["\n            query AuthCall {\n                auth {\n                    loggedIn\n                    userPool\n                    clientId\n                    region\n                }\n            }\n        "]))),{})}},748:function(e,t,n){"use strict";var a=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.queries=t.fragments=void 0;var o,i,c,l,s,d,u=r(n(286));t.fragments={record:u.default(o||(o=a(["\n        fragment recordFragment on Record {\n            id\n            ds\n            catchGeom {\n                geom\n                bbox\n            }\n            reachGeom {\n                bbox\n            }\n            metrics\n            nhdProps\n            __typename\n        }\n    "],["\n        fragment recordFragment on Record {\n            id\n            ds\n            catchGeom {\n                geom\n                bbox\n            }\n            reachGeom {\n                bbox\n            }\n            metrics\n            nhdProps\n            __typename\n        }\n    "])))},t.queries={fieldDefs:u.default(i||(i=a(["\n        query fieldDefs {\n            fieldDefs\n        }\n    "],["\n        query fieldDefs {\n            fieldDefs\n        }\n    "]))),geoRecord:u.default(c||(c=a(["\n        query geoRecord($lngLat: [Float]!) {\n            geoRecord(lngLat: $lngLat) {\n                ...recordFragment\n            }\n        }\n        ","\n    "],["\n        query geoRecord($lngLat: [Float]!) {\n            geoRecord(lngLat: $lngLat) {\n                ...recordFragment\n            }\n        }\n        ","\n    "])),t.fragments.record),record:u.default(l||(l=a(["\n        query record($id: ID!) {\n            record(id: $id) {\n                ...recordFragment\n            }\n        }\n        ","\n    "],["\n        query record($id: ID!) {\n            record(id: $id) {\n                ...recordFragment\n            }\n        }\n        ","\n    "])),t.fragments.record),geoRecordEPSG:u.default(s||(s=a(["\n        query geoRecordEPSG($lngLat: [Float]!, $epsg: Int!) {\n            geoRecordEPSG(lngLat: $lngLat, epsg: $epsg) {\n                ...recordFragment\n            }\n        }\n        ","\n    "],["\n        query geoRecordEPSG($lngLat: [Float]!, $epsg: Int!) {\n            geoRecordEPSG(lngLat: $lngLat, epsg: $epsg) {\n                ...recordFragment\n            }\n        }\n        ","\n    "])),t.fragments.record),upstreamCatchment:u.default(d||(d=a(["\n        query upstreamCatchment($id: ID!) {\n            upstreamCatchment(id: $id)\n        }\n    "],["\n        query upstreamCatchment($id: ID!) {\n            upstreamCatchment(id: $id)\n        }\n    "])))}},749:function(e,t,n){"use strict";var a=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o,i=r(n(286)).default(o||(o=a(["\n    # Check out the cheat sheet:\n    # https://raw.githubusercontent.com/sogko/graphql-shorthand-notation-cheat-sheet/master/graphql-shorthand-notation-cheat-sheet.png\n\n    schema {\n        query: Query\n        # mutation: Mutation\n    }\n\n    type Query {\n        auth: AuthParams\n\n        fieldDefs: String\n        geoRecord(lngLat: [Float]!): Record\n        geoRecordEPSG(lngLat: [Float]!, epsg: Int!): Record\n        upstreamCatchment(id: ID!): RecordGeometry\n\n        record(id: ID!, ds: [String]): Record\n        records(ids: [ID]!, ds: [String]): [RecordSet]\n    }\n\n    # this schema allows the following mutation:\n    # type Mutation {\n    # signal a deletion of a record\n    # insertRecords(id: [ID]!, ds: String!): [Record]!\n    # deleteRecords(id: [ID]!, ds: String!): [ID]!\n    # wipeDS(ds: String!): String\n    # }\n\n    type RecordGeometry {\n        geom: String\n        bbox: String\n    }\n\n    type AuthParams {\n        loggedIn: Boolean\n        userPool: String\n        clientId: String\n        region: String\n    }\n\n    type RecordSet {\n        id: ID!\n        records: [Record]\n    }\n\n    type Record {\n        id: ID!\n        ds: String\n        catchGeom: RecordGeometry\n        reachGeom: RecordGeometry\n        metrics: String\n        nhdProps: String\n    }\n"],["\n    # Check out the cheat sheet:\n    # https://raw.githubusercontent.com/sogko/graphql-shorthand-notation-cheat-sheet/master/graphql-shorthand-notation-cheat-sheet.png\n\n    schema {\n        query: Query\n        # mutation: Mutation\n    }\n\n    type Query {\n        auth: AuthParams\n\n        fieldDefs: String\n        geoRecord(lngLat: [Float]!): Record\n        geoRecordEPSG(lngLat: [Float]!, epsg: Int!): Record\n        upstreamCatchment(id: ID!): RecordGeometry\n\n        record(id: ID!, ds: [String]): Record\n        records(ids: [ID]!, ds: [String]): [RecordSet]\n    }\n\n    # this schema allows the following mutation:\n    # type Mutation {\n    # signal a deletion of a record\n    # insertRecords(id: [ID]!, ds: String!): [Record]!\n    # deleteRecords(id: [ID]!, ds: String!): [ID]!\n    # wipeDS(ds: String!): String\n    # }\n\n    type RecordGeometry {\n        geom: String\n        bbox: String\n    }\n\n    type AuthParams {\n        loggedIn: Boolean\n        userPool: String\n        clientId: String\n        region: String\n    }\n\n    type RecordSet {\n        id: ID!\n        records: [Record]\n    }\n\n    type Record {\n        id: ID!\n        ds: String\n        catchGeom: RecordGeometry\n        reachGeom: RecordGeometry\n        metrics: String\n        nhdProps: String\n    }\n"])));t.default=i},760:function(e,t,n){},766:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(40),i=n.n(o),c=n(501),l=n(38),s=n(86),d=n(34),u=n.n(d);const m="pk.eyJ1IjoicmF5Y2hhc2VyIiwiYSI6IlFHWHVMSW8ifQ.emd44Ibp4cmT9YXitY1ziw",p="https://64ggxqpm82.execute-api.us-west-2.amazonaws.com/prod/api",h=(Object({NODE_ENV:"production",PUBLIC_URL:"/net_att",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_MAPBOX_TOKEN:"pk.eyJ1IjoicmF5Y2hhc2VyIiwiYSI6IlFHWHVMSW8ifQ.emd44Ibp4cmT9YXitY1ziw",REACT_APP_RS_TILES_CDN:"https://d2hsyhl6qlaiyu.cloudfront.net",REACT_APP_RS_CDN:"https://d18emzkyqtselk.cloudfront.net",REACT_APP_GRAPHQL:"https://64ggxqpm82.execute-api.us-west-2.amazonaws.com/prod/api",REACT_APP_AWS_REGION:"us-west-2",REACT_APP_COGNITO_USER_POOL_ID:"us-west-2_e7COHULVp",REACT_APP_COGNITO_CLIENT_ID:"4j2m8a80sd7l7mu5a9g7udq6bg",REACT_APP_HOSTED_DOMAIN:"riverscapes-dev.auth.us-west-2.amazoncognito.com",REACT_APP_VERSION:"0.1.13",REACT_APP_CONTACT_EMAIL:"info@northarrowresearch.com"}).REACT_APP_CDN,{REACT_APP_MAPBOX_TOKEN:"pk.eyJ1IjoicmF5Y2hhc2VyIiwiYSI6IlFHWHVMSW8ifQ.emd44Ibp4cmT9YXitY1ziw",REACT_APP_VERSION:"0.1.13",REACT_APP_CONTACT_EMAIL:"info@northarrowresearch.com",REACT_APP_GRAPHQL:"https://64ggxqpm82.execute-api.us-west-2.amazonaws.com/prod/api"});Object.keys(h).forEach(e=>{h[e]||u.a.error("You must set environment variable: ".concat(e))});Object({NODE_ENV:"production",PUBLIC_URL:"/net_att",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_MAPBOX_TOKEN:"pk.eyJ1IjoicmF5Y2hhc2VyIiwiYSI6IlFHWHVMSW8ifQ.emd44Ibp4cmT9YXitY1ziw",REACT_APP_RS_TILES_CDN:"https://d2hsyhl6qlaiyu.cloudfront.net",REACT_APP_RS_CDN:"https://d18emzkyqtselk.cloudfront.net",REACT_APP_GRAPHQL:"https://64ggxqpm82.execute-api.us-west-2.amazonaws.com/prod/api",REACT_APP_AWS_REGION:"us-west-2",REACT_APP_COGNITO_USER_POOL_ID:"us-west-2_e7COHULVp",REACT_APP_COGNITO_CLIENT_ID:"4j2m8a80sd7l7mu5a9g7udq6bg",REACT_APP_HOSTED_DOMAIN:"riverscapes-dev.auth.us-west-2.amazoncognito.com",REACT_APP_VERSION:"0.1.13",REACT_APP_CONTACT_EMAIL:"info@northarrowresearch.com"}).REACT_APP_GA_TOKEN;const g=new URL("/net_att/",window.location.origin),f={Auth:{region:"us-west-2",userPoolId:"us-west-2_e7COHULVp",userPoolWebClientId:"4j2m8a80sd7l7mu5a9g7udq6bg",mandatorySignIn:!0,oauth:{domain:"riverscapes-dev.auth.us-west-2.amazoncognito.com",scope:["email","profile","openid"],redirectSignIn:g.toString(),redirectSignOut:g.toString(),responseType:"code"}}},b={version:"0.1.13",viewport:{latitude:44.2983897312401,longitude:-114.374749399575},metricPrefs:{pinned:[],accordion:{}},selectedReachId:void 0};var v=n(137);var y=()=>{const e=Object(v.useLocalStorage)("INIT_STATE",b),t=Object(s.a)(e,2),n=t[0],r=t[1];Object(a.useEffect)(()=>{"0.1.13"!==n.version&&(u.a.warn("Version upgrade detected, wiping slate!"),r(b))},[n.version,r]);const o=Object(a.useCallback)(e=>{r(Object(l.a)(Object(l.a)({},n),e))},[n,r]);return[n,o]},O=n(474),E=n(155),_=n(385),w=n(390),S=n(386),P=n(383),R=n(387),j=n(504),C=n(140),x=n(6),T=n(492),I=n.n(T),D=n(21);const k=Object(_.a)(e=>({root:{display:"flex",alignItems:"center",width:"100%",padding:e.spacing(0,1),textShadow:"3px 3px 3px rgba(0,0,0,0.7)",backgroundImage:"url(https://northarrowresearchlabs.github.io/riverscapes/HeaderBackground.png)",backgroundRepeat:"no-repeat",backgroundPosition:"0% 50%",backgroundSize:"cover",backgroundColor:"#444444"},version:{paddingLeft:e.spacing(1)},logo:{height:40,width:40,marginRight:e.spacing(2)},programChooser:{margin:e.spacing(0,1),color:e.palette.primary.contrastText,"& svg":{color:e.palette.primary.contrastText},"&:before":{borderColor:e.palette.primary.contrastText},"&:after":{borderColor:e.palette.primary.contrastText}},transparent:{backgroundColor:"transparent",background:"none",color:e.palette.text.primary},search:{position:"relative",border:"1px solid white",borderRadius:e.shape.borderRadius,backgroundColor:Object(D.d)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(D.d)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,flexGrow:1,maxWidth:"20rem",[e.breakpoints.up("sm")]:{marginLeft:e.spacing(3),width:"auto"}},searchError:{border:"1px solid red"},searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},spacer:{flexGrow:1},inputInput:{padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%",[e.breakpoints.up("sm")]:{width:200}},sectionDesktop:{display:"none",[e.breakpoints.up("sm")]:{display:"flex",flexGrow:1}},sectionMobile:{display:"flex",flexGrow:1,[e.breakpoints.up("sm")]:{display:"none"}}})),A={text:""};var N=({title:e,searchSubmit:t,signOut:n})=>{const o=k(),i=Object(a.useState)(A),c=Object(s.a)(i,2),d=c[0],m=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{position:"static"},r.a.createElement(w.a,{className:o.root,disableGutters:!0},r.a.createElement("a",{href:"http://riverscapes.xyz/"},r.a.createElement("img",{className:o.logo,src:"https://riverscapes.xyz/assets/images/RiverscapesLogo.png",alt:"logo"})),r.a.createElement(P.a,{variant:"subtitle1"},e),r.a.createElement(P.a,{variant:"overline",className:o.version},"v.","0.1.13"),r.a.createElement("div",{className:o.spacer}),d.error&&r.a.createElement(P.a,{variant:"subtitle1",color:"error"},d.error),r.a.createElement("div",{className:Object(x.default)(o.search,{[o.searchError]:Boolean(d.error)})},r.a.createElement("div",{className:o.searchIcon},r.a.createElement(I.a,null)),r.a.createElement(j.a,{placeholder:"NHDPlusID\u2026 (55000600125036)",onKeyDown:e=>{var n;"Enter"===e.key&&(u.a.debug("searchSubmitHandle ENTER DETECTED",e),(n=d.text)&&n.length>0&&C.util.isNumeric(n)?(m(Object(l.a)(Object(l.a)({},d),{},{error:void 0})),u.a.debug("searchSubmitHandle called",n),t(parseInt(n,10)).then(()=>{m(A)})):(u.a.debug("searchSubmitHandle ERROR non numeric"),m(Object(l.a)(Object(l.a)({},d),{},{error:"Non-Numberic nhdid"}))))},value:d.text,onChange:e=>m(Object(l.a)(Object(l.a)({},d),{},{text:e.target.value})),classes:{root:o.inputRoot,input:o.inputInput},inputProps:{"aria-label":"search"}})),r.a.createElement(R.a,{color:"inherit",onClick:()=>n()},"Sign Out"))))},L=n(109),F=n(193),G=n(182),M=n(495),q=n.n(M),H=n(494),B=n.n(H),z=n(496),W=n.n(z);const $=Object(_.a)(e=>({root:{},icon:{zIndex:100,width:20,height:20,position:"absolute",top:"50%",left:"50%",textAlign:"center",transformOrigin:"50% 50%",transform:"translateY(-50%) translateX(-50%)"}}));var V=({latLng:e,Icon:t,align:n})=>{const a=$(),o={};if(n){switch(n[0]){case"bottom":o.transform="translateY(-100%)";break;case"top":o.transform="translateY(0%)";break;case"center":o.transform="translateY(-50%)";break;default:throw new Error("Must specify vertical placement of align")}switch(n[1]){case"left":o.transform+=" translateX(0%)";break;case"right":o.transform+=" translateX(-100%)";break;case"center":o.transform+=" translateX(-50%)";break;default:throw new Error("Must specify horizontal placement of align")}}return r.a.createElement(L.Marker,{className:a.root,longitude:e[0],latitude:e[1]},r.a.createElement("div",{className:a.root},r.a.createElement(t,{className:a.icon,style:o})))};var Y=({vectorTiles:e,selectedReach:t,initialViewport:n,handleMapClick:o})=>{const i=Object(a.useState)(0),c=Object(s.a)(i,2),d=c[0],p=c[1],h=Object(a.useState)(),g=Object(s.a)(h,2),f=g[0],b=g[1],v=Object(a.useRef)(),y=Object(a.useRef)(),O=Object(a.useState)(),E=Object(s.a)(O,2),_=E[0],w=E[1],S=Object(a.useMemo)(()=>e?Object(G.combineStyles)(G.MapStyles[d].style,(e=>{u.a.info("VECTORTILES",e);const t=Object.keys(e).reduce((t,n)=>{const a=e[n];return Object(l.a)(Object(l.a)({},t),{},{[a.sourceName]:{tiles:[a.url],type:"vector",minzoom:a.minZoom,maxzoom:a.maxZoom,bounds:a.bounds}})},{}),n=[{id:"NHDFlowlines_lines",type:"line",source:e.NHDFlowline.sourceName,"source-layer":"NHDFlowlines",minzoom:e.NHDFlowline.minZoom,maxzoom:16.5,layout:{visibility:"visible"},paint:{"line-opacity":["interpolate",["linear"],["zoom"],e.NHDFlowline.minZoom,0,8,1],"line-width":["interpolate",["linear"],["zoom"],e.NHDFlowline.minZoom,.5,16,3],"line-color":["match",["get","NHDPlusID"],[-1],"#FFFF00",["step",["get","FType"],"#FF0000",460,"#0000FF"]]}}];return{version:8,name:"Outdoors",metadata:{"mapbox:type":"default","mapbox:origin":"outdoors-v11","mapbox:autocomposite":!0,"mapbox:groups":{},"mapbox:sdk-support":{js:"0.50.0",android:"6.7.0",ios:"4.6.0"}},sources:Object(l.a)({},t),sprite:"mapbox://sprites/pipbailey/cjvfq2uwm0vqk1foby0dtwdmk/ayuihl2d38ufkjhmu0pwx0cto",glyphs:"mapbox://fonts/pipbailey/{fontstack}/{range}.pbf",layers:[...n],created:"2019-05-08T21:16:06.811Z",id:"cjvfq2uwm0vqk1foby0dtwdmk",modified:"2019-05-08T22:02:34.939Z",owner:"pipbailey",visibility:"private",draft:!1}})(e)):null,[d,e]);Object(a.useLayoutEffect)(()=>{if(t){if((null===t||void 0===t?void 0:t.reachBBox)&&v.current){var e;const n=v.current,a=n.getLayer("NHDFlowlines_lines"),r=a.getPaintProperty("line-color");r[2]=[parseInt(null===t||void 0===t||null===(e=t.nhdProps)||void 0===e?void 0:e.nhdplusid,10)],u.a.debug("line-color",r,a),n.setPaintProperty("NHDFlowlines_lines","line-color",r)}if((null===t||void 0===t?void 0:t.catchBBox)||(null===t||void 0===t?void 0:t.reachBBox)){const e=(null===t||void 0===t?void 0:t.catchBBox)||(null===t||void 0===t?void 0:t.reachBBox);if(!e.coordinates)return void u.a.error("coordinates missing");const n=[Math.min(...e.coordinates[0].map(e=>e[0])),Math.min(...e.coordinates[0].map(e=>e[1])),Math.max(...e.coordinates[0].map(e=>e[0])),Math.max(...e.coordinates[0].map(e=>e[1]))];if(4===n.length&&n.every(C.util.isNumeric)){const e=[(n[0]+n[2])/2,(n[1]+n[3])/2];y.current&&n.every((e,t)=>!y.current||e===y.current[t])||(y.current=n,w({transitionDuration:2e3,transitionInterpolator:new L.FlyToInterpolator,transitionEasing:F.b}),b(n),u.a.debug("Mapbounds Set",{bounds:n,lngLat:e}))}}}},[t]);const P=t&&t.clickCoords&&t.intersect?{type:"Feature",properties:{percentile:0},geometry:{type:"LineString",coordinates:[t.clickCoords,t.intersect]}}:null,R=t&&t.catchGeo?{type:"Feature",properties:{},geometry:t.catchGeo}:null,j=Object(a.useMemo)(()=>r.a.createElement(G.StyleButtons,{controlPadding:{},currStyle:d,mapStyles:G.MapStyles,setCurrStyle:e=>p(e)}),[d]);return r.a.createElement(G.BaseMap,{mapBoxToken:m,reactMapGLProps:{clickRadius:2,maxZoom:16,minZoom:6,onClick:(e,t)=>{w(null),o(e,t)}},bounds:f,showMe:!0,viewport:n,mapStyles:[{style:S}],transition:_,onTransitionStart:()=>{u.a.debug("onTransition START")},onTransitionEnd:()=>{u.a.debug("onTransition END"),w(null)}},j,t&&t.intersect&&r.a.createElement(V,{latLng:t.intersect,Icon:B.a}),t&&t.clickCoords&&r.a.createElement(V,{key:"ch_clickMarker",latLng:t.clickCoords,Icon:t.loading?q.a:W.a,align:["bottom","center"]}),P&&r.a.createElement(L.Source,{type:"geojson",data:P,key:"ch_connect_line"},r.a.createElement(L.Layer,{id:"connect_line",type:"line",paint:{"line-color":"#FF0090","line-opacity":1,"line-width":["interpolate",["linear"],["zoom"],8,.5,16,3]}})),R&&r.a.createElement(L.Source,{type:"geojson",data:R,key:"ch_upstream_line"},r.a.createElement(L.Layer,{id:"upstream_line",type:"line",paint:{"line-color":"#9933ff","line-opacity":1,"line-width":1}}),r.a.createElement(L.Layer,{id:"upstream_fill",type:"fill",paint:{"fill-opacity":["interpolate",["linear"],["zoom"],6,.5,16,.2],"fill-color":"#9933ff"}})))},U=n(818),J=n(820),K=n(819),Q=n(499),X=n.n(Q),Z=n(776),ee=n(822),te=n(497),ne=n.n(te),ae=n(498),re=n.n(ae),oe=n(293),ie=n.n(oe);const ce=["nhdplusid","vpuid","reachcode","permanent_identifier","fromnode","tonode","hydroseq","levelpathi","terminalpa","dnlevelpat","dnhydroseq"],le=Object(_.a)(e=>({root:{display:"flex",width:"100%",overflow:"hidden",borderBottom:"1px solid #DEDEDE"},rootHover:{background:"#eee"},inner:{display:"flex",width:"100%",overflow:"hidden"},noval:{color:"#999999"},pinned:{background:e.palette.secondary.main,borderBottom:"1px solid ".concat(e.palette.secondary.main),color:e.palette.secondary.contrastText},name:{padding:"3px",flex:"1 1 50%",textAlign:"left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},value:{lineHeight:"1.5rem",padding:"3px",flex:"1 1 40%",textAlign:"right"},unit:{lineHeight:"1.5rem",padding:"3px",paddingLeft:e.spacing(1)/2,flex:"0 1 10%",textAlign:"left"},pinButton:{opacity:0},buttonHover:{flex:"0 0",opacity:1}}));var se=({def:e,val:t,isPinned:n,onPinToggle:o})=>{const i=le(),c=Object(a.useState)(!1),l=Object(s.a)(c,2),d=l[0],u=l[1];return r.a.createElement("div",{className:Object(x.default)(i.root,{[i.pinned]:n,[i.rootHover]:!n&&d}),onMouseOver:()=>u(!0),onMouseOut:()=>u(!1),onDoubleClick:()=>o(e.metric_key)},r.a.createElement(ee.a,{title:r.a.createElement("div",null,r.a.createElement(P.a,null,e.metric_name,e.units?" (".concat(e.units,")"):""),e.description&&r.a.createElement(P.a,null,e.description))},r.a.createElement("div",{className:Object(x.default)(i.inner,{[i.noval]:!n&&(void 0===t||null===t)})},r.a.createElement(P.a,{variant:"body1",className:i.name},e.metric_name),r.a.createElement(P.a,{variant:"body2",className:i.value},void 0===t?"No Value":function(e,t){return null===t||void 0===t?r.a.createElement("em",null,"n/a"):ce.indexOf(e)>-1?r.a.createElement("code",null,t):C.util.isNumeric(t)?"spheroid_dist"===e?ie()(t).format("0.00000"):C.util.formatNum(t):t.toString()}(e.metric_key,t)),r.a.createElement(P.a,{variant:"caption",className:i.unit},void 0===t?"":e.units))),r.a.createElement(ee.a,{title:n?"Unpin this metric":"Pin this matric"},r.a.createElement(Z.a,{size:"small",className:Object(x.default)(i.pinButton,{[i.buttonHover]:d}),onClick:()=>o(e.metric_key),color:"inherit"},n?r.a.createElement(ne.a,null):r.a.createElement(re.a,null))))};const de=Object(_.a)(e=>({root:{overflow:"scroll"},accordion:{border:"1px solid rgba(0, 0, 0, .125)",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{margin:"auto"}},accordionExpanded:{},summary:{display:"flex"},summaryExpanded:{},summaryContent:{"&$expanded":{margin:"12px 0"}},details:{display:"flex",flexDirection:"column",padding:e.spacing(1,1,1,2)},fieldTitle:{flexGrow:1},fieldCount:{}}));var ue=({groups:e,pinned:t,onPinToggle:n,metricPrefs:a,onAccordionToggle:o})=>{const i=de();return r.a.createElement("div",{className:i.root},t.map(({def:e,val:t},a)=>r.a.createElement(se,{key:"mrow-pinned-".concat(a),def:e,val:t,isPinned:!0,onPinToggle:n})),e.map(({name:e,fields:t},c)=>r.a.createElement(U.a,{key:"accordion-".concat(c),square:!0,classes:{root:i.accordion,expanded:i.accordionExpanded},expanded:Boolean(a.accordion&&a.accordion[e]),onChange:()=>o(e)},r.a.createElement(J.a,{expandIcon:r.a.createElement(X.a,null),classes:{root:i.summary,expanded:i.summaryExpanded,content:i.summaryContent}},r.a.createElement(P.a,{className:i.fieldTitle},e),r.a.createElement(P.a,{className:i.fieldCount,variant:"caption"},t.reduce((e,t)=>t.val?e+1:e,0),"/",t.length)),r.a.createElement(K.a,{className:i.details},t.filter(e=>!a.pinned||-1===a.pinned.indexOf(e.metric_key)).map(({def:e,val:t},a)=>r.a.createElement(se,{key:"mrow-".concat(c,"-").concat(a),def:e,val:t,onPinToggle:n}))))))};const me=Object(_.a)(e=>({root:{height:"100%",overflow:"hidden","& *":{userSelect:"text"},display:"flex",flexDirection:"column"}}));var pe=({metrics:e,loading:t,nhdProps:n,fieldDefs:o,metricPrefs:i,setOfflineState:c})=>{const s=me(),d=Object(a.useCallback)(e=>{const t=Object(l.a)({},i.accordion);c({metricPrefs:Object(l.a)(Object(l.a)({},i),{},{accordion:Object(l.a)(Object(l.a)({},t),{},{[e]:!Boolean(t[e])})})})},[i,c]);if(t)return r.a.createElement(P.a,null,"Loading...");u.a.debug("MarkerFields::",{metrics:e,loading:t,nhdProps:n,fieldDefs:o,metricPrefs:i});const m=Array.from(new Set(o.map(e=>e.group_name))),p=Array.from(new Set(o.map(e=>e.metric_key))),h=m.map(t=>({name:t,fields:o.filter(e=>e.group_name===t&&-1===i.pinned.indexOf(e.metric_key)).map(t=>({def:t,val:null===e?null:e[t.metric_key]}))}));Object.keys(h).forEach(e=>{h[e].fields.sort((e,t)=>e.def.metric_name.toLowerCase().localeCompare(t.def.metric_name.toLowerCase()))});const g=i.pinned?i.pinned.map(t=>({def:o.find(e=>e.metric_key===t)||he(t,e[t]).def,val:e[t]||n[t]})):[];return h.push({name:"Other",fields:e?Object.keys(e).filter(e=>-1===p.indexOf(e)).map(e=>he(e,n[e])):[]}),h.push({name:"NHD Fields",fields:Object.keys(n).map(e=>he(e,n[e]))}),r.a.createElement("div",{className:s.root},r.a.createElement(S.a,{position:"static"},r.a.createElement(w.a,null,r.a.createElement(P.a,{variant:"subtitle1",className:s.title},"NHDPlusID: ",n.nhdplusid))),r.a.createElement(ue,{groups:h,pinned:g,metricPrefs:i,onPinToggle:e=>{const t=i.pinned&&i.pinned.indexOf(e)>-1,n=i.pinned||[];c({metricPrefs:Object(l.a)(Object(l.a)({},i),{},{pinned:t?n.filter(t=>t!==e):[...n,e]})})},onAccordionToggle:d}))};function he(e,t){return{def:{group_name:"",metric_key:e,metric_name:e,description:null,units:null,format_string:null},val:t}}var ge=n(248);const fe=Object(_.a)(e=>({appFrame:{height:"100%"},parentContainer:{display:"flex",flexDirection:"row",height:"100%",overflow:"hidden"},mapContainer:{overflow:"hidden",flex:"1 1 75%"},drawerContainer:{flex:"0 0 25%",wordWrap:"break-word",maxWidth:"25%"}}));var be=({error:e,offlineState:t,setOfflineState:n,ephemeralState:a,handleMapClick:o,searchSubmit:i,signOut:c})=>{var l,s;const d=fe();return r.a.createElement(v.AppFrame,{className:d.appFrame,topbar:r.a.createElement(N,{title:"Network Attributes",searchSubmit:i,signOut:c}),fullWidth:!0,noScroll:!0},r.a.createElement("div",{className:d.parentContainer},e&&r.a.createElement(ge.a,null,r.a.createElement(P.a,{color:"error",variant:"body2"},e)),!e&&a&&a.selectedReach&&r.a.createElement("div",{id:"drawer-container",className:d.drawerContainer},r.a.createElement(pe,{loading:a.selectedReach.loading,metrics:null===(l=a.selectedReach)||void 0===l?void 0:l.metrics,nhdProps:null===(s=a.selectedReach)||void 0===s?void 0:s.nhdProps,fieldDefs:a.fieldDefs.defs||[],metricPrefs:t.metricPrefs,setOfflineState:n})),!e&&r.a.createElement("div",{className:d.mapContainer},r.a.createElement(Y,{initialViewport:t.viewport,vectorTiles:a.vectorTileDefs.tiles,selectedReach:a.selectedReach,handleMapClick:o}))))};const ve={fieldDefs:{loading:!0},vectorTileDefs:{loading:!0}};var ye=()=>{const e=Object(a.useState)(!0),t=Object(s.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(),d=Object(s.a)(i,2),m=d[0],h=d[1],g=y(),b=Object(s.a)(g,2),v=b[0],_=b[1],w=Object(a.useState)(ve),S=Object(s.a)(w,2),P=S[0],R=S[1],j=Object(O.useHosted)(f,!0,!1),C=j.isAuthenticated,x=j.getCurrentToken,T=j.signIn,I=j.signOut,D=Object(a.useRef)();D.current={offline:v,ephemeral:P},Object(a.useEffect)(()=>{const e=!P||P.fieldDefs.loading||P.vectorTileDefs.loading;e!==n&&o(e)},[P,n]);const k=Object(a.useCallback)(e=>{var t;R(Object(l.a)(Object(l.a)({},null===(t=D.current)||void 0===t?void 0:t.ephemeral),e))},[R]);Object(a.useEffect)(()=>{var e;if(!(null===(e=D.current)||void 0===e?void 0:e.ephemeral.vectorTileDefs.loading))return;const t="".concat("https://d2hsyhl6qlaiyu.cloudfront.net","/").concat("NET_ATT/BLM/NHDFlowline","/metadata.json");u.a.info("URL",t),fetch(t).then(e=>e.json()).then(e=>(e.bounds=JSON.parse("[".concat(e.bounds,"]")),e.center=JSON.parse("[".concat(e.center,"]")),Object(l.a)(Object(l.a)({},e),{},{sourceName:"NHDFlowline",url:"".concat("https://d2hsyhl6qlaiyu.cloudfront.net","/").concat("NET_ATT/BLM/NHDFlowline","/{z}/{x}/{y}.pbf"),json:JSON.parse(e.json),zoom:14,minZoom:parseInt(e.minzoom,10),maxZoom:parseInt(e.maxzoom,10),longitude:e.center[0],latitude:e.center[1]}))).then(e=>{u.a.debug("RESP",e),k({vectorTileDefs:{tiles:{NHDFlowline:e},loading:!1}})}).catch(e=>{u.a.error("DATA::fetch_tile::err:",e),h("Error fetching vector tile definitions"),k({vectorTileDefs:{tiles:void 0,loading:!1}})})},[k]),Object(a.useEffect)(()=>{x().then(e=>E.api.apiCall(p,e,E.graphql.queries.fieldDefs,{}).then(e=>{e.data.fieldDefs&&k({fieldDefs:{defs:JSON.parse(e.data.fieldDefs),loading:!1}})}).catch(e=>{u.a.error("DATA::fetch_tile::err:",e),h("Error fetching field definitions"),k({fieldDefs:{defs:void 0,loading:!1}})}))},[x,k]);const A=Object(a.useCallback)(e=>{try{var t;u.a.debug("handleGotRecord:: Record",e);const n=JSON.parse(e.nhdProps),a=n.cp_line_pt,r=n.pt,o=Object(c.a)(n,["cp_line_pt","pt"]),i=e.metrics?JSON.parse(e.metrics):{};u.a.debug("handleGotRecord:: Record data parsed",{cpLinePt:a,pt:r,nhdProps:o});const s=a?JSON.parse(a):void 0;k({selectedReach:Object(l.a)(Object(l.a)({},null===(t=D.current)||void 0===t?void 0:t.ephemeral.selectedReach),{},{loading:!1,intersect:s?s.coordinates:void 0,catchGeo:e.catchGeom.bbox?JSON.parse(e.catchGeom.geom):void 0,catchBBox:e.catchGeom.bbox?JSON.parse(e.catchGeom.bbox):void 0,reachBBox:e.reachGeom.bbox?JSON.parse(e.reachGeom.bbox):void 0,metrics:i,nhdProps:o})})}catch(a){var n;u.a.error("DATA::handleGotRecord::err:",{err:a,record:e}),h("Error parsing record from database"),k({selectedReach:Object(l.a)(Object(l.a)({},null===(n=D.current)||void 0===n?void 0:n.ephemeral.selectedReach),{},{loading:!1})})}},[k]),N=Object(a.useCallback)(e=>x().then(t=>E.api.apiCall(p,t,E.graphql.queries.record,{id:e}).then(e=>{if(e.data.record)return A(e.data.record);throw new Error("response.data.record not found")}).catch(e=>{var t;u.a.error("DATA::handleSearchSubmit::err:",{err:e}),h("Error retrieving record from database"),k({selectedReach:Object(l.a)(Object(l.a)({},null===(t=D.current)||void 0===t?void 0:t.ephemeral.selectedReach),{},{loading:!1})})})),[x,A,k]);return Object(a.useEffect)(()=>{var e;!(null===(e=D.current)||void 0===e?void 0:e.ephemeral.selectedReach)&&v.selectedReachId&&N(v.selectedReachId)},[v,N]),C?r.a.createElement(be,{error:m,offlineState:v,setOfflineState:_,ephemeralState:P,handleMapClick:({lngLat:e})=>{var t;return k({selectedReach:Object(l.a)(Object(l.a)({},null===(t=D.current)||void 0===t?void 0:t.ephemeral.selectedReach),{},{clickCoords:e,loading:!0,intersect:void 0})}),x().then(t=>E.api.apiCall(p,t,E.graphql.queries.geoRecord,{lngLat:e}).then(e=>A(e.data.geoRecord)))},searchSubmit:N,signOut:I}):r.a.createElement("div",null,r.a.createElement("button",{onClick:()=>T()},"Logged Out"))};const Oe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ee(e,t){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=()=>{const n=e.installing;null!=n&&(n.onstatechange=()=>{"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(e=>{console.error("Error during service worker registration:",e)})}var _e=n(500),we=n(61);n(759),n(760);n(761),Object(v.devSetup)(),i.a.render(r.a.createElement(_e.a,{basename:"/"},r.a.createElement(we.a,{path:"*",component:ye})),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/net_att",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",()=>{const t="".concat("/net_att","/service-worker.js");Oe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then(n=>{const a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):Ee(e,t)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):Ee(t,e)})}}()}},[[520,1,2]]]);
//# sourceMappingURL=main.e122f545.chunk.js.map