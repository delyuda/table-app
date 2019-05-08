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
  private intevalId: number;
  private allData: Array<Post>;

  constructor(private tableDataService: TableDataService) { }
  @Output() postDetails: Post;

  ngOnInit() {
    this.getData();
    this.intevalId = setInterval(() => this.getData(), 10000);
  }

  getData() {
    this.tableDataService.getData()
      .subscribe(data => {
        this.allData = data.hits.map(item => {
          return {
            title: item.title,
            url: item.url,
            createdAt: item.created_at,
            author: item.author
          };
        });
        this.tableData = this.allData;
      });
  }

  showDetails(item) {
    this.selected = (item) ? JSON.stringify(item) : null;
  }

  filterData(value) {
    if (value.trim()) {
      clearInterval(this.intevalId);
      this.tableData = this.allData.filter(item => item.title.match(new RegExp(value, 'i')));
    } else {
      this.getData();
    }
  }
}
