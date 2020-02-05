import React from "react"
import { withStyles, makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import rowsData from "../data/brinco.json"

const StyledTableCell = withStyles(theme => ({
  root: {
    padding: 14,
  },
  head: {
    backgroundColor: "#6681f1",
    color: "#ffffff",
    fontSize: "1.2rem",
    fontWeight: "bold",
    borderRight: "4px solid #c2cdf9",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  body: {
    fontSize: "1.2rem",
    backgroundColor: "#fff",
    "&:first-child": {
      fontWeight: "bold",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
  },
}))(TableCell)

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow)

const useStyles = makeStyles({
  table: {
    padding: "10px",
    border: "4px solid #6681f1 !important",
    textAlign: "center",
  },
  Body: {
    fontWeight: 600,
  },
  th: {
    textAlign: "center",
  },
})

const StreamTable = ({ headers, data, color }) => {
  console.log("row d", data)
  console.log("head", headers)
  const classes = useStyles()
  console.log("data from table ", data)
  return (
    <TableContainer component={Paper} style={{ marginBottom: "40px" }}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow
            className={classes.Head}
            style={{ backgroundColor: color ? `${color}` : null }}
          >
            {headers.map((val, i) => (
              <StyledTableCell key={i}>{val}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody className={classes.Body}>
          {data.map((element, i) => (
            <StyledTableRow key={i}>
              {console.log("row", i + 1)}
              {element.rowData.map((td, index) => (
                <StyledTableCell
                  align="center"
                  style={{ border: "4px solid #6681f1" }}
                  scope="row"
                >
                  {console.log("row data", index + 1)}
                  {td}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default StreamTable
