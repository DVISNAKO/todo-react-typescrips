import './style.css'
import { useState } from 'react';
import Hello from '../Hello';
import Btn from '../Btn';
import Count from '../Counter';

const Main = () => {
    const [counter, counterChange] = useState<number>(0);

    return <div className="main">
        <Hello/>
        <Btn counterChange={counterChange}/>
        <Count counter={counter}/>
    </div>
}

export default Main;