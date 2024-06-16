import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(public ngFireAuth: AngularFireAuth) { }

  async loginFirebase(email: string, password: string): Promise<boolean> {
    try {
      await this.ngFireAuth.signInWithEmailAndPassword(email, password);
      return true; // Retorna true se o login foi bem-sucedido
    } catch (error) {
      console.error('Erro no login:', error);
      return false; // Retorna false se houver algum erro no login
    }
  }

  async registerFirebase(email: string, password: string): Promise<boolean> {
    try {
      await this.ngFireAuth.createUserWithEmailAndPassword(email, password);
      return true; // Retorna true se o registro foi bem-sucedido
    } catch (error) {
      console.error('Erro no registro:', error);
      return false; // Retorna false se houver algum erro no registro
    }
  }

}
  

