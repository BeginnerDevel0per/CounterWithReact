import { useState } from 'react'
import Counter from "../../Components/Counter/Counter"
import { styles } from './styles';
const Home = () => {
    const classes = styles();
    const [count, setCount] = useState(1);
    const InputChange = (e) => {
        console.log(e.value)
        setCount(Number(e.target.value));
    };
    return (
        <>
            <div className={classes.homeSection}>
                <div>
                    Miktarı giriniz.
                </div>
                <div>
                    <input className={classes.Input} onChange={InputChange} type='number' placeholder='Arttırma ve azaltma miktarı giriniz...'></input>
                </div>
                <div>
                    <Counter count={count} />
                </div>
            </div>
        </>
    )
}
export default Home