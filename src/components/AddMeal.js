import { useState, useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
export const AddMeal = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const {addLog} = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault();

        const newLog = {
            id: Math.floor(Math.random() * 10000000),
            text,
            amount: +amount
        }
        addLog(newLog)
    }
    return (
        <>
        <h3>Add your new meal or activity</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e)=> {setText(e.target.value)}} id="text" placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
                        (negative - intake, positive - burn)</label
                    >
                    <input type="number" value={amount} onChange={(e)=> {setAmount(e.target.value)}} id="amount" placeholder="Enter amount..." />
                </div>
                <button className="btn">Add log</button>
            </form>
        </>
    )
}
