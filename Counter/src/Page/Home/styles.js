import { createUseStyles } from "react-jss"

export const styles = createUseStyles({
    Input: {
        marginBottom: 25,
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 'large',
        padding: 10,
        border: 'none',
        width: 400,
    },
    homeSection: {
        margin:0,
        padding:0,
        Width: '100vh',
        minHeight: '100vh',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: 'center',
        backgroundColor: '#242424',
        colorScheme: "light dark",
        color: "rgba(255, 255, 255, 0.87)",
        fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
    },
});