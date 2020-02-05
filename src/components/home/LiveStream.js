import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Table from "./Table"
import Icons from "./Icons"
import Grid from "@material-ui/core/Grid"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import TableHeader from "./tableHeader"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: "1rem 0.2rem 0 0.2rem",
    [theme.breakpoints.down("sm")]: {
      padding: "6px",
    },
  },
  Border: {
    border: "1px solid #b5adad",
    borderRadius: "4px",
    overflow: "hidden",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  Container: {
    backgroundColor: "#e3003b",
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
    fontSize: "1.5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  ImgContainer: {
    margin: "0.1rem 0.5rem",
    width: 39,
    height: 26,
    [theme.breakpoints.down("xs")]: {
      width: 30,
      height: 21,
    },
  },
  Image: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#fcc43e",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      height: 80,
    },
  },
  quinielaImg: {
    width: "24%",
    [theme.breakpoints.down("xs")]: {
      width: "36%",
      height: 60,
    },
  },
}))

function LiveStream() {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      liveIcon: file(relativePath: { eq: "live_icon.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      quiniela: file(relativePath: { eq: "quinielas.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <div className={classes.root}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <div className={classes.Border}>
          {console.log("works", data)}
          <TableHeader />
          <div className={classes.Image}>
            <Img
              fluid={data.quiniela.childImageSharp.fluid}
              className={classes.quinielaImg}
              fadeIn={false}
              alt="Sorteando - en vivo ..."
            />
          </div>
          <Table />
        </div>
        <Icons />
      </Grid>
    </div>
  )
}

export default LiveStream
