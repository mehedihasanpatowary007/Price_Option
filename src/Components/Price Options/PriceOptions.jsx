import { useEffect, useState } from "react";
import PriceOption from "../Price Option/PriceOption";
import Banner from '../../assets/Images/banner.png'

const PriceOptions = () => {
    const [options, setOptions] = useState([])
    console.log(options)

    const loadOptions = async () => {
        const res = await fetch("http://localhost:3000/membershipOptions");
        const data = await res.json()
        setOptions(data)
    }
    useEffect(()=> {
        loadOptions()
    }, [])
    return (
      <div className="flex-grow w-[95%] mx-auto my-5 py-5">
        <h1 className="uppercase text-center text-3xl font-semibold italic mb-5">
          Best Price in the town
        </h1>
        <div>
          <img className=" w-full h-[700px]" src={Banner} alt="banner_image" />
        </div>
        <div>
          <h1 className="uppercase text-center text-3xl font-semibold italic mb-5 mt-10">
            Our membership
          </h1>
          <div className="flex flex-wrap justify-center gap-8">
            {options.map((option) => {
              return <PriceOption key={option.id} option={option} />;
            })}
          </div>
        </div>
      </div>
    );
};

export default PriceOptions;