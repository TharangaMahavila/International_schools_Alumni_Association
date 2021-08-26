import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../service/student.service";
import {Student} from "../../model/Student";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  displayedColumns: string[] = ['RegNo', 'Name', 'Gender', 'Address', 'Contact', 'View'];
  students: Student[] = [];
  dataSource = new MatTableDataSource<Student>();
  panelOpenState = false;

  constructor(public studentService: StudentService) { }

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents(): void{
    this.studentService.getAllStudents().subscribe(value => {
      this.students = value;
    },error => {
      alert('Something went wrong')
    });
  }

  onFileSelect(event: Event) {
    // @ts-ignore
    this.studentService.selectedImage = (event.target as HTMLInputElement).files[0];
    let reader = new FileReader();
    // @ts-ignore
    reader.readAsDataURL((event.target as HTMLInputElement).files[0]);
    reader.onload = (e:any) =>{
      this.studentService.profileImageUrl = e.target.result;
    }
  }

  downloadPdf(id: string) {
    alert(id);
  }

  preventToggle(event: Event) {
    event.stopPropagation();
    this.panelOpenState;
  }

  registerStudent() {
   if(this.studentService.form.valid){
      let student = this.studentService.form.value;
     this.studentService.saveStudent(student).subscribe(value => {
       alert("Student saved successfully");
       this.studentService.profileImageUrl = '';
       this.studentService.form.reset();
       this.studentService.form.clearValidators();
       this.studentService.initializeFormGroup();
     },error => {
       alert(error.error);
     })
   }else {
     alert('Please provide all required fields and valid data.')
   }
  }
}
