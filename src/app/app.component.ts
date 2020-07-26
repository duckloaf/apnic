import { Component, OnInit } from '@angular/core';
import { ApnicService } from './app.service';
import { Course } from './course';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    courses: Course[];
    pagedCourses: Course[];
    start: number;
    end: number;
    totalPages: number;
    pageLimit: number = 10;
    Arr = Array;

    constructor(
        public api: ApnicService
    ) { }

    ngOnInit(): void {
        this.getCourses();
    }

    getCourses(): void {
        this.api.getCourses().subscribe(
            data => { 
                this.courses = data.virtualLabs;
                this.start = 0;
                this.end = this.pageLimit;
                this.totalPages = this.courses.length % this.pageLimit;
                this.renderPageList();
            },
            err => { 
                console.error(err.status);
            }
        );
    }

    changePage(page: number): void {
        this.start = page * this.pageLimit;
        this.end = (page + 1) * this.pageLimit;
        this.renderPageList();
    }

    renderPageList(): void {
        let x = this.start;
        this.pagedCourses = [];
        while(x < Math.min(this.end, this.courses.length)) {
            this.pagedCourses.push(this.courses[x]);
            x+=1;
        }
    }
}
