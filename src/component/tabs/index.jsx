import * as React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { ThemeProvider, createTheme } from "@mui/material";
import Grid from "../dashbord/gridview";
import './style.css';
import List from "../dashbord/listview";
export default function BasicTabs({ coins }) {
  const [value, setValue] = React.useState("grid");
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });

  const style = {
    color: "var(--white)",
    textTransform: "capitalize",
    fontSize: "1.2rem",
  };
  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <TabList onChange={handleChange} variant={"fullWidth"}>
          <Tab label="Grid" value="grid" style={style} />
          <Tab label="List" value="list" style={style} />
        </TabList>
        <TabPanel value="grid" className="grid_card">
          {coins.map((coin) => (
            <Grid key={coin.id} coin={coin}/>
          ))}
          
        </TabPanel>
        <TabPanel value="list">
          <table className="tablemain" >
         <tbody className="mytable">
         {coins.map((coin) => (
            <List key={coin.id} coin={coin}/>
          ))}
         </tbody>
          </table>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
