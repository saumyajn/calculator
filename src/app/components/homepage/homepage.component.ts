import { Component } from '@angular/core';
import { HeaderComponent } from "../common/header/header.component";
import { FooterComponent } from "../common/footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  imports: [HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
