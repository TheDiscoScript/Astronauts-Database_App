import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FaGithub } from "react-icons/fa";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(() => ({
  footer: {
    textAlign: "center",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <IconButton
        href="https://github.com/Willdooo"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub style={{ color: "#f8efd4" }} />{" "}
      </IconButton>

      <a
        href="https://linkedin.com/in/daniel-wollmann"
        target="_blank"
        rel="noreferrer"
      >
        Willdooo
      </a>
    </div>
  );
};

export default Footer;
