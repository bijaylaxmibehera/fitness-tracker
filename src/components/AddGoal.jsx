import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addGoal } from "../action";

export const AddGoal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialState = {
    goalName: "",
    description: "",
    targetDate: "",
    targetCalories: 0,
    status: "in progress",
  };
  const [goalData, setGoalData] = useState(initialState);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addGoal(goalData));
    setGoalData(initialState);
    navigate("/goal");
  };
  return (
    <>
      <h1>Add Goal</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Goal Name:</label>
          <input
            type="text"
            value={goalData.goalName}
            onChange={(e) =>
              setGoalData({ ...goalData, goalName: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label>Goal Description:</label>
          <input
            type="text"
            value={goalData.description}
            onChange={(e) =>
              setGoalData({ ...goalData, description: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label>Goal Target Date:</label>
          <input
            type="date"
            value={goalData.targetDate}
            onChange={(e) =>
              setGoalData({ ...goalData, targetDate: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label>Target Calories (in cal):</label>
          <input
            type="number"
            value={goalData.targetCalories}
            onChange={(e) =>
              setGoalData({ ...goalData, targetCalories: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label>Goal Status:</label>
          <select
           value={goalData.status}
           onChange={(e) =>
             setGoalData({ ...goalData,status: e.target.value })
           }
            required
          >
            <option value="in Progress">In Progress</option>
            <option value="achieved">Achieved</option>
            <option value="abandoned">Abandoned</option>
          </select>
        </div>
        <button type="submit">Add</button>
      </form>
    </>
  );
};
