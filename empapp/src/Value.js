
import React from "react"

function Value(props){
    return(
        <div className="tablerow">
            <h6 className="tablecol tableid">{props.empid}</h6>
            <h6 className="tablecol tablename"> {props.name} </h6>
            <h6 className="tablecol tableprice">{props.salary} </h6>
            <h6 className="tablecol tablephone">{props.phone}</h6>
        </div>
    )
}

export default Value