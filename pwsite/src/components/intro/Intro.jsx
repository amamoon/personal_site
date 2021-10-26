import React, { useEffect, useRef } from 'react'
import { init } from 'ityped'
import './intro.scss'

export default function Intro() {

    const textRef = useRef();
    useEffect(()=>{
        init(textRef.current, {
            showCursor: false,
            backDelay: 500,
            strings: ["Genki Desu ka?","daijobu desu ka?", "okaeri goshujinsama"]
        })
    },[])
    return (
        <div class='intro' id="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src="assets/man.png" alt=""></img>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello there!</h2>
                    <h1>General Kenobi</h1>
                    <h3>Konichiwa <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png"></img>
                </a>
            </div>
        </div>
    )
}
