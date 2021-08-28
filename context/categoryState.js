import { createContext, useContext, useReducer } from "react";

const CategoryContext = createContext();

const ACTIONS = {
  TOGGLE_CAT: "toggleCat",
  SET_CAT: "setCat",
  CLEAR_CAT: "clearCat",
};

const reducer = (cats, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_CAT: {
      const cat = action.payload;
      return cats.includes(cat)
        ? cats.filter((i) => i !== cat)
        : [...cats, cat];
    }
    case ACTIONS.SET_CAT: // set specific subCat
      return action.payload;
    case ACTIONS.CLEAR_CAT: // clear cat filter
      return [];
    default:
      return cats;
  }
};

export function CategoryStateProvider({ children }) {
  const [cats, dispatchCats] = useReducer(reducer, []);

  return (
    <CategoryContext.Provider value={[cats, dispatchCats]}>
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategoryState() {
  return useContext(CategoryContext);
}
