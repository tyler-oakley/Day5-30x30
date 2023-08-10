import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Child } from '../child';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() childList: Child[] = [];
  @Output() onSelect = new EventEmitter();
  @Output() onDelete = new EventEmitter();
}
