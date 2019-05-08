import {Component, OnInit, Output} from '@angular/core';

import { TableDataService } from '../table-data.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  tableData: Array<Post>;
  selected: string;

  constructor(private tableDataService: TableDataService) { }
  @Output() postDetails: Post;

  ngOnInit() {
    this.getData();
    setInterval(() => this.getData(), 10000);
  }

  getData() {
    this.tableDataService.getData()
      .subscribe(data => this.tableData = data.hits);
  }

  showDetails(item) {
    this.selected = (item) ? JSON.stringify(item) : null;
  }
}
