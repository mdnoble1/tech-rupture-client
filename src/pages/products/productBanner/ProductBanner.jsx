import image from "../../../assets/productBanner.png";

const ProductBanner = () => {
  return (
    <div>
      <img
        className="opacity-80 h-[280px] lg:h-[680px] rounded-bl-[45px] lg:rounded-bl-[120px]"
        src={image}
        alt=""
      />
    </div>
  );
};

export default ProductBanner;
