import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import { Col, Row } from 'react-bootstrap';
import Pagination from '../Pagination/Pagination';
import Tool from '../Tool/Tool';
import "./Main.css"

export default function Main() {

    const [page,setPage] = useState(3);
    const [data,setData] = useState([]);
    const [currentData,setCurrentData] = useState([]);
    const [searchText,setSearchText] = useState("");
    const [sortVal,setSort] = useState("");

    useEffect(() =>{
        fetchGames();
    },[])


    useEffect(() =>{
        setPage(0);
        let array = [];
        let temp = [];
        array = currentData.sort((g1,g2) =>{
            let v1=parseFloat(g1.score);
            let v2 = parseFloat(g2.score);
            console.log({v1,v2});
            return sortVal=="ascending"?v1-v2:v2-v1;
        })
        
        temp = array.slice();
        setCurrentData(temp);
    },[sortVal])


    useEffect(() =>{
        let patt = new RegExp(searchText,"i");
        let array = data.filter(val => patt.test(val.genre)||patt.test(val.title)||patt.test(val.platform));
        setCurrentData(array);
        setPage(0);
    },[searchText])

    useEffect(() =>{
        setCurrentData(data);
        setSort("ascending");
    },[data])

    const fetchGames = async () => {
      try{
        const res = await axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json');
        let dat= res.data.filter((val,i) =>{
            return i>0
        })
        setData(dat);
      }
      catch(e){
          console.log(e);
      }
    }



    return (
        <div className="main-cont" >
            <Tool sortVal={sortVal} setSort={setSort} setSearchText={setSearchText} />
            <div className="card-div">
                {
                currentData.map((val,i)=>{
                    if(i>=page*12&&i<(page+1)*12) return <div className='card-div'>
                        <Card key={val.title+val.genre} game={val}/>
                    </div>
                })
                }
                
            </div>
            <div className="pag-main">
                <Pagination length={currentData.length} setPage={setPage} page={page}/>
            </div>
        </div>
    )
}
