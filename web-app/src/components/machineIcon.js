// import makeStyles from "@mui/styles/"
import { makeStyles } from "@mui/styles";
// import ModeCommentIcon from "@mui/icons-material/PrecisionManufacturing";
import Brightness1Icon from "@mui/icons-material/Brightness1";
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Typography } from "@mui/material";
const useStyles = makeStyles({
  root: {
    position: "relative",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: "2.5em",
  },
  count: {
    position: "absolute",
    lineHeight: 1,
    color: "#fff",
    top: "0.8em",
    fontSize: "1em",
    fontWeight: "bolder",
  },
});

export function MachineWithNumber({ size = 18, count = 0 }) {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ fontSize: size }}>
      <Brightness1Icon
        fontSize="large"
        color="secondary"
        className={classes.icon}
      />
      <Typography component="span" className={classes.count}>
        {count}
      </Typography>
    </div>
  );
}
