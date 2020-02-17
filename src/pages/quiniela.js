import React from "react"

import Loadable from "react-loadable"
import Container from "@material-ui/core/Container"

import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import useWS from "../components/home/useWs"
import time from "../data/quiniela-time.json"
import city from "../data/quiniela-city.json"

const LoaderPlaceholder = () => (
  <div style={{ height: "100vh", width: "100vh" }}></div>
)

const LoadableHeader = Loadable({
  loader: () => import("../components/home/Header"),
  loading: () => <LoaderPlaceholder />,
})

const LoadableLiveStream = Loadable({
  loader: () => import("../components/home/LiveStreamExpand"),
  loading: () => <LoaderPlaceholder />,
})

const LoadablePozoEstimado = Loadable({
  loader: () => import("../components/home/PozoEstimado"),
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

const App = props => {
  const { pathname } = props.location
  const { data } = useWS()
  console.log("check datas", data)

  let displayData = []
  let pathArray = pathname.split("/")

  let colHeader
  let rowHeader
  let sepecificData
  let options
  let defaultOption

  // Get selected column header value
  if (time.includes(pathArray[2])) {
    colHeader = pathArray[2]
    if (pathArray[3]) {
      sepecificData = pathArray[3]
    }
  }

  // Get selected row header value
  if (city.includes(pathArray[2])) {
    rowHeader = pathArray[2]
    if (pathArray[3]) {
      sepecificData = pathArray[3]
    }
  }

  /*
    Data extraction according to row / column / specific cell
  */

  if (sepecificData) {
    // Specific cell data
    let temp = data.filter(d => {
      return rowHeader === d.name.toLowerCase().replace(" ", "")
    })
    displayData = temp[0]?.expand?.filter(d => {
      return d.name.toLowerCase().search(sepecificData) >= 0
    })
    // Table options
    options = data.map(val => {
      return val.name
    })
    // Default option value
    defaultOption = rowHeader
  } else if (rowHeader) {
    // Data specific to row header
    displayData = data.filter(d => {
      return (
        rowHeader ===
        d.name
          .toLowerCase()
          .trim()
          .replace(" ", "")
      )
    })
    // Table options
    options = data.map(val => {
      return val.name
    })
    // Default options value
    defaultOption = rowHeader
  } else {
    // Data specific to column header
    let temp = data?.map(item => {
      // console.log("tt", item)
      return item.expand
    })
    displayData = temp !== undefined && temp?.map(i => i)
    // Table options
    options = ["Primera", "Matutino", "Vespertino", "Nocturna"]
    // Default options value
    defaultOption = colHeader
  }

  // 0: Selected Column
  // 1: Selected Row 10
  // Selected specific cell
  let urlType = sepecificData ? 10 : colHeader ? 0 : 1

  const classes = useStyles()

  return (
    <LoadableLayout
      title={"Quiniela de hoy | Resultados de Quiniela - al instante"}
    >
      <div className={classes.maincontainer}>
        <LoadableHeader />
        <Container className={classes.container}>
          <Paper className={classes.root}>
            <LoadableLiveStream
              data={displayData}
              type={urlType}
              rowHeader={rowHeader}
              colHeader={colHeader}
              options={options}
              defaultOption={defaultOption}
              // timeZone={timeZone}
              // flag={isPathCity}
              // tName={timeName}
              // selectData={data}
            />
            {/* <LoadableRemind />  */}
            {/* <LoadablePozoEstimado /> */}
          </Paper>
        </Container>
        <LoadableFooter />
      </div>
    </LoadableLayout>
  )
}
export default App
