import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Camille_DANG_App_Test';

entierAleatoire(max: number)
{
  alert(Math.floor(Math.random() * (max)));
  
}

}