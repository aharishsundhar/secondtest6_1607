import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class UpdatecoursesService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    GpUpdate(course): Observable<any> {
        return this.http.put(this.sharedService.DESKTOP_API + '/course', course);
    }
    GpGetNounById(courseId): Observable<any> {
        return this.http.get(this.sharedService.DESKTOP_API + '/course/' + courseId);
    }
}