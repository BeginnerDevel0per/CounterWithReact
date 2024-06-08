import { useState } from 'react'
import { styles } from './styles';
import PropTypes from 'prop-types';
function Counter(props) {
    const classes = styles();
    const [result, setResult] = useState(0);
    Counter.propTypes = {
        count: PropTypes.number.isRequired,
    };
    return (
        <>
            <h3>Arttırma ve azaltma miktarı = <strong>{props.count}</strong></h3>
            <h1>{result}</h1>
            <div >
                <button className={classes.customBtn} onClick={() => { setResult(Number(result) - Number(props.count)) }}>Azalt</button>
                <button className={classes.customBtn} onClick={() => { setResult(Number(result) + Number(props.count)) }}>Arttır</button>
            </div>
        </>
    )
}
export default Counter
