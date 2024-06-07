import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Home.css"
const Home = () => {
    const Input = useRef();
    const navigate = useNavigate();

    const redirect = () => {
        navigate(`/Counter/${Input.current.value}`);
    }
    return (
        <>
        <div>
            Miktarı giriniz.
        </div>
            <div>
                <input ref={Input} type='number' placeholder='Arttırma ve azaltma miktarı giriniz...'></input>
            </div>
            <div>
                <button onClick={redirect}>Devam et</button>
            </div>
        </>

    )
}

export default Home