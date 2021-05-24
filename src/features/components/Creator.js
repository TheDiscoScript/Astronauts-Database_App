import React, { useState } from "react";
import { Link } from "react-router-dom"; //react router
//react redux
import { useDispatch } from "react-redux";
import { addAstronaut } from "../database/databaseSlice";

import { useForm, Controller } from "react-hook-form"; //react hook form
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
//Material-UI import
import { Button, Typography, TextField, Input } from "@material-ui/core";
//CSS
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
const useStyles = makeStyles(() => ({
  creatorWrapper: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
  },
  formWrapper: {
    width: "100%",
  },
  resultWrapper: {
    width: "100%",
  },
}));

const Creator = () => {
  //Will send to redux store
  const [data, setData] = useState(null);

  //helpers
  const classes = useStyles();
  const dispatch = useDispatch();
  const { handleSubmit, reset, control } = useForm();

  const helperFunction = (data) => {
    setData(data);
    if (data.firstName && data.lastName && data.superPower && data.birth) {
      dispatch(
        addAstronaut(
          data.firstName,
          data.lastName,
          createReadableBirth(),
          data.superPower
        )
      );
    }
    reset();

    //formating data
    function createReadableBirth() {
      return moment(data.birth).format("DD/MM/YYYY");
    }
  };
  //implement wach

  return (
    <div className={classes.creatorWrapper}>
      <div className={classes.formWrapper}>
        <Typography variant="h3" gutterBottom>
          Create your astronaut!
        </Typography>
        <form onSubmit={handleSubmit((data) => helperFunction(data))}>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input {...field} type="text" placeholder="First name" required />
            )}
          />
          <Controller
            name="lastName"
            control={control}
            render={({ field }) => (
              <Input {...field} type="text" placeholder="Last name" required />
            )}
          />

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Controller
              name="birth"
              control={control}
              render={({ field: { ref, ...rest } }) => (
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Date of birth"
                  format="dd/MM/yyyy"
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                  {...rest}
                  required
                />
              )}
              rules={{ required: true }}
            />
          </MuiPickersUtilsProvider>

          <Controller
            name="superPower"
            control={control}
            render={({ field }) => (
              <Input {...field} type="text" placeholder="Superpower" required />
            )}
          />
          <input type="submit" />
        </form>
      </div>
      <div className={classes.resultWrapper}>vysledek</div>
      <Link to="/">
        <Button size="Large" variant="contained" color="primary">
          goback{" "}
        </Button>
      </Link>
    </div>
  );
};

export default Creator;
