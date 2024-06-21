import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comparar',
  templateUrl: './comparar.page.html',
  styleUrls: ['./comparar.page.scss'],
})
export class CompararPage implements OnInit {
  primeira_oferta: any;
  segunda_oferta: any;

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {

    const id1 = sessionStorage.getItem('id1');
    const id2 = sessionStorage.getItem('id2');

    if (id1 && id2) {

      this.apiService.getGiveawayDetails(id1).subscribe(
        data => {
          this.primeira_oferta = data;
        },
        error => {
          console.error('Erro ao carregar detalhes da primeira oferta:', error);
        }
      );

      this.apiService.getGiveawayDetails(id2).subscribe(
        data => {
          this.segunda_oferta = data;
        },
        error => {
          console.error('Erro ao carregar detalhes da segunda oferta:', error);
        }
      );
    } else {
      console.error('IDs das ofertas não encontrados no sessionStorage');
    }
  }

  voltarMenu() {
    sessionStorage.clear();
    this.router.navigate(['/home']);
  }

}