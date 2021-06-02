import React from "react";
//react router
import { Link } from "react-router-dom";
//react Redux
import { clearAll, addDummies } from "../database/databaseSlice";
import { useDispatch } from "react-redux";
//Components
import Grid from "./buildingBlocks/Grid";
//Material-UI import
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import DescriptionIcon from "@material-ui/icons/Description";
import AddIcon from "@material-ui/icons/Add";
//CSS
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  homeWrapper: {
    width: "65%",
    textAlign: "center",
    minHeight: "100vh",
  },
  buttonWrappers: { padding: "1.5rem" },
  buttonsSmaller: { padding: "0.5rem", margin: "1rem" },
  buttonAdd: { padding: "1rem" },
}));

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  //dispatches
  const helperClearAll = () => {
    console.log("Clearing the store");
    dispatch(clearAll());
  };
  const helperAddDummies = () => {
    console.log("Adding Items into the store");
    dispatch(addDummies());
  };

  return (
    <div className={classes.homeWrapper}>
      <Typography variant="h1" gutterBottom>
        Awesome Astronauts
      </Typography>
      <Typography variant="h3" gutterBottom>
        welcome to AA-database
      </Typography>
      <div className={classes.buttonWrappers}>
        <Link to="/creator">
          <Button
            size="Large"
            variant="contained"
            color="primary"
            className={`${classes.buttonAdd} hvr-grow`}
            startIcon={<AddIcon />}
          >
            Add a New Astronaut
          </Button>
        </Link>
      </div>
      <div>
        <Grid />
      </div>
      <div className={classes.buttonWrappers}>
        <Button
          style={{ backgroundColor: "#ff8fb7" }}
          className={classes.buttonsSmaller}
          size="small"
          variant="contained"
          color="secondary"
          onClick={helperClearAll}
          startIcon={<DeleteIcon />}
        >
          Clear All
        </Button>
        <Button
          style={{ backgroundColor: "rgb(108, 122, 193)" }}
          className={classes.buttonsSmaller}
          size="small"
          variant="contained"
          color="secondary"
          onClick={helperAddDummies}
          startIcon={<DescriptionIcon />}
        >
          Create Dummies
        </Button>
      </div>
    </div>
  );
};

export default Home;
