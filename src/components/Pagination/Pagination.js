import React, { useEffect, useState } from 'react'
import { Col , Row } from 'react-bootstrap';
import "./Pagination.css"

export default function Pagination({length,setPage,page}) {

    const [currentPage,setCurrentPage] = useState(0);

    useEffect(() =>{
        setCurrentPage(page);
    },[page])

    const changePage = (val) => {
        setPage(val);
    }

    const renderMain = () => {
        let total = length/12;
        let array = [];
        for(let x =0;x<total;x++){
            let temp = <div className='pag'><div className={`page ${currentPage==x?"selected":""}`} onClick={() =>changePage(x)}>{x+1}</div></div>
            array.push(temp);
        }
        return array;
    }

    return (
        <div  className="pagg">
            {
               renderMain()
            }
        </div>
    )
}
