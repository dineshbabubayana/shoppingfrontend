import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceService } from 'src/app/Service/user-service.service';
import { User } from 'src/app/user';


@Component({
  selector: 'app-login-registeration',
  templateUrl: './login-registeration.component.html',
  styleUrls: ['./login-registeration.component.css']
})



export class LoginRegisterationComponent implements OnInit {

  public user : any;
  constructor(private userService : UserServiceService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(((
      response:User[]) => {
        this.user = response;
      }
    ),
    (error:HttpErrorResponse) =>{
      alert(error.message);
    }
    );
  }


public onAddUser(addForm: NgForm):void{
  this.userService.addUser(addForm.value).subscribe(
    (response: User) => {
      console.log(response);
      addForm.reset();
      alert("User Registered");
    },
    (error:HttpErrorResponse)=>{
      alert(error.message);
      addForm.reset();
    }
  )
}
  

}
