const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://thehzi456:thehzi@cluster0.5grn1gi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected to database");
})
.catch((err)=>console.log(err))

let mongoSchema=mongoose.Schema


const EmployeeSchema=new mongoSchema({
    ename:String,
    eemail:String,
    eposition:String,
    esalary:Number
})
var employeeModel=mongoose.model("employee",EmployeeSchema)
module.exports=employeeModel  //exporting the model to use in other files
