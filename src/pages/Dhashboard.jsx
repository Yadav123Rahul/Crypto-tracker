import { useEffect, useState } from "react";
import DhashboardPage from "../component/Loading_pages/dashoardpage";
import Header from "../component/dashbord/Header/Header";
import CustomInput from "../component/input";
import axios from "axios";
import PaginationComponent from "../component/pagination";
import Loader from "../component/common/LoadingState";
import BackToTop from "../component/common/backtoTop";
import { get100CoinData } from "../functions/get100CoinData";

function Dhashboard() {
  const [coins, setCoins] = useState([]);
  const [paginationCoins,setPaginationCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [loadingState,setLoadingState] = useState(true)

  useEffect(() => {
    fectchData();
  }, []);

  const fectchData = async() =>{
    const data = await get100CoinData();
    setLoadingState(true);
    if(data){
      setCoins(data);
      setPaginationCoins(data.slice(0,10));
      setLoadingState(false)
    }
  }

  function searchInput(value) {
    setSearch(value);
  }
  var filterCoins = coins.filter(
    (value) =>
      value.name.toLowerCase().includes(search.trim()) ||
      value.symbol.toLowerCase().includes(search.trim())
  );

  const handleChange = (event,value) => {
    setPage(value);
    var previouseIndex =(value-1)*10;
    setPaginationCoins(coins.slice(previouseIndex,previouseIndex+10));
  };

  return (
    <>
      <Header />
      <BackToTop/>
      {loadingState && <Loader/>}
      <CustomInput searchInput={searchInput} />
      <DhashboardPage coins={search? filterCoins:paginationCoins} />
      {!search && <PaginationComponent page={page}  handleChange={handleChange}/>}
    </>
  );
}

export default Dhashboard;
