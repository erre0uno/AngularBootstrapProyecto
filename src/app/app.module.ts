import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { InicioComponent } from './template/inicio/inicio.component';
import { FooterComponent } from './template/footer/footer.component';
import { ErrorComponent } from './template/error/error.component';
import { LoginComponent } from './template/login/login.component';
import { MisionComponent } from './template/mision/mision.component';
import { VisionComponent } from './template/vision/vision.component';
import { RazonsocialComponent } from './template/razonsocial/razonsocial.component';
import { QuienessomosComponent } from './template/quienessomos/quienessomos.component';
import { ServiciosComponent } from './template/servicios/servicios.component';
import { TestimoniosComponent } from './template/testimonios/testimonios.component';
import { ContactanosComponent } from './template/contactanos/contactanos.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    FooterComponent,
    ErrorComponent,
    LoginComponent,
    MisionComponent,
    VisionComponent,
    RazonsocialComponent,
    QuienessomosComponent,
    ServiciosComponent,
    TestimoniosComponent,
    ContactanosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
