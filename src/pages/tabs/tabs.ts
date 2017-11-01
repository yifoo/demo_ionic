import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ContentPage } from '../content/content';
import { CartPage } from '../cart/cart';
// import { DetailPage } from '../detail/detail';
import { UserCenterPage } from '../user-center/user-center';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ContentPage;
  tab3Root = CartPage;
  tab4Root = UserCenterPage;

  constructor() {

  }
}
