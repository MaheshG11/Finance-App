
import fetchKPI from '@/api/fetchKPI'
import DashboardBox from './DashboardBox'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis,Tooltip } from 'recharts'
import { useMemo, useState } from 'react'
import { GetKpisResponse } from '@/api/types'
import { useTheme } from '@emotion/react'
import BoxHeader from './BoxHeader'

type Props={}

const C1 = (props:Props) => {
  /*
  GetKpisResponse {
    id: string,
    _id: string,
    __v: number,
    totalProfit: number,
    totalRevenue: number,
    totalExpenses: number,
    expensesByCategory: ExpensesByCategory,
    monthlyData: Array<Month>,
    dailyData: Array<Day>,
    createdAt: string,
    updatedAt: string,
  }
  */
  const [data,setData]=useState<Array<GetKpisResponse>|null>(null)
  fetchKPI().then((res)=>{
    setData(res)
    console.log(typeof(data)," : ",data)
  })
  const revenueExpenses=useMemo(()=>{
    return (
      data &&
      data[0].monthlyData.map(({month,revenue,expenses})=>{
        return{
          name:month.substring(0,3),
          revenue:revenue,
          expenses:expenses
        } 
      })
    )
  },[data])
  return (
    <><DashboardBox gridArea="a">
    <BoxHeader
      title="Revenue and Expenses"
      subtitle="top line represents revenue, bottom line represents expenses"
      sideText="+4%"
    />
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={revenueExpenses}
        margin={{
          top: 15,
          right: 25,
          left: -10,
          bottom: 60,
        }}
      >
        <defs>
          <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="#71f5de"
              stopOpacity={0.5}
            />
            <stop
              offset="95%"
              stopColor="#71f5de"
              stopOpacity={0}
            />
          </linearGradient>
          <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="#71f5de"
              stopOpacity={0.5}
            />
            <stop
              offset="95%"
              stopColor="#71f5de"
              stopOpacity={0}
            />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="name"
          tickLine={false}
          style={{ fontSize: "10px" }}
        />
        <YAxis
          tickLine={false}
          axisLine={{ strokeWidth: "0" }}
          style={{ fontSize: "10px" }}
          domain={[8000, 23000]}
        />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="revenue"
          dot={true}
          stroke="#12efc8"
          fillOpacity={1}
          fill="url(#colorRevenue)"
        />
        <Area
          type="monotone"
          dataKey="expenses"
          dot={true}
          stroke="#12efc8"
          fillOpacity={1}
          fill="url(#colorExpenses)"
        />
      </AreaChart>
    </ResponsiveContainer>
  </DashboardBox>
    </>
  )
}

export default C1