(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{wQnf:function(t,e,a){"use strict";a.r(e);var n=a("8Y7J");class i{}var l=a("pMnS"),s=a("haRT"),b=a("v67d"),r=a("5VGP"),o=a("Irb3"),d=a("GaVp"),c=a("POq0"),u=a("omvX"),h=a("coIi"),G=a("qQYQ"),p=a("SVse"),g=a("itXk"),m=a("cp0P"),v=a("Cfvw"),f=a("M0ag"),S=a("eIep"),w=a("D0XW");const I=(()=>{function t(){return Error.call(this),this.message="Timeout has occurred",this.name="TimeoutError",this}return t.prototype=Object.create(Error.prototype),t})();var O=a("mlxB"),M=a("l7GE"),z=a("ZUHj");class N{constructor(t,e,a,n){this.waitFor=t,this.absoluteTimeout=e,this.withObservable=a,this.scheduler=n}call(t,e){return e.subscribe(new C(t,this.absoluteTimeout,this.waitFor,this.withObservable,this.scheduler))}}class C extends M.a{constructor(t,e,a,n,i){super(t),this.absoluteTimeout=e,this.waitFor=a,this.withObservable=n,this.scheduler=i,this.action=null,this.scheduleTimeout()}static dispatchTimeout(t){const{withObservable:e}=t;t._unsubscribeAndRecycle(),t.add(Object(z.a)(t,e))}scheduleTimeout(){const{action:t}=this;t?this.action=t.schedule(this,this.waitFor):this.add(this.action=this.scheduler.schedule(C.dispatchTimeout,this.waitFor,this))}_next(t){this.absoluteTimeout||this.scheduleTimeout(),super._next(t)}_unsubscribe(){this.action=null,this.scheduler=null,this.withObservable=null}}var y=a("z6cu");class x{constructor(t,e,a,n,i,l,s,b,r,o,d,c,u,h,G,p){this.modalService=t,this.datePipe=e,this.payService=a,this.couponService=n,this.bannerService=i,this.noticeService=l,this.deliveryService=s,this.goodsService=b,this.orderService=r,this.orderDetailService=o,this.cateRelationService=d,this.owsService=c,this.authService=u,this.cateService=h,this.subCateService=G,this.dataInitService=p,this.loading=!1,this.dataList=[{sort:1,tableName:"banner",isInit:!1},{sort:2,tableName:"notice",isInit:!1},{sort:3,tableName:"coupon",isInit:!1},{sort:4,tableName:"express",isInit:!1},{sort:5,tableName:"ows",isInit:!1},{sort:5,tableName:"pays",isInit:!1},{sort:6,tableName:"cate",isInit:!1},{sort:7,tableName:"subcate",isInit:!1},{sort:8,tableName:"caterelation",isInit:!1},{sort:9,tableName:"product",isInit:!1},{sort:10,tableName:"order",isInit:!1}]}ngOnInit(){}onInit(t){f.f.isTest?this.modalService.error(f.f.testInfo):("banner"===t.tableName&&this.addBanner(),"coupon"===t.tableName&&this.addCoupon(),"notice"===t.tableName&&this.addNotice(),"pays"===t.tableName&&this.addPay(),"express"===t.tableName&&this.addExpress(),"ows"===t.tableName&&this.addOws(),"cate"===t.tableName&&this.addCate(),"subcate"===t.tableName&&this.addSubCate(),"caterelation"===t.tableName&&this.addCateRelation(),"product"===t.tableName&&this.addProduct(),"order"===t.tableName&&this.addOrderList(),t.isInit=!0)}addBanner(){this.addModel(this.dataInitService.getBannerList(),this.bannerService)}addNotice(){this.addModel(this.dataInitService.getNoticeList(),this.noticeService)}addCoupon(){this.addModel(this.dataInitService.getDiscountList(),this.couponService)}addPay(){this.addModel(this.dataInitService.getPayList(),this.payService)}addExpress(){this.addModel(this.dataInitService.getExpressList(),this.deliveryService)}addCate(){this.addModel(this.dataInitService.getCateList(),this.cateService)}addSubCate(){this.addModel(this.dataInitService.getSubCateList(),this.subCateService)}addCateRelation(){this.loading=!0,Object(g.a)([this.cateService.getList(),this.subCateService.getList()]).subscribe(t=>{this.cateList=t[0],this.subList=t[1];const e=[];this.cateList.map(t=>{for(let a=0;a<6;a++){const a=Math.ceil(Math.random()*(this.subList.length-1)),n=new f.e({cateId:t.id,subCateId:this.subList[a].id});e.push(this.cateRelationService.addModel(n))}}),Object(m.a)(e).subscribe(t=>{this.loading=!1,this.modalService.success("success")})},t=>{this.loading=!1,this.modalService.error(t)})}addOws(){this.addModel(this.dataInitService.getOwsList(),this.owsService)}addProduct(){this.loading=!0,Object(g.a)([this.dataInitService.getProductList(),this.subCateService.getList()]).subscribe(t=>{this.productList=t[0],this.subList=t[1];const e=[];this.productList.map(t=>{delete t.id;const a=this.subList.find(e=>t.cateName===e.name);t.subCateId=a.id,t.cateName=a.name,e.push(this.goodsService.addModel(t))}),Object(m.a)(e).subscribe(t=>{this.loading=!1,this.modalService.success("success")})})}addOrderList(){this.loading=!0;const t=Array.from({length:30},(t,e)=>e).map(t=>this.addOrder());Object(m.a)(t).subscribe(t=>{this.loading=!1,this.modalService.success("success")},t=>{this.loading=!1,this.modalService.error(t)})}addOrder(){return this.goodsService.getList().pipe(Object(S.a)(t=>{const e=this.generateOrderDetailList("$orderId$",t),a=this.generateOrder(e);return Object(v.a)(this.orderService.addModel(a)).pipe(Object(S.a)(t=>(e.forEach(e=>e.orderId=t.id),e.map(t=>this.orderDetailService.addModel(t)))))}),function(t,e=w.a){return function(t,e,a=w.a){return t=>{let n=Object(O.a)(3e4),i=n?3e4-a.now():Math.abs(3e4);return t.lift(new N(i,n,e,a))}}(0,Object(y.a)(new I),e)}())}generateOrder(t){const e=["start","process","delivery","finish","cancel"],a=new f.n;return a.orderNo=(new Date).getTime().toString(),a.date=this.datePipe.transform(new Date,"yyyy-MM-dd HH:mm:ss"),a.num=t.map(t=>t.num).reduce((t,e)=>t+e,0),a.amount=t.map(t=>t.num*t.detailPrice).reduce((t,e)=>t+e,0),a.userId=this.authService.user.uid,a.status=e[Math.floor(Math.random()*e.length)],a.userName=this.authService.user.displayName,a.address="Chicago 1900 Green Street",a.delivery="UPS",a.deliveryDate=this.datePipe.transform(new Date,"yyyy-MM-dd HH:mm:ss"),a.pay="Cash on Delivery",a.payDate=this.datePipe.transform(new Date,"yyyy-MM-dd HH:mm:ss"),a.payDiscount=0,a.discount=0,a.freight=0,a.total=a.amount+a.discount+a.freight,a}generateOrderDetailList(t,e){const a=[],n=Math.floor(6*Math.random())+1;for(let i=0;i<n;i++){const n=e[Math.floor(Math.random()*e.length)],i=Math.floor(5*Math.random())+1;a.push(new f.m({orderId:t,goodId:n.id,num:i,detailPrice:n.price,amount:(n.price*i).toFixed(2)}))}return a}addModel(t,e){this.loading=!0,t.subscribe(t=>{const a=t.map(t=>(t.hasOwnProperty("id")&&delete t.id,e.addModel(t)));Object(m.a)(a).subscribe(t=>{this.loading=!1,this.modalService.success("success")})},t=>{this.loading=!1,this.modalService.error(t)})}}var P=a("JK/P"),F=a("Bf68"),k=a("iSGI"),L=a("8yBg"),T=a("VHq/"),j=a("HGYC"),D=a("ycnN"),_=a("h//Q"),A=a("mGFB"),H=a("VXtA"),R=a("BNi/"),B=a("XgCj"),E=a("tdC2"),Q=a("Aphh"),q=a("Gshw"),J=n.ub({encapsulation:0,styles:[[".box[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;overflow:hidden}.box-wrap[_ngcontent-%COMP%]{flex:1;padding:50px}.box-wrap[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{border-collapse:collapse;width:100%}.box-wrap[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .box-wrap[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #ddd;padding:3px;width:20%}.box-wrap[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){background-color:#f2f2f2}.box-wrap[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#ddd}.box-wrap[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding-top:12px;padding-bottom:12px;text-align:left;background-color:#4caf50;color:#fff}"]],data:{}});function W(t){return n.Sb(0,[(t()(),n.wb(0,0,null,null,26,"table",[],null,null,null,null,null)),(t()(),n.wb(1,0,null,null,25,"tr",[],[[2,"ant-table-row",null]],null,null,null,null)),n.vb(2,16384,null,0,s.g,[n.k,n.F,[8,null]],null,null),(t()(),n.wb(3,0,null,null,3,"td",[],[[4,"left",null],[4,"right",null],[4,"text-align",null],[4,"word-break",null]],null,null,b.f,b.b)),n.Nb(512,null,r.F,r.F,[n.G]),n.vb(5,573440,null,0,s.d,[n.k,r.F],null,null),(t()(),n.Qb(-1,0,["Index:"])),(t()(),n.wb(7,0,null,null,3,"td",[],[[4,"left",null],[4,"right",null],[4,"text-align",null],[4,"word-break",null]],null,null,b.f,b.b)),n.Nb(512,null,r.F,r.F,[n.G]),n.vb(9,573440,null,0,s.d,[n.k,r.F],null,null),(t()(),n.Qb(10,0,["",""])),(t()(),n.wb(11,0,null,null,3,"td",[],[[4,"left",null],[4,"right",null],[4,"text-align",null],[4,"word-break",null]],null,null,b.f,b.b)),n.Nb(512,null,r.F,r.F,[n.G]),n.vb(13,573440,null,0,s.d,[n.k,r.F],null,null),(t()(),n.Qb(-1,0,["TableName:"])),(t()(),n.wb(15,0,null,null,3,"td",[],[[4,"left",null],[4,"right",null],[4,"text-align",null],[4,"word-break",null]],null,null,b.f,b.b)),n.Nb(512,null,r.F,r.F,[n.G]),n.vb(17,573440,null,0,s.d,[n.k,r.F],null,null),(t()(),n.Qb(18,0,["",""])),(t()(),n.wb(19,0,null,null,7,"td",[["style","text-align: right"]],[[4,"left",null],[4,"right",null],[4,"text-align",null],[4,"word-break",null]],null,null,b.f,b.b)),n.Nb(512,null,r.F,r.F,[n.G]),n.vb(21,573440,null,0,s.d,[n.k,r.F],null,null),(t()(),n.wb(22,0,null,0,4,"button",[["nz-button",""],["nzType","primary"]],[[8,"disabled",0],[1,"nz-wave",0]],[[null,"click"]],function(t,e,a){var n=!0;return"click"===e&&(n=!1!==t.component.onInit(t.context.$implicit)&&n),n},o.b,o.a)),n.Nb(512,null,r.F,r.F,[n.G]),n.vb(24,1818624,null,1,d.a,[n.k,n.h,n.F,c.b,r.F,n.A,r.m,[2,r.i],[2,u.a]],{nzType:[0,"nzType"]},null),n.Ob(603979776,1,{listOfIconElement:1}),(t()(),n.Qb(-1,0,["Init Data"]))],function(t,e){t(e,24,0,"primary")},function(t,e){t(e,1,0,n.Ib(e,2).nzTableComponent),t(e,3,0,n.Ib(e,5).nzLeft,n.Ib(e,5).nzRight,n.Ib(e,5).nzAlign,n.Ib(e,5).nzBreakWord?"break-all":""),t(e,7,0,n.Ib(e,9).nzLeft,n.Ib(e,9).nzRight,n.Ib(e,9).nzAlign,n.Ib(e,9).nzBreakWord?"break-all":""),t(e,10,0,e.context.$implicit.sort),t(e,11,0,n.Ib(e,13).nzLeft,n.Ib(e,13).nzRight,n.Ib(e,13).nzAlign,n.Ib(e,13).nzBreakWord?"break-all":""),t(e,15,0,n.Ib(e,17).nzLeft,n.Ib(e,17).nzRight,n.Ib(e,17).nzAlign,n.Ib(e,17).nzBreakWord?"break-all":""),t(e,18,0,e.context.$implicit.tableName),t(e,19,0,n.Ib(e,21).nzLeft,n.Ib(e,21).nzRight,n.Ib(e,21).nzAlign,n.Ib(e,21).nzBreakWord?"break-all":""),t(e,22,0,e.context.$implicit.isInit,n.Ib(e,24).nzWave)})}function X(t){return n.Sb(0,[(t()(),n.wb(0,0,null,null,1,"app-loading",[],null,null,null,h.b,h.a)),n.vb(1,114688,null,0,G.a,[],null,null)],function(t,e){t(e,1,0)},null)}function Y(t){return n.Sb(0,[(t()(),n.wb(0,0,null,null,3,"div",[["class","box"]],null,null,null,null,null)),(t()(),n.wb(1,0,null,null,2,"div",[["class","box-wrap"]],null,null,null,null,null)),(t()(),n.lb(16777216,null,null,1,null,W)),n.vb(3,278528,null,0,p.l,[n.R,n.N,n.t],{ngForOf:[0,"ngForOf"]},null),(t()(),n.lb(16777216,null,null,1,null,X)),n.vb(5,16384,null,0,p.m,[n.R,n.N],{ngIf:[0,"ngIf"]},null)],function(t,e){var a=e.component;t(e,3,0,a.dataList),t(e,5,0,a.loading)},null)}function K(t){return n.Sb(0,[(t()(),n.wb(0,0,null,null,1,"app-data-initialize",[],null,null,null,Y,J)),n.vb(1,114688,null,0,x,[P.a,p.e,F.a,k.a,L.a,T.a,j.a,D.a,_.a,A.a,H.a,R.a,B.a,E.a,Q.a,q.a],null,null)],function(t,e){t(e,1,0)},null)}var V=n.sb("app-data-initialize",x,K,{},{},[]),Z=a("EdU/"),$=a("/Yna"),U=a("JRKe"),tt=a("Ed4d"),et=a("8WaK"),at=a("QfCi"),nt=a("CghO"),it=a("Sq/J"),lt=a("s7LF"),st=a("QQfA"),bt=a("IP0z"),rt=a("iInd");class ot{}var dt=a("/HVE"),ct=a("v1Dh"),ut=a("66zS"),ht=a("5Izy"),Gt=a("yTpB"),pt=a("zMNK"),gt=a("hOhj"),mt=a("r19J"),vt=a("anqq"),ft=a("IYs4"),St=a("EcpC"),wt=a("/L1H"),It=a("phDe"),Ot=a("rJp6"),Mt=a("Rgb0"),zt=a("kS4m"),Nt=a("mW00"),Ct=a("jTf7"),yt=a("WPSl"),xt=a("YdS3"),Pt=a("wQFA"),Ft=a("px0D"),kt=a("3ZFI"),Lt=a("CYS+"),Tt=a("oBm0"),jt=a("A7zk"),Dt=a("YRt3"),_t=a("lAiz"),At=a("ce6n"),Ht=a("SBNi"),Rt=a("iC8E"),Bt=a("7QIX"),Et=a("tYkK"),Qt=a("wf2+"),qt=a("eCGT"),Jt=a("nHXS"),Wt=a("fb/r"),Xt=a("zTFG"),Yt=a("JK0T"),Kt=a("JXeA"),Vt=a("NFMk"),Zt=a("0CZq"),$t=a("qU0y"),Ut=a("vZsH"),te=a("W4B1"),ee=a("SHEi"),ae=a("FPpa"),ne=a("RVNi"),ie=a("NDed"),le=a("5A4h"),se=a("N2O2"),be=a("ozKM"),re=a("OvZZ"),oe=a("z+yo"),de=a("DQmg"),ce=a("1+nf"),ue=a("XFzh"),he=a("p+Sl"),Ge=a("HhpN"),pe=a("SN7N"),ge=a("fwnu"),me=a("VbP7"),ve=a("gaRz"),fe=a("e15G"),Se=a("PCNd"),we=a("joqZ");a.d(e,"DataInitializeModuleNgFactory",function(){return Ie});var Ie=n.tb(i,[],function(t){return n.Fb([n.Gb(512,n.j,n.db,[[8,[l.a,V,Z.a,Z.b,$.a,U.a,tt.a,et.a,at.a,nt.a,it.a]],[3,n.j],n.y]),n.Gb(4608,p.o,p.n,[n.v,[2,p.J]]),n.Gb(4608,lt.t,lt.t,[]),n.Gb(4608,lt.e,lt.e,[]),n.Gb(5120,r.x,r.K,[p.d,[3,r.x]]),n.Gb(4608,st.d,st.d,[st.k,st.f,n.j,st.i,st.g,n.s,n.A,p.d,bt.b,[2,p.i]]),n.Gb(5120,st.l,st.m,[st.d]),n.Gb(4608,c.c,c.c,[]),n.Gb(1073742336,p.c,p.c,[]),n.Gb(1073742336,rt.q,rt.q,[[2,rt.v],[2,rt.n]]),n.Gb(1073742336,ot,ot,[]),n.Gb(1073742336,lt.s,lt.s,[]),n.Gb(1073742336,lt.j,lt.j,[]),n.Gb(1073742336,lt.q,lt.q,[]),n.Gb(1073742336,dt.b,dt.b,[]),n.Gb(1073742336,ct.a,ct.a,[]),n.Gb(1073742336,ut.c,ut.c,[]),n.Gb(1073742336,r.j,r.j,[]),n.Gb(1073742336,ht.a,ht.a,[]),n.Gb(1073742336,Gt.a,Gt.a,[]),n.Gb(1073742336,bt.a,bt.a,[]),n.Gb(1073742336,pt.e,pt.e,[]),n.Gb(1073742336,gt.g,gt.g,[]),n.Gb(1073742336,st.h,st.h,[]),n.Gb(1073742336,r.u,r.u,[]),n.Gb(1073742336,mt.a,mt.a,[]),n.Gb(1073742336,vt.b,vt.b,[]),n.Gb(1073742336,ft.a,ft.a,[]),n.Gb(1073742336,c.d,c.d,[]),n.Gb(1073742336,St.b,St.b,[]),n.Gb(1073742336,r.H,r.H,[]),n.Gb(1073742336,d.c,d.c,[]),n.Gb(1073742336,r.v,r.v,[]),n.Gb(1073742336,wt.e,wt.e,[]),n.Gb(1073742336,It.h,It.h,[]),n.Gb(1073742336,It.a,It.a,[]),n.Gb(1073742336,It.e,It.e,[]),n.Gb(1073742336,Ot.a,Ot.a,[]),n.Gb(1073742336,Mt.c,Mt.c,[]),n.Gb(1073742336,zt.d,zt.d,[]),n.Gb(1073742336,Nt.c,Nt.c,[]),n.Gb(1073742336,Ct.h,Ct.h,[]),n.Gb(1073742336,yt.f,yt.f,[]),n.Gb(1073742336,xt.d,xt.d,[]),n.Gb(1073742336,Pt.a,Pt.a,[]),n.Gb(1073742336,r.r,r.r,[]),n.Gb(1073742336,Ft.d,Ft.d,[]),n.Gb(1073742336,kt.a,kt.a,[]),n.Gb(1073742336,Lt.c,Lt.c,[]),n.Gb(1073742336,Tt.a,Tt.a,[]),n.Gb(1073742336,jt.f,jt.f,[]),n.Gb(1073742336,Dt.b,Dt.b,[]),n.Gb(1073742336,_t.g,_t.g,[]),n.Gb(1073742336,_t.b,_t.b,[]),n.Gb(1073742336,At.c,At.c,[]),n.Gb(1073742336,Ht.a,Ht.a,[]),n.Gb(1073742336,Rt.c,Rt.c,[]),n.Gb(1073742336,Rt.b,Rt.b,[]),n.Gb(1073742336,Bt.a,Bt.a,[]),n.Gb(1073742336,Et.b,Et.b,[]),n.Gb(1073742336,Qt.g,Qt.g,[]),n.Gb(1073742336,qt.b,qt.b,[]),n.Gb(1073742336,Jt.e,Jt.e,[]),n.Gb(1073742336,Wt.b,Wt.b,[]),n.Gb(1073742336,Xt.d,Xt.d,[]),n.Gb(1073742336,Yt.a,Yt.a,[]),n.Gb(1073742336,Kt.h,Kt.h,[]),n.Gb(1073742336,Kt.f,Kt.f,[]),n.Gb(1073742336,r.w,r.w,[]),n.Gb(1073742336,Vt.i,Vt.i,[]),n.Gb(1073742336,Vt.d,Vt.d,[]),n.Gb(1073742336,Vt.f,Vt.f,[]),n.Gb(1073742336,Zt.f,Zt.f,[]),n.Gb(1073742336,Zt.e,Zt.e,[]),n.Gb(1073742336,$t.a,$t.a,[]),n.Gb(1073742336,Ut.b,Ut.b,[]),n.Gb(1073742336,te.b,te.b,[]),n.Gb(1073742336,ee.c,ee.c,[]),n.Gb(1073742336,ae.b,ae.b,[]),n.Gb(1073742336,ne.b,ne.b,[]),n.Gb(1073742336,ie.a,ie.a,[]),n.Gb(1073742336,le.c,le.c,[]),n.Gb(1073742336,se.b,se.b,[]),n.Gb(1073742336,be.a,be.a,[]),n.Gb(1073742336,re.c,re.c,[]),n.Gb(1073742336,oe.a,oe.a,[]),n.Gb(1073742336,de.a,de.a,[]),n.Gb(1073742336,s.b,s.b,[]),n.Gb(1073742336,ce.f,ce.f,[]),n.Gb(1073742336,ue.a,ue.a,[]),n.Gb(1073742336,he.a,he.a,[]),n.Gb(1073742336,r.C,r.C,[]),n.Gb(1073742336,Ge.a,Ge.a,[]),n.Gb(1073742336,pe.a,pe.a,[]),n.Gb(1073742336,ge.a,ge.a,[]),n.Gb(1073742336,r.o,r.o,[]),n.Gb(1073742336,me.a,me.a,[]),n.Gb(1073742336,ve.d,ve.d,[]),n.Gb(1073742336,fe.a,fe.a,[]),n.Gb(1073742336,Se.a,Se.a,[]),n.Gb(1073742336,we.a,we.a,[]),n.Gb(1073742336,i,i,[]),n.Gb(1024,rt.l,function(){return[[{path:"",component:x}]]},[]),n.Gb(256,Kt.b,{nzAnimate:!0,nzDuration:3e3,nzMaxStack:7,nzPauseOnHover:!0,nzTop:24},[]),n.Gb(256,Zt.b,{nzTop:"24px",nzBottom:"24px",nzPlacement:"topRight",nzDuration:4500,nzMaxStack:7,nzPauseOnHover:!0,nzAnimate:!0},[])])})}}]);