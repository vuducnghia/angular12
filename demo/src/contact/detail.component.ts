import { Component } from '@angular/core';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ContactService } from './contact.service';

import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'detail-app',
    templateUrl: './detail.html',
})
export class DetailComponent {

    private id: number;
    public detail: any = {}; // luu tru lai nhung sua doi

    constructor(private service: ContactService,
        private active: ActivatedRoute,
        private route: Router) {

        this.active.params.subscribe(param => {
            this.id = param['id'];
        })
        this.load();

    }

    load() {
        this.service.xem(this.id).subscribe(respon => {
            this.detail = respon;
        })
    }
    save() {
        this.service.sua(this.id, this.detail).subscribe(respon => {
            this.detail = {};
            this.load();
            alert("Da luu thanh cong");
        })
    }

    cancle() {
        this.route.navigate(['/contact']);
        // alert("back");
    }

    xoa(){
        this.service.xoa(this.id).subscribe(respon=>{
            alert("Da xoa");
            // this.route.navigate(['/contact']);
        })
    }

}