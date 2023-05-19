import { FC } from 'react';

type CountChangeArg = (value: number) => number;

interface CountBtnProps {
    counterChange: (callback: CountChangeArg) => void;
}

const Btn: FC<CountBtnProps> = ({ counterChange }) => {
    return <div>
        <button
            onClick={() => counterChange((value: number) => value + 1)}
            style={{ marginBottom: 10 }}>add counter</button>

        <button
            onClick={() => counterChange((value: number) => value - 1)}
        >dec</button>
    </div>


}

export default Btn;
