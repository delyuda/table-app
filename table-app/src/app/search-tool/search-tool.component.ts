import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-tool',
  templateUrl: './search-tool.component.html',
  styleUrls: ['./search-tool.component.scss']
})
export class SearchToolComponent implements OnInit {
  searchValue: string;

  constructor() { }
  @Output() search = new EventEmitter<string>()
  ngOnInit() {
  }
  searchHandler() {
    this.search.emit(this.searchValue);
  }

}
