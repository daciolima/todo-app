const INITIAL_STATE = {
  description: "",
  list: [],
};

// action é o que vem do arquivo todo.action.js
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "DESCRIPTION_CHANGED":
      return { ...state, description: action.payload };
    case "TODO_SEARCHED":
      return { ...state, list: action.payload };
    case "TODO_CLEAR":
      return { ...state, description: "" };
    default:
      return state;
  }
};
