const Navbar = () => {
  return (
    <div className="h-[134px]">
      <div className="flex mt-[35px] justify-between mx-auto  px-[50px] max-w-[1512px]">
        <div>
          <img src="../../public/assets/logo.svg" alt="" />
        </div>
        <div className="flex gap-[20px]">
          <div>
            <img src="../../public/assets/bell.svg" alt="" />
          </div>
          <div>
            <img src="../../public/assets/n.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="flex h-[46px] justify-center gap-[20px]">
        <div>Dashboard</div>
        <div>Templates</div>
        <div>Analysis</div>
      </div>
    </div>
  );
};

export default Navbar;
