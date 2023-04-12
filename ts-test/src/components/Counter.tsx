import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/";
import { plus, minus } from "../store/slice/counterSlice";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => {
    return state.counterSlice.value;
  });
  const addNumber = () => {
    dispatch(plus());
    console.log;
  };
  const minusNumber = () => {
    dispatch(minus());
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={addNumber}>+</button>
      <button onClick={minusNumber}>-</button>
    </div>
  );
}

export default Counter;
