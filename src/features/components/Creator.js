import React, { useState } from "react";
import { Link } from "react-router-dom"; //react router
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
  const classes = useStyles();
  const { handleSubmit, reset, setValue, control } = useForm();
  const [data, setData] = useState(null);

  function JaraPenis(data) {
    setData(data);
    console.log(data);
  }
  return (
    <div className={classes.creatorWrapper}>
      <div className={classes.formWrapper}>
        <Typography variant="h3" gutterBottom>
          Create your astronaut!
        </Typography>
        <form onSubmit={handleSubmit((data) => JaraPenis(data))}>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            render={({ field }) => <Input {...field} />}
          />
          <Controller
            name="lastName"
            control={control}
            render={({ field }) => <Input {...field} />}
          />

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Controller
              name="MUIPicker"
              control={control}
              render={({ field: { ref, ...rest } }) => (
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Date picker dialog"
                  format="MM/dd/yyyy"
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                  {...rest}
                />
              )}
            />
          </MuiPickersUtilsProvider>

          <Controller
            name="superPower"
            control={control}
            render={({ field }) => <Input {...field} />}
          />

          <input type="submit" />
        </form>
      </div>
      <div className={classes.resultWrapper}>vysledek</div>
    </div>
  );
};

export default Creator;
