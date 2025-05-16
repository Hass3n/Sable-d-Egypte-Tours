import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trips-details',
  standalone: true,
  imports: [],
  templateUrl: './trips-details.component.html',
  styleUrl: './trips-details.component.css'
})
export class TripsDetailsComponent {

  /**
   *
   */
  constructor(private _router:Router) {
  
    
  }

  onMovePage()
  {
this._router.navigate(['/Comment']);
  }
}
