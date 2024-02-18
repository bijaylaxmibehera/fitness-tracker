import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllFoods } from "../action";
import { deleteFood } from "../action";

export const Food=()=>{
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loading);
    const foods=useSelector((state)=>state.foods.foods);

    useEffect(()=>{
        dispatch(getAllFoods());
    },[dispatch])
    return(
        <>
        <h1>Food page</h1>
        {loading ? (
        <p>Loading...</p>
      ) : (
        <>
           {foods ? (
            <ul>
              {foods.map((food) => {
                const {_id,foodName,calories, proteins,carbohydrates,fats}=food;
                return (
                    <li key={_id}>
                        <p>Name: {foodName}</p>
                        <p>Calories:{calories}cal</p>
                        <p>Proteins:{proteins}g</p>
                        <p>Carb: {carbohydrates}g</p>
                        <p>Fats:{fats}g</p>
                        <button onClick={()=>dispatch(deleteFood(_id))}>Delete</button>
                    </li>
                )
              })}
            </ul>
          ) : (
            <p>No food found.</p>
          )}
        </>
      )}
      <Link to="/food/add">
        <button>Add Food</button>
      </Link>
        </>
    )
}