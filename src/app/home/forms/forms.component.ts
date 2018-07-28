import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import * as _ from 'lodash';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
      firstname: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      dobmonth: new FormControl(null, Validators.required),
      dobday: new FormControl(null, Validators.required),
      dobyear: new FormControl(null, Validators.required),
      age: new FormControl(null, Validators.required)
    });
  }

  get firstname() {
    return this.form1.get('firstname');
  }

  get dobmonth() {
    return this.form1.get('dobmonth');
  }

  get dobday() {
    return this.form1.get('dobday');
  }

  get dobyear() {
    return this.form1.get('dobyear');
  }

  get age() {
    return this.form1.get('age');
  }

  get firstnameRequired() {
    return this.firstname.errors.required;
  }

  get firstnameMinlength() {
    return this.firstname.errors.minlength;
  }

  onSubmit() {
    console.log(this.form1);
  }
}
