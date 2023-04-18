"use strict";(self.webpackChunktest_app=self.webpackChunktest_app||[]).push([[819],{2819:(V,g,n)=>{n.r(g),n.d(g,{MoviesModule:()=>b});var c=n(9808),f=n(4968),Z=n(8372),M=n(1884),C=n(9300),T=n(4004),v=n(262),e=n(5e3),x=n(520),A=n(2290);let y=(()=>{class o{constructor(t,i){this.http=t,this.toastr=i}getMovies(t){return this.http.get(" https://demo.credy.in/api/v1/maya/movies/",{params:t}).pipe((0,v.K)(s=>{throw console.log(s.error.error.message),this.toastr.error(s.error.error.message),s}))}filterMovies(t,i){return t.filter(s=>-1!==s.title.toLowerCase().indexOf(i.toLowerCase()))}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(x.eN),e.LFG(A._W))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var m=n(8966),O=n(5397),d=n(1083),S=n(4594),h=n(7322),w=n(7531),U=n(3874),I=n(2368),E=n(7423),F=n(5682);let p=(()=>{class o{constructor(t){this.data=t}ngOnInit(){this.movie=this.data}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(m.WI))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-view-movie-dialog"]],decls:1,vars:1,consts:[[3,"movie"]],template:function(t,i){1&t&&e._UZ(0,"app-movie-card",0),2&t&&e.Q6J("movie",i.movie)},styles:[""]}),o})();var r=n(9224);let u=(()=>{class o{constructor(t){this.dialog=t}ngOnInit(){}openCard(t){t.isPreview||this.dialog.open(p,{data:Object.assign(Object.assign({},t),{isPreview:!0}),width:"500px"})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(m.uw))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-movie-card"]],inputs:{movie:"movie"},decls:9,vars:12,consts:[[1,"shadow",3,"click"],[1,"d-flex","justify-content-center"],["mat-card-md-image","","src","https://material.angular.io/assets/img/examples/shiba2.jpg",1,"d-block",3,"ngClass","src"],[1,"text-center","my-4"],[1,"text-center"],[1,"text-center","card-genre"]],template:function(t,i){1&t&&(e.TgZ(0,"mat-card",0),e.NdJ("click",function(){return i.openCard(i.movie)}),e.TgZ(1,"mat-card-title",1),e._UZ(2,"img",2),e.qZA(),e.TgZ(3,"mat-card-title",3),e._uU(4),e.qZA(),e.TgZ(5,"mat-card-content",4),e._uU(6),e.qZA(),e.TgZ(7,"mat-card-actions",5),e._uU(8),e.qZA(),e.qZA()),2&t&&(e.ekj("pointer",!i.movie.isPreview),e.xp6(2),e.hYB("src","","https://ui-avatars.com/api/?name="+i.movie.title," ",i.movie.isPreview?"&background=0D8ABC&color=fff":"","",e.LSH),e.Q6J("ngClass",i.movie.isPreview?"rounded-4 w-100":"rounded-circle"),e.xp6(1),e.ekj("text-truncate",!i.movie.isPreview),e.xp6(1),e.Oqu(i.movie.title),e.xp6(1),e.ekj("text-truncate",!i.movie.isPreview),e.xp6(1),e.hij(" ",i.movie.description," "),e.xp6(2),e.hij(" ",i.movie.genres," "))},directives:[r.a8,r.n5,r.nc,c.mk,r.dn,r.hq],styles:[".card-genre[_ngcontent-%COMP%]{height:30px}"]}),o})();const j=["searchElement"];function Y(o,a){if(1&o&&(e.TgZ(0,"div",18),e._UZ(1,"app-movie-card",19),e.qZA()),2&o){const t=a.$implicit;e.xp6(1),e.Q6J("movie",t)}}function J(o,a){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",15),e.YNc(2,Y,2,1,"div",16),e.qZA(),e.TgZ(3,"mat-paginator",17),e.NdJ("page",function(s){return e.CHM(t),e.oxw().pageChange(s)}),e.qZA(),e.BQk()}if(2&o){const t=e.oxw();e.xp6(2),e.Q6J("ngForOf",t.movies),e.xp6(1),e.Q6J("length",t.totalCount)("pageSize",10)}}function N(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"div",20),e.TgZ(1,"mat-card",21),e.TgZ(2,"mat-card-title",22),e._UZ(3,"img",23),e.qZA(),e.TgZ(4,"mat-card-title",24),e._uU(5,"Oops!"),e.qZA(),e.TgZ(6,"mat-card-content",25),e._uU(7," Something went wrong "),e.qZA(),e.TgZ(8,"mat-card-actions",26),e.TgZ(9,"button",27),e.NdJ("click",function(){return e.CHM(t),e.oxw().getMovies()}),e._uU(10,"TRY AGAIN"),e.qZA(),e.qZA(),e.qZA(),e.qZA()}}function q(o,a){1&o&&(e.TgZ(0,"div",20),e.TgZ(1,"mat-card",21),e.TgZ(2,"mat-card-title",22),e._UZ(3,"img",28),e.qZA(),e.TgZ(4,"mat-card-title",24),e._uU(5,"Sorry! No results found"),e.qZA(),e.TgZ(6,"mat-card-content",25),e._uU(7," We could not find the item you were searching for. Please try something else. "),e.qZA(),e.qZA(),e.qZA())}let P=(()=>{class o{constructor(t,i,s,l,D,L){this.moviesService=t,this.dialog=i,this.authService=s,this.router=l,this.document=D,this.renderer=L,this.movies=[],this.moviesMaster=[],this.filters={page:1},this.totalCount=0,this.apiFailed=!1,this.isDarkThemeEnabled=!0}ngAfterViewInit(){(0,f.R)(this.searchElement.nativeElement,"keyup").pipe((0,Z.b)(250),(0,M.x)(),(0,C.h)(t=>t.target.value.length>3||0===t.target.value.length)).subscribe(t=>{console.log(t.target.value);const i=t.target.value;this.movies=i?this.moviesService.filterMovies(this.moviesMaster,i):[...this.moviesMaster]})}ngOnInit(){var t;this.getMovies();const i=null!==(t=localStorage.getItem("theme"))&&void 0!==t?t:"theme-light";this.isDarkThemeEnabled="theme-dark"===i}getMovies(){this.apiFailed=!1,this.moviesService.getMovies(this.filters).pipe((0,T.U)(t=>{this.movies=t.results,this.moviesMaster=[...this.movies],this.totalCount=t.count}),(0,v.K)(t=>{throw this.apiFailed=!0,t})).subscribe()}pageChange(t){this.filters={page:t.pageIndex+1},this.getMovies()}signOut(){this.authService.logout(),this.router.navigate(["/login"])}switchTheme(t){const i=t.checked?"theme-dark":"theme-light";this.renderer.setAttribute(this.document.body,"class",i),localStorage.setItem("theme",i)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(y),e.Y36(m.uw),e.Y36(O.e),e.Y36(d.F0),e.Y36(c.K0),e.Y36(e.Qsj))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-movies"]],viewQuery:function(t,i){if(1&t&&e.Gf(j,5),2&t){let s;e.iGM(s=e.CRH())&&(i.searchElement=s.first)}},decls:21,vars:4,consts:[[1,"vh-100"],["color","primary",1,"justify-content-around"],[1,"col","d-none","d-md-block"],[1,"col"],["appearance","outline",1,"w-100"],["matInput","","placeholder","Search..."],["searchElement",""],["matSuffix",""],[1,"col","d-flex","justify-content-end","align-items-center"],[1,"me-4",3,"checked","change"],["mat-icon-button","","aria-label","Example icon-button with share icon",1,"example-icon"],[3,"click"],[1,"container","h-100"],[4,"ngIf"],["class","h-100 d-flex justify-content-center align-items-center",4,"ngIf"],[1,"row","justify-content-center",2,"min-height","80%"],["class","col-xs-12 col-md-6 col-lg-3 card-container",4,"ngFor","ngForOf"],["aria-label","Select page",3,"length","pageSize","page"],[1,"col-xs-12","col-md-6","col-lg-3","card-container"],[3,"movie"],[1,"h-100","d-flex","justify-content-center","align-items-center"],[1,"shadow","error-card"],[1,"d-flex","justify-content-center"],["mat-card-md-image","","src","assets/images/error-circle.svg",1,"error-img"],[1,"text-center","mb-4"],[1,"text-center"],[1,"text-center","py-4"],["mat-raised-button","","color","primary",3,"click"],["mat-card-md-image","","src","assets/images/search-x.svg",1,"error-img"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"mat-toolbar",1),e.TgZ(2,"div",2),e._uU(3,"MOVIES COLLECTION"),e.qZA(),e.TgZ(4,"div",3),e.TgZ(5,"mat-form-field",4),e._UZ(6,"input",5,6),e.TgZ(8,"mat-icon",7),e._uU(9,"search"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(10,"div",8),e.TgZ(11,"mat-slide-toggle",9),e.NdJ("change",function(l){return i.switchTheme(l)}),e.TgZ(12,"mat-icon"),e._uU(13,"dark_mode"),e.qZA(),e.qZA(),e.TgZ(14,"button",10),e.TgZ(15,"mat-icon",11),e.NdJ("click",function(){return i.signOut()}),e._uU(16,"logout"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(17,"div",12),e.YNc(18,J,4,3,"ng-container",13),e.YNc(19,N,11,0,"div",14),e.YNc(20,q,8,0,"div",14),e.qZA(),e.qZA()),2&t&&(e.xp6(11),e.Q6J("checked",i.isDarkThemeEnabled),e.xp6(7),e.Q6J("ngIf",i.movies.length&&!i.apiFailed),e.xp6(1),e.Q6J("ngIf",i.apiFailed),e.xp6(1),e.Q6J("ngIf",!i.movies.length&&i.moviesMaster.length))},directives:[S.Ye,h.KE,w.Nt,U.Hw,h.R9,I.Rr,E.lW,c.O5,c.sg,F.NW,u,r.a8,r.n5,r.nc,r.dn,r.hq],styles:[".example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.card-container[_ngcontent-%COMP%]{padding:15px}.error-card[_ngcontent-%COMP%]   .error-img[_ngcontent-%COMP%]{height:60px;aspect-ratio:1;margin:50px}"]}),o})();var Q=n(5535);const k=[{path:"",component:P}];let b=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[c.ez,d.Bz.forChild(k),Q.q]]}),o})();e.B6R(p,[u],[])}}]);