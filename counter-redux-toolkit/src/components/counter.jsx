import { useDispatch } from "react-redux";
import { decrement, increment, incrementByValue } from "../redux/counterSlice";

export default function Counter() {
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };

    const handleIncrementByValue = (vl) => {
        dispatch(incrementByValue(vl));
    };

    return (
        <div>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={() => handleIncrementByValue(3)}>
                Increment by value
            </button>
        </div>
    );
}
