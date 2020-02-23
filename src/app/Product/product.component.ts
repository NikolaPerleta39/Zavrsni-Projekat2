import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'product.component',
    templateUrl: 'product.component.html',
    styleUrls: ['product.component.css']
})

export class ProductComponent implements OnInit {
    public k: number;
    public ime: string;
    public articles: [];

        constructor(private route: ActivatedRoute) {
        }
        ngOnInit() {
            const id = this.route.snapshot.paramMap.get('id');
            if (id === 'krevet') {
                this.k = 1;
            }
            if (id === 'livingRoom2') {
                this.k = 2;
            }
            if (id === 'bedRoom') {
                this.k = 3;
            }
            if (id === 'radniSto') {
                this.k = 4;
            }
            if (id === 'kitchen') {
                this.k = 5;
            }
            if (id === 'stolica_sto') {
                this.k = 6;
            }
            if (id === 'nighttable') {
                this.k = 7;
            }

        }

        DodajUKorpu(k: number) {
            if (localStorage.articles !== undefined) {
                let newList = [];
                newList = JSON.parse(localStorage.articles);
                newList.push(JSON.stringify(k));
                localStorage.articles = JSON.stringify(newList);
            } else {
                let newList = [];
                newList.push(JSON.stringify(k));
                localStorage.articles = JSON.stringify(newList);
            }
        }
}
