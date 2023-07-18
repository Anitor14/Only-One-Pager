const Navbar = () => {
  return (
    <div className="border-b-2">
      <div className=" max-w-[1512px] mx-auto ">
        <div className="flex mt-[35px] w-full  justify-between mx-auto   ">
          <div>
            <img
              className="w-[83px] h-[33px]"
              src="../../src/assets/logo.svg"
              alt=""
            />
          </div>
          <div className="flex gap-[20px]">
            <div>
              <img src="../../src/assets/bell.svg" alt="" />
            </div>
            <div>
              <img src="../../src/assets/n.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="flex pb-[46px] justify-center gap-[20px]">
          <div>Dashboard</div>
          <div>Templates</div>
          <div>Analysis</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
