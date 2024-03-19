import { useGlobalState } from "../../context/GlobalState"

export default function TransactionItem({transaction}){
    const {deleteTransaction} = useGlobalState()
    return(
        <li className="bg-zinc-600 px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
            <p className="w-[60%]">{transaction.description}</p>
            <span style={{
                color: transaction.amount < 0 ? "#e74c3c" :"#2ecc71"
            }}>${transaction.amount}</span>
            <button 
                onClick={()=>{
                    deleteTransaction(transaction.id)
                }}
                className="text-[#fa5959] font-bold"
            >
                X
            </button>
        </li>
    )
} 