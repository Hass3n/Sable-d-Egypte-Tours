import { Component } from '@angular/core';

@Component({
  selector: 'app-essantial',
  standalone: true,
  imports: [],
  templateUrl: './essantial.component.html',
  styleUrl: './essantial.component.css'
})
export class EssantialComponent {
 activeIndex = 0;

  cities = [
    {
      image: '../../../../assets/Images/mosqCurosal.jpg',
      title: 'Cairo',
      description:
        'The capital of Egypt, known as Al-Qāhira (The Victorious) but more commonly referred to as Cairo, has an official population of approximately 20 million. It is the largest city in Africa and the Middle East. West of Cairo lies the city of Giza, famous for its ancient necropolis of Memphis, located on the plateau of the same name.',
    },
       {
      image: '../../../../assets/Images/mosqCurosal.jpg',
      title: 'London',
      description:
      'Hassan Reda'
    },
    // Add more cities if needed
  ];
    onSlideChange(event: any) {
    // Bootstrap's event carries the new index in event.to
    console.log(this.activeIndex);
    
    this.activeIndex = event.to;
  }
}
