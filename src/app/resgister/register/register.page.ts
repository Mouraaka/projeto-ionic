import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  ToastController  } from '@ionic/angular';
import { AutenticacaoService } from 'src/app/usuario/autenticacao.service';

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
    public autenticacaoService: AutenticacaoService,
    public toastController: ToastController
  ) { }

  insereUsuario(){
    this.autenticacaoService.insereNoFirebase(this.email, this.senha).then((res) => {
      this.router.navigate(['/home']);
    }).catch((error) => {
      this.mensagem = "erro ao registrar usuário";
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

  // goToLogin(){
  //   this.route.navigate(['/login']);
  // }

  // cadastrar(){
  //   this.route.navigate(['/home']);
  // }

}
