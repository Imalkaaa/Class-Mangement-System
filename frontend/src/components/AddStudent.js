import React,{useState} from "react";
import axios from "axios";


export default function AddStudent(){

    const [name,setName] =useState("")
    const [age,setage] =useState("")
    const [gender,setgender] =useState("")

    function sendData(e){
        e.preventDefault();

        const newStudent ={
            name,
            age,
            gender
        }
        axios.post("http://localhost:8070/student/add",newStudent).then(()=>{
        alert("student added")
        setName("");
        setage("");
        setgender("");

    }).catch((err)=>{
            alert(err)
        })
        
    }

    return(
        <div className="container">
        <form onSubmit={sendData}>
  <div class="row mb-3">
    <label for="name" class="col-sm-2 col-form-label">Student Name</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="name" onChange={(e)=>{
        setName(e.target.value);
      }}/>
      
    </div>
  </div>

  <div class="row mb-3">
    <label for="age" class="col-sm-2 col-form-label">Student Age</label>
    <div class="col-sm-10">
      <input type="number" class="form-control" id="age" onChange={(e)=>{
        setage(e.target.value);
      }}/>
    </div>
  </div>

  <div class="row mb-3">
    <label for="gender" class="col-sm-2 col-form-label">Student Gender</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="gender" onChange={(e)=>{
        setgender(e.target.value);
      }}/>
    </div>
  </div>
  
 
  <button type="submit" class="btn btn-primary">submit</button>
</form>

</div>
    )
}
