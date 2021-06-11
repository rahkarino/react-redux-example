import { useSelector, useDispatch } from "react-redux";
import * as actionTypes from "./actions";

const CounterFunction = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <h3>counter-function</h3>
      <p>
        Counter: <b>{counter}</b>
      </p>
      <button onClick={() => dispatch({ type: actionTypes.INCREMENT })}>
        +1
      </button>
      <button onClick={() => dispatch({ type: actionTypes.DECREMENT })}>
        -1
      </button>
      <button
        onClick={() => dispatch({ type: actionTypes.ADD5, payload: 5 })}
      >
        +5
      </button>
      <button
        onClick={() => dispatch({ type: actionTypes.SUB5, payload: 5 })}
      >
        -5
      </button>
    </>
  );
};

export default CounterFunction;
