import * as mongoose from 'mongoose';
import courseModel from '../models/course';
import { CustomLogger } from '../config/Logger'


export class courseDao {
    private course = courseModel;
    constructor() { }
public GpDelete(courseId, callback){
new CustomLogger().showLogger('info', 'Enter into courseDao.ts: GpDelete')

this.course.findByIdAndRemove(courseId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from courseDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearch(courseData, callback){
new CustomLogger().showLogger('info', 'Enter into courseDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(courseData).forEach(
                        ([key,value]) => {
                            if(value !== ''){
                                andkey = key;
                                and_obj[andkey] = value;
                            }
                            else{
                                orkey = key;
                                or_obj[orkey] = { $ne: '' }
                            }
                        }
                    );;
;
this.course.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from courseDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearchForUpdate(courseData, callback){
new CustomLogger().showLogger('info', 'Enter into courseDao.ts: GpSearchForUpdate')

this.course.findOneAndUpdate({ _id: courseData._id }, courseData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from courseDao.ts: GpSearchForUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(courseData, callback){
new CustomLogger().showLogger('info', 'Enter into courseDao.ts: GpUpdate')

this.course.findOneAndUpdate({ _id: courseData._id }, courseData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from courseDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into courseDao.ts: GpGetAllValues')

this.course.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from courseDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(courseData, callback){
new CustomLogger().showLogger('info', 'Enter into courseDao.ts: GpCreate')
let temp = new courseModel(courseData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from courseDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetNounById(courseId, callback){
new CustomLogger().showLogger('info', 'Enter into courseDao.ts: GpGetNounById')

this.course.findById(courseId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from courseDao.ts: GpGetNounById');
callback(result);
}).catch((error)=>{
callback(error);
});}


}