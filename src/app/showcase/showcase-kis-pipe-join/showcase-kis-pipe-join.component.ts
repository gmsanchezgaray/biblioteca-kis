import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase-kis-pipe-join',
  templateUrl: './showcase-kis-pipe-join.component.html',
  styleUrls: ['./showcase-kis-pipe-join.component.css'],
})
export class ShowcaseKisPipeJoinComponent implements OnInit {
  public valoresNulo = null;
  public valores: string[];
  constructor() {
    this.valores = ['1', '2', '3', '4', '5'];
  }

  ngOnInit() {}
}
