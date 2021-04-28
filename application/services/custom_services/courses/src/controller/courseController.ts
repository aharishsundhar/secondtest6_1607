import { Request, Response } from 'express';
import { courseService } from '../service/courseService';
import { CustomLogger } from '../config/Logger'
let course = new courseService();

export class courseController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
course.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into courseController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from courseController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
course.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into courseController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from courseController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
course.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into courseController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from courseController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
course.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into courseController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from courseController.ts: GpUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
course.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into courseController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from courseController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
course.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into courseController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from courseController.ts: GpCreate');
    })}
public GpGetNounById(req: Request, res: Response) {
course.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into courseController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from courseController.ts: GpGetNounById');
    })}


}