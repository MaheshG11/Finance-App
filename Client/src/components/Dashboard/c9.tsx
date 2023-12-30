import { Box, Typography } from '@mui/material'
import FlexBetween from '../Basic/FlexBetween'
import BoxHeader from './BoxHeader'
import DashboardBox from './DashboardBox'
import { Cell, Pie, PieChart } from 'recharts'
import { useMemo } from 'react'

const C9 = () => {
  const pieColors = ["#076050", "#12efc8"];
  // const { data: kpiData } = useGetKpisQuery();
  // const pieChartData = useMemo(() => {
  //   if (kpiData) {
  //     const totalExpenses = kpiData[0].totalExpenses;
  //     return Object.entries(kpiData[0].expensesByCategory).map(
  //       ([key, value]) => {
  //         return [
  //           {
  //             name: key,
  //             value: value,
  //           },
  //           {
  //             name: `${key} of Total`,
  //             value: totalExpenses - value,
  //           },
  //         ];
  //       }
  //     );
  //   }
  // }, [kpiData]);
  return (
    <>
        <DashboardBox gridArea="i">
        <BoxHeader title="Expense Breakdown By Category" sideText="+4%" />
        {/* <FlexBetween mt="0.5rem" gap="0.5rem" p="0 1rem" textAlign="center">
          {[pieChartData]?.map((data, i) => (
            <Box key={`${data[0].name}-${i}`}>
              <PieChart width={110} height={100}>
                <Pie
                  stroke="none"
                  data={data}
                  innerRadius={18}
                  outerRadius={35}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={pieColors[index]} />
                  ))}
                </Pie>
              </PieChart>
              <Typography variant="h5">{data[0].name}</Typography>
            </Box>
          ))}
        </FlexBetween> */}
      </DashboardBox>
    </>
  )
}

export default C9