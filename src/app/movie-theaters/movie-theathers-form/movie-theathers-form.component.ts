import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { coordinatesMap, coordinatesMapWithMessage } from 'src/app/utilities/map/coordinate';
import {  movieTheathersCreationDTO } from '../movie-theather.model';

@Component({
  selector: 'app-movie-theathers-form',
  templateUrl: './movie-theathers-form.component.html',
  styleUrls: ['./movie-theathers-form.component.css']
})
export class MovieTheathersFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  form!: FormGroup;

 @Input()
 model!: movieTheathersCreationDTO  ;

  @Output()
  onSaveChanges = new EventEmitter<movieTheathersCreationDTO>();

  initialCoordinates:coordinatesMapWithMessage[] = [];





  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name:['',{
        validators:[Validators.required]
      }],
      longitude:['',{
        validators:[Validators.required]
      }],
      latitude:['',{
        validators:[Validators.required]
      }]
    });
    if(this.model !== undefined){
      this.form.patchValue(this.model);
      this.initialCoordinates.push({latitude: this.model.latitude, longitude: this.model.longitude, message:''})
    }

  }
  onSelectedLocation(coordinates:coordinatesMap): void {
    this.form.patchValue(coordinates);
    console.log(this.form);
  }
  saveChanges(): void {
    this.onSaveChanges.emit(this.form.value);
  }

}
