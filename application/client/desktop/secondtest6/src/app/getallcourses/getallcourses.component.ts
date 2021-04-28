import { Component, OnInit } from '@angular/core';
import { GetallcoursesService } from './getallcourses.service';

@Component({
  selector: 'app-getallcourses',
  templateUrl: './getallcourses.component.html',
  styleUrls: ['./getallcourses.component.scss'],
})

export class GetallcoursesComponent implements OnInit {
    columnDefs: any = [{ headerName: 'Name', field: 'Name'  },{ headerName: 'Description', field: 'description'  },{ headerName: 'Email', field: 'email'  },{ headerName: 'Language_technology', field: 'language_tech'  },];
    public course = {
        Name: '',
        email: '',
        description: '',
        language_tech: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private getallcoursesService: GetallcoursesService,
    ) { }

    ngOnInit() {
        this.GpGetAllValues();
    }
    GpGetAllValues() {
        this.getallcoursesService.GpGetAllValues().subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
}