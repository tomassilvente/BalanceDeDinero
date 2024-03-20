
import { Balance } from "./components/Balance"
import { TransactionForm } from "./components/transactions/TransactionForm"
import { GlobalProvider } from "./context/GlobalState"
import { TransactionList } from "./components/transactions/TransactionList"
import { IncomeExpenses } from "./components/IncomeExpenses"
import { ExpenseChart } from "./components/ExpenseChart"

export default function App(){
  return (
    <GlobalProvider>
      <div className="text-white h-screen flex justify-center items-center">
        <div className="bg-zinc-800 p-10 rounded-lg flex mx-auto container gap-x-8 md:w-4/6 xl:w-4/6 ">
          <div className="py-10 w-[40%]">
            <h1 className="text-4xl font-bold text-center mb-6">Balance</h1>
            <IncomeExpenses />
            <Balance />
            <TransactionForm />
          </div>
          <div className="flex flex-col flex-1">
           <ExpenseChart />
           <TransactionList />
          </div>
        </div>
      </div>
    </GlobalProvider>
    
  )
}
