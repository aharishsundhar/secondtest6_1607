
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const courseSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   Name: String,
   email: String,
   description: String,
   language_tech: String
})

const courseModel = mongoose.model('course', courseSchema, 'course');
export default courseModel;
