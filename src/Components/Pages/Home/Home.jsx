import { useLoaderData } from "react-router-dom";
import Banar from "../../Banar/Banar";
import Card from "../../Card/Card";

const Home = () => {
  const datas = useLoaderData();

  return (
    <div>
      <Banar></Banar>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-24">
        {datas.map((data, idx) => (
          <Card key={idx} data={data}></Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
