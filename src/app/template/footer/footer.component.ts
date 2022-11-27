import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  urlmision:string='mision';
  urlvision:string='vision';
  urlrazonsocial:string='razonsocial';
  urlquienessomos:string='quienessomos';
  urlservicios:string='servicios';
  urltestimonios:string='testimonios';
  urlcontactanos:string='contactanos';
  

  ngOnInit(): void {
  }

  

}
