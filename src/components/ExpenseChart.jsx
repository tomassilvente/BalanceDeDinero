import {VictoryPie, VictoryLabel} from 'victory'
import { useGlobalState } from '../context/GlobalState'

export const ExpenseChart = () => {

    const {transactions} = useGlobalState()

    const totalIngresos =  transactions.filter(transaction => 
        transaction.amount > 0)
            .reduce((acc, transaction) => (acc +=transaction.amount), 0)

    const totalGastos =  transactions.filter(transaction => 
        transaction.amount < 0)
            .reduce((acc, transaction) => (acc +=transaction.amount), 0) * -1

    const totalPorcentajeGastos = Math.round((totalGastos / totalIngresos) * 100)
    const totalPorcentajeIngresos = 100 - totalPorcentajeGastos
    
  return (
    <div>
        <VictoryPie 
        colorScale={["#e74c3c","#2ecc71"]}
        data={[
            {x:"Gastos", y:totalPorcentajeGastos},
            {x:"Ingresos", y:totalPorcentajeIngresos},
        ]} 
        animate={{
            duration:200
        }}
        labels={({datum}) => `${datum.y} %`}
        labelComponent={
            <VictoryLabel 
                angle={25}
                style={{
                    fill: 'white'
                }}
            />}
        />
    </div>
  )
}
