import { Helmet } from "react-helmet-async";
import AboutDetail from "./AboutDetail";




const About = () => {
    

    return (
        <div >
          
            <Helmet>
                <title>About</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <div className=" mt-[100px]  h-[300px] flex flex-col justify-center items-center  bg-[linear-gradient(45deg,rgba(0,0,0,0.4),rgba(0,0,0,0.1)),url('https://hips.hearstapps.com/hmg-prod/images/3799-flamingo-ave-siesta-key-print-005-14-flamingo-ave-sarasota-fl-4200x2799-300dpi-1675178841.jpg?crop=0.9992857142857143xw:1xh;center,top&resize=980:*')] bg-center bg-cover">
                <h1 className="text-7xl font-bold text-orange-950"><span className="text-black">ABOUT</span> PROPERTY</h1>
            </div>
            <AboutDetail></AboutDetail>   
        </div>
    );
};

export default About;