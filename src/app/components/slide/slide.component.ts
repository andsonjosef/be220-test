import { Component, Input } from '@angular/core';
import { SlideModel } from 'src/app/models/slide.model';

@Component({
  selector: 'app-slide',
  templateUrl: 'slide.component.html',
  styleUrls: ['slide.component.scss'],
})
export class SlideComponent {
  @Input() slides: SlideModel[] = [];
  @Input() newSlideOption: SlideModel;

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    spaceBetween: -20,
    pagination: false,
  };

  constructor() {}
}
