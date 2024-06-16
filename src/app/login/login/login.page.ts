import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  ToastController  } from "@ionic/angular"

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public email: string = "";
  public senha: string = "";
  public mensagem: string = "";

  constructor (
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

  // entrar(){
  //   this.route.navigate(['/home']);
  // }

}
