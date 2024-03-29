import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import { StudentsService } from '../services/students.service';

type AOA = any[][];

@Component({
  selector: 'clg-sheet',
  templateUrl: './sheet.component.html',
  styleUrl: './sheet.component.scss'
})
export class SheetComponent {
  data: AOA = [];
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName: string = '';
  message: string='';
  
  constructor(private studentService: StudentsService){
    
  }
  onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
      console.log("data:",this.data);
      this.data.map(res=>{
        if(res[0] === "no"){
          console.log(res[0]);
        }else{
          console.log(res[0]);
        }
      })
    };
    reader.readAsBinaryString(target.files[0]);
  }


  saveData(): void {
    /* generate worksheet */
    const filedata: any = this.data;
    this.message = this.studentService.saveStudents(filedata);
    
  }

  

  
}
