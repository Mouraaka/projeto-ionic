import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-primeira-pag-comp',
  templateUrl: './primeira-pag-comp.page.html',
  styleUrls: ['./primeira-pag-comp.page.scss'],
})
export class PrimeiraPagCompPage implements OnInit {
  giveaways: any[];

  constructor(
    private router: Router,
    private apiService: ApiService
  ) 
  {
    this.giveaways = [];
  }

  ngOnInit() {
    this.loadGiveaways();
  }

  button_voltar(){
    this.router.navigate(['/home'])
  }

  loadGiveaways() {
    this.apiService.getGiveaways().subscribe(
      data => {
        this.giveaways = data;
      },
      error => {
        console.error(error);
      }
    );
  }

  selecionar(id: string){
    var primeira_oferta = id;
    sessionStorage.setItem('id1', primeira_oferta)
    this.router.navigate(['/segunda-pag-comp'])
  }

}
