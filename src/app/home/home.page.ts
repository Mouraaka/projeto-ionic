import { Component, OnInit } from '@angular/core';
import { ApiService } from './../service/api.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  giveaways: any[];
  platform_results: any[];
  platform: string = "";
  mostrarDivPadrao:boolean = true;
  mostrarDivPesquisa:boolean = false;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private alertController: AlertController
  ) {
    this.giveaways = [];
    this.platform_results = [];
  }

  ngOnInit(): void {
    this.loadGiveaways();
  }

  loadGiveaways() {
    this.apiService.getGiveaways().subscribe(
      data => {
        this.giveaways = data;
      },
      error => {
        console.error(error);
        this.presentErrorAlert();
      }
    );
  }

  plataforma_selecionada(){
    if (this.platform === "none"){
      this.mostrarDivPadrao = true;
      this.mostrarDivPesquisa = false;
    }
    else if (this.platform === "pc")
    {
      this.mostrarDivPadrao = false;
      this.mostrarDivPesquisa = true;

      this.apiService.giveawayPlataform(this.platform).subscribe(
        result => {
          this.platform_results = result;
        },
        error => {
          console.error(error);
          this.presentErrorAlert();
        }
      );
      
    }
    else if (this.platform === "ps4")
    {
      this.mostrarDivPadrao = false;
      this.mostrarDivPesquisa = true;
      
      this.apiService.giveawayPlataform(this.platform).subscribe(
        result => {
          this.platform_results = result;
        },
        error => {
          console.error(error);
          this.presentErrorAlert();
        }
      );
      
    }
    else if (this.platform === "ps5")
    {
      this.mostrarDivPadrao = false;
      this.mostrarDivPesquisa = true;
      
      this.apiService.giveawayPlataform(this.platform).subscribe(
        result => {
          this.platform_results = result;
        },
        error => {
          console.error(error);
          this.presentErrorAlert();
        }
      );

    }
    else if (this.platform === "steam")
    {
      this.mostrarDivPadrao = false;
      this.mostrarDivPesquisa = true;

      this.apiService.giveawayPlataform(this.platform).subscribe(
        result => {
          this.platform_results = result;
        },
        error => {
          console.error(error);
          this.presentErrorAlert();
        }
      );
      


    }
    else if (this.platform === "epic-games-store")
    {
      this.mostrarDivPadrao = false;
      this.mostrarDivPesquisa = true;

      this.apiService.giveawayPlataform(this.platform).subscribe(
        result => {
          this.platform_results = result;
        },
        error => {
          console.error(error);
          this.presentErrorAlert();
        }
      );
      
    }
    else if (this.platform === "ubisoft")
    {
      this.mostrarDivPadrao = false;
      this.mostrarDivPesquisa = true;

      this.apiService.giveawayPlataform(this.platform).subscribe(
        result => {
          this.platform_results = result;
        },
        error => {
          console.error(error);
          this.presentErrorAlert();
        }
      );
      
    }
    else if (this.platform === "xbox-one")
    {
      this.mostrarDivPadrao = false;
      this.mostrarDivPesquisa = true;

      this.apiService.giveawayPlataform(this.platform).subscribe(
        result => {
          this.platform_results = result;
        },
        error => {
          console.error(error);
          this.presentErrorAlert();
        }
      );
      
    }
    else if (this.platform === "xbox-series-xs")
    {
      this.mostrarDivPadrao = false;
      this.mostrarDivPesquisa = true;

      this.apiService.giveawayPlataform(this.platform).subscribe(
        result => {
          this.platform_results = result;
        },
        error => {
          console.error(error);
          this.presentErrorAlert();
        }
      );
      
    }
    else if (this.platform === "gog")
    {
      this.mostrarDivPadrao = false;
      this.mostrarDivPesquisa = true;

      this.apiService.giveawayPlataform(this.platform).subscribe(
        result => {
          this.platform_results = result;
        },
        error => {
          console.error(error);
          this.presentErrorAlert();
        }
      );
      
    }
    else if (this.platform === "switch")
    {
      this.mostrarDivPadrao = false;
      this.mostrarDivPesquisa = true;

      this.apiService.giveawayPlataform(this.platform).subscribe(
        result => {
          this.platform_results = result;
        },
        error => {
          console.error(error);
          this.presentErrorAlert();
        }
      );
      
    }
    else if (this.platform === "android")
    {
      this.mostrarDivPadrao = false;
      this.mostrarDivPesquisa = true;

      this.apiService.giveawayPlataform(this.platform).subscribe(
        result => {
          this.platform_results = result;
        },
        error => {
          console.error(error);
          this.presentErrorAlert();
        }
      );
      
    }
    else if (this.platform === "ios")
    {
      this.mostrarDivPadrao = false;
      this.mostrarDivPesquisa = true;

      this.apiService.giveawayPlataform(this.platform).subscribe(
        result => {
          this.platform_results = result;
        },
        error => {
          console.error(error);
          this.presentErrorAlert();
        }
      );
      
    }
    else if (this.platform === "vr")
    {
      this.mostrarDivPadrao = false;
      this.mostrarDivPesquisa = true;

      this.apiService.giveawayPlataform(this.platform).subscribe(
        result => {
          this.platform_results = result;
        },
        error => {
          console.error(error);
          this.presentErrorAlert();
        }
      );
      
    }
    else if (this.platform === "origin")
    {
      this.mostrarDivPadrao = false;
      this.mostrarDivPesquisa = true;
      
    }
    else if (this.platform === "xbox-360")
    {
      this.mostrarDivPadrao = false;
      this.mostrarDivPesquisa = true;
      
    } 
  }

  async presentErrorAlert() {
    const alert = await this.alertController.create({
      header: 'Erro',
      message: 'Ocorreu um erro ao carregar os giveaways. Verifique sua conexão com a internet e tente novamente.',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.router.navigate(['/start']);
        }
      }]
    });
    await alert.present();
  }
  
  integrantes() {
    this.router.navigate(['/integrantes']);
  }
  
  deslogar() {
    this.router.navigate(['/start']);
  }

  verMais(id: string) {
    this.router.navigate(['/vermais', id]);
  }

  comparar() {

    this.router.navigate(['/primeira-pag-comp'])
  }

}
