import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  stats = [
    { value: '+6Y Years of Industry Expertise', text: "With six years of dedicated service, we've consistently delivered innovative solutions and exceptional quality to our clients. "},
    { value: '+14Y Team Experience Combined', text: 'With over 14 years of combined experience, our team brings innovation, strategy, and insight to every project.' },
    { value: '94% Client Satisfaction Rate', text: 'A 94% satisfaction rate reflects our unwavering commitment to excellence and client-first approach.' },
    { value: '15K+ Users Impacted Globally', text: 'Users Impacted Globally More than 15K users around the world trust our solutions to drive performance and results.' }
  ];
}
