import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-integrantes',
  templateUrl: './integrantes.page.html',
  styleUrls: ['./integrantes.page.scss'],
})
export class IntegrantesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  integrantes_voltar(){
    this.router.navigate(['/home']);
  }

}
