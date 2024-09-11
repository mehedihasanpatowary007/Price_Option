import PropTypes from 'prop-types';
import { FaHandPointRight } from 'react-icons/fa';
import { FaHandHoldingDollar } from 'react-icons/fa6';
const PriceOption = ({option}) => {
    const {image, name, price, features} = option ?? {};
    console.log(option)
    return (
      <div className="p-4 bg-blue-400 w-[560px] h-[700px] flex flex-col gap-4 rounded text-white">
        <img
          className="w-[550px] h-[350px] hover:scale-[1.03] duration-500 rounded"
          src={image}
          alt={`membership card of ${name}`}
        />
        <div className="flex flex-col justify-between flex-grow">
          <h3 className="text-4xl font-bold italic">{name} Membership</h3>
          <div>
            <span className="text-xl font-semibold italic">Features :</span>
            <ul className="italic">
              {features.map((feature) => {
                return (
                  <li className="flex items-center gap-2 " key={feature.id}>
                    <span className="text-gray-600 text-xl">
                      <FaHandPointRight />
                    </span>{" "}
                    {feature},
                  </li>
                );
              })}
            </ul>
          </div>
          <h6 className="text-3xl font-bold flex gap-2 items-center">
            <span className='text-gray-600'>
              <FaHandHoldingDollar />
            </span>
            ${price}
            <sub>
              <small className="">/mon</small>
            </sub>{" "}
          </h6>
        </div>
        <div>
          <button className="w-full bg-green-600 py-1 uppercase text-white font-semibold rounded">
            buy now
          </button>
        </div>
      </div>
    );
};

export default PriceOption;

PriceOption.propTypes = {
    option: PropTypes.object
}