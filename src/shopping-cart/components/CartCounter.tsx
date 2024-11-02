'use client'

import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, initCounter, substractOne } from "@/store/counter/counterSlice";
import { useEffect } from "react";


const getCounterFromServer = async (): Promise<number> => {
  const resp = await fetch('/api/counter')
  const {count} = await resp.json()
  return count
}

export const CartCounter = ({value = 0}) => {
  const count = useAppSelector(state => state.counter.count)
  const dispatch = useAppDispatch();
  

  // useEffect(() => {
  //   dispatch(initCounter(value))
  // }, [dispatch, value] )

  useEffect(() => {
    getCounterFromServer().then((data) => {
      dispatch(initCounter(data))
    });
  }, [dispatch] );
  
  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button
          className="t-black-btn"
          onClick={() => dispatch(substractOne())}
          disabled={count === 0}
        >
          -1
        </button>
        <button className="t-black-btn" onClick={() => dispatch(addOne()) }>
          +1
        </button>
      </div>
    </>
  );
};
