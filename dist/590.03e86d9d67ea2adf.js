"use strict";(self.webpackChunkskeleton=self.webpackChunkskeleton||[]).push([[590],{8590:(w,u,i)=>{i.r(u),i.d(u,{default:()=>Z});var a=i(6814),c=i(7818),l=i(5286),r=i(95),g=i(3519),d=i.n(g),e=i(9468),_=i(6138);function f(s,m){1&s&&(e.TgZ(0,"div",25),e._uU(1," El nombre de usuario es requerido. "),e.qZA())}function h(s,m){1&s&&(e.TgZ(0,"div",25),e._uU(1," El email es requerido y debe ser v\xe1lido. "),e.qZA())}function U(s,m){1&s&&(e.TgZ(0,"div",25),e._uU(1," La contrase\xf1a es requerida y debe tener al menos 6 caracteres. "),e.qZA())}function v(s,m){1&s&&(e.TgZ(0,"div",25),e._uU(1," Las contrase\xf1as no coinciden. "),e.qZA())}let Z=(()=>{class s{constructor(t,n,o){this.formBuilder=t,this.loginService=n,this.router=o,this.showPassword=!1,this.showConfirmPassword=!1,this.signUpForm=this.formBuilder.group({username:["",r.kI.required],email:["",[r.kI.required,r.kI.email]],password:["",[r.kI.required,r.kI.minLength(6)]],confirmPassword:["",r.kI.required]},{validator:this.matchPassword})}matchPassword(t){const n=t.get("password")?.value,o=t.get("confirmPassword")?.value;return n===o?null:{notSame:!0}}togglePasswordVisibility(){this.showPassword=!this.showPassword}toggleConfirmPasswordVisibility(){this.showConfirmPassword=!this.showConfirmPassword}register(){this.signUpForm.invalid||this.signUpForm.errors?.notSame||this.loginService.registerUser({useraccount:this.signUpForm.value.username,emailaccount:this.signUpForm.value.email,passaccount:this.signUpForm.value.password,type_user_id_user:2,agrupation_id_agrupation:null}).subscribe(n=>{d().fire({title:"Registro Exitoso",text:"Tu cuenta ha sido creada",icon:"success",confirmButtonText:"Ok"}).then(o=>{o.isConfirmed&&this.router.navigate(["/auth/signin"])}),this.resetForm()},n=>{console.error(n),d().fire({title:"Error",text:"Hubo un problema al crear tu cuenta",icon:"error",confirmButtonText:"Ok"})})}resetForm(){this.signUpForm.reset()}static#e=this.\u0275fac=function(n){return new(n||s)(e.Y36(r.qu),e.Y36(_.r),e.Y36(l.F0))};static#o=this.\u0275cmp=e.Xpm({type:s,selectors:[["app-sign-up"]],standalone:!0,features:[e.jDz],decls:41,vars:10,consts:[[1,"auth-wrapper"],[1,"auth-content"],[1,"card"],[1,"row","align-items-center","text-center"],[1,"col-md-12"],[1,"card-body"],["src","assets/images/logo-dark.png","alt","logo",1,"img-fluid","mb-4"],[1,"mb-3","f-w-400"],[3,"formGroup","ngSubmit"],[1,"input-group","mb-3"],[1,"input-group-text"],[1,"feather","icon-user"],["type","text","placeholder","Nombre Usuario","formControlName","username",1,"form-control"],["class","alert alert-danger",4,"ngIf"],[1,"feather","icon-mail"],["type","email","placeholder","Email","formControlName","email",1,"form-control"],[1,"feather","icon-lock"],["placeholder","Contrase\xf1a","formControlName","password",1,"form-control",3,"type"],[1,"input-group-text",3,"click"],[1,"feather",3,"ngClass"],["placeholder","Confirmar Contrase\xf1a","formControlName","confirmPassword",1,"form-control",3,"type"],[1,"d-grid"],["type","submit",1,"btn","btn-primary","btn-block","mb-4",3,"disabled"],[1,"mb-2"],["routerLink","/auth/signin",1,"f-w-400"],[1,"alert","alert-danger"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),e._UZ(6,"img",6),e.TgZ(7,"h4",7),e._uU(8,"Reg\xedstrate"),e.qZA(),e.TgZ(9,"form",8),e.NdJ("ngSubmit",function(){return o.register()}),e.TgZ(10,"div",9)(11,"span",10),e._UZ(12,"i",11),e.qZA(),e._UZ(13,"input",12),e.qZA(),e.YNc(14,f,2,0,"div",13),e.TgZ(15,"div",9)(16,"span",10),e._UZ(17,"i",14),e.qZA(),e._UZ(18,"input",15),e.qZA(),e.YNc(19,h,2,0,"div",13),e.TgZ(20,"div",9)(21,"span",10),e._UZ(22,"i",16),e.qZA(),e._UZ(23,"input",17),e.TgZ(24,"span",18),e.NdJ("click",function(){return o.togglePasswordVisibility()}),e._UZ(25,"i",19),e.qZA()(),e.YNc(26,U,2,0,"div",13),e.TgZ(27,"div",9)(28,"span",10),e._UZ(29,"i",16),e.qZA(),e._UZ(30,"input",20),e.TgZ(31,"span",18),e.NdJ("click",function(){return o.toggleConfirmPasswordVisibility()}),e._UZ(32,"i",19),e.qZA()(),e.YNc(33,v,2,0,"div",13),e.TgZ(34,"div",21)(35,"button",22),e._uU(36,"Reg\xedstrate"),e.qZA()(),e.TgZ(37,"p",23),e._uU(38,"Ya tienes una cuenta? "),e.TgZ(39,"a",24),e._uU(40,"Iniciar Sesi\xf3n"),e.qZA()()()()()()()()()),2&n&&(e.xp6(9),e.Q6J("formGroup",o.signUpForm),e.xp6(5),e.Q6J("ngIf",o.signUpForm.controls.username.invalid&&o.signUpForm.controls.username.touched),e.xp6(5),e.Q6J("ngIf",o.signUpForm.controls.email.invalid&&o.signUpForm.controls.email.touched),e.xp6(4),e.Q6J("type",o.showPassword?"text":"password"),e.xp6(2),e.Q6J("ngClass",o.showPassword?"icon-eye-off":"icon-eye"),e.xp6(1),e.Q6J("ngIf",o.signUpForm.controls.password.invalid&&o.signUpForm.controls.password.touched),e.xp6(4),e.Q6J("type",o.showConfirmPassword?"text":"password"),e.xp6(2),e.Q6J("ngClass",o.showConfirmPassword?"icon-eye-off":"icon-eye"),e.xp6(1),e.Q6J("ngIf",(null==o.signUpForm.errors?null:o.signUpForm.errors.notSame)&&o.signUpForm.controls.confirmPassword.touched),e.xp6(2),e.Q6J("disabled",!o.signUpForm.valid))},dependencies:[a.ez,a.mk,a.O5,c.m,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,l.Bz,l.rH],styles:['@charset "UTF-8";.swal2-confirm[_ngcontent-%COMP%]{background-color:#4caf50;color:#fff}']})}return s})()}}]);