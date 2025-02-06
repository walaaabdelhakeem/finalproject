import { Component } from '@angular/core';
import { NavbarComponent } from "../../../shared/components/navbar/navbar.component";
import { CartComponent } from "../../../features/cart/cart/cart.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

}
