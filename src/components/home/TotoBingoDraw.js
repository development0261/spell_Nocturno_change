import React from "react"
import { makeStyles } from "@material-ui/core/styles"
// import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"

import Button from "@material-ui/core/Button"
// import Table from "../components/Table"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Table from "../Table"
import Icons from "./Icons"
import bgImg from "../../images/bg3.png"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: "1rem 0.2rem 0 0.2rem",
    fontFamily: "Montserrat, sans-serif",
    [theme.breakpoints.down("sm")]: {
      padding: "6px",
    },
  },
  Border: {
    backgroundImage: `url(${bgImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    border: "1px solid #dbecf8",
    borderRadius: "4px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  Container: {
    backgroundColor: "#262d31",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0.1rem",
    [theme.breakpoints.down("sm")]: {
      padding: "0.2rem",
    },
  },
  h3: {
    color: "#ffffff",
    fontWeight: 600,
    fontSize: "1.3rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
      textAlign: "left",
      margin: 0,
      padding: 0,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
  },
  Img: {
    margin: "0.9rem",
  },
  brincoContainer: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#4163ee",
    [theme.breakpoints.down("xs")]: {
      //   height: 80,
    },
  },
  brinco: {
    width: "25%",
    margin: "1rem",
    [theme.breakpoints.down("xs")]: {
      width: "25%",
      //   height: "15%",
    },
  },
  Premiados: {
    display: "flex",
    flexDirection: "column",
    // margin: "2rem 0",
    // [theme.breakpoints.down("xs")]: {
    //   margin: "1.5rem 0",
    // },
  },

  PremiadosHeading: {
    display: "flex",
    textAlign: "center",
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Montserrat', sans-serif;",
    fontWeight: "bolder",
    fontSize: "2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2rem",
    },
  },
  span: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    fontSize: "2rem",
    borderRadius: 50,
    padding: "1.5rem",
    color: "white",
    margin: "4px",
    width: "70px",
    height: "70px",
    position: "relative",
  },
  avatar: {
    // flexBasis: "15%",
    fontWeight: "bold",
    fontFamily: "'Montserrat', sans-serif;",
    backgroundColor: "#4163ee",
    marginTop: "15px",
    marginRight: "10px",
    marginLeft: "10px",
    boxShadow: "5px",
    width: "84px",
    height: "84px",
    // [theme.breakpoints.down("md")]: {
    //   width: theme.spacing(9),
    //   height: theme.spacing(9),
    // },
    [theme.breakpoints.down("sm")]: {
      width: "50px",
      height: "50px",
    },
    [theme.breakpoints.down("xs")]: {
      // flexBasis: "18%",
      width: "40px",
      height: "40px",
    },
  },
  circle: {
    position: "absolute",
    margin: "0px -5px",
    [theme.breakpoints.down("sm")]: {
      margin: "0px 0px",
    },
  },
  numbers: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "3rem",
    padding: "0px 15px",
    [theme.breakpoints.down("xs")]: {
      margin: "1rem",
      padding: "0",
    },
  },
  icons: {
    marginBottom: "5rem",
    backgroundColor: "transparent",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "2rem",
    },
  },
  Btn: {
    width: "fit-content",
    padding: "1rem 3rem",
    // border: "1px solid #fff",
    color: "white",
    borderRadius: "50px",
    fontSize: "2rem",
    outline: "none",
    // marginTop: "3rem",
    backgroundColor: "#4163ee",
    fontWeight: 700,
    [theme.breakpoints.down("sm")]: {
      padding: "0.5rem 2rem",
      fontSize: "1.5rem",
      marginTop: "1.5rem",
      borderRadius: "50px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0.5rem 2rem",
      fontSize: "1.5rem",
      marginTop: "1rem",
      borderRadius: "50px",
    },
  },
  Pozo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    height: "25vh",
    margin: "30px 0 0 0",
    padding: "25px 10px",
    textAlign: "center",
    // [theme.breakpoints.down("sm")]: {
    //   height: "25vh",
    //   padding: "px 10px",
    // },
  },
  Loader: {
    width: "25px",
    height: "25px",
    borderRadius: "50%",
    border: "6px solid white",
    marginRight: "10px",
    borderTopColor: "#fcc43e",
    transform: "rotate(45deg)",
  },
  timer: {
    fontSize: "1.5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.3rem",
    },
  },
  sort: {
    display: "flex",
    justifyContent: "space-around",
    margin: "30px 0px 50px 0px",
    padding: "5px 1.2rem",
    alignItems: "center",
  },
  sortSpan: {
    fontSize: "1.9em",
    fontWeight: "900",
    padding: "0 1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
  },

  sortStrong: {
    fontSize: "30px",
    fontWeight: "700",
    color: "#fff",
    backgroundColor: "orange",
    padding: "20px 1.8em",
    borderRadius: "40px",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 1.5em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1em",
      padding: "10px 1em",
    },
  },
  numRow: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    margin: "15px auto",
    padding: "0 1rem",
    flexWrap: "wrap",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  num: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "84px",
    height: "84px",
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: "50% ",
    fontSize: "30px",
    fontWeight: "700",
    lineHeight: "84px",
    textAlign: "center",

    color: "black",

    [theme.breakpoints.down("sm")]: {
      width: "70px",
      height: "70px",
      fontSize: "24px",
      lineHeight: "50px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "40px",
      height: "40px",
      lineHeight: "40px",
      fontSize: "18px",
    },
  },
  alert: {
    fontSize: "12px",
    position: "absolute",
    top: "-25px",
    left: "0px",
    lineHeight: "15px",
    color: "#000",
  },
  plusDesc: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "95%",
    padding: "5px .8rem",
    marginBottom: "20px",

    [theme.breakpoints.down("xs")]: {
      width: "90%",
      padding: "5px 0",
    },
  },
  row: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    borderBottom: "2px solid #000",
    padding: "10px",
    margin: "0 15px",
    // flexDirection: "column",
  },
  col: {
    padding: "0 10px",
    flexBasis: "50%",
  },
  para: {
    margin: 0,
    fontSize: "1.2rem",
    fontWeight: "bolder",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7rem",
    },
  },
  h4: {
    margin: 0,
    fontSize: "1.6em",
    fontWeight: "bolder",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.4rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.9rem",
    },
  },
  h5: {
    margin: 0,
    fontSize: "1.3rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
  },
  h6: {
    margin: 0,
    fontSize: "1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7rem",
    },
  },
  icons: {
    marginBottom: "5rem",
    backgroundColor: "transparent",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "2rem",
    },
  },
  separator: {
    height: "10px",
    outline: "none",
    border: "none",
  },
  centerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontWeight: "bold",
    margin: 0,
  },
  horizontalContainer: {
    display: "flex",
    padding: "0 1rem",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cont: {
    flexBasis: "33%",
    display: "flex",
    justifyContent: "center",
    borderRight: "1px solid #000",
    padding: "5px 12px",
    fontSize: "1.6em",
    fontWeight: "500",
    // [theme.breakpoints.down("sm")]: {
    //   fontSize: "1.1em",
    // },
    [theme.breakpoints.down("xs")]: {
      fontSize: ".8em",
      padding: "5px 2px",
    },
  },
  greenContainer: {
    //   width: 100%,
    padding: "20px 10px",
    margin: "15px 1.2rem",
    borderRadius: "5px",
    backgroundColor: "rgba(73,199,101,0.7)",
  },
}))

function LiveStream({
  //   wins,
  img,
  //   sort,
  //   tableHeaders,
  //   tableData,
  prize,
  //   color,
  backgroundColor,
  prizeHeadColor,
}) {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      totobingo: file(relativePath: { eq: "totobingo.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  let image = data.totobingo.childImageSharp.fluid
  let wins = [10, 20, 30, 40, 50, 60]
  let win15 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]
  let color = "#78B137"
  let tableHeaders1 = ["Vendida En Procincia", "Localidad", "Agencia"]
  let tableData1 = [
    {
      rowData: ["Cordoba", "San Francisco", "001124"],
    },
  ]
  let sort = { sorteo: "1", Fetcha: "1,000,000" }
  return (
    <div className={classes.root} id={"bronco-section"}>
      <div className={classes.Border}>
        <div className={classes.Container}>
          <div className={classes.Loader}></div>
          <Typography variant="h4" component="h2" className={classes.h3}>
            Próximo sorteo: <span className={classes.timer}>1</span> día{" "}
            <span className={classes.timer}>17</span> horas{" "}
            <span className={classes.timer}>32</span> minutos
          </Typography>
        </div>
        <div
          className={classes.brincoContainer}
          style={{ backgroundColor: "transparent" }}
        >
          <Img
            fluid={image}
            className={classes.brinco}
            fadeIn={false}
            alt="Brinco de hoy"
          />
        </div>
        <div className={classes.greenContainer}>
          <div className={classes.Premiados}>
            <Typography
              variant="h4"
              component="h3"
              className={classes.PremiadosHeading}
            >
              Gana o Gana
            </Typography>
          </div>
          <div className={classes.numRow}>
            {wins.map((a, i) => {
              return (
                <div
                  style={{
                    flexBasis: "15%",
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "30px",
                  }}
                >
                  <div className={classes.num}>{a}</div>
                </div>
              )
            })}
          </div>
          <h2 className={classes.centerContainer}>Juego 1</h2>
        </div>
        {sort && (
          <div className={classes.sort}>
            <span className={classes.sortSpan}>Cant. de ganadores:</span>
            <strong
              className={classes.sortStrong}
              style={{
                backgroundColor: sort.color ? `${sort.color}` : `${color}`,
              }}
            >
              {sort.sorteo}
            </strong>{" "}
            <span className={classes.sortSpan}>Premio C/U:</span>
            <strong
              className={classes.sortStrong}
              style={{
                backgroundColor: sort.color ? `${sort.color}` : `${color}`,
              }}
            >
              {sort.Fetcha}
            </strong>
          </div>
        )}
        <div style={{ padding: "0 1.1rem", marginTop: "20px" }}>
          <Table headers={tableHeaders1} data={tableData1} color={color} />
        </div>
      </div>
      <div className={classes.icons}>
        <Icons />
      </div>
    </div>
  )
}

export default LiveStream
