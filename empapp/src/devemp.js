import React from "react"
import data from "./data.json"
import Value from "./Value"


let devdata = data.filter(d=> d["role"] === "developer")
console.log(devdata)
// class devemp extends React.Component{

//     render(){
//         return(<h1>Hello from Dev Emp</h1>)
//     }
// }
function devemp(){
    const value = devdata.map((user,i)=>{
        return(
            <div className="row">
                
                <Value 
                    empid={devdata[i]["empid"]}
                    name={devdata[i]["name"]}
                    salary={devdata[i]["salary"]}
                    phone={devdata[i]["phone"]}
                />
            </div>
        );
    })
    return (
        <div>
        <div className="tableheader">
                    <h6 className="tablecol tableid">ID</h6>
                    <h6 className="tablecol tablename">Name</h6>
                    <h6 className="tablecol tableprice">Salary </h6>
                    <h6 className="tablecol tablephone">Phone</h6>
        </div>
        <div className="table">{value}</div>
        </div>)
}


export default devemp