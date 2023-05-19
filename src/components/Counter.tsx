import {FC} from 'react'

interface CounterBtnProps {
    counter: number;
}

const Count: FC<CounterBtnProps> = ({counter}) => {
    return <div>Counter value: {counter}</div>
}

export default Count;