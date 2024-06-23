import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decriment, increment } from "../Redux/Action";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <>
      <div className="mt-4">
        <h3 className="" style={{ margin: "8rem 0rem 2rem 0rem" }}>
          Counter Value: {count >= 0 && count}
        </h3>

        <button
          type="button"
          className="btn btn-warning m-4"
          onClick={() => dispatch(increment())}
        >
          Increment &nbsp; <i className="fa-solid fa-plus"></i>
        </button>

        <button
          type="button"
          className="btn btn-warning m-4"
          onClick={() => dispatch(decriment())}
        >
          Decrement &nbsp; <i className="fa-solid fa-minus"></i>
        </button>
      </div>
    </>
  );
};

export default Counter;
