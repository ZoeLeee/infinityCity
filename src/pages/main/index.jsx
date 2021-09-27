import React, { useEffect, useRef } from 'react'
import { Main } from '../../application'

export default function MainScene() {
    const canvasRef=useRef(null)

    useEffect(()=>{
        if(canvasRef.current){
            const main=new Main(canvasRef.current);
            main.start();
        }
    },[])

    return (
        <canvas ref={canvasRef}></canvas>
    )
}
