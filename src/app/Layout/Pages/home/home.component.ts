import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  /**
   *
   */
  constructor(private _Router:Router) {
   
    
  }

  onMovePage()
  {
    this._Router.navigate(['/Book'])
  }
}
