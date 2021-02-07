const initialHome = {
  food: [],
};

export const homeReducer = (state = initialHome, action) => {
  if (action.type === 'SET_FOOD') {
    return {
      ...state,
      food: action.value,
    };
  }
  return state;
};
