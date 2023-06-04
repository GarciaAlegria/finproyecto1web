import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  progress = 0;

  constructor() {
    this.incrementProgress();
  }

  incrementProgress() {
    const interval = setInterval(() => {
      this.progress += 1;
      if (this.progress >= 75) {
        clearInterval(interval);
      }
    }, 100);
  }
}
