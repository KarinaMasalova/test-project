import { colorPrimary } from "../../constants/constants";

const getPopupFormStyles = () => ({
    formControl: {
        width: '100%',
        margin: '16px 0',
        '& > .MuiFormControl-root > .MuiFormLabel-root': {
            fontSize: '16px',
        },
        '& > .MuiFormLabel-root': {
            fontSize: '16px',
        },
        '& > .MuiFormControl-root > .MuiFormLabel-root.Mui-focused': {
           color: colorPrimary,
        },
        '& > .MuiFormControl-root > .MuiInputBase-root > .MuiOutlinedInput-notchedOutline': {
            borderColor: colorPrimary,
        }
    },
});

export default getPopupFormStyles;
