import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import MultiActionAreaCard from '../components/ThemeCard';


export default function ThemeCollection() {

    return(
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MultiActionAreaCard/>
    </LocalizationProvider>
    )
}
