import React, {usetate,useEffect} from 'react';
import axois from "axios";

export default function AllStudent(){
    const [students,setStudents] =useState([]);

    useEffect(()=>{
        function getStudent(){
            axois.get("http://localhost:8070/student/").then((res)=>{
                setStudents(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
    },[])
    return(
        <div>
                {/* <h1>jfjfjf</h1> */}
        </div>
    )
}