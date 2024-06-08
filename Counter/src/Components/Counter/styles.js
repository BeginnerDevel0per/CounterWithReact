import { createUseStyles } from "react-jss"

export const styles = createUseStyles({
    customBtn: {
        marginRight: 10,
        borderRadius: 8,
        border: '1px solid transparent',
        padding: '0.6em 1.2em',
        fontSize: '1em',
        fontWeight: 500,
        fontFamily: 'inherit',
        backgroundColor: '#1a1a1a',
        cursor: 'pointer',
        transition: 'border - color 0.25s',
        '&:hover': {
            borderColor: '#646cff',
        },
    },
});