import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-places',
  standalone: true,
  imports: [],
  templateUrl: './places.component.html',
  styleUrl: './places.component.css'
})
export class PlacesComponent {


  /**
   *
   */
  constructor(private _Router:Router) {
   
    
  }
   onMovePage()
  {
    this._Router.navigate(['/PlacesDetails'])
  }
}
