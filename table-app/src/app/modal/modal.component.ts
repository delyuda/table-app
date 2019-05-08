import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor() { }
  @Input() postDetails: string;
  @Output() close = new EventEmitter<any>();

  ngOnInit() {
  }

  clear() {
    this.close.emit(null);
  }
}
