import  mongoose  from "mongoose";

const TodoSchema = new mongoose.Schema({
  Title: {type : String,required:true,default:"Hey"},
  desc:String,
  isDone:Boolean
});

export const Todo = mongoose.model('Todo', TodoSchema);