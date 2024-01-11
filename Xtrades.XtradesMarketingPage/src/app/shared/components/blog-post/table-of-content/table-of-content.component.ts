import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table-of-content',
  templateUrl: './table-of-content.component.html',
  styleUrls: ['./table-of-content.component.scss'],
})
export class TableOfContentComponent implements OnInit {
  @Input() data: string[] = [];
  @Output() emitNavigation = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public emitNavigationToContent(i: number) {
    this.emitNavigation.emit(i);
  }
}
