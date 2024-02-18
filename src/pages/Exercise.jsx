import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllExercises } from "../action";
import { deleteExercise } from "../action";

export const Exercise = () => {
  const dispatch = useDispatch();
  const exercises = useSelector((state) => state.exercises.exercises);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(getAllExercises());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteExercise(id));
  };
  return (
    <>
      <h1>Exercise</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
           {exercises ? (
            <ul>
              {exercises.map((exercise) => (
                <li key={exercise._id}>
                  {exercise.exerciseName} - {exercise.duration} min
                  <button onClick={() => handleDelete(exercise._id)}>Delete</button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No exercises found.</p>
          )}
        </>
      )}
      <Link to="/exercise/add">
        <button>Add Exercise</button>
      </Link>
    </>
  );
};
