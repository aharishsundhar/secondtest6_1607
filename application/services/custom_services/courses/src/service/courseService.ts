import { Request, Response } from 'express';
import {courseDao} from '../dao/courseDao';
import { CustomLogger } from '../config/Logger'
let course = new courseDao();

export class courseService {
    
    constructor() { }
    
    public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into courseService.ts: GpDelete')
     const  courseId = req.params.id;
     course.GpDelete(courseId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from courseService.ts: GpDelete')
         callback(response);
         });
    }
public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into courseService.ts: GpSearch')
     const  courseData = req.query;
     course.GpSearch(courseData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from courseService.ts: GpSearch')
         callback(response);
         });
    }
public GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into courseService.ts: GpSearchForUpdate')
     const  courseData = req.body;
     course.GpSearchForUpdate(courseData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from courseService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into courseService.ts: GpUpdate')
     const  courseData = req.body;
     course.GpUpdate(courseData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from courseService.ts: GpUpdate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into courseService.ts: GpGetAllValues')
     
     course.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from courseService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into courseService.ts: GpCreate')
     const  courseData = req.body;
     course.GpCreate(courseData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from courseService.ts: GpCreate')
         callback(response);
         });
    }
public GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into courseService.ts: GpGetNounById')
     const  courseId = req.params.id;
     course.GpGetNounById(courseId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from courseService.ts: GpGetNounById')
         callback(response);
         });
    }


}