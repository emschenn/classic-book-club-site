import { createContext, useContext, useReducer } from "react";

const CategoryContext = createContext();

const ACTIONS = {
  TOGGLE_CHILD_CAT: "toggleChildCat",
  SET_CHILD_CAT: "setChildCat",
  CLEAR_ALL_CAT: "clearAllCat",
  SET_PARENT_CAT: "setParentCat",
};

const reducer = (catState, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_CHILD_CAT: {
      const cat = action.payload;
      const { children } = catState;
      return {
        ...catState,
        children: children.includes(cat)
          ? children.filter((i) => i !== cat)
          : [...children, cat],
      };
    }
    case ACTIONS.SET_CHILD_CAT: {
      return { ...catState, children: action.payload };
    }
    case ACTIONS.SET_PARENT_CAT: {
      return { ...catState, parent: action.payload };
    }
    case ACTIONS.CLEAR_ALL_CAT: // clear cat filter
      return { parent: undefined, children: [] };
    default:
      return catState;
  }
};

export function CategoryStateProvider({ children }) {
  const [catState, dispatchCats] = useReducer(reducer, {
    parent: undefined,
    children: [],
  });

  return (
    <CategoryContext.Provider value={[catState, dispatchCats]}>
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategoryState() {
  return useContext(CategoryContext);
}
