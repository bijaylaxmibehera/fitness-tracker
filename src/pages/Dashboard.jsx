import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllExercises, getAllFoods, getAllGoals } from "../action";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const exercises = useSelector((state) => state.exercises.exercises);
  const foods = useSelector((state) => state.foods.foods);
  const goals = useSelector((state) => state.goals.goals);

  useEffect(() => {
    dispatch(getAllExercises());
    dispatch(getAllFoods());
    dispatch(getAllGoals());
  }, [dispatch]);

  const totalCaloriesBurned = exercises
    ? exercises.reduce((acc, curr) => acc + (curr.calorieBurnRates || 0), 0)
    : 0;

  const totalCaloriesConsumed = foods
    ? foods.reduce((acc, curr) => acc + (curr.calories || 0), 0)
    : 0;

  const totalCaloriesGoal = goals
    ? goals.reduce((acc, curr) => acc + (curr.targetCalories || 0), 0)
    : 0;

  const remainingCaloriesToGoal = totalCaloriesGoal - totalCaloriesBurned;

  return (
    <>
      <h1>Dashboard</h1>
      <div>Total Calories burnt: {totalCaloriesBurned}</div>
      <div>Total Calories consumed: {totalCaloriesConsumed}</div>
      <div>Total Calories goal: {totalCaloriesGoal}</div>
      <div>Remaining Calories to goal: {remainingCaloriesToGoal}</div>
    </>
  );
};
