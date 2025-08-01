import { useState } from "react"

export const AddMeal = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)
    return (
        <>
        <h3>Add your new meal</h3>
            <form>
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
                <button class="btn">Add meal</button>
            </form>
        </>
    )
}
