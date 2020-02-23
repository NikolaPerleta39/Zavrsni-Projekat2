import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'shop.component',
    templateUrl: 'shop.component.html',
    styleUrls: ['shop.component.css']
})
    export class ShopComponent implements OnInit {
        public k: number;
        constructor(private route: ActivatedRoute) {
        }
        ngOnInit() {
            const id = this.route.snapshot.paramMap.get('id');
            if (id === 'LivingRoom') {
                this.k = 1;
            }
            if (id === 'BedRoom') {
                this.k = 2;
            }
            if (id === 'Kitchen') {
                this.k = 3;
            }
            if (id === 'Bathroom') {
                this.k = 4;
            }
        }

        LivingRoom() {
            const id = this.route.snapshot.paramMap.get('id');
            if (id === 'LivingRoom') {
                this.k = 1;
                location.reload();
            }
        }
        BedRoom() {
            const id = this.route.snapshot.paramMap.get('id');
            if (id === 'BedRoom') {
                this.k = 2;
                location.reload();
            }
        }
        Kitchen() {
            const id = this.route.snapshot.paramMap.get('id');
            if (id === 'Kitchen') {
                this.k = 3;
                location.reload();
            }
        }
        Bathroom() {
            const id = this.route.snapshot.paramMap.get('id');
            if (id === 'Bathroom') {
                this.k = 4;
                location.reload();
            }
        }
}
