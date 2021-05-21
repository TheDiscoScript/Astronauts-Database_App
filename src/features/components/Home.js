import React from "react";
import { Link } from "react-router-dom"; //react router
//Components
import Grid from "./buildingBlocks/Grid";
//Material-UI import
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
//CSS
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.homeWrapper}>
      <Typography variant="h1" gutterBottom>
        Awesome Astronauts
      </Typography>
      <Typography variant="h3" gutterBottom>
        welcome to AA-database
      </Typography>
      <div>
        <Button size="small" variant="contained" color="secondary">
          Clear All
        </Button>
        <Link to="/creator">
          <Button size="Large" variant="contained" color="primary">
            Add a New Astronaut
          </Button>
        </Link>
        <Button size="small" variant="contained" color="secondary">
          Create Dummies
        </Button>
      </div>
      <div>
        <Grid />
      </div>
    </div>
  );
};

export default Home;
