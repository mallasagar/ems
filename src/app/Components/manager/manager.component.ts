import { Component } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { NavbarComponent } from '../sharedcomponent/navbar/navbar.component';
@Component({
  selector: 'app-manager',
  standalone: true,
  imports: [RouterModule,NavbarComponent],
  templateUrl: './manager.component.html',
  styleUrl: './manager.component.css'
})
export class ManagerComponent {

}
