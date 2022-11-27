
import { createStore } from "redux";
import rootReducers from "./reducer";

const saveToLocalStorage = (state) => {
    try {
      localStorage.setItem('state', JSON.stringify(state));
    } catch (e) {
      console.error(e);
    }
  };
  
  const loadFromLocalStorage = () => {
    try {
      const stateStr = localStorage.getItem('state');
      return stateStr ? JSON.parse(stateStr) : undefined;
    } catch (e) {
      console.error(e);
      return undefined;
    }
  };

  const persistedStore = loadFromLocalStorage();

  

const store = createStore(rootReducers, persistedStore);

store.subscribe(() => {
    saveToLocalStorage(store.getState());
  });

export default store;