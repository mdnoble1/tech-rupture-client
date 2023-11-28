const ReviewForm = () => {
  return (
    <div className="container mx-auto">
      <div className="w-11/12 bg-slate-100 rounded-lg drop-shadow-2xl mx-auto pb-10">
        <form className="card-body lg:px-32 pt-12 lg:pt-32 ">
          <div className="md:flex justify-between items-center gap-12">
            {/* name  */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold text-xl text-[#444]">
                  Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Type Your Name"
                className="input rounded focus:border-[#13a0fe]"
              />
            </div>
            {/* image  */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold text-xl text-[#444]">
                  Photo URL
                </span>
              </label>
              <input
                type="text"
                placeholder="Your Photo URL"
                className="input rounded focus:border-[#13a0fe]"
              />
            </div>
          </div>
          {/* review message  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-xl text-[#444]">
                Review Message
              </span>
            </label>
            {/* <input
              type="text"
              name="review"
              placeholder="Type Your Review"
              className="input rounded focus:border-[#13a0fe]"
            /> */}
            <textarea
              name="review"
              id=""
              placeholder="Type Your Review"
              cols="10"
              rows="10"
              className="p-2 rounded focus:border-[#13a0fe]"
            ></textarea>
          </div>
          {/* rating  */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold text-xl text-[#444]">
                Rating
              </span>
            </label>
            <input
              type="range"
              name="rating"
              min="0"
              max="5"
              className="range range-info"
            ></input>
            <div className="w-full flex justify-between px-2">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-outline rounded font-bold text-xl text-white bg-gradient-to-r from-[#13a0fe] to-[#022889] border-0 hover:opacity-80"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
