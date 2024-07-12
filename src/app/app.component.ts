import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';


import { ReadAllComponent } from './components/read-all/read-all.component';
import { FooterComponent } from './components/footer/footer.component';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.css',
  standalone: true,
  imports: [RouterModule,HeaderComponent,FooterComponent,ReadAllComponent]
})
  
export class AppComponent {
  title = 'Biblioteca-web';
}
