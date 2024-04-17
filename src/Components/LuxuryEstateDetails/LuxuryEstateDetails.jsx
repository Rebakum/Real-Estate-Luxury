import { useLoaderData, useParams } from "react-router-dom";


const LuxuryEstateDetails = () => {
    const datas = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const data = datas.find(job => job.id === idInt)
    console.log(data, idInt)


    return (
        <div className="mt-[90px]">
            <div className="text-4xl lg:text-6xl font-bold p-2 lg:p-10 bg-blue-950 text-white mb-20 h-[300px] flex justify-center items-center">
                <h2 className="animate__animated animate__fadeInLeft">Luxury Estate Details</h2>
            </div>

            <div className="my-20 mx-2 lg:mx-10 flex justify-center items-center flex-col shadow-2xl lg:p-10 rounded-2xl">
                <div className=" w-[90%]">
                    <img className="w-full rounded-2xl" data-aos="fade-up" data-aos-delay="200" src={data.image} alt="" />
                    <div >
                        <h2 className="text-4xl lg:text-5xl font-bold text-blue-950 my-10" data-aos="fade-up" data-aos-delay="400">{data.title}</h2>
                        <hr />
                        <p className="text-xl my-5" data-aos="fade-up" data-aos-delay="600">description{data.description}</p>
                        <hr />
                        <div className=" my-5 space-x-1 flex text-wrap  lg:flex-row lg:gap-5  " data-aos="fade-up" data-aos-delay="600">
                            <span className="text-xl">Facilities: </span>
                            <span className="bg-blue-100 py-1 px-5 text-lg rounded-2xl">#{data.facilities[0]}, #{data.facilities[1]}, #{data.facilities[2]},#{data.facilities[3]}</span>
                          
                        </div>
                        <hr />
                        <div className=" my-5 space-x-5 flex flex-col   lg:flex-row gap-5 " data-aos="fade-up" data-aos-delay="800">
                            <p><span className="text-xl">Location: </span><span className="bg-orange-100 py-1 px-5 text-lg rounded-2xl">{data.location}</span></p>
                            <p><span className="text-xl"> Price: </span><span className="bg-orange-100 py-1 px-5 text-lg rounded-2xl">${data.price}</span></p>
                        </div>
                        <hr />
                        <div className=" my-5 space-x-5 flex flex-col   lg:flex-row gap-5  " data-aos="fade-up" data-aos-delay="1000">
                            <p><span className="text-xl">Status: </span><span className="bg-orange-100 py-1 px-5 text-lg rounded-2xl">{data.status}</span></p>
                            <p><span className="text-xl">Area: </span><span className="bg-orange-100 py-1 px-5 text-lg rounded-2xl">{data.area_sq_ft} sq_ft</span></p>

                        </div>
                        <hr />
                        
                        
                    </div>

                </div>

            </div>

        </div>
    );
};

export default LuxuryEstateDetails;