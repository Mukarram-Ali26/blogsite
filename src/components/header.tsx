import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import { Link } from "gatsby"


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
)

export default function ButtonAppBar() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const [selectedValue, setSelectedValue] = React.useState<string | any>()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = (value: string) => {
    setOpen(false)
    setSelectedValue(value)
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Gatsby Blog
            </Link>
          </Typography>


        </Toolbar>
      </AppBar>
    </div>
  )
}
