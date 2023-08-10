import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Child } from '../child';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  @Input() selectedChild = new Child('', '', false);
  @Output() onSave = new EventEmitter();
}
