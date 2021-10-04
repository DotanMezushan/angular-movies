import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {tileLayer , latLng, LeafletMouseEvent,Marker ,marker, Icon}from 'leaflet';
import { coordinatesMap, coordinatesMapWithMessage } from './coordinate';
import { icon } from 'leaflet';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
Marker.prototype.options.icon = iconDefault;







@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.layers=this.initialCoordinates.map(value =>{
       const m= marker([value.latitude, value.longitude])
       if(value.message){
         m.bindPopup(value.message,{autoClose:false,autoPan:false});
       }
       return m;
      }
     );

  Icon.Default.mergeOptions({
  iconRetinaUrl: "leaflet/dist/images/marker-icon-2x.png",
  iconUrl: "leaflet/dist/images/marker-icon.png",
  owUrl: "leaflet/dist/images/marker-shadow.png"
});
  }
   
 @Output()
 onSelectedLocation = new EventEmitter<coordinatesMap>();
 @Input()
 initialCoordinates: coordinatesMapWithMessage [] = [];

 @Input()
 editMode: boolean = true;
 
  
  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {  maxZoom: 18, 
      attribution: 'Angular Movies' })
    ],
    zoom: 14,
    center: latLng(31.627349, 34.770504)
  };

  layers: Marker<any>[] =[] ;
  
  handelMapClick(event: LeafletMouseEvent ): void {
    if(this.editMode){
      const latitude=event.latlng.lat;
      const longitude = event.latlng.lng;
      console.log({latitude,longitude});
      this.layers=[];
      this.layers.push( marker([latitude,longitude])  ) ;
      this.onSelectedLocation.emit({latitude,longitude});
    }
  
  }
  

}


