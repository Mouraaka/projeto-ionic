import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-vermais',
  templateUrl: './vermais.page.html',
  styleUrls: ['./vermais.page.scss'],
})
export class VermaisPage implements OnInit {
  private itemId: string = ''; 
  public giveawayDetails: any; 
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private alertController: AlertController
  ) {
    this.route.params.subscribe(params => {
      this.itemId = params['id']; 
      this.loadGiveawayDetails();
    });
  }

  async loadGiveawayDetails() {
    try {
      this.giveawayDetails = await this.apiService.getGiveawayDetails(this.itemId).toPromise();
    } catch (error) {
      console.error(error);
      this.presentErrorAlert();
    }
  }

  async presentErrorAlert() {
    const alert = await this.alertController.create({
      header: 'Erro',
      message: 'Ocorreu um erro ao carregar os detalhes do giveaway. Verifique sua conexão com a internet e tente novamente.',
      buttons: ['OK']
    });
    await alert.present();
    this.router.navigate(['/home']);
  }

  voltar(){
    this.router.navigate(['/home']);
  }  

  ngOnInit() {
    this.loadGiveawayDetails();
  }
}
