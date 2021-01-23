import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public name: string;
  public message: string;
  constructor() { }

  ngOnInit(): void {
    this.name = 'Angular Virtual Conference';
  }

}
