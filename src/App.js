import { BrowserRouter } from "react-router-dom";
import GlobalRoute from "./navigation/GlobalRoute";
// import { createUseStyles } from "react-jss";

// const useStyles = createUseStyles((theme) => ({
//   app:{
//     fontFamily: theme.soraFont,
//     margin: '0',
//     padding: '0',
//     boxSizing: 'border-box'
//   }
// }))

function App() {
//  const classes = useStyles()
  return (
    // <div className={classes.app}>
      <BrowserRouter>
        <GlobalRoute />
      </BrowserRouter>
    // </div>
  );
}

export default App;
