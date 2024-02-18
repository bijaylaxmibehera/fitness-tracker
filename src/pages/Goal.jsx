import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllGoals } from "../action";
import { deleteGoal } from "../action";

export const Goal = () => {
  const dispatch = useDispatch();
  const goals = useSelector((state) => state.goals.goals);
  const loading = useSelector((state) => state.loading);



  useEffect(() => {
    dispatch(getAllGoals());
  }, [dispatch]);

  return (
    <>
      <h1>Goal page</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {goals ? (
            <ul>
              {goals.map((goal) => {
                const {
                  _id,
                  goalName,
                  description,
                  targetDate,
                  targetCalories,
                  status,
                } = goal;
                return (
                  <li key={_id}>
                    <p>Name:{goalName}</p>
                    <p>Description:{description}</p>
                    <p>Target Date: {targetDate}</p>
                    <p>Target Calories:{targetCalories}cal</p>
                    <p>Status:{status}</p>
                    <button onClick={() => dispatch(deleteGoal(_id))}>
                      Delete
                    </button>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>No goal found.</p>
          )}
        </>
      )}
      <Link to="/goal/add">
        <button>Add Goal</button>
      </Link>
    </>
  );
};
