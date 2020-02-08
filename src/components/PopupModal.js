import { makeStyles } from "@material-ui/core/styles"
import React from "react"
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from "@material-ui/core/FormControlLabel"

const useStyles = makeStyles(theme => ({
  overlay: {
    zIndex: 10,
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: "rgba(0, 0, 0, 0.3)",
  },
  display: {
    background: "white",
    borderRadius: "15px",
    width: "90vw",
    maxWidth: 500,
    position: "absolute",
    top: "50%",
    left: "50%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "lightblue",
    transform: "translate(-50%, -50%)",
    zIndex: "20",
  },
  modalHeader: {
    width: "100%",
    marginTop: "3%",
    padding: "20px 1em",
    textAlign: "center",
    color: "#3A50B6",
    fontWeight: "600",
    fontSize: "1.9em",
    height: "6%",
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
      fontSize: "1.6em",
    },
  },
  separator: {
    width: "100%",
    border: "1px solid #93C9DF",
    margin: 0,
  },
  blueSeparator: {
    border: "2px solid #3B51B6",
    width: "60px",
    margin: "0 auto",
  },
  modalData: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "93%",
  },
  modalItem: {
    marginLeft: "15px",
    display: "flex",
    flexDirection: "row",
    padding: "15px",
    alignItems: "center",
    borderBottom: "1px solid #93C9DF",
    fontSize: "1.8em",
    fontWeight: "400",
    color: "black",
    ":nth-child()": {
      borderTop: "1px solid lightgrey",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
      fontWeight: "500",
      marginLeft: "7px",
      padding: "5px",
    },
  },
  checkbox: {
    padding: "10px",
    marginRight: "20px",
    [theme.breakpoints.down("sm")]: {
      marginRight: "10px",
    },
  },
  icon: {
    borderRadius: 5,
    width: 28,
    height: 28,
    backgroundColor: "#AEAEAE",
    "input:hover ~ &": {
      backgroundColor: "#AEAEAE",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    backgroundColor: "#AEAEAE",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 28,
      height: 28,
      borderRadius: 5,
      backgroundColor: "#3B51B6",
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
    "&:after": {
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3",
    },
  },
}))

const PopupModal = () => {
  const classes = useStyles()

  const data = [
    "Quiniela",
    "Quiniela Primera",
    "Quiniela Matutina",
    "Quiniela Vespertina",
    "Quiniela Nocturna",
  ]
  return (
    <div className={classes.overlay}>
      <div className={classes.display}>
        <div className={classes.modalHeader}>Notify me about the lotteries</div>
        <hr className={classes.blueSeparator} />
        <hr className={classes.separator} />
        <div className={classes.modalData}>
          {data.map(item => {
            return (
              <div className={classes.modalItem}>
                <FormControlLabel
                  value="end"
                  control={
                    <Checkbox
                      color="primary"
                      className={classes.checkbox}
                      checkedIcon={
                        <span className={(classes.icon, classes.checkedIcon)} />
                      }
                      icon={<span className={classes.icon} />}
                    />
                  }
                  //   label={item}
                  labelPlacement="end"
                />{" "}
                {item}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PopupModal
