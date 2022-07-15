import React, { useEffect, useState } from 'react';
import "./Input.css";

export default function Input({setSearchText}) {

    const [search,setSearch] = useState("");

    useEffect(() =>{
        setSearchText(search);
    },[search])

    return (
        <div className="w-100">
            <input placeholder="Search any title , genre or platform" value={search} onChange={(e) =>setSearch(e.target.value)} className="search-input w-100" />
        </div>
    )
}
