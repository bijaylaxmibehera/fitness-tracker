import axios from 'axios';

export const getAllExercises = () => async dispatch => {
  try {
    dispatch({ type: 'FETCH_DATA_LOADING' });
    const response = await axios.get('https://cd7b8463-8df7-4248-9bef-450b43fc0af3-00-1naowk5tpelu3.pike.replit.dev/api/v1/exercises');
    dispatch({ type: 'FETCH_EXERCISE_SUCCESS', payload: response.data });
  } catch (error) {
    console.error('Error fetching exercises:', error);
    dispatch({ type: 'FETCH_EXCERCISE_FAILURE' });
  }
}

export const getAllFoods = () => async dispatch => {
  try {
    dispatch({ type: 'FETCH_DATA_LOADING' });
    const response = await axios.get('https://cd7b8463-8df7-4248-9bef-450b43fc0af3-00-1naowk5tpelu3.pike.replit.dev/api/v1/food');
    dispatch({ type: 'FETCH_FOOD_SUCCESS', payload: response.data });
  } catch (error) {
    console.error('Error fetching food:', error);
    dispatch({ type: 'FETCH_FOOD_FAILURE' });
  }
}

export const getAllGoals = () => async dispatch => {
  try {
    dispatch({ type: 'FETCH_DATA_LOADING' });
    const response = await axios.get('https://cd7b8463-8df7-4248-9bef-450b43fc0af3-00-1naowk5tpelu3.pike.replit.dev/api/v1/goals');
    dispatch({ type: 'FETCH_GOAL_SUCCESS', payload: response.data });
  } catch (error) {
    console.error('Error fetching goals:', error);
    dispatch({ type: 'FETCH_GOAL_FAILURE' });
  }
}

export const addExercise = (newExercise) => async (dispatch) => {
  try {
    const response = await axios.post('https://cd7b8463-8df7-4248-9bef-450b43fc0af3-00-1naowk5tpelu3.pike.replit.dev/api/v1/exercises', newExercise, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    dispatch({ type: 'ADD_EXERCISE_SUCCESS', payload: response.data });
  } catch (error) {
    console.error('Error in adding exercise:', error);
    dispatch({ type: 'ADD_ENTRY_FAILURE', payload: error.message });
  }
}
export const addFood = (newFood) => async (dispatch) => {
  try {
    const response = await axios.post('https://cd7b8463-8df7-4248-9bef-450b43fc0af3-00-1naowk5tpelu3.pike.replit.dev/api/v1/food', newFood, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    dispatch({ type: 'ADD_FOOD_SUCCESS', payload: response.data });
  } catch (error) {
    console.error('Error in adding exercise:', error);
    dispatch({ type: 'ADD_ENTRY_FAILURE', payload: error.message });
  }
}
export const addGoal = (newGoal) => async (dispatch) => {
  try {
    const response = await axios.post('https://cd7b8463-8df7-4248-9bef-450b43fc0af3-00-1naowk5tpelu3.pike.replit.dev/api/v1/goals', newGoal, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    dispatch({ type: 'ADD_GOAL_SUCCESS', payload: response.data });
  } catch (error) {
    console.error('Error in adding exercise:', error);
    dispatch({ type: 'ADD_ENTRY_FAILURE', payload: error.message });
  }
}

export const deleteExercise = (exerciseId) => async (dispatch) => {
  try {
    await axios.delete(`https://cd7b8463-8df7-4248-9bef-450b43fc0af3-00-1naowk5tpelu3.pike.replit.dev/api/v1/exercises/${exerciseId}`);
    dispatch({ type: 'DELETE_EXERCISE_SUCCESS', payload: exerciseId });
  } catch (error) {
    console.error('Error deleting exercise:', error);
    dispatch({ type: 'DELETE_FAILURE', payload: error.message });
  }
}
export const deleteFood= (foodId) => async (dispatch) => {
  try {
    await axios.delete(`https://cd7b8463-8df7-4248-9bef-450b43fc0af3-00-1naowk5tpelu3.pike.replit.dev/api/v1/food/${foodId}`);
    dispatch({ type: 'DELETE_FOOD_SUCCESS', payload: foodId });
  } catch (error) {
    console.error('Error deleting exercise:', error);
    dispatch({ type: 'DELETE_FAILURE', payload: error.message });
  }
}
export const deleteGoal = (goalId) => async (dispatch) => {
  try {
    await axios.delete(`https://cd7b8463-8df7-4248-9bef-450b43fc0af3-00-1naowk5tpelu3.pike.replit.dev/api/v1/goals/${goalId}`);
    dispatch({ type: 'DELETE_GOAL_SUCCESS', payload: goalId});
  } catch (error) {
    console.error('Error deleting exercise:', error);
    dispatch({ type: 'DELETE_FAILURE', payload: error.message });
  }
}

