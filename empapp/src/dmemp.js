import React from "react"
import data from "./data.json"
import Value from "./Value"

let dmdata = data.filter(d=> d["role"] === "digital marketting")
console.log(dmdata)

// class dmemp extends React.Component{

//     render(){
//         return(<h1>Hello from DM Emp</h1>)
//     }

// }

function dmemp(){
    const value = dmdata.map((user,i)=>{
        return(
            <div className="row">
                
                <Value 
                    empid={dmdata[i]["empid"]}
                    name={dmdata[i]["name"]}
                    salary={dmdata[i]["salary"]}
                    phone={dmdata[i]["phone"]}
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


export default dmemp