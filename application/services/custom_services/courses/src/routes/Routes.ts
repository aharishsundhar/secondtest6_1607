import { Request, Response, NextFunction } from "express";
import { courseController } from '../controller/courseController';


export class Routes {
    private course: courseController = new courseController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/course/:id').delete(this.course.GpDelete);
app.route('/course/get/search').get(this.course.GpSearch);
app.route('/course/get/update').put(this.course.GpSearchForUpdate);
app.route('/course').put(this.course.GpUpdate);
app.route('/course').get(this.course.GpGetAllValues);
app.route('/course').post(this.course.GpCreate);
app.route('/course/:id').get(this.course.GpGetNounById);
     }

}