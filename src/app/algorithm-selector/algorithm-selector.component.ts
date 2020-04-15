import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-algorithm-selector',
  templateUrl: './algorithm-selector.component.html',
  styleUrls: ['./algorithm-selector.component.sass'],
})
export class AlgorithmSelectorComponent implements OnInit {
  optionsSelect: Array<any>;

  constructor() {}

  ngOnInit() {}
}
