import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  ToastController  } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public email: string = "";
  public senha: string = "";
  public mensagem: string = "";

  constructor(
    public router: Router,
    public toastController: ToastController
  ) { }

  async exibeMensagem() {
    const toast = await this.toastController.create({
      message: this.mensagem,
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
  }

  voltarStart(){
    this.router.navigate(['/start']);
  }

  // goToLogin(){
  //   this.route.navigate(['/login']);
  // }

  // cadastrar(){
  //   this.route.navigate(['/home']);
  // }

}
