import React from 'react';
import { Link } from 'react-router-dom';

const AboutCard = ({ data }) => {
    const { id, image, title, segment_name, description, } = data;
    return (
        <div className='my-20 mx-10'>
            <div className="hero  ">
                <div className="hero-content flex-co gap-10 lg:flex-row">
                    <div className="flex-1">
                        < img className="w-full rounded-2xl" src={image} />
                    </div>
                    <div className="flex-1">
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <p className="py-3">{description}</p>
                        <hr />

                        <p className='py-6'>{segment_name}</p>
                        <Link to={`/data/${id}`}>
                            <button className="btn bg-blue-950 text-white">See More</button>
                        </Link>

                    </div>
                    <div>

                        <h1></h1>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default AboutCard;