
import { useLoaderData } from "react-router-dom";
import Banar from "../../Banar/Banar";


const Home = () => {
  const datas = useLoaderData()

  return (
    <div>
      <Banar datas={datas}></Banar>
      
    </div>
  );
};

export default Home;
