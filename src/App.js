import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";
function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="main">
      <div className="container">
        <h1 className="heading">Counter using Redux</h1>
        <div className="counterDiv">
          <button className="button-left" onClick={() => dispatch(decNumber())}>
            -
          </button>
          <div>
            <span>{myState}</span>
          </div>
          <button
            className="button-right"
            onClick={() => dispatch(incNumber())}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
