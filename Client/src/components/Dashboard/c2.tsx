
import { useMemo, useState } from 'react'
import DashboardBox from './DashboardBox'
import { GetKpisResponse } from '@/api/types'
import fetchKPI from '@/api/fetchKPI'
import BoxHeader from './BoxHeader'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis ,Tooltip} from 'recharts'




const C2 = () => {
  const [data,setData]=useState<Array<GetKpisResponse>|null>(null)
  fetchKPI().then((res)=>{
    setData(res)
    console.log(typeof(data)," : ",data)
  })
  const revenueProfit = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0, 3),
          revenue: revenue,
          profit: (revenue - expenses).toFixed(2),
        };
      })
    );
  }, [data]);
  return (
    <>
        <DashboardBox gridArea="b">
        <BoxHeader
          title="Profit and Revenue"
          subtitle="top line represents revenue, bottom line represents expenses"
          sideText="+4%"
        />
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={400}
            data={revenueProfit}
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
            <Legend
              height={20}
              wrapperStyle={{
                margin: "0 0 10px 0",
              }}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="profit"
              stroke="#8884d8"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="revenue"
              stroke="#12efc8"
            />
          </LineChart>
        </ResponsiveContainer>
      </DashboardBox>
    </>
  )
}

export default C2