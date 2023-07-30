import ToDoApp from './ToDoApp'
import CoinTracker from './CoinTracker'
import MovieApp from './MovieApp'
import {useState} from 'react'

function Select() {
    const [choice, setChoice] = useState("0");
    const onSelect = (event) => setChoice(event.target.value);
    return (
        <div>
            <select onChange={onSelect} value={choice}>
                <option value="0">선택하시오.</option>
                <option value="1">ToDo</option>
                <option value="2">Coin Tracker</option>
                <option value="3">Movie</option>
            </select>
            <hr/>
            {choice === "1" ? <ToDoApp /> : null}
            {choice === "2" ? <CoinTracker /> : null}
            {choice === "3" ? <MovieApp /> : null}
        </div>
    )
}

export default Select