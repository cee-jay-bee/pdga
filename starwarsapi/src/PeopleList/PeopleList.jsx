import React from "react";
import { useState } from "react";
import People from '../People/People';


function PeopleList ( props ) {
    // const [name, setName]=useState(null);
    return(
        <div>
            <h1>PeopleList</h1>
            <ul>{ props.items.map ( item =>(<People people = { people } />))}</ul>
        </div>
    )
}

export default People;