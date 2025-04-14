import { Component } from '@angular/core';
import { AppComponent } from "../app.component";
import { TimelineComponent } from "../timeline/timeline.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [AppComponent, TimelineComponent,CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

  curruntYear:number = new Date().getFullYear()
}
