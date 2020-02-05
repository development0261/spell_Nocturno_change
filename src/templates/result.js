import React from "react"

import Loadable from "react-loadable"

import Container from "@material-ui/core/Container"

import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import { useStaticQuery, graphql } from "gatsby"
import TableDescription from "../components/TableDesc"
import TableDraw from "../components/TableDraw"

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
    [theme.breakpoints.up("md")]: {
      backgroundColor: "#F3F4FE",
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
    backgroundColor: "#F3F4FE",
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
          }
          tableHeaders
          tableData {
            rowData
          }
          winningNums
          prize
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
  } = props.data.allAllJson.edges[0].node

  console.log("template", heading)

  return (
    <LoadableLayout title={"Brinco | Resultados de Brinco - al instante"}>
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
            />
            <TableDescription descData={description} heading={heading} />
            <LoadableRemind />
          </Paper>
        </Container>
        <LoadableFooter />
      </div>
    </LoadableLayout>
  )
}
export default App
