import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/usuario/autenticacao.service';
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
    public autenticacaoService: AutenticacaoService,
    public toastController: ToastController
  ) { }

  logar() {
    this.autenticacaoService.loginFirebase(this.email, this.senha)
      .then((res) => {
        this.router.navigate(['/home'])
      }).catch((error) => {
        this.mensagem = 'Email e/ou Senha incorreto(s)'
        this.exibeMensagem();
      })
  }

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
}
