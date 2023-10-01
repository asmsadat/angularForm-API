import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  myReactiveForm: FormGroup | any;
  constructor() {
    console.log('Contructor called');
  }

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'name': new FormControl(''),
      'email': new FormControl(''),
      'phone': new FormArray([
        new FormControl('')
      ])
    });
  }

  onSubmit() {
    console.log(this.myReactiveForm.value);
  }

  addPhone() {
    console.log('Phone No. Added');
    (<FormArray>this.myReactiveForm.get('phone')).push(
      new FormControl(null)
    )
  }

  removePhone(idx: number) {
    (<FormArray>this.myReactiveForm.get('phone')).removeAt(idx);
  }

  ngOnDestroy(): void {
    console.log('on Destroy called');
  }
}
