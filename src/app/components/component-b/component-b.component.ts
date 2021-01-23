import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css'],
})
export class ComponentBComponent implements OnInit {
  message;
  constructor(private _dataService: DataService) {}

  ngOnInit(): void {
    this._dataService.message$.subscribe((data) => {
      this.message = data;
    });
  }
}
