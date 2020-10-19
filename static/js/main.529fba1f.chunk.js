(this["webpackJsonp@netatt/app"]=this["webpackJsonp@netatt/app"]||[]).push([[0],{160:function(e,t,a){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.hasOwnProperty.call(e,a)&&n(t,e,a);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.api=o(a(780)),t.graphql=o(a(798));var i=a(799);Object.defineProperty(t,"typeDefs",{enumerable:!0,get:function(){return i.default}})},548:function(e,t,a){e.exports=a(818)},568:function(e,t){},570:function(e,t){},780:function(e,t,a){"use strict";var n=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.authCheck=t.apiCall=void 0;var o,i=r(a(781)),c=a(816),l=r(a(317)),s=r(a(34));t.apiCall=function(e,t,a,n){return i.default({url:e,method:"post",headers:t?{authorization:"Bearer "+t}:null,data:{query:c.print(a),variables:n}}).then((function(e){return e.data})).catch((function(r){throw r.response&&404===r.response.status?new Error("API Url not found: "+e):r.code&&"ECONNREFUSED"===r.code?new Error("Connection refused. Could not contact: '"+e+"'"):(s.default.error({url:e,jwt:t,query:c.print(a),variables:n}),r)}))},t.authCheck=function(e,a){return t.apiCall(e,a,l.default(o||(o=n(["\n            query AuthCall {\n                auth {\n                    loggedIn\n                    userPool\n                    clientId\n                    region\n                }\n            }\n        "],["\n            query AuthCall {\n                auth {\n                    loggedIn\n                    userPool\n                    clientId\n                    region\n                }\n            }\n        "]))),{})}},798:function(e,t,a){"use strict";var n=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.queries=t.fragments=void 0;var o,i,c,l,s,d,u=r(a(317));t.fragments={record:u.default(o||(o=n(["\n        fragment recordFragment on Record {\n            id\n            ds\n            catchGeom {\n                geom\n                bbox\n            }\n            reachGeom {\n                bbox\n            }\n            metrics\n            nhdProps\n            __typename\n        }\n    "],["\n        fragment recordFragment on Record {\n            id\n            ds\n            catchGeom {\n                geom\n                bbox\n            }\n            reachGeom {\n                bbox\n            }\n            metrics\n            nhdProps\n            __typename\n        }\n    "])))},t.queries={fieldDefs:u.default(i||(i=n(["\n        query fieldDefs {\n            fieldDefs\n        }\n    "],["\n        query fieldDefs {\n            fieldDefs\n        }\n    "]))),geoRecord:u.default(c||(c=n(["\n        query geoRecord($lngLat: [Float]!) {\n            geoRecord(lngLat: $lngLat) {\n                ...recordFragment\n            }\n        }\n        ","\n    "],["\n        query geoRecord($lngLat: [Float]!) {\n            geoRecord(lngLat: $lngLat) {\n                ...recordFragment\n            }\n        }\n        ","\n    "])),t.fragments.record),record:u.default(l||(l=n(["\n        query record($id: ID!) {\n            record(id: $id) {\n                ...recordFragment\n            }\n        }\n        ","\n    "],["\n        query record($id: ID!) {\n            record(id: $id) {\n                ...recordFragment\n            }\n        }\n        ","\n    "])),t.fragments.record),geoRecordEPSG:u.default(s||(s=n(["\n        query geoRecordEPSG($lngLat: [Float]!, $epsg: Int!) {\n            geoRecordEPSG(lngLat: $lngLat, epsg: $epsg) {\n                ...recordFragment\n            }\n        }\n        ","\n    "],["\n        query geoRecordEPSG($lngLat: [Float]!, $epsg: Int!) {\n            geoRecordEPSG(lngLat: $lngLat, epsg: $epsg) {\n                ...recordFragment\n            }\n        }\n        ","\n    "])),t.fragments.record),upstreamCatchment:u.default(d||(d=n(["\n        query upstreamCatchment($id: ID!) {\n            upstreamCatchment(id: $id)\n        }\n    "],["\n        query upstreamCatchment($id: ID!) {\n            upstreamCatchment(id: $id)\n        }\n    "])))}},799:function(e,t,a){"use strict";var n=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o,i=r(a(317)).default(o||(o=n(["\n    # Check out the cheat sheet:\n    # https://raw.githubusercontent.com/sogko/graphql-shorthand-notation-cheat-sheet/master/graphql-shorthand-notation-cheat-sheet.png\n\n    schema {\n        query: Query\n        # mutation: Mutation\n    }\n\n    type Query {\n        auth: AuthParams\n\n        fieldDefs: String\n        geoRecord(lngLat: [Float]!): Record\n        geoRecordEPSG(lngLat: [Float]!, epsg: Int!): Record\n        upstreamCatchment(id: ID!): RecordGeometry\n\n        record(id: ID!, ds: [String]): Record\n        records(ids: [ID]!, ds: [String]): [RecordSet]\n    }\n\n    # this schema allows the following mutation:\n    # type Mutation {\n    # signal a deletion of a record\n    # insertRecords(id: [ID]!, ds: String!): [Record]!\n    # deleteRecords(id: [ID]!, ds: String!): [ID]!\n    # wipeDS(ds: String!): String\n    # }\n\n    type RecordGeometry {\n        geom: String\n        bbox: String\n    }\n\n    type AuthParams {\n        loggedIn: Boolean\n        userPool: String\n        clientId: String\n        region: String\n    }\n\n    type RecordSet {\n        id: ID!\n        records: [Record]\n    }\n\n    type Record {\n        id: ID!\n        ds: String\n        catchGeom: RecordGeometry\n        reachGeom: RecordGeometry\n        metrics: String\n        nhdProps: String\n    }\n"],["\n    # Check out the cheat sheet:\n    # https://raw.githubusercontent.com/sogko/graphql-shorthand-notation-cheat-sheet/master/graphql-shorthand-notation-cheat-sheet.png\n\n    schema {\n        query: Query\n        # mutation: Mutation\n    }\n\n    type Query {\n        auth: AuthParams\n\n        fieldDefs: String\n        geoRecord(lngLat: [Float]!): Record\n        geoRecordEPSG(lngLat: [Float]!, epsg: Int!): Record\n        upstreamCatchment(id: ID!): RecordGeometry\n\n        record(id: ID!, ds: [String]): Record\n        records(ids: [ID]!, ds: [String]): [RecordSet]\n    }\n\n    # this schema allows the following mutation:\n    # type Mutation {\n    # signal a deletion of a record\n    # insertRecords(id: [ID]!, ds: String!): [Record]!\n    # deleteRecords(id: [ID]!, ds: String!): [ID]!\n    # wipeDS(ds: String!): String\n    # }\n\n    type RecordGeometry {\n        geom: String\n        bbox: String\n    }\n\n    type AuthParams {\n        loggedIn: Boolean\n        userPool: String\n        clientId: String\n        region: String\n    }\n\n    type RecordSet {\n        id: ID!\n        records: [Record]\n    }\n\n    type Record {\n        id: ID!\n        ds: String\n        catchGeom: RecordGeometry\n        reachGeom: RecordGeometry\n        metrics: String\n        nhdProps: String\n    }\n"])));t.default=i},812:function(e,t,a){},818:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(40),i=a.n(o),c=a(527),l=a(32),s=a(70),d=a(34),u=a.n(d),m="pk.eyJ1IjoicmF5Y2hhc2VyIiwiYSI6IlFHWHVMSW8ifQ.emd44Ibp4cmT9YXitY1ziw",p="https://9w7j442qoj.execute-api.us-west-2.amazonaws.com/prod/api",h=(Object({NODE_ENV:"production",PUBLIC_URL:"/net_att",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_MAPBOX_TOKEN:"pk.eyJ1IjoicmF5Y2hhc2VyIiwiYSI6IlFHWHVMSW8ifQ.emd44Ibp4cmT9YXitY1ziw",REACT_APP_RS_TILES_CDN:"https://d2hsyhl6qlaiyu.cloudfront.net",REACT_APP_RS_CDN:"https://d18emzkyqtselk.cloudfront.net",REACT_APP_GRAPHQL:"https://9w7j442qoj.execute-api.us-west-2.amazonaws.com/prod/api",REACT_APP_AWS_REGION:"us-west-2",REACT_APP_COGNITO_USER_POOL_ID:"us-west-2_jkK8HRXBU",REACT_APP_COGNITO_CLIENT_ID:"3it1laq9voegdn3urkp74f9sh1",REACT_APP_HOSTED_DOMAIN:"riverscapes-prod.auth.us-west-2.amazoncognito.com",REACT_APP_VERSION:"0.1.33",REACT_APP_CONTACT_EMAIL:"info@northarrowresearch.com"}).REACT_APP_CDN,{REACT_APP_MAPBOX_TOKEN:"pk.eyJ1IjoicmF5Y2hhc2VyIiwiYSI6IlFHWHVMSW8ifQ.emd44Ibp4cmT9YXitY1ziw",REACT_APP_VERSION:"0.1.33",REACT_APP_CONTACT_EMAIL:"info@northarrowresearch.com",REACT_APP_GRAPHQL:"https://9w7j442qoj.execute-api.us-west-2.amazonaws.com/prod/api"});Object.keys(h).forEach(e=>{h[e]||u.a.error("You must set environment variable: ".concat(e))});Object({NODE_ENV:"production",PUBLIC_URL:"/net_att",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_MAPBOX_TOKEN:"pk.eyJ1IjoicmF5Y2hhc2VyIiwiYSI6IlFHWHVMSW8ifQ.emd44Ibp4cmT9YXitY1ziw",REACT_APP_RS_TILES_CDN:"https://d2hsyhl6qlaiyu.cloudfront.net",REACT_APP_RS_CDN:"https://d18emzkyqtselk.cloudfront.net",REACT_APP_GRAPHQL:"https://9w7j442qoj.execute-api.us-west-2.amazonaws.com/prod/api",REACT_APP_AWS_REGION:"us-west-2",REACT_APP_COGNITO_USER_POOL_ID:"us-west-2_jkK8HRXBU",REACT_APP_COGNITO_CLIENT_ID:"3it1laq9voegdn3urkp74f9sh1",REACT_APP_HOSTED_DOMAIN:"riverscapes-prod.auth.us-west-2.amazoncognito.com",REACT_APP_VERSION:"0.1.33",REACT_APP_CONTACT_EMAIL:"info@northarrowresearch.com"}).REACT_APP_GA_TOKEN;var f=new URL("/net_att/",window.location.origin),g={Auth:{region:"us-west-2",userPoolId:"us-west-2_jkK8HRXBU",userPoolWebClientId:"3it1laq9voegdn3urkp74f9sh1",mandatorySignIn:!0,oauth:{domain:"riverscapes-prod.auth.us-west-2.amazoncognito.com",scope:["email","profile","openid"],redirectSignIn:f.toString(),redirectSignOut:f.toString(),responseType:"code"}}},b={version:"0.1.33",viewport:{latitude:44.2983897312401,longitude:-114.374749399575},metricPrefs:{pinned:[],accordion:{}},selectedReachId:void 0},v=a(141),y=()=>{var e=Object(v.useLocalStorage)("INIT_STATE",b),t=Object(s.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)(()=>{"0.1.33"!==a.version&&(u.a.warn("Version upgrade detected, wiping slate!"),r(b))},[a.version,r]);var o=Object(n.useCallback)(e=>{r(Object(l.a)(Object(l.a)({},a),e))},[a,r]);return[a,o]},O=a(506),_=a(160),E=a(410),w=a(417),S=a(411),j=a(184),C=a(412),P=a(531),R=a(126),x=a(4),k=a(516),T=a.n(k),N=a(20),D=Object(E.a)(e=>({root:{display:"flex",alignItems:"center",width:"100%",padding:e.spacing(0,1),textShadow:"3px 3px 3px rgba(0,0,0,0.7)",backgroundImage:"url(https://data.riverscapes.xyz/HeaderBackground.png)",backgroundRepeat:"no-repeat",backgroundPosition:"0% 50%",backgroundSize:"cover",backgroundColor:"#444444"},version:{paddingLeft:e.spacing(1)},logo:{height:40,width:40,marginRight:e.spacing(2)},programChooser:{margin:e.spacing(0,1),color:e.palette.primary.contrastText,"& svg":{color:e.palette.primary.contrastText},"&:before":{borderColor:e.palette.primary.contrastText},"&:after":{borderColor:e.palette.primary.contrastText}},transparent:{backgroundColor:"transparent",background:"none",color:e.palette.text.primary},search:{position:"relative",border:"1px solid white",borderRadius:e.shape.borderRadius,backgroundColor:Object(N.d)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(N.d)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,flexGrow:1,maxWidth:"20rem",[e.breakpoints.up("sm")]:{marginLeft:e.spacing(3),width:"auto"}},searchError:{border:"1px solid red"},searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},spacer:{flexGrow:1},inputInput:{padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%",[e.breakpoints.up("sm")]:{width:200}},sectionDesktop:{display:"none",[e.breakpoints.up("sm")]:{display:"flex",flexGrow:1}},sectionMobile:{display:"flex",flexGrow:1,[e.breakpoints.up("sm")]:{display:"none"}}})),I={text:""},A=({title:e,searchSubmit:t,signOut:a})=>{var o=D(),i=Object(n.useState)(I),c=Object(s.a)(i,2),d=c[0],m=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{position:"static"},r.a.createElement(w.a,{className:o.root,disableGutters:!0},r.a.createElement("a",{href:"http://riverscapes.xyz/"},r.a.createElement("img",{className:o.logo,src:"https://riverscapes.xyz/assets/images/RiverscapesLogo.png",alt:"logo"})),r.a.createElement(j.a,{variant:"subtitle1"},e),r.a.createElement(j.a,{variant:"overline",className:o.version},"v.","0.1.33"),r.a.createElement("div",{className:o.spacer}),d.error&&r.a.createElement(j.a,{variant:"subtitle1",color:"error"},d.error),r.a.createElement("div",{className:Object(x.default)(o.search,{[o.searchError]:Boolean(d.error)})},r.a.createElement("div",{className:o.searchIcon},r.a.createElement(T.a,null)),r.a.createElement(P.a,{placeholder:"NHDPlusID\u2026 (55000600125036)",onKeyDown:e=>{var a;"Enter"===e.key&&(u.a.debug("searchSubmitHandle ENTER DETECTED",e),(a=d.text)&&a.length>0&&R.util.isNumeric(a)?(m(Object(l.a)(Object(l.a)({},d),{},{error:void 0})),u.a.debug("searchSubmitHandle called",a),t(parseInt(a,10)).then(()=>{m(I)})):(u.a.debug("searchSubmitHandle ERROR non numeric"),m(Object(l.a)(Object(l.a)({},d),{},{error:"Non-Numberic nhdid"}))))},value:d.text,onChange:e=>m(Object(l.a)(Object(l.a)({},d),{},{text:e.target.value})),classes:{root:o.inputRoot,input:o.inputInput},inputProps:{"aria-label":"search"}})),r.a.createElement(C.a,{color:"inherit",onClick:()=>a()},"Sign Out"))))},L=a(111),F=a(204),G=a(190),M=a(519),H=a.n(M),q=a(518),B=a.n(q),z=a(520),W=a.n(z),V=Object(E.a)(e=>({root:{},icon:{zIndex:100,width:20,height:20,position:"absolute",top:"50%",left:"50%",textAlign:"center",transformOrigin:"50% 50%",transform:"translateY(-50%) translateX(-50%)"}})),J=({latLng:e,Icon:t,align:a})=>{var n=V(),o={};if(a){switch(a[0]){case"bottom":o.transform="translateY(-100%)";break;case"top":o.transform="translateY(0%)";break;case"center":o.transform="translateY(-50%)";break;default:throw new Error("Must specify vertical placement of align")}switch(a[1]){case"left":o.transform+=" translateX(0%)";break;case"right":o.transform+=" translateX(-100%)";break;case"center":o.transform+=" translateX(-50%)";break;default:throw new Error("Must specify horizontal placement of align")}}return r.a.createElement(L.Marker,{className:n.root,longitude:e[0],latitude:e[1]},r.a.createElement("div",{className:n.root},r.a.createElement(t,{className:n.icon,style:o})))},$=({vectorTiles:e,selectedReach:t,initialViewport:a,handleMapClick:o})=>{var i=Object(n.useState)(0),c=Object(s.a)(i,2),d=c[0],p=c[1],h=Object(n.useState)(),f=Object(s.a)(h,2),g=f[0],b=f[1],v=Object(n.useRef)(),y=Object(n.useRef)(),O=Object(n.useState)(),_=Object(s.a)(O,2),E=_[0],w=_[1],S=Object(n.useMemo)(()=>e?Object(G.combineStyles)(G.MapStyles[d].style,(e=>{u.a.info("VECTORTILES",e);var t=Object.keys(e).reduce((t,a)=>{var n=e[a];return Object(l.a)(Object(l.a)({},t),{},{[n.sourceName]:{tiles:[n.url],type:"vector",minzoom:n.minZoom,maxzoom:n.maxZoom,bounds:n.bounds}})},{}),a=[{id:"NHDFlowlines_lines",type:"line",source:e.NHDFlowline.sourceName,"source-layer":"NHDFlowlines",minzoom:e.NHDFlowline.minZoom,maxzoom:16.5,layout:{visibility:"visible"},paint:{"line-opacity":["interpolate",["linear"],["zoom"],e.NHDFlowline.minZoom,0,8,1],"line-width":["interpolate",["linear"],["zoom"],e.NHDFlowline.minZoom,.5,16,3],"line-color":["match",["get","NHDPlusID"],[-1],"#FFFF00",["step",["get","FType"],"#FF0000",460,"#0000FF"]]}}];return{version:8,name:"Outdoors",metadata:{"mapbox:type":"default","mapbox:origin":"outdoors-v11","mapbox:autocomposite":!0,"mapbox:groups":{},"mapbox:sdk-support":{js:"0.50.0",android:"6.7.0",ios:"4.6.0"}},sources:Object(l.a)({},t),sprite:"mapbox://sprites/pipbailey/cjvfq2uwm0vqk1foby0dtwdmk/ayuihl2d38ufkjhmu0pwx0cto",glyphs:"mapbox://fonts/pipbailey/{fontstack}/{range}.pbf",layers:[...a],created:"2019-05-08T21:16:06.811Z",id:"cjvfq2uwm0vqk1foby0dtwdmk",modified:"2019-05-08T22:02:34.939Z",owner:"pipbailey",visibility:"private",draft:!1}})(e)):null,[d,e]);Object(n.useLayoutEffect)(()=>{if(t){if((null===t||void 0===t?void 0:t.reachBBox)&&v.current){var e,a=v.current,n=a.getLayer("NHDFlowlines_lines"),r=n.getPaintProperty("line-color");r[2]=[parseInt(null===t||void 0===t||null===(e=t.nhdProps)||void 0===e?void 0:e.nhdplusid,10)],u.a.debug("line-color",r,n),a.setPaintProperty("NHDFlowlines_lines","line-color",r)}if((null===t||void 0===t?void 0:t.catchBBox)||(null===t||void 0===t?void 0:t.reachBBox)){var o=(null===t||void 0===t?void 0:t.catchBBox)||(null===t||void 0===t?void 0:t.reachBBox);if(!o.coordinates)return void u.a.error("coordinates missing");var i=[Math.min(...o.coordinates[0].map(e=>e[0])),Math.min(...o.coordinates[0].map(e=>e[1])),Math.max(...o.coordinates[0].map(e=>e[0])),Math.max(...o.coordinates[0].map(e=>e[1]))];if(4===i.length&&i.every(R.util.isNumeric)){var c=[(i[0]+i[2])/2,(i[1]+i[3])/2];y.current&&i.every((e,t)=>!y.current||e===y.current[t])||(y.current=i,w({transitionDuration:2e3,transitionInterpolator:new L.FlyToInterpolator,transitionEasing:F.b}),setTimeout(()=>w(void 0),2e3),b(i),u.a.debug("Mapbounds Set",{bounds:i,lngLat:c}))}}}},[t]);var j=t&&t.clickCoords&&t.intersect?{type:"Feature",properties:{percentile:0},geometry:{type:"LineString",coordinates:[t.clickCoords,t.intersect]}}:null,C=t&&t.catchGeo?{type:"Feature",properties:{},geometry:t.catchGeo}:null,P=Object(n.useMemo)(()=>r.a.createElement(G.StyleButtons,{controlPadding:{},currStyle:d,mapStyles:G.MapStyles,setCurrStyle:e=>p(e)}),[d]);return r.a.createElement(G.BaseMap,{mapBoxToken:m,reactMapGLProps:{clickRadius:2,maxZoom:16,minZoom:6,onClick:(e,t)=>{w(null),o(e,t)}},bounds:g,showMe:!0,viewport:a,mapStyles:[{style:S}],transition:E,onTransitionStart:()=>{u.a.debug("onTransition START")},onTransitionEnd:()=>{u.a.debug("onTransition END"),w(null)}},P,t&&t.intersect&&r.a.createElement(J,{latLng:t.intersect,Icon:B.a}),t&&t.clickCoords&&r.a.createElement(J,{key:"ch_clickMarker",latLng:t.clickCoords,Icon:t.loading?H.a:W.a,align:["bottom","center"]}),j&&r.a.createElement(L.Source,{type:"geojson",data:j,key:"ch_connect_line"},r.a.createElement(L.Layer,{id:"connect_line",type:"line",paint:{"line-color":"#FF0090","line-opacity":1,"line-width":["interpolate",["linear"],["zoom"],8,.5,16,3]}})),C&&r.a.createElement(L.Source,{type:"geojson",data:C,key:"ch_upstream_line"},r.a.createElement(L.Layer,{id:"upstream_line",type:"line",paint:{"line-color":"#9933ff","line-opacity":1,"line-width":1}}),r.a.createElement(L.Layer,{id:"upstream_fill",type:"fill",paint:{"fill-opacity":["interpolate",["linear"],["zoom"],6,.5,16,.2],"fill-color":"#9933ff"}})))},Y=a(828),U=a(869),K=a(871),X=a(870),Q=a(523),Z=a.n(Q),ee=a(878),te=a(326),ae=a.n(te),ne=a(521),re=a.n(ne),oe=a(522),ie=a.n(oe);var ce,le=["nhdplusid","vpuid","reachcode","permanent_identifier","fromnode","tonode","hydroseq","levelpathi","terminalpa","dnlevelpat","dnhydroseq"],se=Object(E.a)(e=>({root:{display:"flex",width:"100%",overflow:"hidden",borderBottom:"1px solid #DEDEDE"},rootHover:{background:"#eee"},inner:{display:"flex",width:"100%",overflow:"hidden"},noval:{color:"#999999"},pinned:{background:e.palette.secondary.main,borderBottom:"1px solid ".concat(e.palette.secondary.main),color:e.palette.secondary.contrastText},name:{padding:"3px",flex:"1 1 70%",textAlign:"left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},value:{lineHeight:"1.5rem",padding:"3px",flex:"1 1 20%",textAlign:"right"},idVal:{color:e.palette.text.secondary,padding:e.spacing(.5,1),border:"1px solid #dddddd",background:"#eeeeee"},stringVal:{textAlign:"left"},unit:{lineHeight:"1.5rem",padding:"3px",paddingLeft:e.spacing(1)/2,flex:"0 1 5%",textAlign:"left"},pinButton:{opacity:0},buttonHover:{flex:"0 0",opacity:1}})),de=({def:e,val:t,isPinned:a,onPinToggle:o})=>{var i=se(),c=Object(n.useState)(!1),l=Object(s.a)(c,2),d=l[0],u=l[1],m=e.metric_type?e.metric_type:le.indexOf(e.metric_key)>-1?"id":"unknown",p=void 0===t?" ":function(e,t,a,n){if(null===n)return r.a.createElement("em",null,"NULL");if(!e)return R.util.isNumeric(n)?"spheroid_dist"===t?R.util.formatNum(n,6):R.util.formatNum(n,3):n.toString();switch(e){case"string":case"id":return n;case"float":return R.util.isNumeric(n)?a&&a.length>0?ae()(n).format(a):R.util.formatNum(n,3):n;default:return n}}(m,e.metric_key,e.format_string,t);return r.a.createElement("div",{className:Object(x.default)(i.root,{[i.pinned]:a,[i.rootHover]:!a&&d}),onMouseOver:()=>u(!0),onMouseOut:()=>u(!1),onDoubleClick:()=>o(e.metric_key)},r.a.createElement(ee.a,{title:r.a.createElement("div",null,r.a.createElement(j.a,{variant:"body1"},e.metric_name,e.units?" (".concat(e.units,")"):""),e.description&&r.a.createElement(j.a,{variant:"body2"},e.description))},r.a.createElement("div",{className:Object(x.default)(i.inner,{[i.noval]:!a&&(void 0===t||null===t)})},r.a.createElement(j.a,{variant:"body1",className:i.name},e.metric_name),r.a.createElement("div",{className:i.value},r.a.createElement(j.a,{variant:"id"===m||void 0===t?"overline":"body2",className:Object(x.default)({[i.idVal]:void 0!==t&&"id"===m,[i.stringVal]:void 0!==t&&"string"===m})},p)),r.a.createElement(j.a,{variant:"caption",className:i.unit},void 0===t?"":e.units))),r.a.createElement(ee.a,{title:a?"Unpin this metric":"Pin this metric"},r.a.createElement(Y.a,{size:"small",className:Object(x.default)(i.pinButton,{[i.buttonHover]:d}),onClick:()=>o(e.metric_key),color:"inherit"},a?r.a.createElement(re.a,null):r.a.createElement(ie.a,null))))},ue=Object(E.a)(e=>({root:{overflow:"scroll"},accordion:{border:"1px solid rgba(0, 0, 0, .125)",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{margin:"auto"}},accordionExpanded:{},summary:{display:"flex"},summaryExpanded:{},summaryContent:{"&$expanded":{margin:"12px 0"}},details:{display:"flex",flexDirection:"column",padding:e.spacing(1,1,1,2)},fieldTitle:{flexGrow:1},fieldCount:{}})),me=({groups:e,pinned:t,onPinToggle:a,metricPrefs:n,onAccordionToggle:o})=>{var i=ue();return r.a.createElement("div",{className:i.root},t.map(({def:e,val:t},n)=>r.a.createElement(de,{key:"mrow-pinned-".concat(n),def:e,val:t,isPinned:!0,onPinToggle:a})),e.map(({name:e,fields:t},c)=>r.a.createElement(U.a,{key:"accordion-".concat(c),square:!0,classes:{root:i.accordion,expanded:i.accordionExpanded},expanded:Boolean(n.accordion&&n.accordion[e]),onChange:()=>o(e)},r.a.createElement(K.a,{expandIcon:r.a.createElement(Z.a,null),classes:{root:i.summary,expanded:i.summaryExpanded,content:i.summaryContent}},r.a.createElement(j.a,{className:i.fieldTitle},e),r.a.createElement(j.a,{className:i.fieldCount,variant:"caption"},t.reduce((e,t)=>t.val?e+1:e,0),"/",t.length)),r.a.createElement(X.a,{className:i.details},t.filter(e=>!n.pinned||-1===n.pinned.indexOf(e.metric_key)).map(({def:e,val:t},n)=>r.a.createElement(de,{key:"mrow-".concat(c,"-").concat(n),def:e,val:t,onPinToggle:a}))))))},pe=a(872),he=a(874),fe=a(875),ge=a(418),be=a(880),ve=a(876),ye=a(320),Oe=a(500),_e=a(416),Ee=a(342),we=a.n(Ee),Se=Object(E.a)(e=>({root:{display:"flex",width:"100%",overflow:"hidden"},tabs:{},dlgContent:{height:"100%",display:"flex",flexDirection:"column"},codeContainer:{padding:e.spacing(1,.5),minWidth:"60hw",overflow:"hidden"},code:{color:"#cccccc",background:"#444444"},inputText:{padding:e.spacing(1,.5),fontFamily:"Courier New,Courier,Lucida Sans Typewriter,Lucida Typewriter,monospace",color:"#cccccc"}}));!function(e){e[e.JSON=0]="JSON",e[e.CSV=1]="CSV"}(ce||(ce={}));var je=({data:e,open:t,handleClose:a})=>{var o=Se(),i=Object(n.useRef)(),c=Object(n.useState)(ce.JSON),d=Object(s.a)(c,2),u=d[0],m=d[1],p=Object(n.useState)(!1),h=Object(s.a)(p,2),f=h[0],g=h[1],b=Object(n.useMemo)(()=>{var t="",a=e.reduce((e,t)=>Object(l.a)(Object(l.a)({},e),{},{[t.name]:t.fields.reduce((e,{def:t,val:a})=>Object(l.a)(Object(l.a)({},e),{},{[t.metric_name]:a}),{})}),{});switch(u){case ce.JSON:t=JSON.stringify(a,null,4);break;default:t=Object.keys(a).reduce((e,t)=>[...e,...Object.keys(a[t]).map(e=>"".concat(t,",").concat(e,",").concat(a[t][e]?a[t][e]:""))],["Group,Name,Value"]).join("\r\n")}return t},[e,u]),v=Object(n.useCallback)(()=>{t&&i.current&&i.current.select()},[t]);return Object(n.useEffect)(()=>{t&&(we()(b),g(!0))},[t,b]),r.a.createElement(r.a.Fragment,null,r.a.createElement(pe.a,{open:t,onClose:a,"aria-labelledby":"form-dialog-title",maxWidth:"md",fullWidth:!0},r.a.createElement(fe.a,{className:o.dlgContent},r.a.createElement(be.a,{className:o.tabs,value:u,onChange:(e,t)=>m(t),"aria-label":"Data selector tabs"},r.a.createElement(ve.a,{label:"JSON",value:ce.JSON}),r.a.createElement(ve.a,{label:"CSV",value:ce.CSV})),r.a.createElement(ye.a,{className:o.codeContainer},r.a.createElement(ge.a,{multiline:!0,fullWidth:!0,inputRef:i,inputProps:{className:o.inputText,readOnly:!0,wrap:"soft"},className:o.code,rows:10,onFocus:v,onSelect:v,onChange:v,onClick:()=>{we()(b),g(!0)},"aria-label":"maximum height",placeholder:"Maximum 4 rows",value:b}))),r.a.createElement(he.a,null,r.a.createElement(C.a,{onClick:a,color:"primary"},"Cancel"))),r.a.createElement(_e.a,{anchorOrigin:{vertical:"top",horizontal:"center"},color:"secondary",open:f,autoHideDuration:3e3,onClose:()=>g(!1)},r.a.createElement(Oe.a,{elevation:6,variant:"filled",severity:"info"},u===ce.JSON&&"JSON ",u===ce.CSV&&"CSV ","Copied to clipboard")))},Ce=a(524),Pe=a.n(Ce),Re=Object(E.a)(e=>({root:{height:"100%",overflow:"hidden","& *":{userSelect:"text"},display:"flex",flexDirection:"column"},title:{flexGrow:1}})),xe=({metrics:e,loading:t,nhdProps:a,fieldDefs:o,metricPrefs:i,setOfflineState:c})=>{var d=Re(),m=Object(n.useState)(!1),p=Object(s.a)(m,2),h=p[0],f=p[1],g=Object(n.useCallback)(e=>{var t=Object(l.a)({},i.accordion);c({metricPrefs:Object(l.a)(Object(l.a)({},i),{},{accordion:Object(l.a)(Object(l.a)({},t),{},{[e]:!Boolean(t[e])})})})},[i,c]);if(t)return r.a.createElement(j.a,null,"Loading...");u.a.debug("MarkerFields::",{metrics:e,loading:t,nhdProps:a,fieldDefs:o,metricPrefs:i});var b=Object(l.a)(Object(l.a)({},e.catch_metrics),e.wing_metrics),v=Array.from(new Set(o.map(e=>e.group_name))),y=Array.from(new Set(o.map(e=>e.metric_key))),O=v.map(e=>({name:e,fields:o.map(e=>({def:e,val:null===b?null:b[e.metric_key]}))}));Object.keys(O).forEach(e=>{O[e].fields.sort((e,t)=>e.def.metric_name.toLowerCase().localeCompare(t.def.metric_name.toLowerCase()))});O.push({name:"Other",fields:b?Object.keys(b).filter(e=>-1===y.indexOf(e)).map(e=>Te(e,a[e])):[]}),O.push({name:"NHD Fields",fields:Object.keys(a).map(e=>Te(e,a[e]))});var _=i.pinned?i.pinned.map(e=>({def:o.find(t=>t.metric_key===e)||Te(e,b[e]).def,val:b[e]||a[e]})):[],E=O.map(({name:e,fields:t})=>({name:e,fields:t.filter(e=>-1===i.pinned.indexOf(e.def.metric_key))}));return r.a.createElement("div",{className:d.root},r.a.createElement(S.a,{position:"static"},r.a.createElement(w.a,null,r.a.createElement(j.a,{variant:"subtitle1",className:d.title},"NHDPlusID: ",a.nhdplusid),r.a.createElement(Y.a,{className:d.dwnldBtn,color:"inherit",onClick:()=>f(!0)},r.a.createElement(Pe.a,null)))),r.a.createElement(me,{groups:E,pinned:_,metricPrefs:i,onPinToggle:e=>{var t=i.pinned&&i.pinned.indexOf(e)>-1,a=i.pinned||[];c({metricPrefs:Object(l.a)(Object(l.a)({},i),{},{pinned:t?a.filter(t=>t!==e):[...a,e]})})},onAccordionToggle:g}),r.a.createElement(je,{data:O,open:h,handleClose:()=>f(!1)}))},ke={spheroid_dist:{group_name:"NHD Fields",metric_key:"spheroid_dist",metric_type:"float",metric_name:"Distance to Reach",description:"Distance from the point you clicked to the nearest point on the reach.",units:"m",format_string:"0,0.0"},fcode:{group_name:"NHD Fields",metric_key:"fcode",metric_type:"id",metric_name:"FCode",description:null,units:null,format_string:null}};function Te(e,t){return ke[e]?{def:ke[e],val:t}:{def:{group_name:"NHD Fields",metric_key:e,metric_name:e,description:null,units:null,format_string:null},val:t}}var Ne=a(158),De=Object(E.a)(e=>({appFrame:{height:"100%"},parentContainer:{display:"flex",flexDirection:"row",height:"100%",overflow:"hidden"},mapContainer:{overflow:"hidden",flex:"1 1 75%"},drawerContainer:{flex:"0 0 25%",wordWrap:"break-word",maxWidth:"25%"}})),Ie=({error:e,offlineState:t,setOfflineState:a,ephemeralState:n,handleMapClick:o,searchSubmit:i,signOut:c})=>{var l,s,d=De();return r.a.createElement(v.AppFrame,{className:d.appFrame,topbar:r.a.createElement(A,{title:"Network Attributes",searchSubmit:i,signOut:c}),fullWidth:!0,noScroll:!0},r.a.createElement("div",{className:d.parentContainer},e&&r.a.createElement(Ne.a,null,r.a.createElement(j.a,{color:"error",variant:"body2"},e)),!e&&n&&n.selectedReach&&r.a.createElement("div",{id:"drawer-container",className:d.drawerContainer},r.a.createElement(xe,{loading:n.selectedReach.loading,metrics:null===(l=n.selectedReach)||void 0===l?void 0:l.metrics,nhdProps:null===(s=n.selectedReach)||void 0===s?void 0:s.nhdProps,fieldDefs:n.fieldDefs.defs||[],metricPrefs:t.metricPrefs,setOfflineState:a})),!e&&r.a.createElement("div",{className:d.mapContainer},r.a.createElement($,{initialViewport:t.viewport,vectorTiles:n.vectorTileDefs.tiles,selectedReach:n.selectedReach,handleMapClick:o}))))},Ae={fieldDefs:{loading:!0},vectorTileDefs:{loading:!0}},Le=()=>{var e=Object(n.useState)(!0),t=Object(s.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)(),d=Object(s.a)(i,2),m=d[0],h=d[1],f=y(),b=Object(s.a)(f,2),v=b[0],E=b[1],w=Object(n.useState)(Ae),S=Object(s.a)(w,2),j=S[0],C=S[1],P=Object(O.useHosted)(g,!0,!1),R=P.isAuthenticated,x=P.getCurrentToken,k=P.signIn,T=P.signOut,N=Object(n.useRef)();N.current={offline:v,ephemeral:j},Object(n.useEffect)(()=>{var e=!j||j.fieldDefs.loading||j.vectorTileDefs.loading;e!==a&&o(e)},[j,a]);var D=Object(n.useCallback)(e=>{var t;C(Object(l.a)(Object(l.a)({},null===(t=N.current)||void 0===t?void 0:t.ephemeral),e))},[C]);Object(n.useEffect)(()=>{var e;if(null===(e=N.current)||void 0===e?void 0:e.ephemeral.vectorTileDefs.loading){var t="".concat("https://d2hsyhl6qlaiyu.cloudfront.net","/").concat("NET_ATT/BLM/NHDFlowline","/metadata.json");u.a.info("URL",t),fetch(t).then(e=>e.json()).then(e=>(e.bounds=JSON.parse("[".concat(e.bounds,"]")),e.center=JSON.parse("[".concat(e.center,"]")),Object(l.a)(Object(l.a)({},e),{},{sourceName:"NHDFlowline",url:"".concat("https://d2hsyhl6qlaiyu.cloudfront.net","/").concat("NET_ATT/BLM/NHDFlowline","/{z}/{x}/{y}.pbf"),json:JSON.parse(e.json),zoom:14,minZoom:parseInt(e.minzoom,10),maxZoom:parseInt(e.maxzoom,10),longitude:e.center[0],latitude:e.center[1]}))).then(e=>{u.a.debug("RESP",e),D({vectorTileDefs:{tiles:{NHDFlowline:e},loading:!1}})}).catch(e=>{u.a.error("DATA::fetch_tile::err:",e),h("Error fetching vector tile definitions"),D({vectorTileDefs:{tiles:void 0,loading:!1}})})}},[D]),Object(n.useEffect)(()=>{R&&x().then(e=>_.api.apiCall(p,e,_.graphql.queries.fieldDefs,{}).then(e=>{e.data.fieldDefs&&D({fieldDefs:{defs:JSON.parse(e.data.fieldDefs),loading:!1}})}).catch(e=>{u.a.error("DATA::fetch_tile::err:",e),h("Error fetching field definitions"),D({fieldDefs:{defs:void 0,loading:!1}})}))},[x,D,R]);var I=Object(n.useCallback)(e=>{try{var t;u.a.debug("handleGotRecord:: Record",e);var a=JSON.parse(e.nhdProps),n=a.cp_line_pt,r=a.pt,o=Object(c.a)(a,["cp_line_pt","pt"]),i=e.metrics?JSON.parse(e.metrics):{};u.a.debug("handleGotRecord:: Record data parsed",{cpLinePt:n,pt:r,nhdProps:o});var s=n?JSON.parse(n):void 0;D({selectedReach:Object(l.a)(Object(l.a)({},null===(t=N.current)||void 0===t?void 0:t.ephemeral.selectedReach),{},{loading:!1,intersect:s?s.coordinates:void 0,catchGeo:e.catchGeom.bbox?JSON.parse(e.catchGeom.geom):void 0,catchBBox:e.catchGeom.bbox?JSON.parse(e.catchGeom.bbox):void 0,reachBBox:e.reachGeom.bbox?JSON.parse(e.reachGeom.bbox):void 0,metrics:i,nhdProps:o})})}catch(m){var d;u.a.error("DATA::handleGotRecord::err:",{err:m,record:e}),h("Error parsing record from database"),D({selectedReach:Object(l.a)(Object(l.a)({},null===(d=N.current)||void 0===d?void 0:d.ephemeral.selectedReach),{},{loading:!1})})}},[D]),A=Object(n.useCallback)(({lngLat:e})=>{var t;return R?(D({selectedReach:Object(l.a)(Object(l.a)({},null===(t=N.current)||void 0===t?void 0:t.ephemeral.selectedReach),{},{clickCoords:e,loading:!0,intersect:void 0})}),x().then(t=>_.api.apiCall(p,t,_.graphql.queries.geoRecord,{lngLat:e}).then(e=>I(e.data.geoRecord)))):Promise.resolve()},[x,D,R,I]),L=Object(n.useCallback)(e=>R?x().then(t=>_.api.apiCall(p,t,_.graphql.queries.record,{id:e}).then(e=>{if(e.data.record)return I(e.data.record);throw new Error("response.data.record not found")}).catch(e=>{var t;u.a.error("DATA::handleSearchSubmit::err:",{err:e}),h("Error retrieving record from database"),D({selectedReach:Object(l.a)(Object(l.a)({},null===(t=N.current)||void 0===t?void 0:t.ephemeral.selectedReach),{},{loading:!1})})})):Promise.resolve(),[x,I,D,R]);return Object(n.useEffect)(()=>{var e;R&&!(null===(e=N.current)||void 0===e?void 0:e.ephemeral.selectedReach)&&v.selectedReachId&&L(v.selectedReachId)},[v,L,R]),R?r.a.createElement(Ie,{error:m,offlineState:v,setOfflineState:E,ephemeralState:j,handleMapClick:A,searchSubmit:L,signOut:T}):r.a.createElement("div",null,r.a.createElement("button",{onClick:()=>k()},"Logged Out"))},Fe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ge(e,t){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=()=>{var a=e.installing;null!=a&&(a.onstatechange=()=>{"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(e=>{console.error("Error during service worker registration:",e)})}var Me=a(525),He=a(63);a(811),a(812);a(813),Object(v.devSetup)(),i.a.render(r.a.createElement(Me.a,{basename:"/"},r.a.createElement(He.a,{path:"*",component:Le})),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/net_att",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",()=>{var t="".concat("/net_att","/service-worker.js");Fe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then(a=>{var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):Ge(e,t)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):Ge(t,e)})}}()}},[[548,1,2]]]);
//# sourceMappingURL=main.529fba1f.chunk.js.map