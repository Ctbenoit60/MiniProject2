import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import BasicExample from '../components/ThemeCard';


export default function DashboardPage() {

    return(
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* <MultiActionAreaCard/> */}
      <BasicExample/>
    </LocalizationProvider>
    )
}


