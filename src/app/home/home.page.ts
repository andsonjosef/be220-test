import { UserModel } from './../models/user.model';
import { Component } from '@angular/core';
import { SlideModel } from '../models/slide.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: UserModel = {
    name: 'Andson Josef',
    level: 3,
  };

  newSlideOption: SlideModel = {
    title: 'Novo Treino',
    imgUrl: '../../assets/imgs/slide/0.jpg',
  };

  slides: SlideModel[] = [
    {
      title: 'Levantamento de Peso',
      imgUrl: '../../assets/imgs/slide/1.jpg',
      showSubTitle: true,
    },
    {
      title: 'Yoga',
      imgUrl: '../../assets/imgs/slide/2.jpg',
      showSubTitle: false,
    },
    {
      title: 'CrossFit',
      imgUrl: '../../assets/imgs/slide/3.jpg',
      showSubTitle: false,
    },
  ];

  contents: SlideModel[] = [
    {
      title: '',
    },
    {
      title: '',
    },
    {
      title: '',
    },
  ];

  constructor() {}

  /**
   * Function to get the level title and color by the user level
   *
   * @param level: number
   * @returns  levelTitle: string; levelColor: string;
   */
  bindUserLevel(level: 1 | 2 | 3 | 4 | 5): {
    levelTitle: string;
    levelColor: string;
  } {
    switch (level) {
      case 1:
        return {
          levelTitle: 'Branco',
          levelColor: 'white',
        };
      case 2:
        return {
          levelTitle: 'Azul',
          levelColor: 'blue',
        };
      case 3:
        return {
          levelTitle: 'Roxo',
          levelColor: 'blueviolet',
        };
      case 4:
        return {
          levelTitle: 'Marrom',
          levelColor: 'brown',
        };
      case 5:
        return {
          levelTitle: 'Preto',
          levelColor: 'black',
        };
    }
  }
}
