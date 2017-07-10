import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';
import { Form } from '@angular/forms';
@Component({
    selector: 'contact',
    templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

    public person: any[];

    key: string;

    public contact:any={};

    constructor(private service: ContactService) { };

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.loadall();
    }
    
    loadall(){
        this.service.get().subscribe(respon=>{
            this.person=respon;
        })
    }
    // ham tim kiem 
    search() {
        this.service.search(this.key).subscribe(respon => {
            this.person = respon;
            console.log(respon);
        })
    }
    
    xoa(id:number){
        this.service.xoa(id).subscribe(respon=>{
            this.loadall();
        })
    }

    them(){
        this.service.them(this.contact).subscribe(respon=>{
            this.loadall();
            this.contact={};
            alert("Them thanh cong");
        })
    }

}