const styles = theme => ({
    root: {
        height: "100vh",
        zIndex: 1,
        overflow: "hidden",
        minWidth: '700px'
    },
    appFrame: {
        position: "relative",
        display: "flex",
        width: "100%",
        height: "100%"
    },
    content: {
        width: "100%",
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: 0,
        height: "calc(100% - 56px)",
        marginTop: 56,
        [theme.breakpoints.up("sm")]: {
            height: "calc(100% - 64px)",
            marginTop: 64
        }
    }
});

export default styles