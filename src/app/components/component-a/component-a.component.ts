import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css'],
})
export class ComponentAComponent implements OnInit {
  @Input('parentData') public name;

  @Output() public childEvent = new EventEmitter();
  public counter: Number = 0;

  constructor() {}

  ngOnInit(): void {}

  sendData() {
    this.childEvent.emit(++this.counter);
  }
}
