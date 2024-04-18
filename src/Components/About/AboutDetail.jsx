import { Link, useLoaderData } from "react-router-dom";
import AboutCard from "./AboutCard";


const AboutDetail = () => {
    const datas = useLoaderData()
   
    return (    
        <div>
             {
             
             datas.map(data=><AboutCard key={data.key} data={data}></AboutCard>)
          }
        </div>
    );
};

export default AboutDetail;