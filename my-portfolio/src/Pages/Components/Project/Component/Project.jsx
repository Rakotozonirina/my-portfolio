import React,{useState, useEffect} from "react"
import Card from "../Asset/Card"
import CardTwo from "../Asset/CardTwo"
import CardThree from "../Asset/CardThree"
import TextTransition, { presets } from 'react-text-transition'

export default function Project(){
    const Project = [<CardTwo/>, <Card/>, <CardThree/>];
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            30000, // every 30 seconds
          );
          return () => clearTimeout(intervalId);
    }, []);
    return(
        <>
            <div>
                <TextTransition springConfig={presets.wobbly}>{Project[index % Project.length]}</TextTransition>
            </div>
        </>
    )
}