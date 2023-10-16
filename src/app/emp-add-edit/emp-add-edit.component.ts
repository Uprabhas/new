import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeesService} from '../services/employees.service';
// import { DialogRef } from '@angular/cdk/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})
export class EmpAddEditComponent {
  empForm:FormGroup;

  education:any=['10th','12th','degree','PhD','master']

  constructor(private _fb:FormBuilder,private _empform:EmployeesService,private _dialogref:MatDialogRef<EmpAddEditComponent>){
    this.empForm=this._fb.group({
      firstname:'',
      lastname:'',
      email:'',
      dob:'',
      gender:'',
      company:'',
      education:'',
      exp:'',
      package:'',
    })
  }

  Onsubmitform(){
    if(this.empForm.valid){
      this._empform.addemployee(this.empForm.value).subscribe({
        next:(val:any)=>{
          alert('Employee added successfully')
          this._dialogref.close(true);
        },
        error:(err)=>{
          console.log(err);
        },
    });
    }
  }

  

}
