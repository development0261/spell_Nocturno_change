import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"
import SecondTable from "../components/home/SecondTable"
import Icons from "../components/home/Icons"
import Button from "@material-ui/core/Button"
import Table from "../components/Table"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
      height: 80,
    },
  },
  brinco: {
    width: "15%",
    margin: "1rem",
    [theme.breakpoints.down("xs")]: {
      width: 60,
      height: 45,
    },
  },
  Premiados: {
    display: "flex",
    flexDirection: "column",
    margin: "3rem 0",
    [theme.breakpoints.down("xs")]: {
      margin: "1.5rem 0",
    },
  },

  PremiadosHeading: {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Montserrat', sans-serif;",
    fontWeight: "bold",
    fontSize: "1.7rem",
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
    flexBasis: "17%",
    fontWeight: "bold",
    fontFamily: "'Montserrat', sans-serif;",
    backgroundColor: "#4163ee",
    marginTop: "15px",
    marginRight: "10px",
    width: theme.spacing(8),
    height: theme.spacing(12),
    [theme.breakpoints.down("md")]: {
      width: theme.spacing(9),
      // height: theme.spacing(9),
    },
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(5),
      // height: theme.spacing(8),
    },
    [theme.breakpoints.down("xs")]: {
      width: theme.spacing(2),
      // height: theme.spacing(5),
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
    padding: "0px 12px",
    [theme.breakpoints.down("xs")]: {
      margin: "1rem",
      padding: "0",
    },
  },
  icons: {
    marginBottom: "5rem",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "2rem",
    },
  },
  Btn: {
    width: "fit-content",
    padding: "1rem 3rem",
    borderRadius: "50px",
    fontSize: "2rem",
    marginTop: "3rem",
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
    alignItems: "center",
    margin: "3rem 0",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      margin: "1rem 0",
    },
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
    alignItems: "center",
  },
  sortSpan: {
    fontSize: "30px",
    fontWeight: "700",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
    },
  },

  sortStrong: {
    fontSize: "30px",
    fontWeight: "700",
    color: "#fff",
    backgroundColor: "orange",
    padding: "20px 30px",
    borderRadius: "40px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
      padding: "15px 30px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
      padding: "10px 10px",
    },
  },
}))

function LiveStream({ wins, img, sort, tableHeaders, tableData, prize }) {
  console.log("draw wins", wins)
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "quinielashoylogo.png" }) {
        childImageSharp {
          fixed(width: 280) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
      quiniela: file(relativePath: { eq: "quiniela.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      telekino: file(relativePath: { eq: "telekino.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      quini6: file(relativePath: { eq: "quini6.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      brinco: file(relativePath: { eq: "brinco.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      lotoPlus: file(relativePath: { eq: "loto_plus.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      quini: file(relativePath: { eq: "quini.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      totobingo: file(relativePath: { eq: "totobingo.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      quinielaPoceada: file(relativePath: { eq: "quiniela_poceada.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      loto5: file(relativePath: { eq: "loto5.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      quiniela_poceada: file(relativePath: { eq: "quiniela_poceada.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  console.log("img", img)
  let image =
    (img === "brinco" && data.brinco.childImageSharp.fluid) ||
    (img === "telekino" && data.telekino.childImageSharp.fluid) ||
    (img === "quiniplus" && data.quini.childImageSharp.fluid) ||
    (img === "loto5" && data.loto5.childImageSharp.fluid) ||
    (img === "quiniela_poceada" && data.quiniela_poceada.childImageSharp.fluid)
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

        <div className={classes.brincoContainer}>
          <Img
            fluid={image}
            className={classes.brinco}
            fadeIn={false}
            alt="Brinco de hoy"
          />
        </div>
        {sort && (
          <div className={classes.sort}>
            <span className={classes.sortSpan}>Sorteo#:</span>
            <strong className={classes.sortStrong}>{sort.sorteo}</strong>{" "}
            <span className={classes.sortSpan}>Fetcha:</span>
            <strong className={classes.sortStrong}>{sort.Fetcha}</strong>
          </div>
        )}

        <div className={classes.Premiados}>
          <Typography
            variant="h4"
            component="h3"
            className={classes.PremiadosHeading}
          >
            Numeros Premiados
          </Typography>
        </div>
        <div className={classes.numbers}>
          {wins.map(num => (
            <Avatar className={classes.avatar}>{num}</Avatar>
          ))}
        </div>
        <div className={classes.Premiados}>
          <Typography
            variant="h3"
            component="h2"
            className={classes.PremiadosHeading}
          >
            Distribucion de Premios
          </Typography>
        </div>
        <Table headers={tableHeaders} data={tableData} />
        {prize && (
          <div className={classes.Pozo}>
            <Typography
              variant="h3"
              component="h2"
              className={classes.PremiadosHeading}
            >
              {prize[0]}
            </Typography>
            <Button variant="contained" color="primary" className={classes.Btn}>
              ${prize[1]}
            </Button>
          </div>
        )}
      </div>
      <div className={classes.icons}>
        <Icons />
      </div>
    </div>
  )
}

export default LiveStream
