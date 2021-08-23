import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../service/student.service";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  labelPosition: 'Male' | 'Female' = 'Female';
  displayedColumns: string[] = ['RegNo', 'Name', 'Gender', 'Address', 'Contact'];

  constructor(public studentService: StudentService) { }

  ngOnInit(): void {
  }

  onFileSelect(event: Event) {
    // @ts-ignore
    this.selectedImage = (event.target as HTMLInputElement).files[0];
    let reader = new FileReader();
    // @ts-ignore
    reader.readAsDataURL((event.target as HTMLInputElement).files[0]);
    reader.onload = (e:any) =>{
      this.studentService.profileImageUrl = e.target.result;
    }
  }
}
