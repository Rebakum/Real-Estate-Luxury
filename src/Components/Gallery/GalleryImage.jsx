import { Link } from "react-router-dom";



const GalleryImage = ({ data }) => {
    const {id, image, title } = data;
    return (
        <div>
            

            <Link to={`/data/${id}`} className=" pic w-100% relative content-center " data-aos="fade-up" data-aos-delay="300">
                <img className="w-full h-96 rounded-2xl overflow-clip content-center" src={image} alt="" />
                
            </Link>
        </div>


    );
};

export default GalleryImage;