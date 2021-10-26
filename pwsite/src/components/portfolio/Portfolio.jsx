import React, { useState, useEffect } from 'react'
import './portfolio.scss'
import PortfolioList from '../PortfolioList/PortfolioList'
import {
    featuredPortfolio, 
    webPortfolio,
    designPortfolio,
} from '../../data'

export default function Portfolio() {

    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);

    useEffect(() => {
        switch(selected){
            case "featured":
                setData(featuredPortfolio);
                break;
            case "webapp":
                setData(webPortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }
    }, [selected])

    const list =[
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "webapp",
            title: "Web App",
        },
        {
            id: "design",
            title: "Design",
        },
    ]
    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {list.map(item=>(
                    <PortfolioList title={item.title} active={selected===item.id} setSelected={setSelected} id={item.id}/>
                ))}
            </ul>
            <div className="container">
                {data.map((d)=>(
                    <div className="item">
                        <img
                            src={d.img}
                            alt=""
                        />
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
