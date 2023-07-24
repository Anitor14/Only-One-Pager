const Dashboard = () => {
  return (
    <div className="w-screen h-screen bg-grey flex flex-row  justify-center items-center  px-[10px]">
      <div className=" w-full flex flex-col max-w-[1060px] items-center justify-center py-[20px]  bg-[#fff]">
        <div className="inline-flex flex-col justify-center items-center h-full w-full   gap-[10px]">
          <div className="flex px-[10px] flex-col items-center justify-center h-full w-full gap-6">
            <div className="flex flex-col gap-1 justify-center items-center ">
              <h2 className="text-[#171717] font-inter text-[24px]  font-[600] leading-normal">
                No Projects, yet!
              </h2>
              <p className="text-[#8F8F8F] font-inter text-[14px] font-[400] leading-normal">
                Start a new project from scratch or from our template list
              </p>
            </div>
            <div className="w-full flex-col px-[5px] md:flex-row flex items-center justify-center gap-[20px]">
              <div className=" max-w-[184px]    w-full h-[100px]  rounded-[8px] border-[1px] border-dashed border-[#DADADA] bg-[#FFF]"></div>
              <div className=" max-w-[184px]   w-full h-[100px]  rounded-[8px] border-[1px] border-dashed border-[#DADADA] bg-[#FFF]"></div>
              <div className=" max-w-[184px]   w-full h-[100px]  rounded-[8px] border-[1px] border-dashed border-[#DADADA] bg-[#FFF]"></div>
            </div>
            <button className="flex w-[182px]   py-[11px] px-[3px] justify-center items-center gap-[10px] rounded-[8px] bg-[#7A5AF8]">
              <p className="text-[#fff] font-inter text-[14px] font-normal leading-normal">
                Create a new website
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
