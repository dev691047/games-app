import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Input from '../Input/Input'
import Sort from '../Sort/Sort';
import "./Tool.css"
export default function Tool({setSearchText,setSort,sortVal}) {
    return (
        <div >
            <div className="search-main">
                <div className='search-input'>
                    <Input setSearchText={setSearchText}/>
                </div>
                <div className='search-sort'>
                    <div className="">
                        <div>
                            <Sort setSort={setSort} sortVal={sortVal}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
