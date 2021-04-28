import { Component, OnInit } from '@angular/core';
import { SearchallcoursesService } from './searchallcourses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchallcourses',
  templateUrl: './searchallcourses.component.html',
  styleUrls: ['./searchallcourses.component.scss'],
})

export class SearchallcoursesComponent implements OnInit {
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
        private searchallcoursesService: SearchallcoursesService,
        private router: Router,
    ) { }

    ngOnInit() {
    }
    GpSearch() {
        this.searchallcoursesService.GpSearch(this.course).subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    GpRoute(queryId) {
        this.router.navigate(['./updatecourses'], { queryParams: { 'id': queryId } })
    }
    onSelectionChanged(values) {
        this.GpRoute(values._id);
    }
}