import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import "./Sort.css"


export default function Sort({setSort,sortVal}) {


    const manageSort = (val) =>{
        setSort(val);
    }

    return (
        <div>
            <DropdownButton id="dropdown-basic-button" title="Sort">
                <Dropdown.Item active={sortVal=="ascending"} onClick={() =>manageSort("ascending")}>Ascending Score</Dropdown.Item>
                <Dropdown.Item active={sortVal=="descending"} onClick={() =>manageSort("descending")}>Descending Score</Dropdown.Item>
             </DropdownButton>
        </div>
    )
}
