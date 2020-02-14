import React from "react"

import Loadable from "react-loadable"
import Container from "@material-ui/core/Container"

import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import useWS from "../components/home/useWs"
import time from "../data/quiniela-time.json"

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
  console.log("tat", props)
  console.log("tatttt", pathname)

  const { data } = useWS()
  console.log("data", data)
  var displayData = []
  var pathArray = pathname.split("/")
  var cityName
  if (!time.includes(pathArray[2])) {
    cityName = pathArray[2]
    var isPathCity = 0
  }
  if (time.includes(pathArray[2])) {
    var timeName = pathArray[2]
    isPathCity = 1
  }
  console.log("isPathCIt", isPathCity)
  console.log("@@@@@@@", pathArray)
  var timeZone = pathArray[3]

  console.log("@@@@@@@", timeZone)
  var urlType = 0 // 0: city, 1: time
  console.log("pArr", pathArray)
  console.log("cityname", cityName)
  if (!isPathCity) {
    for (let i = 0; i < data.length; i++) {
      if (
        cityName.replace("%20", "") ===
        data[i].name.replace(" ", "").toLowerCase()
      ) {
        displayData = data[i]
      }
    }
  } else {
    data.forEach(item => {
      displayData.push(item.expand)
    })
    console.log(displayData)
  }

  timeZone == null || timeZone == undefined ? (urlType = 0) : (urlType = 1)

  const classes = useStyles()
  console.groupEnd("test log from quiniela")
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
              timeZone={timeZone}
              flag={isPathCity}
              tName={timeName}
              selectData={data}
            />
            {/* <LoadableRemind /> */}
            {/* <LoadablePozoEstimado /> */}
          </Paper>
        </Container>
        <LoadableFooter />
      </div>
    </LoadableLayout>
  )
}
export default App
