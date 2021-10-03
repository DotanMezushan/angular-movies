import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstLetterUppercase } from 'src/app/validators/firstLetterUppercase';
import { genreCreationDTO } from '../genre.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-genre',
  
  templateUrl: './form-genre.component.html',
  styleUrls: ['./form-genre.component.css']
})
export class FormGenreComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder) { }
  
  @Input() 
  model?:genreCreationDTO;

  form!: FormGroup;
  @Output()
  onSaveChanges : EventEmitter<genreCreationDTO> = new EventEmitter< genreCreationDTO >();


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['',
      {
        validators :[
             Validators.required, 
             Validators.minLength(3),
             firstLetterUppercase()
            ]
      }]
    });

    if(this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }
  saveChanges():void{
    // save the genre changes
    this.onSaveChanges.emit(this.form.value)

  }
  getErrorMessageFieldName():string | void {
    const field =this.form.get('name');
    if (field?.hasError('required')){
      return 'the name field is required';
    }
    if (field?.hasError('minlength')){
      return 'the  min length is 3';
    }
    if (field?.hasError('firstLetterUppercase')){
      return field.getError('firstLetterUppercase').message;
    }
  }

}
