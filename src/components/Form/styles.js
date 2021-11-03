
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      // margin: theme.spacing(1),
    },
    margin: '20px 0',

  },
  paper: {
    padding: theme.spacing(2),
    margin: '20px 0',
  },
  form: {
  
  },
  fileInput: {
    // width: '97%',
    margin: '20px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));
