import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StudentsService } from '../services/students.service';
import { Student } from '../student';

@Component({
  selector: 'clg-student-filter',
  templateUrl: './student-filter.component.html',
  styleUrl: './student-filter.component.scss'
})
export class StudentFilterComponent implements OnInit {
  studentList: Student[] =[];
  totalStudents : number =0;
 maleCount : number =0;
 femaleCount : number =0;
 filterOptions : FilterOptions[] =[];



  constructor(private studentService: StudentsService){
    this.studentList = this.studentService.getStudents();
  this.totalStudents = this.studentList.length;
  this.femaleCount = this.studentList.filter(s=> s.Gender == 'Female').length;
  this.maleCount = this.studentList.filter(s=>s.Gender == 'Male').length;
  this.filterOptions = [
    {
      Id:1,
      Name: "All",
      Count: this.totalStudents
  
    },
    {
      Id:2,
      Name:"Male",
      Count: this.maleCount
    },
    {
      Id:3,
      Name:"Female",
      Count: this.femaleCount
    }
  ];
  console.log("Total count :",this.totalStudents)
  console.log("Female count :",this.femaleCount)
  console.log("Male count :",this.maleCount)

  }

  ngOnInit(): void {

    
  }

  onSelectionChange(selectedOption : FilterOptions)
  {
    this.studentList = this.studentService.getStudents();
    if(selectedOption.Id != 1)
    {
      this.studentList= this.studentList.filter(s=>s.Gender == selectedOption.Name);
    }
  }

}

export interface FilterOptions{
  Id: number,
  Name: string,
  Count: number
}
