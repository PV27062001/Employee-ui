import { useEffect, useState } from "react";
import { Employee } from "./ListAllEmployees";
import axios from "axios";

export function ListAll(){
    const[employee,setEmployee] = useState<Employee[]>([]);

    useEffect(()=>{
        axios.get<Employee[]>('http://localhost:8080/api/v1/getall').then(response =>{
        const singleEmployee = response.data;
        setEmployee(singleEmployee);
        console.log(employee + "from ListAll components")}
        )
    })

    return(
             <div>this is my try</div>
    );
}