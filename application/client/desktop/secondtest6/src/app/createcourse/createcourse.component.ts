import { Component, OnInit } from '@angular/core';
import { CreatecourseService } from './createcourse.service';

@Component({
  selector: 'app-createcourse',
  templateUrl: './createcourse.component.html',
  styleUrls: ['./createcourse.component.scss'],
})

export class CreatecourseComponent implements OnInit {
    public course = {
        Name: '',
        email: '',
        description: '',
        language_tech: '',
    }

    constructor (
        private createcourseService: CreatecourseService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.createcourseService.GpCreate(this.course).subscribe(data => {
            this.course.Name = ''
 	 	this.course.email = ''
 	 	this.course.description = ''
 	 	this.course.language_tech = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}