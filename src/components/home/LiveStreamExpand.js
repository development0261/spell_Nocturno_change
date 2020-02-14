import React from "react"
import { makeStyles, withStyles } from "@material-ui/core/styles"
import CityTable from "./CityTable"
import Icons from "./Icons"
import Grid from "@material-ui/core/Grid"

import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import NativeSelect from "@material-ui/core/NativeSelect"
import InputBase from "@material-ui/core/InputBase"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import TableHeader from "./tableHeader"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: "1rem 0.2rem 0 0.2rem",
    [theme.breakpoints.down("sm")]: {
      padding: "13px",
    },
    marginBottom: 20,
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
  Row: {
    width: "100%",
    alignItems: "center",
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      display: "inline-block",
    },
  },
  margin: {
    width: "70%",
    marginTop: 10,
    marginBottom: 10,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  Txt: {
    fontSize: 20,
    fontWeight: 500,
    width: "30%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
}))

function LiveStream(props) {
  const classes = useStyles()
  console.log("incoming data", props)
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

  var cityData = []
  var allData = []
  const isCity = props.flag
  var timeData = []
  var timeName = props.tName

  if (isCity) {
    timeData = props.data
  } else {
    allData = props.data.expand
  }

  const type = props.type
  const cityName = props.data.name
  const timeZone = props.timeZone
  const selectData = props.selectData

  const key1 = cityName + " - La Primera"
  const key2 = cityName + " - Matutino"
  const key3 = cityName + " - Vespertino"
  const key4 = cityName + " - Nocturno"
  const key1Data = { name: key1, values: null }
  const key2Data = { name: key2, values: null }
  const key3Data = { name: key3, values: null }
  const key4Data = { name: key4, values: null }

  if (!isCity) {
    if (type == 0) {
      if (allData != null) {
        //get key1 data
        for (let i = 0; i < allData.length; i++) {
          var tmpData = allData[i]
          if (tmpData.name.indexOf(key1) > -1) {
            key1Data.values = tmpData.values
          }
        }

        //get key2 data
        for (let i = 0; i < allData.length; i++) {
          var tmpData = allData[i]
          if (tmpData.name.indexOf(key2) > -1) {
            key2Data.values = tmpData.values
          }
        }

        //get key3 data
        for (let i = 0; i < allData.length; i++) {
          var tmpData = allData[i]
          if (tmpData.name.indexOf(key3) > -1) {
            key3Data.values = tmpData.values
          }
        }

        //get key4 data
        for (let i = 0; i < allData.length; i++) {
          var tmpData = allData[i]
          if (tmpData.name.indexOf(key4) > -1) {
            key4Data.values = tmpData.values
          }
        }
      }

      cityData.push(key1Data)
      cityData.push(key2Data)
      cityData.push(key3Data)
      cityData.push(key4Data)
    } else if (type == 1) {
      var key =
        cityName +
        " - " +
        (timeZone.indexOf("Primera") > -1 ? "La Primera" : timeZone)
      const keyData = { name: key, values: null }
      if (allData != null) {
        for (let i = 0; i < allData.length; i++) {
          var tmpData = allData[i]
          if (tmpData.name.indexOf(key) > -1) {
            keyData.values = tmpData.values
          }
        }
      }
      cityData.push(keyData)
    }
  } else {
    // for (let i = 0; i < timeData.length; i++) {
    //   if (timeData[i] != undefined) {
    //     var itemData = []
    //     itemData = timeData[i]
    //     itemData.forEach(element => {
    //       if (element.name.indexOf(timeName) > 1) {
    //         var timeKeyData = { name: null, values: null }
    //         timeKeyData.name = element.name
    //         timeKeyData.values = element.values
    //         cityData.push(timeKeyData)
    //       }
    //     })
    //   }
    // }
    if (allData != null) {
      //get key1 data
      for (let i = 0; i < allData.length; i++) {
        var tmpData = allData[i]
        if (tmpData.name.indexOf(key1) > -1) {
          key1Data.values = tmpData.values
        }
      }

      //get key2 data
      for (let i = 0; i < allData.length; i++) {
        var tmpData = allData[i]
        if (tmpData.name.indexOf(key2) > -1) {
          key2Data.values = tmpData.values
        }
      }

      //get key3 data
      for (let i = 0; i < allData.length; i++) {
        var tmpData = allData[i]
        if (tmpData.name.indexOf(key3) > -1) {
          key3Data.values = tmpData.values
        }
      }

      //get key4 data
      for (let i = 0; i < allData.length; i++) {
        var tmpData = allData[i]
        if (tmpData.name.indexOf(key4) > -1) {
          key4Data.values = tmpData.values
        }
      }
    }

    cityData.push(key1Data)
    cityData.push(key2Data)
    cityData.push(key3Data)
    cityData.push(key4Data)
  }

  return (
    <div className={classes.root}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <div className={classes.Row}>
          <span className={classes.Txt}>Loterial: </span>
          <FormControl className={classes.margin}>
            <NativeSelect
              id="demo-customized-select-native"
              input={<BootstrapInput />}
            >
              {selectData.map(val => (
                <option value={val.name}>{val.name}</option>
              ))}
              {/* <option value={10}>Ciudad</option>
              <option value={20}>Option1</option>
              <option value={30}>Thirty</option> */}
            </NativeSelect>
          </FormControl>
        </div>
        <div className={classes.Row}>
          <span className={classes.Txt}>Fetcha: </span>
          <FormControl className={classes.margin}>
            <BootstrapInput value="30/01/2020" />
          </FormControl>
        </div>
        {cityData == null ? (
          <div></div>
        ) : (
          cityData.map((row, index) => {
            return (
              <div>
                <CityTable data={row} />
              </div>
            )
          })
        )}
      </Grid>
    </div>
  )
}

const BootstrapInput = withStyles(theme => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 20,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: ["Montserrat"].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
    fontWeight: 600,
  },
}))(InputBase)

export default LiveStream
