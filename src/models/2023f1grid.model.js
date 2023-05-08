import {Schema, model} from 'mongoose';


const gridSchema = new Schema(
  {
    driver: {type:String},
    team:{type:String},
    country:{type:String},
    points:{type:Number},
    wins:{type:Number}
  },{timestamps: true, versionKey: false}
);

export default model('2023f1grid', gridSchema);