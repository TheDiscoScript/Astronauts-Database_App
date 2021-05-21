import { configureStore } from "@reduxjs/toolkit";
import databaseReducer from "../features/database/databaseSlice";

//Redux store for state management
//Only one reducer (database), as most of the logic will only
//interact with database
export default configureStore({
  reducer: {
    database: databaseReducer,
  },
});
