import { useGlobalState } from "../context/GlobalState"

export const IncomeExpenses = () => {

    const {transactions} = useGlobalState()

    const amounts = transactions.map(transaction => transaction.amount)

    const income = amounts
                    .filter(item => item > 0)
                    .reduce((acc, item) => (acc +=item), 0 )

    const expense = amounts
                    .filter(item => item < 0)
                    .reduce((acc, item) => (acc +=item), 0 ) * -1
    
  return (
    <div>
        <div className="flex justify-between my-2">
            <h4 className="">Ingresos</h4>
            {income}
        </div>
        <div className="flex justify-between my-2">
            <h4>Gastos</h4>
            {expense}
        </div>
    </div>
  )
}
