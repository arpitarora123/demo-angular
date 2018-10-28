import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'employee-count',
  templateUrl: './empCount.component.html'
})
export class EmpCountComponent implements OnInit {

  @Input()
  all: number;

  @Input()
  male: number;

  @Input()
  female: number;

  selectedRadioButtonValue: string = 'All';

  @Output()
    countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

  onRadioButtonSelectionChange() {
    this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
  }

  ngOnInit() {
  }

}
