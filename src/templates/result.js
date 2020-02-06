import React from "react"

import Loadable from "react-loadable"

import Container from "@material-ui/core/Container"

import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import { useStaticQuery, graphql } from "gatsby"
import TableDescription from "../components/TableDesc"
import TableDraw from "../components/TableDraw"
import Icons from "../components/home/Icons"

const LoaderPlaceholder = () => (
  <div style={{ height: "100vh", width: "100vh" }}></div>
)

const LoadableHeader = Loadable({
  loader: () => import("../components/home/Header"),
  loading: () => <LoaderPlaceholder />,
})

const LoadableNextDraw = Loadable({
  loader: () => import("../components/home/NextDraw"),
  loading: () => <LoaderPlaceholder />,
})

const LoadableBrincoDesc = Loadable({
  loader: () => import("../components/home/BrincoDesc"),
  loading: () => <LoaderPlaceholder />,
})

const LoadableRemind = Loadable({
  loader: () => import("../components/home/Remind"),
  loading: () => <LoaderPlaceholder />,
})

const LoadableFooter = Loadable({
  loader: () => import("../components/home/Footer"),
  loading: () => <LoaderPlaceholder />,
})

const LoadableLayout = Loadable({
  loader: () => import("../components/layout"),
  loading: () => <LoaderPlaceholder />,
})

const useStyles = makeStyles(theme => ({
  maincontainer: {
    width: "100%",
    fontFamily: "'Montserrat', sans-serif",
    backgroundColor: "#F3F4FE",
    [theme.breakpoints.up("md")]: {
      // backgroundColor: "#F3F4FE",
    },
  },
  container: {
    maxWidth: 750,
    margin: "auto",
    padding: 0,
  },
  root: {
    [theme.breakpoints.up("md")]: {
      boxShadow: "none",
    },
    // backgroundColor: "#F3F4FE",
  },
  icons: {
    marginBottom: "5rem",
    backgroundColor: "transparent",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "2rem",
    },
  },
}))

export const dataQuery = graphql`
  query($slug: String!) {
    iconarrow: file(relativePath: { eq: "iconarrow.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    allAllJson(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          slug
          heading
          name
          sort {
            Fetcha
            sorteo
            color
          }
          tableHeaders
          tableData {
            rowData
          }
          winningNums
          prize
          color
          description
        }
      }
    }
  }
`
const App = props => {
  const classes = useStyles()
  console.log("query data on page", dataQuery)
  console.log("prop data on page", props.data)
  const {
    description,
    heading,
    winningNums,
    sort,
    slug,
    tableHeaders,
    tableData,
    prize,
    color,
  } = props.data.allAllJson.edges[0].node

  console.log("template", heading)

  return (
    <LoadableLayout title={heading}>
      <div className={classes.maincontainer}>
        <LoadableHeader />
        <Container className={classes.container}>
          <Paper className={classes.root}>
            {/* <LoadableNextDraw /> */}
            {/* <LoadableBrincoDesc /> */}
            <TableDraw
              wins={winningNums}
              img={slug}
              sort={sort}
              tableHeaders={tableHeaders}
              tableData={tableData}
              prize={prize}
              color={color}
            />
            <LoadableRemind />
          </Paper>
          <div className={classes.icons}>
            <Icons />
          </div>
          <TableDescription descData={description} heading={heading} />
        </Container>
        <LoadableFooter />
      </div>
    </LoadableLayout>
  )
}
export default App
