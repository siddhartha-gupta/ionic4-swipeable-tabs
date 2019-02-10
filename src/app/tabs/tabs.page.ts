import { Component, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

import { SwipeTabDirective } from '../directives/swipe-tab.directive';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  @ViewChild(SwipeTabDirective) swipeTabDirective: SwipeTabDirective;
  @ViewChild('myTabs') tabRef: IonTabs;

  constructor() { }

  ionTabsDidChange($event) {
    console.log('[TabsPage] ionTabsDidChange, $event: ', $event);
    this.swipeTabDirective.onTabInitialized($event.tab);
  }

  onTabChange($event) {
    console.log('[TabsPage] onTabChange, $event: ', $event);
    this.tabRef.select($event);
  }
}
