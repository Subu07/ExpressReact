import { createMuiTheme } from '@material-ui/core/styles';
import red from "@material-ui/core/es/colors/red";

const theme = (color) => createMuiTheme({
    palette : {
        primary : color,
        secondary : red,
    }
});

export default theme;
