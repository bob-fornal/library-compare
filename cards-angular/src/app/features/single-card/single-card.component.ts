import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.scss']
})
export class SingleCardComponent implements AfterViewInit {

  @Input() back: string = '';
  @Input() front: string = '';
  @Input() path: string = '';
  @Input() show: boolean = true;
  @Input() onVisibleClick: any;

  disabled: boolean = true;

  constructor() { }

  ngAfterViewInit() {
    setTimeout(this.checkDisabled, 100);
  }

  checkDisabled = () => {
    if (this.front !== this.back) {
      this.disabled = false;
    }
  };

  getBack = () => this.path + this.back;
  getFront = () => this.path + this.front;

  toggleShow = () => {
    if (this.disabled === true) return;
    this.show = !this.show;
    if (this.show === false) {
      this.handleOnVisibleClick();
    }
  };
  
  handleOnVisibleClick = () => {
    if (this.onVisibleClick !== undefined) {
      this.onVisibleClick();
    }
  };
}
