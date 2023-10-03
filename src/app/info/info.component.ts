import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  myReactiveForm: FormGroup | any;

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'name': new FormControl(''),
      'email': new FormControl(''),
      'phone': new FormControl(''),
      'language': new FormArray([
        new FormControl('')
      ])
    });
  }

  onSubmit() {
    console.log(this.myReactiveForm.value);
  }

  addLanguage() {
    console.log('Phone No. Added');
    (<FormArray>this.myReactiveForm.get('language')).push(
      new FormControl(null)
    )
  }

  removeLanguage(idx: number) {
    (<FormArray>this.myReactiveForm.get('language')).removeAt(idx);
  }
}
