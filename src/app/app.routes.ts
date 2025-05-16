import { Routes } from '@angular/router';
import { HomeComponent } from './Layout/Pages/home/home.component';
import { PlacesComponent } from './Layout/Pages/places/places.component';
import { PlacesDetailsComponent } from './Layout/Pages/places-details/places-details.component';
import { TripsComponent } from './Layout/Pages/trips/trips.component';
import { TripsDetailsComponent } from './Layout/Pages/trips-details/trips-details.component';
import { CategoryComponent } from './Layout/Pages/category/category.component';
import { CommentComponent } from './Layout/Pages/comment/comment.component';
import { ContactComponent } from './Layout/Pages/contact/contact.component';
import { InformationsComponent } from './Layout/Pages/informations/informations.component';
import { ClimateComponent } from './Layout/Pages/climate/climate.component';
import { EssantialComponent } from './Layout/Pages/essantial/essantial.component';
import { BookComponent } from './Layout/Pages/book/book.component';
import { AboutComponent } from './Layout/Pages/about/about.component';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'Places/:Id',component:PlacesComponent},
    {path:'PlacesDetails',component:PlacesDetailsComponent},
    {path:'Trips',component:TripsComponent},
    {path:'TripsDetails',component:TripsDetailsComponent},
    {path:'Category',component:CategoryComponent},
   {path:'Comment',component:CommentComponent},
    {path:'Contact',component:ContactComponent},
      {path:'Information/:Id',component:InformationsComponent},
       {path:'Climate/:Id',component:ClimateComponent},
      {path:'Essential/:Id',component:EssantialComponent},
     {path:'Book',component:BookComponent},
        {path:'About',component:AboutComponent},





    // {path:'**',component:NotfoundComponent},
];
