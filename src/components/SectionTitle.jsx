/* eslint-disable react/prop-types */
const SectionTitle = ( { title, description } ) => {
  return (
    <div className="text-center">
      <h2 className="font-bold text-3xl lg:text-5xl text-black mb-6">
        {title}
      </h2>
      <div className="border border-sky-400 w-1/2 lg:w-96 mx-auto"></div>
      <p className="w-3/4 mx-auto font-medium text-gray-500 mt-6">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
