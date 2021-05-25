import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-region-list',
  templateUrl: './region-list.component.html',
  styleUrls: ['./region-list.component.scss']
})
export class RegionListComponent implements OnInit {
  @Input() list: Observable<any>;
  @Output() optionChange = new EventEmitter<string>();

  constructor() {
    }

  ngOnInit() {
  }

  onChange(value) {
    this.optionChange.emit(value.target.value);
  }
}
