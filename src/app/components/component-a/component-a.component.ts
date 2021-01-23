import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css'],
})
export class ComponentAComponent implements OnInit {
  counter: Number = 0;
  constructor(private _dataService: DataService) {}

  ngOnInit(): void {}

  sendData() {
    this._dataService.sendMessage(++this.counter);
  }
}
