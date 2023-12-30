import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import BoxHeader from './BoxHeader'
import DashboardBox from './DashboardBox'
import { useMemo } from 'react';





// const operationalExpenses = useMemo(() => {
//   return (
//     operationalData &&
//     operationalData[0].monthlyData.map(
//       ({ month, operationalExpenses, nonOperationalExpenses }) => {
//         return {
//           name: month.substring(0, 3),
//           "Operational Expenses": operationalExpenses,
//           "Non Operational Expenses": nonOperationalExpenses,
//         };
//       }
//     )
//   );
// }, [operationalData]);


const C4 = () => {
  return (
    <>
        <DashboardBox gridArea="d">
        <BoxHeader
          title="Operational vs Non-Operational Expenses"
          sideText="+4%"
        />
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            //data={/*operationalExpenses*/}
            margin={{
              top: 20,
              right: 0,
              left: -10,
              bottom: 55,
            }}
          >
            <CartesianGrid vertical={false} stroke="#48494e" />
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              yAxisId="left"
              orientation="left"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: "10px" }}
            />
            <Tooltip />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="Non Operational Expenses"
              stroke="#8884d8"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="Operational Expenses"
              stroke="#12efc8"
            />
          </LineChart>
        </ResponsiveContainer>
      </DashboardBox>
    </>
  )
}

export default C4