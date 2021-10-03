import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { actorDTO } from '../actors.model';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-index-actor',
  templateUrl: './index-actor.component.html',
  styleUrls: ['./index-actor.component.css']
})
export class IndexActorComponent implements OnInit {

  constructor(private actorService:ActorsService) { }

  actors: actorDTO[] |any=[];
  columsToDisplay:string[] = ['name', 'actions'];
  totalAmountOfRecord:any;
  currentPage:number=1;
  pageSize :number=5;

  ngOnInit(): void {
   this.loadData();
  }
  delete(Id:number): void {
    this.actorService.delete(Id).subscribe(()=>{
      this.loadData();
    })
  }
  loadData(): void{
    this.actorService.get(this.currentPage,this.pageSize).subscribe((response: HttpResponse< actorDTO[]>) => {
      this.actors = response.body  ;
  
      console.log('record per page that we get');
      console.log(this.pageSize);//record per page
      this.totalAmountOfRecord = response.headers.get("TotalAmountOfRecords");
   });
  }
  updatePagination(event:PageEvent): void {
      this.currentPage = event.pageIndex +1;
      this.pageSize=event.pageSize;
      
      console.log('page event Size :'+event.pageSize);
      console.log('page this Size :'+this.pageSize);
      console.log('page currentPage :'+this.currentPage);
      this.loadData();
  }

}
