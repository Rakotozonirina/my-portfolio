import React,{useState, useEffect} from "react"
import Card from "../Asset/Card"
import CardTwo from "../Asset/CardTwo"
import CardThree from "../Asset/CardThree"
import CardFour from "../Asset/CardFour"
import TextTransition, { presets } from 'react-text-transition'

export default function Project(){
    const Project = [<CardTwo/>, <Card/>, <CardThree/>, <CardFour/>];
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
            <div className="max-sm:border max-sm:border-red-400">
                <TextTransition springConfig={presets.wobbly}>{Project[index % Project.length]}</TextTransition>
            </div>
        </>
    )
}