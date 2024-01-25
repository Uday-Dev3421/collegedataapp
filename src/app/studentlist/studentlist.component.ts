import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Student } from '../student';
import {StudentsService} from '../services/students.service';


@Component({
  selector: 'clg-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrl: './studentlist.component.scss'
})
export class StudentlistComponent  implements OnInit{

  @Input() studentList: Student[]=[];
 
  constructor(){
    
  }

ngOnInit(): void {
  
}

}
