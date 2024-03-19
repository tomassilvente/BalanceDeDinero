import { useGlobalState } from "../../context/GlobalState"
import TransactionItem from "./TransactionItem"

export const TransactionList = () => {
    const {transactions} = useGlobalState()
    
  return (
    <div>
        <h3 className="text-xl font-bold text-slate-300 block text-center my-3">Historial</h3>
        <ul className="xl:grid xl:grid-cols-2 xl:space-x-5">
        {
            transactions.map(transaction =>(
                <TransactionItem key={transaction.id} transaction={transaction} />
            ))
        }
        </ul>
    </div>
  )
}
