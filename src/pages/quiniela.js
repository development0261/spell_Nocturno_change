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
  const rowHead = data.map(item => {
    return item.name
  })
  console.log("acsacascsacsacascRowHead.....", rowHead)
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
    colHeader = sepecificData
    // Table options
    options = data.map(val => {
      return val.name
    })
    // Default option value
    defaultOption = rowHeader
  } else if (rowHeader) {
    // Data specific to row header
    const colHead = ["Primera", "Matutino", "Vespertino", "Nocturna"]
    // console.log("ajeebsa", data)
    displayData = data.filter((d, i) => {
      if (
        rowHeader ===
        d.name
          .toLowerCase()
          .trim()
          .replace("é", "e")
          .replace("á", "a")
          .replace("í", "i")
          .replace(" ", "")
      ) {
        return true
      } else return false
    })

    // Table options
    options = data.map(val => {
      return val.name
    })
    // console.log("filteredDataaaaa", displayData)
    // console.log("displatData", displayData?.[0]?.expand?.length)
    // console.log("colheadlength", colHead.length)
    // console.log("displayDatacheck")
    const indexes = []
    console.log("aja bhai", displayData?.[0]?.expand?.length)
    if (!!displayData?.[0]?.expand?.length) {
      for (let i in displayData?.[0].expand) {
        for (let j in colHead) {
          if (displayData?.[0].expand[i].name.search(colHead[j]) !== -1) {
            console.log("tatatatat", j)
            console.log("tatatatatasdasd", displayData?.[0].expand[i].name)
            indexes.push(j)
          }
        }
      }
    }
    let array = [
      {
        expand: [{}, {}, {}, {}],
      },
    ]
    indexes.map((val, index) => {
      array[0].expand[val] = displayData?.[0].expand[index]
    })

    displayData = array
    console.log("array", array)
    // Default options value
    defaultOption = rowHeader
  } else {
    // Data specific to column header

    let index
    displayData = data?.map(item => {
      // console.log("tt", item)
      return item?.expand?.filter((ft, i) => {
        // console.log("checkcccc", ft.name.toLowerCase().search(colHeader))
        if (ft.name.toLowerCase().search(colHeader) !== -1) {
          index = i
          // console.log("aa", ft)
          return ft
        } else return false
      })
    })
    // console.log("index", index)
    // displayData = temp !== undefined && temp?.map(i => i)
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
            {console.log("URL TYPE", urlType)}
            {console.log("Data going forward", displayData)}
            <LoadableLiveStream
              data={displayData}
              type={urlType}
              rowHeader={rowHeader}
              colHeader={colHeader}
              rowHead={rowHead}
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
