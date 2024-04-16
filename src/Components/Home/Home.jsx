import { useLoaderData } from "react-router-dom";
import AvilableLuxuryEstate from "../AvilableLuxuryEstate/AvilableLuxuryEstate";
import Slider from "../Slider/Slider";


const Home = () => {
  const datas = useLoaderData()
 
  return (
    <div>

      <Slider></Slider>

      <div>
      <div className=" p-10 my-20" >
            <h1 className="text-center luxury text-5xl mb-6 font-bold " data-aos="fade-up" data-aos-delay="300">Avilable Luxury Home</h1>
            <p className="text-center" data-aos="fade-up" data-aos-delay="600">All the Luxury homes come with solar panels, with selected homes having EV chargers.</p>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-20 mx-10">
      {
        datas.map(data =>
          <AvilableLuxuryEstate
            key={data.id}
            data={data} >

          </AvilableLuxuryEstate>)
      }
      </div>
      </div>

    </div>
  );
};

export default Home;
