/* eslint-disable react/prop-types */
const ButtonSky = ( { buttonTitle } ) => {
    return (
        <div className="text-center">
        <button className="btn font-medium text-lg bg-gradient-to-r from-[#13a0fe] to-[#0d75d4] hover:opacity-80 uppercase text-white">
          {buttonTitle}
        </button>
      </div>
    );
};

export default ButtonSky;