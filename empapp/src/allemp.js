import React from "react"
import data from "./data.json"
import Value from "./Value"

 
// let myRequest = new Request("https://api.myjson.com/bins/xjxww");
// fetch(myRequest)
//     .then(function(res){
//         return res.json();
//     })
//     .then(function(data){
//         console.log(data);
//     }).catch(err => {
//         console.log("error")
//     })

let alldata = data

// console.log(alldata)

// class allemp extends React.Component{

//     render(){
//         return(
//             <div>
//                 <h1>Hello from All Employees</h1>
//                 <div>{alldata[0]["name"]}</div>
//             </div>
//         )
//     }
// }

function allemp(){
    const value = data.map((user,i)=>{
        return(
            <div className="row">
                
                <Value 
                    empid={data[i]["empid"]}
                    name={data[i]["name"]}
                    salary={data[i]["salary"]}
                    phone={data[i]["phone"]}
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


export default allemp