import { Injectable } from '@angular/core';
import { Student } from '../student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  fileData: any;
 studentList: Student[] =[
  {
    ID : "STD101",
    Name: "Priya",
    Gender: "Female",
    DOB: new Date('11-Nov-1998'),
    CourseFee: 1234.56
  },
  {
    ID : "STD102",
    Name: "Arjun",
    Gender: "Male",
    DOB: new Date('07-Dec-1992'),
    CourseFee: 2345.78
  },
  {
    ID : "STD103",
    Name: "Anurag",
    Gender: "Male",
    DOB: new Date('05-July-1993'),
    CourseFee: 6789.12
  },
  {
    ID : "STD104",
    Name: "Pavitra",
    Gender: "Female",
    DOB: new Date('20-Dec-1991'),
    CourseFee: 5000.50
  },
  {
    ID : "STD105",
    Name: "Priyanka",
    Gender: "Female",
    DOB: new Date('23-Jan-1998'),
    CourseFee: 9876.54
  },
  {
    ID : "STD106",
    Name: "Yogesh",
    Gender: "Male",
    DOB: new Date('17-Nov-1988'),
    CourseFee: 1345.67
  },
  {
    ID : "STD107",
    Name: "Kishore",
    Gender: "Male",
    DOB: new Date('23-Feb-1986'),
    CourseFee: 1345.67
  }
]  
  constructor() { }

  getStudents(){
    return this.studentList;
  }

  saveStudents(fileData : any){
    this.fileData = fileData;
    return "File Data saved successfully";
  }
}
