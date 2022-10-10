import React from "react";

export default (props) => 
<div>
    <h2>Os Filhos</h2>
    <div>
        <ul>
        {props.children}
        </ul>
    </div>
</div>