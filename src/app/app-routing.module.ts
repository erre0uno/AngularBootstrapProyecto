import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactanosComponent } from './template/contactanos/contactanos.component';
import { ErrorComponent } from './template/error/error.component';
import { InicioComponent } from './template/inicio/inicio.component';
import { LoginComponent } from './template/login/login.component';
import { MisionComponent } from './template/mision/mision.component';
import { QuienessomosComponent } from './template/quienessomos/quienessomos.component';
import { RazonsocialComponent } from './template/razonsocial/razonsocial.component';
import { ServiciosComponent } from './template/servicios/servicios.component';
import { TestimoniosComponent } from './template/testimonios/testimonios.component';
import { VisionComponent } from './template/vision/vision.component';

const routes: Routes = [
  {
    path:"inicio",
    component:InicioComponent
  },
  {
    path:"login",
    component:LoginComponent
  },  
  {
    path:"mision",
    component:MisionComponent
  },
  {
    path:"vision",
    component:VisionComponent
  },
  {
    path:"razonsocial",
    component:RazonsocialComponent
  },
  {
    path:"quienessomos",
    component:QuienessomosComponent
  },
  {
    path:"servicios",
    component:ServiciosComponent
  },
  {
    path:"testimonios",
    component:TestimoniosComponent
  },
  {
    path:"contactanos",
    component:ContactanosComponent
  },
  {
    path:"",
    pathMatch:'full',
    redirectTo:'/inicio'
  },
  {
    path:"**",
    component:ErrorComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
