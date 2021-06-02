import { createSlice, nanoid } from "@reduxjs/toolkit";
import dummies from "./databaseDummies";
//initial state for first load - array of objects //and for testing
//object will have id, firstname, lastname, YoB, superpower
//+ object can have - photo, text
const initialState = [
  //for testing purposes
  {
    id: "itsme",
    firstName: "Laika",
    lastName: "the Dog",
    birth: "03/11/1957",
    superPower: "First Dog in Space",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Etiam posuere lacus quis dolor. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Etiam commodo dui eget wisi. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam.",
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
        console.log("The action is: ");
        console.log(action);
        state.push(action.payload);
      },
      prepare(firstName, lastName, birth, superPower, text) {
        return {
          payload: {
            //randomID
            id: nanoid(),
            firstName,
            lastName,
            birth,
            superPower,
            text,
          },
        };
      },
    },

    removeAstronaut(state, action) {
      const id = action.payload;
      //testing for myself to better understand the logic behit reduxtoolkit
      console.log(action); //Object { type: "database/removeAstronaut", payload: "0" }
      console.log(action.payload); //0
      console.log(id); // 0
      //simple filter function that returns all items except item with certain ID
      return state.filter((astronaut) => astronaut.id !== id);
    },

    editAstronaut(state, action) {
      const { id, firstName, lastName, birth, superPower, text } =
        action.payload;
      console.log("Action payload is: " + action.payload);
      const editingAstronaut = state.find((astronaut) => astronaut.id === id);
      if (editingAstronaut) {
        console.log("astronaut found");
        editingAstronaut.firstName = firstName;
        editingAstronaut.lastName = lastName;
        editingAstronaut.birth = birth;
        editingAstronaut.superPower = superPower;
        editingAstronaut.text = text;
      } else {
        console.log("no astronaut found");
      }
    },
    clearAll(state, action) {
      //not sure if this is the proper way to do things, but it works
      return (state = []);
    },
    //not sure if this is the proper way to do things, but it works
    addDummies(state, action) {
      dummies.forEach((dummy) => state.push(dummy));
      // return state.push(dummies);
    },
  },
});
export const {
  addAstronaut,
  removeAstronaut,
  editAstronaut,
  clearAll,
  addDummies,
} = databaseSlice.actions;

export default databaseSlice.reducer;
