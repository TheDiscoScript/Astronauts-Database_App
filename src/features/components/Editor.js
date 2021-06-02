import React, { useState } from "react";
//react router
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
//react redux
import { useDispatch, useSelector } from "react-redux";
import { editAstronaut } from "../database/databaseSlice";
//react hook form
import { useForm, Controller } from "react-hook-form";
//form helpers
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
//Material-UI import
import { Button, Typography, Input } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
//
//
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
    paddingTop: "3rem",
    "@media (max-width:960px)": {
      flexDirection: "column",
    },
  },
  formWrapper: {
    display: "flex",
    justifyContent: "center",
    alignSelf: "baseline",
    width: "100%",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  formItem: {
    width: "50%",
    margin: "1rem",
  },
  resultWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  resultPaper: {
    width: "80%",
    alignSelf: "center",
    textAlign: "initial",
    padding: "1rem",
    "@media (max-width:960px)": {
      marginTop: "2rem",
    },
  },
  credentials: {
    padding: "1.5rem",
  },
  submitButton: {
    backgroundColor: "#36ff36",
    color: "#cc0a2c",
    margin: "0.5rem 1rem 1rem 1rem",
    padding: "0.5rem",
  },
}));

const Editor = ({ match }) => {
  //helpers
  const classes = useStyles(); //css
  const dispatch = useDispatch(); //redux toolkit
  const history = useHistory(); //for submit button Link (- with normal Link it wouldn't push to store)
  const { control, watch } = useForm(); //form
  //find our astronaut in store
  const { astronautId } = match.params;
  const theAstronaut = useSelector((state) =>
    state.database.find((astronaut) => astronaut.id === astronautId)
  );
  //state for this file
  const [firstName, setFirstName] = useState(theAstronaut.firstName);
  const [lastName, setLastName] = useState(theAstronaut.lastName);
  const [superPower, setSuperPower] = useState(theAstronaut.superPower);
  const [text, setText] = useState(theAstronaut.text);
  const onfirstNameChanged = (e) => setFirstName(e.target.value);
  const onlastNameChanged = (e) => setLastName(e.target.value);
  const onsuperPowerChanged = (e) => setSuperPower(e.target.value);
  const onTextChanged = (e) => setText(e.target.value);
  //birth - not working with form
  const [birth, setBirth] = useState(theAstronaut.birth);

  //implement wach - very useful!!
  const watchOptional = watch("showOptional", false); // when pass nothing as argument, you are watching everything

  //function for dispatch
  const helperEditFunction = () => {
    console.log("Checking if req is filled in");
    if (firstName && lastName && birth && superPower) {
      console.log("Going to dispatch");
      dispatch(
        editAstronaut({
          id: astronautId,
          firstName,
          lastName,
          birth,
          superPower,
          text,
        })
      );
      console.log("dispatched, going to homepage");
      history.push("/"); //This is awesome!
    }
  };

  return (
    <div className={classes.creatorWrapper}>
      <div className={classes.formWrapper}>
        <Paper style={{ width: "80%" }}>
          <Typography variant="h3" gutterBottom style={{ paddingTop: "1rem" }}>
            Edit your astronaut!
          </Typography>
          <form onSubmit={helperEditFunction} className={classes.form}>
            <Controller
              name="firstName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  className={classes.formItem}
                  {...field}
                  type="text"
                  placeholder="First name"
                  required
                  value={firstName}
                  onChange={onfirstNameChanged}
                />
              )}
            />
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <Input
                  className={classes.formItem}
                  {...field}
                  type="text"
                  placeholder="Last name"
                  required
                  value={lastName}
                  onChange={onlastNameChanged}
                />
              )}
            />

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Controller
                name="birth"
                control={control}
                render={({ field: { ref, ...rest } }) => (
                  <KeyboardDatePicker
                    //disabled - I am having problems
                    //with importing date value into
                    // UI
                    disabled
                    className={classes.formItem}
                    id="date-picker-dialog"
                    label="Date of birth"
                    format="dd/MM/yyyy"
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                    value={birth}
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
                <Input
                  className={classes.formItem}
                  {...field}
                  type="text"
                  placeholder="Superpower"
                  required
                  value={superPower}
                  onChange={onsuperPowerChanged}
                />
              )}
            />
            <div style={{ display: "flex", margin: "1rem" }}>
              <Typography variant="body2">Optional - </Typography>
              <Controller
                name="showOptional"
                control={control}
                render={({ field }) => (
                  <Input
                    style={{ marginLeft: "0.5rem" }}
                    {...field}
                    type="checkbox"

                    //this is bugged, if I use defaultChecked={true}
                    // it doesn't do anything, idk why
                  />
                )}
              />
            </div>
            <Controller
              name="text"
              control={control}
              render={({ field }) => (
                <>
                  {watchOptional ? (
                    <>
                      <textarea
                        className={classes.formItem}
                        placeholder="Few sentences about this person..."
                        {...field}
                        value={text}
                        onChange={onTextChanged}
                      />
                    </>
                  ) : (
                    ""
                  )}
                </>
              )}
            />
            <Button
              type="submit"
              className={classes.submitButton}
              variant="contained"
            >
              Submit
            </Button>
          </form>
        </Paper>
      </div>
      {/* end of form Div */}
      <div className={classes.resultWrapper}>
        {firstName || lastName || birth || superPower || text ? (
          <Paper elevation={3} className={classes.resultPaper}>
            <div style={{ textAlign: "center" }}>
              {firstName || lastName ? (
                <>
                  <Typography className={classes.credentials} variant="h3">
                    {firstName} {lastName}
                    <Divider />
                  </Typography>
                </>
              ) : (
                ""
              )}
            </div>

            {birth ? (
              <>
                <Typography variant="h4">Date of birth: {birth}</Typography>
              </>
            ) : (
              ""
            )}

            {superPower ? (
              <>
                <Typography variant="h4">Superpower: {superPower}</Typography>
              </>
            ) : (
              ""
            )}

            {text ? (
              <>
                <Divider />
                <Typography variant="h5">Who am I?</Typography>
                <Typography variant="body1">{text}</Typography>
              </>
            ) : (
              ""
            )}
          </Paper>
        ) : (
          ""
        )}
        <Link to="/">
          <Button
            size="Large"
            variant="contained"
            color="primary"
            style={{ marginTop: "2rem" }}
          >
            Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Editor;
