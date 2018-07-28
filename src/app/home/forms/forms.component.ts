import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import * as _ from 'lodash';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  months = moment.months();
  days = _.range(1, 32);
  years = _.orderBy(_.range(1917, 2019), [], 'desc');
  ages = ['Less than 1'].concat(_.range(1, 165));

  form1: FormGroup;
  selected = 65;

  ngOnInit() {
    this.form1 = new FormGroup({
      firstname: new FormControl(null),
      'dob-month': new FormControl(null),
      'dob-day': new FormControl(null),
      'dob-year': new FormControl(null),
      age: new FormControl(65)
    });
  }
}
