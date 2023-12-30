import { CartesianGrid, ResponsiveContainer, Scatter, ScatterChart, XAxis, YAxis, ZAxis,Tooltip } from 'recharts'
import BoxHeader from './BoxHeader'
import DashboardBox from './DashboardBox'
import { useMemo } from 'react';
const C6 = () => {

  // const { data: productData } = useGetProductsQuery();
  // const productExpenseData = useMemo(() => {
  //   return (
  //     productData &&
  //     productData.map(({ _id, price, expense }) => {
  //       return {
  //         id: _id,
  //         price: price,
  //         expense: expense,
  //       };
  //     })
  //   );
  // }, [productData]);
  return (
    <>
         <DashboardBox gridArea="f">
        <BoxHeader title="Product Prices vs Expenses" sideText="+4%" />
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart
            margin={{
              top: 20,
              right: 25,
              bottom: 40,
              left: -10,
            }}
          >
            <CartesianGrid stroke="#48494e" />
            <XAxis
              type="number"
              dataKey="price"
              name="price"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
              tickFormatter={(v) => `$${v}`}
            />
            <YAxis
              type="number"
              dataKey="expense"
              name="expense"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
              tickFormatter={(v) => `$${v}`}
            />
            <ZAxis type="number" range={[20]} />
            <Tooltip formatter={(v) => `$${v}`} />
            <Scatter
              name="Product Expense Ratio"
              //data={productExpenseData}
              fill="#8884d8"
            />
          </ScatterChart>
        </ResponsiveContainer>
      </DashboardBox>
    </>
  )
}

export default C6