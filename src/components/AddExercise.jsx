import { useState } from "react";
import {useDispatch } from "react-redux";
import { addExercise } from "../action";
import { useNavigate } from "react-router";

export const AddExercise=()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const initialState={
        exerciseName:"",
        duration:0
    };
    const [exerciseData,setExerciseData]=useState(initialState);
    const handleFormSubmit=(e)=>{
        e.preventDefault();
        dispatch(addExercise(exerciseData));
        setExerciseData(initialState);
        navigate("/exercise")
    }
    return (
        <>
        <form onSubmit={handleFormSubmit}>
            <div>
                <label>Exercise Name:</label>
                <select value={exerciseData.exerciseName} required onChange={(e)=>setExerciseData({...exerciseData, exerciseName:e.target.value})}>
                    <option value="walk">walk</option>
                    <option value="running">running</option>
                    <option value="cycling">cycling</option>
                    <option value="swimming">swimming</option>
                    <option value="yoga">yoga</option>
                    <option value="cardio">cardio</option>
                    <option value="weightlifting">weightlifting</option>
                    <option value="aerobicdance">aerobicdance</option>
                    <option value="hiking">hiking</option>
                    <option value="hiit">hiit</option>
                    <option value="planks">planks</option>
                    <option value="pushups">pushups</option>
                    <option value="squats">squats</option>
                </select>
            </div>
            <div>
                <label>Duration (in min):</label>
                <input type="number" required onChange={(e)=>setExerciseData({...exerciseData, duration:parseInt(e.target.value)})}/>
            </div>
            <button type="submit">Add</button>
        </form>
        </>
    )
}