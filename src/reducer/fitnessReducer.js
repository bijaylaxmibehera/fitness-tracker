export const initialState = {
  exercises: [],
  foods: [],
  goals: [],
  loading: false,
  error: null
}

export const fitnessReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_EXERCISE_SUCCESS':
      return {
        ...state,
        exercises: action.payload,
        loading: false,
        error: null
      }

    case 'FETCH_EXCERCISE_FAILURE':
      return {
        ...state,
        loading: false,
        error: 'Error in fetching exercise data'
      }
    case 'FETCH_FOOD_SUCCESS':
      return {
        ...state,
        foods: action.payload,
        loading: false,
        error: null
      }
    case 'FETCH_FOOD_FAILURE':
      return {
        ...state,
        loading: false,
        error: 'Error in fetching food data'
      }
    case 'FETCH_GOAL_FSUCCESS':
      return {
        ...state,
        goals: action.payload,
        loading: false,
        error: null
      }
    case 'FETCH_GOAL_FAILURE':
      return {
        ...state,
        loading: false,
        error: 'Error in fetching goal data'
      }
    case 'FETCH_DATA_LOADING':
      return {
        ...state,
        loading: true
      }
    case 'ADD_EXERCISE_SUCCESS':
      return {
        ...state,
        exercises: [...state.exercises, action.payload],
        loading: false,
        error: null
      }
    case 'ADD_FOOD_SUCCESS':
      return {
        ...state,
        foods: [...state.foods, action.payload],
        loading: false,
        error: null
      }
    case 'ADD_GOAL_SUCCESS':
      return {
        ...state,
        goals: [...state.goals, action.payload],
        loading: false,
        error: null
      }
    case 'ADD_ENTRY_FAILURE':
      return {
        ...state,
        loading: false,
        error: 'Error adding entry data'
      }
    case 'DELETE_EXERCISE_SUCCESS':
      return {
        ...state,
        exercises: state.exercises.filter(({ _id }) => _id !==action.payload)
      }
    case 'DELETE_FOOD_SUCCESS':
      return {
        ...state,
        foods: state.foods.filter(({ _id }) => _id !== action.payload)
      }
    case 'DELETE_GOAL_SUCCESS':
      return {
        ...state,
        goals: state.goals.filter(({ _id }) => _id !== action.payload)
      }
    case 'DELETE_FAILURE':
      return{
        ...state,
        loading: false,
        error: 'Error deleting data'
      }
    default:
      return state
  }
}
