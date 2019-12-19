import { fade, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: 'rgb(43,45,65)',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    flexGrow: {
        padding: theme.spacing(1, 1, 1, 5),
        marginRight: theme.spacing(3)
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      width: '80%',
    },
    searchIcon: {
      width: theme.spacing(5),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      width: '100%',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 5),
      transition: theme.transitions.create('width'),
      width: '100%'
    },
}));