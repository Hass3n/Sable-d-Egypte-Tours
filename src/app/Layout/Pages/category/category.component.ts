import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {



 
constructor(private _router:Router) {

  
}
  onMovePage()
  {

    
    this._router.navigate(['/Trips']);
  }

}
