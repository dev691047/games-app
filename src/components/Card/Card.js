import React, { useEffect, useState } from 'react'
import "./Card.css"
import Star from './Star';

export default function Card({game}) {
    const {title,platform,score,genre,editors_choice} = game;
    const [image,setImage] = useState("");

    useEffect(() =>{
        switch(platform){
            case "PlayStation Vita":
                setImage("/image/vita.png");
                break;
            case "iPad":
                setImage("/image/ipad.jpg");
                break;
            case "Xbox 360":
                setImage("/image/xbox.jpg");
                break;
            case "PlayStation 3":
                setImage("/image/p3.jpg");
                break;
            case "Macintosh":
                setImage("/image/Macintosh.png");
                break;
            case "PC":
                setImage("/image/pc.webp");
                break;
            case "Nintendo DS":
                setImage("/image/3.jpg");
                break;
            case "Android":
                setImage("/image/android.webp");
                break;
            default:
                setImage("/image/iphone.webp");
        }
    },[platform])

    return (
        <div className="card">
           <div className="card-img-wrapper">
                <img className="card-img" src={image}/>
           </div>
            <div className="card-des p-3">
                {
                    editors_choice=="Y"&&<div className="editor-choice">
                                             <Star/>
                                        </div>
                }
                <h6>
                    {title}
                </h6>
                <div>
                     <span className="title ">Platform</span><span className="value">{platform}</span>
                </div>
                <div>
                     <span className="title ">Score</span><span className="value">{`${score}/10`}</span>
                </div>
                <div>
                 <span className="title">Genre</span><span className="value">{genre}</span>
                </div>
            </div>
        </div>
    )
}
