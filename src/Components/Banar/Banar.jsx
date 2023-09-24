const Banar = () => {
  return (
    <div className="">
      <div
        className="hero h-96 "
        style={{
          backgroundImage: "url(/src/assets/banner.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-90 bg-white"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="text-5xl font-bold text-black">I Grow By Helping People In Need</h1>
            <div className="form-control">
              <div className="input-group text-black mt-10 flex justify-center">
                <input
                  type="text"
                  placeholder="Search here…"
                  className="input input-bordered w-2/3"
                />
                <button className="btn bg-red-700 text-white hover:bg-red-500 font-semibold">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banar;
