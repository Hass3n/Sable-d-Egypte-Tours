import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trips',
  standalone: true,
  imports: [],
  templateUrl: './trips.component.html',
  styleUrl: './trips.component.css'
})
export class TripsComponent {


  /**
   *
   */
  constructor(private _Router:Router) {
   
    
  }

  onMovePage()
  {
    this._Router.navigate(['/TripsDetails'])
  }

}
