import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
   padding: "20px"
  },
  overlay2: {
    right: '20px',
  },
  grid: {
    display: 'flex',
  },
  gap: {
    margin: "10px 0",
    // width: "100%",
    
  },
  cardActions: {
    padding: 'auto 15px',
    display: 'flex',
    justifyContent: 'space-around',
    alignContent: 'center'
  },
});
