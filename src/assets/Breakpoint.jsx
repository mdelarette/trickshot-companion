import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


const Breakpoint = () => {

    const theme = useTheme();

    const xl = useMediaQuery(theme.breakpoints.up('xl'));
    const lg = useMediaQuery(theme.breakpoints.up('lg'));
    const md = useMediaQuery(theme.breakpoints.up('md'));
    const sm = useMediaQuery(theme.breakpoints.up('sm'));

    let result = "xs";
    if(xl){
        result = "xl"
    }
    else if(lg){
        result = "lg"
    }
    else if(md){
        result = "md"
    }
    else if(sm){
        result = "sm"
    }

    // console.log(theme.breakpoints);
  
    return <span>{result}</span>;

}

export default Breakpoint;