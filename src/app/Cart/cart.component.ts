import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'cart.component',
    templateUrl: 'cart.component.html',
    styleUrls: ['cart.component.css']
})

export class CartComponent implements OnInit {
    public articles = [];
    public sum = 0;
    public a: number;
    public b: number;
    public c: number;
    public d: number;
    public e: number;
    public f: number;
    public g: number;
    constructor(private router: Router) {}

    ngOnInit() {
        if (localStorage.articles !== undefined) {
            this.articles = JSON.parse(localStorage.articles);
            this.articles.forEach(element => {
                if (element === '1') {
                    this.a = 1;
                    this.sum =+ 15550;
                }
                if (element === '2') {
                    this.b = 2;
                    this.sum =+ 45550;
                }
                if (element === '3') {
                    this.c = 3;
                    this.sum =+ 25550;
                }
                if (element === '4') {
                    this.d = 4;
                    this.sum =+ 5550;
                }
                if (element === '5') {
                    this.e = 5;
                    this.sum =+ 35550;
                }
                if (element === '6') {
                    this.f = 6;
                    this.sum =+ 4550;
                }
                if (element === '7') {
                    this.g = 7;
                    this.sum =+ 5000;
                }
                });
        }
    }

    Remove(k: number) {
        for (let i = 0; i < this.articles.length; i++) {
            if (this.articles[i] === k) {
                this.articles.splice(i, 1);
            }
        }
    }
}
