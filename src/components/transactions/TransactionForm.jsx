import { useState } from "react"
import { useGlobalState } from "../../context/GlobalState"

export const TransactionForm = () => {

  const {addTransaction} = useGlobalState()
  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount,
    })
  }

  return (
    <div className="mt-12">
      <form onSubmit={handleSubmit}>
        <input 
          className="bg-zinc-600 px-3 py-2 rounded-lg block  w-full"
          type='text' placeholder="Descripción"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <span className="text-xs ml-1 text-[#fe7c6d]">Gastos expresar con (-)</span>
        <input 
          className="bg-zinc-600 px-3 py-2 rounded-lg block mb-2 w-full"
          type='number' 
          placeholder="$00.00" step={0.01}
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
        <button className="bg-indigo-700 px-3 py-2 rounded-lg block mb-2 w-full" type="submit">Añadir</button>
      </form>
    </div>
  )
}
