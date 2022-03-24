import {
  Component,
  ContentChildren,
  OnInit,
  QueryList,
  AfterContentInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  constructor() {}

  // contentChildren are set
  ngAfterContentInit(): void {
    // console.log(this.router);
    // get all active tabs
    let activeTabs = this.tabs.filter((tab: any) => tab.active);
    // if there is no active tab set, activate the first
    console.log(this.tabs);
    if (activeTabs.length === 0) {
      console.log(this.tabs);
      // this.router.navigate(['faq']);
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: any) {
    this.tabs.toArray().forEach((tab) => (tab.active = false));
    tab.active = true;
  }
}
