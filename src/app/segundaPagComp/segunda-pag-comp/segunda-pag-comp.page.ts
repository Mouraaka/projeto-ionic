import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-segunda-pag-comp',
  templateUrl: './segunda-pag-comp.page.html',
  styleUrls: ['./segunda-pag-comp.page.scss'],
})
export class SegundaPagCompPage implements OnInit {
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

  button_voltar() {
    this.router.navigate(['primeira-pag-comp'])
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
    var segunda_oferta = id;
    sessionStorage.setItem('id2', segunda_oferta)
    this.router.navigate(['/comparar'])
  }

}

