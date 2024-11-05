import { Component } from '@angular/core';
import { ToolCardComponent } from '../../partials/tool-card/tool-card.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    ToolCardComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
