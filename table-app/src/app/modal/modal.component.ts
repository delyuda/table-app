import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

import { Post } from '../models/post';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor() { }
  @Input() postDetails: Post;
  @Output() close = new EventEmitter<any>();

  ngOnInit() {
  }

  clear() {
    this.close.emit(null);
  }
}
