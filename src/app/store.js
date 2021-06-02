import { configureStore } from "@reduxjs/toolkit";
import databaseReducer from "../features/database/databaseSlice";
import { saveState, loadState } from "../features/database/localStorage";
import throttle from "lodash.throttle";

//Redux store for state management
//Only one reducer (database), as most of the logic will only
//interact with database
const store = configureStore({
  reducer: {
    database: databaseReducer,
  },
  preloadedState: loadState(),
});
// We'll subscribe to state changes, saving the store's state to the browser's
// local storage. We'll throttle this to prevent excessive work.
store.subscribe(throttle(() => saveState(store.getState()), 1000));

export default store;
