import { useLoaderData } from "react-router-dom";
import GalleryImage from "./GalleryImage";
import './GalleryImages.css'
import { Helmet } from "react-helmet-async";



const Gallery = () => {
    const datas = useLoaderData()

    return (
        <div>
            <Helmet>
                <title>Gallery</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
        <div className="mt-[68px]">
            <div className="mb-20 h-[300px] flex justify-center items-center bg-[linear-gradient(45deg,rgba(0,0,0,0.4),rgba(0,0,0,0.1)),url('https://images.pexels.com/photos/678725/pexels-photo-678725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-center bg-cover">
                <h1 className=" gallery text-6xl font-bold p-10 text-orange-900 ">GALLERY</h1>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
            <button className="border py-2 px-5 font-semibold hover:text-white hover:bg-blue-950" data-aos="fade-up" data-aos-delay="300">ALL</button>
            <button className="border py-2 px-5 font-semibold hover:text-white hover:bg-blue-950" data-aos="fade-up" data-aos-delay="600">GARAGE</button>
            <button className="border py-2 px-5 font-semibold hover:text-white hover:bg-blue-950" data-aos="fade-up" data-aos-delay="900">KITCHEN</button>
            <button className="border py-2 px-5 font-semibold hover:text-white hover:bg-blue-950" data-aos="fade-up" data-aos-delay="1200">BASEMENT</button>
            <button className="border py-2 px-5 font-semibold hover:text-white hover:bg-blue-950" data-aos="fade-up" data-aos-delay="1500">BATHROOMS</button>
        </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20 mx-10 justify-center items-center" >
            {
                datas.map(data=><GalleryImage key={data.key} data={data}></GalleryImage>)
            }
            </div>

        </div>
        </div>
    );
};

export default Gallery;