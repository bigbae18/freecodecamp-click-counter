import { useState } from 'react';
import Button from './Button';
import './ClickCounter.css';

const ClickCounter = () => {
    const [count, setCount] = useState(0);

    const handleAddCount = () => {
        setCount(count+1);
    }
    const handleSubstractCount = () => {
        setCount(count-1);
    }
    const handleReset = () => {
        setCount(0);
    }

    return (
        <>
            <h1>{count}</h1>
            <div class="button-container">
                <Button handler={handleAddCount} isReset={false}>Click to Add 1!</Button>
                <Button handler={handleReset} isReset={true}>Reset to 0!</Button>
                <Button handler={handleSubstractCount} isReset={false}>Click to Substract 1!</Button>
            </div>
        </>
    )

}

export default ClickCounter;