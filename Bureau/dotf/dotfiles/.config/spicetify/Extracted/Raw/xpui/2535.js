"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[2535],{45177:(e,a,s)=>{s.d(a,{p:()=>u,q:()=>i.q});var t=s(59496),o=s(90641),n=s(76708),i=s(51744),r=s(64589),l=s(49982),c=s(4637);const d=t.memo((function({uri:e,size:a=i.q.md,className:s,onClick:d,showUpsell:u}){const[m,h]=(0,n.Z)(e),p=(0,o.I0)(),x=(0,l.o)(),g=(0,t.useCallback)((()=>{x({targetUri:e,intent:m?"remove-from-library":"add-to-library",type:"click"}),h(!m),p(m?(0,r.SS)():(0,r.kK)())}),[x,e,m,h,p]);return(0,c.jsx)(i.o,{className:s,isFollowing:m,onFollow:g,onClick:d,uri:e,size:a,showUpsell:u})})),u=t.memo((function(e){return(0,c.jsx)(d,{...e})}))},12535:(e,a,s)=>{s.d(a,{X:()=>be});var t=s(59496),o=s(84875),n=s.n(o),i=s(76229),r=s(92053),l=s(21615),c=s(39222),d=s(56364),u=s(65562),m=s(61742),h=s(40035);var p=s(66233),x=s(51502),g=s(60959),k=s(96058),y=s(56891),j=s(82663),b=s(7245),f=s(72419),N=s(45177),v=s(9651),D=s(96247),C=s(45721),P=s(11291),I=s(58004);const U="pvGZ831aNzHTQMZ8CA_u";var S=s(4637);const w=(0,t.memo)((function({onClick:e=(()=>{}),size:a,className:s,uri:o,sharingInfo:i,interactionData:r}){const{onCopyLink:l}=(0,I.y)({sharingInfo:i,uri:o,interactionData:r}),c=(0,t.useCallback)((()=>{l(),e()}),[e,l]);return(0,S.jsx)(P.E,{ariaLabel:m.ag.get("mwp.list.item.share"),size:a,onClick:c,className:n()(U,s),icon:C.M,condensed:!0})}));var T=s(62601),E=s(45343),M=s(94301),L=s(52153),z=s(47788),A=s(11879),B=s(62554);const R="XvNAiCvnj8kWsiN_AcJK",F="FynKcUDwVWYYbDJvu90x",G={intent:"share",type:"click",itemIdSuffix:"contextmenu/episode/share"},Z=t.memo((function({episodeUri:e,showUri:a,sharingInfo:s,canDownload:o,requestId:i,onMarkAsPlayed:r,onMoreButtonClick:l,name:c,fullyPlayed:d,index:u}){const h=(0,A._)(e),{spec:p,logger:x}=(0,B.fU)(f.createDesktopEpisodeBlockEventFactory,{data:{uri:e,reason:i||"",position:u}}),g=(0,t.useMemo)((()=>(0,S.jsx)(N.p,{uri:e,size:N.q.sm,className:n()({[R]:(0,z.y)(h)}),onClick:(a,s)=>{s===L.mc.ADD?x.logInteraction(p.downloadButtonFactory().hitDownload({itemToDownload:e})):L.mc.REMOVE&&x.logInteraction(p.downloadButtonFactory().hitRemoveDownload({itemToRemoveFromDownloads:e}))}})),[e,h,p,x]),k=(0,t.useMemo)((()=>(0,S.jsx)(w,{uri:e,sharingInfo:s,interactionData:G,onClick:()=>{x.logInteraction(p.copyLinkFactory().hitShare({entityToBeShared:e,shareId:s?.shareId||""}))}})),[e,s,p,x]),y=(0,t.useMemo)((()=>(0,S.jsx)(D.w,{uri:e,size:E.q.sm,className:F,onClick:a=>{a?x.logInteraction(p.saveToLibraryButtonFactory().hitLike({itemToBeLiked:e})):x.logInteraction(p.saveToLibraryButtonFactory().hitRemoveLike({itemNoLongerLiked:e}))}})),[e,p,x]),j=(0,t.useMemo)((()=>(0,S.jsx)(M.yj,{menu:(0,S.jsx)(T.k,{uri:e,showUri:a,isPlayed:d,onMarkAsPlayed:r}),children:(0,S.jsx)(v.z,{size:v.q.sm,label:m.ag.get("more.label.context",c),onClick:l})})),[e,d,c,r,l,a]);return(0,S.jsxs)(S.Fragment,{children:[k,o&&g,y,j]})}));var _=s(68751),q=s(69395),W=s(78087),O=s(5807),V=s(287);const H="rFwxt8s8DYY8p1O7tYZW",Y="sA2HogGQNi8R_zpCWei5",J="H92pPTuqDR5DcoTtjcb3",Q=({cardHeaderText:e,buttonText:a,buttonTarget:s,className:o})=>{const i=(0,W.W6)(O.vp),r=(0,t.useCallback)((e=>{e.stopPropagation()}),[]),l=(0,u.EC)(s).toURLPath(!0);return i?(0,S.jsxs)("div",{className:n()(H,o),onClick:r,children:[(0,S.jsxs)("div",{className:Y,children:[(0,S.jsx)(_.W,{className:J,iconSize:16,semanticColor:"textBase"}),(0,S.jsx)(c.D,{as:"span",variant:"balladBold",semanticColor:"textBase",children:e})]}),(0,S.jsx)(q.D,{buttonSize:"sm",colorSet:"invertedLight",component:V.Z,href:l,children:a})]}):null},K="TT1tIewS2iI8Uz8kLuQB",X="Mn93NeoqnZzVnPIP83_9",$="bG5fSAAS6rRL8xxU5iyG",ee="g5gZaZVzR0tGT4pK6iEU",ae="DbMYFmOEEz9PH1h1zK9n",se="HLixBI5DbVZNC6lrUbAB",te="y9kEPjDek0J80YRf8JJw",oe="YhOAZFuFU1oI_YQSof4z",ne="DKIjGP8CcZyjr2O2HNST",ie="A7qeQBIk3sqr7bYadWA8",re="_IJaGA3ZdVU0NiTxbGsI",le="ij5_Bi2LfqgWwHzQBXJS",ce="o_TP9z7A8LQvMXujJC7N",de="LbePDApGej12_NyRphHu",ue="hFCGY5gjCjN10WzV2VQ4",me="gk0rZwqBxJjSeiWV5lgV",he="te8hrsPnSvx9SUkzV0ME",pe="V0pEigrddg3VxP_sTdAJ",xe="acjrpluRnLumVxPt2QG9",ge="upo8sAflD1byxWObSkgn",ke="DyuLxip2Kl8P7H8fW62u",ye="vak8N953oXaq9F7jZDsD",je="WBxE9PQe96PpkE9RuTo5",be=t.memo(t.forwardRef((function({uri:e,name:a,showName:s,showUri:o,size:f,description:N,durationMs:v,images:D,badges:C,fullyPlayed:P,releaseDate:I,resumePositionMs:U,isCurrentlyPlaying:w,isPlaying:T,onContextMenu:E,onTouchStart:M,onTouchEnd:L,handlePlaybackClick:z,handleDragStart:A,handleClick:B,position:R,index:F,isPlayable:G,isPaywalled:_,isUserSubscribed:q,episodeSharingInfo:W,playButtonWrapper:O=null,highlightText:V=(e=>e),onMarkAsPlayed:H,contentInformation:Y,requestId:J,onMoreButtonClick:be,status:fe,variant:Ne="default"},ve){const De=(0,r.s0)(),Ce=w&&T,Pe=(0,u.EC)(e).toURLPath(!0),Ie=(0,u.EC)(o)?.toURLPath(!0),Ue=function({episodeUri:e}){const[a,s]=(0,t.useState)([]),o=(0,h.G)();return(0,t.useEffect)((()=>{let a=!0;return async function(){const t=await o.getArtists(e);a&&s(t)}(),()=>{a=!1}}),[e,o]),a}({episodeUri:e}),Se=(0,k.G3)(e,I,U,P),we=(0,t.useCallback)((e=>{e.stopPropagation(),e.preventDefault(),De(Pe),B&&B(e)}),[De,Pe,B]),Te=(0,t.useCallback)((e=>{e.stopPropagation(),e.preventDefault(),Ie&&De(Ie)}),[Ie,De]),Ee=_&&!q,Me=(0,t.useCallback)((e=>{e.stopPropagation(),Ee||z(e)}),[z,Ee]),Le=Ee||G,ze=m.ag.get("tracklist.a11y.play",a,s),Ae=m.ag.get("tracklist.a11y.pause",a,s),Be=(0,S.jsx)(p.f,{size:"sm",version:"next-best-episode"===Ne?p.u.primary:p.u.secondary,onClick:Me,isPlaying:Ce,disabled:!Le,locked:Ee,ariaPlayLabel:ze,ariaPauseLabel:Ae}),Re=O?O(Be):Be;return(0,S.jsxs)("div",{ref:ve,className:n()(K,{[X]:w,[me]:f===y.Uo.MEDIUM,[he]:f===y.Uo.LARGE,[re]:f===y.Uo.XSMALL,[je]:"next-best-episode"===Ne}),"data-testid":`episode-${F}`,draggable:!!A,onDragStart:A,onClick:we,onContextMenu:E,onTouchStart:M,onTouchEnd:L,children:[fe&&(0,S.jsx)(c.D,{className:xe,paddingBottom:l.hM$,children:fe}),Y&&(0,S.jsx)(Q,{className:ye,cardHeaderText:Y.cardHeaderText,buttonText:Y.buttonText,buttonTarget:Y.buttonTarget}),"default"===Ne&&(0,S.jsx)("div",{className:le,children:(0,S.jsx)(x.O,{className:ce,type:j.p.EPISODE,size:(e=>{switch(e){case y.Uo.LARGE:return g.m$.SIZE_112;case y.Uo.MEDIUM:return g.m$.SIZE_64;default:return g.m$.SIZE_48}})(f),title:a,shape:x.K.ROUNDED_CORNERS,images:D})}),(0,S.jsxs)("div",{className:pe,children:[(0,S.jsxs)("div",{className:se,children:[(0,S.jsx)(i.rU,{className:ee,to:Pe,onClick:we,children:(0,S.jsxs)(c.D,{as:"div",variant:"balladBold",className:$,"data-testid":"episodeTitle",children:[Se&&(0,S.jsx)(k.Rd,{}),V(a)]})}),Ue.length>0&&(0,S.jsxs)("div",{className:oe,children:[(0,S.jsx)(d.U,{iconSize:16,className:ie}),(0,S.jsx)(c.D,{as:"p",variant:"mesto",className:ne,children:V(Ue.join(m.ag.getSeparator()))})]})]}),s&&Ie&&(0,S.jsx)(i.rU,{className:ee,to:Ie,onClick:Te,children:(0,S.jsx)(c.D,{as:"div",variant:"mestoBold",className:$,children:V(s)})})]}),(0,S.jsx)("div",{className:ge,children:(0,S.jsx)(c.D,{as:"p",variant:"mesto",className:de,children:V(N??"")})}),(0,S.jsxs)("div",{className:te,children:[(0,S.jsx)("div",{className:ue,children:C}),(0,S.jsx)(b.E,{isPlaying:Ce,fullyPlayed:P,durationMs:v,releaseDate:I,resumePositionMs:U,position:w?R:void 0})]}),(0,S.jsx)("div",{onClick:e=>{e.stopPropagation()},className:ae,children:(0,S.jsx)(Z,{episodeUri:e,showUri:o??"",sharingInfo:W,canDownload:!_||_&&q,requestId:J,index:F,name:a,fullyPlayed:P,onMarkAsPlayed:H,onMoreButtonClick:be})}),(0,S.jsx)("div",{className:ke,children:Re})]})})))},47788:(e,a,s)=>{s.d(a,{y:()=>o});var t=s(52153);function o(e){return[t.Om.YES,t.Om.DOWNLOADING,t.Om.WAITING].includes(e)}}}]);
//# sourceMappingURL=2535.js.map