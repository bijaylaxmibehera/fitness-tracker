import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addFood } from "../action";

export const AddFood=()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const initialState={
        foodName:"",
        calories:0,
        proteins:0,
        carbohydrates:0,
        fats:0
    };
    const [foodData,setFoodData]=useState(initialState);

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        dispatch(addFood(foodData));
        setFoodData(initialState);
        navigate("/food");
    }
    return(
        <>
        <form onSubmit={handleFormSubmit}>
        <div>
        <label>Food Name: </label>
        <input
          type="text"
          value={foodData.foodName}
          onChange={(e) => setFoodData({ ...foodData, foodName: e.target.value })}
          required
        />
      </div>
      <div>
        <label>Calories (in cal): </label>
        <input
          type="number"
          value={foodData.calories}
          onChange={(e) => setFoodData({ ...foodData, calories: e.target.value })}
          required
        />
      </div>
      <div>
        <label>Proteins (in gm): </label>
        <input
          type="number"
          value={foodData.proteins}
          onChange={(e) => setFoodData({ ...foodData,proteins: e.target.value })}
          required
        />
      </div>
      <div>
        <label>Carbohydrates (in gm): </label>
        <input
          type="number"
          value={foodData.carbohydrates}
          onChange={(e) => setFoodData({ ...foodData, carbohydrates: e.target.value })}
          required
        />
      </div>
      <div>
        <label>Fats (in gm): </label>
        <input
          type="number"
          value={foodData.fats}
          onChange={(e) => setFoodData({ ...foodData, fats: e.target.value })}
          required
        />
      </div>
            <button type="submit">Add</button>
        </form>
        </>
    )
}