import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  @Input() rating: number;
  starWidth: number;

  ngOnChanges(): void {
    this.starWidth = this.rating * 90 / 5;
  }

  onClick(): void {
    this.notify.emit(`The rating ${this.rating} was clicked!`);
  }
}
