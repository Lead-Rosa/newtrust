import { makeStyles, useTheme } from "@material-ui/core/";


export default makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    appBar:{
        padding:'8px'
    },
    menuButton: {
      marginRight: theme.spacing(1),
    },
    title: {
      flexGrow: 1,
    },
    drawerWidth:{
        width:250,
    },
    btn:{
        marginRight: theme.spacing(2),
    },
  }));