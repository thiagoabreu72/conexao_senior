import { Component } from '@angular/core';
import { user } from '@seniorsistemas/senior-platform-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'senior';
  token: any;
  nome: string = '';

  constructor() {
    user
      .getToken()
      .then((data) => {
        this.token = data;
        this.nome = this.token.fullName.replaceAll('+', ' ');
      })
      .catch((error) => {
        alert(
          'Não foi possível obter token. Verifique se a tela está sendo acessada pela plataforma Senior X.'
        );
      });
  }
}
