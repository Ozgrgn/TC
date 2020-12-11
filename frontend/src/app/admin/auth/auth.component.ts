import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public username: string;
  public password: string;
  public errorMessage: string;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(form: NgForm){
     if(form.valid){
    //   this.authService.authenticate(this.username, this.password)
    //   .subscribe(response=> {
    //     if(response) {
    //       this.router.navigateByUrl('/admin/main');
    //     }
    //     this.errorMessage ='Hatalı username ya da parola';
    //   })




      if(this.username ==='admin' && this.password==='12345'){
        this.router.navigateByUrl('/admin/main');
      }else {
        this.errorMessage = 'Bilgileri eksiksiz girin';
      
      }
     } else {
        this.errorMessage = 'Bilgileri eksiksiz girin';
      }

    }

  }

