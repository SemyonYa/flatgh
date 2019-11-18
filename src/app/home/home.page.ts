import { Component, OnInit } from '@angular/core';
import { IMenuItem } from '../_models/menu-item';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  menu: Set<IMenuItem> = new Set<IMenuItem>();
  constructor() { }

  ngOnInit() {
    this.menu
      .add({ title: 'Главная', href: '/' })
      .add({ title: 'Контакты', href: '/contact' });
  }

}
