const Navbar = () => {
  return (
    <div className=" border-b-2 bg-[#fff] fixed px-[50px] right-0 top-0 left-0">
      <div className=" max-w-[1512px] mx-auto ">
        <div className="flex mt-[10px] w-full  justify-between mx-auto   ">
          <div>
            <img
              className="w-[60px] h-[33px] "
              src="../../src/assets/logo.svg"
              alt=""
            />
          </div>
          <div className="flex gap-[10px]">
            <div>
              <img
                className=" h-[28px] "
                src="../../src/assets/bell.svg"
                alt=""
              />
            </div>
            <div>
              <img className=" h-[28px] " src="../../src/assets/n.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="flex text-[13px] justify-center gap-[20px]">
          <p>Dashboard</p>
          <p>Templates</p>
          <p>Analysis</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
