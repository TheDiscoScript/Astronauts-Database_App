import { createSlice, nanoid } from "@reduxjs/toolkit";

//initial state for first load - array of objects //and for testing
//object will have id, firstname, lastname, YoB, superpower
//+ object can have - photo, text
const initialState = [
  {
    id: "0",
    firstName: "Elon",
    lastName: "Musk",
    birth: "28.06.1971",
    superPower: "BigBrain",
    text: "",
    photo: "",
  },
  {
    id: "1",
    firstName: "Jeff",
    lastName: "Bezos",
    birth: "12.01.1964",
    superPower: "BigBrain",
    text: "",
    photo: "",
  },
];

//createSlice is from Redux toolkit and it simpliefies the process
//of creating reducers
//It is recommended by Redux as best and modern practice
//hence I am using it instead of pure Redux / Redux React only
const databaseSlice = createSlice({
  name: "database",
  initialState,
  reducers: {
    addAstronaut: {
      reducer(state, action) {
        //I can do this thanks to createSlice-Redux toolkit
        //This shouldn't/cannot be done in basic Redux
        state.push(action.payload);
      },
      prepare(firstName, lastName, birth, superPower) {
        return {
          payload: {
            //randomID
            id: nanoid(),
            firstName,
            lastName,
            birth,
            superPower,
          },
        };
      },
    },
  },
});
export const { addAstronaut } = databaseSlice.actions;

export default databaseSlice.reducer;
