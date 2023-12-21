import { useGetKpisQuery } from '@/state/api'
import DashboardBox from './DashboardBox'

const C1 = () => {
    const {data}=useGetKpisQuery();
  return (
    <>
        <DashboardBox gridArea='a'></DashboardBox>
    </>
  )
}

export default C1