import arrowDownSvg from "../assets/images/arrow-ios-down.svg";
import dot from "../assets/images/dot.svg";
import billing from "../assets/images/billing.svg";
import monitor from "../assets/images/monitor.svg";
import webUrlSvg from "../assets/images/web_url_logo.svg";
import arrowLeftSvg from "../assets/images/arrow-ios-left.svg";

const webData = [
  { webImage: monitor, webText: "Website name" },
  { webImage: webUrlSvg, webText: "Website url" },
  { webImage: billing, webText: "Billing Plan" },
  { webImage: dot, webText: "Status" },
];
const Analysis = () => {
  return (
    <section className="w-full sm:px-20 px-6 flex flex-col justify-center items-center bg-background_grey_color">
      <div className=" w-full max-w-[66rem] items-center justify-center grid grid-cols-[1fr] lg:grid-cols-[18rem,1fr] gap-6 lg:gap-3 mt-[11.5rem] ">
        <div className="p-5  rounded border border-solid border-border_color min-h-[12rem] bg-white">
          <p className="text-left font-inter font-[500] text-[1rem] leading-normal">
            Total sites created.
          </p>
          <h1 className="text-center font-inter font-[500] text-[3rem]">1</h1>
        </div>
        <div className="p-5  rounded border border-solid border-border_color min-h-[12rem] bg-white">
          <div className="flex justify-between items-center">
            <p className="text-left font-inter font-[500] text-[1rem]">
              In Progress
            </p>
            <button className="inline-flex gap-5 justify-between items-center padding px-2 py-2 rounded-[0.5rem] border border-border_color w-[11rem]">
              select projects
              <span>
                <img src={arrowDownSvg} />
              </span>
            </button>
          </div>
          <div className="h-2 w-full bg-light_purple_color rounded-[1.875rem] mt-6">
            <div
              className="h-2 bg-purple_color rounded-[1.875rem]"
              style={{ width: "20%" }}
            ></div>
          </div>
          <div className="mt-4 w-full flex items-center justify-between">
            <div className="flex flex-col justify-center items-center text-center">
              <div className="h-4 w-[0.0625rem] bg-light_gray_color" />
              <p className="font-inter text-[0.75rem] font-[500] leading-normal text-light_gray_color">
                Week 1
              </p>
              <p className="font-inter text-[0.75rem] font-[500] leading-normal text-light_gray_color">
                Start
              </p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <div className="h-4 w-[0.0625rem] bg-light_gray_color" />
              <p className="font-inter text-[0.75rem] font-[500] leading-normal text-light_gray_color">
                Week 2
              </p>
              <p className="font-inter text-[0.75rem] font-[500] leading-normal text-light_gray_color">
                Start
              </p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <div className="h-4 w-[0.0625rem] bg-light_gray_color" />
              <p className="font-inter text-[0.75rem] font-[500] leading-normal text-light_gray_color">
                Week 3
              </p>
              <p className="font-inter text-[0.75rem] font-[500] leading-normal text-light_gray_color">
                Start
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[66rem] mt-12 mb-[10rem] sm:mb-[20rem]">
        <p className="text-left font-inter font-[500] leading-normal text-black text-[1.25rem] mb-5">
          All Sites
        </p>
        <div className="w-full items-center justify-between px-5 py-1 grid grid-cols-[1fr,2rem] gap-8  rounded-[0.5rem] border border-border_color bg-white">
          <div className="flex justify-between items-center">
            {webData.map((webDatum, index) => {
              return (
                <div
                  className="flex justify-between gap-3 items-center"
                  key={index}
                >
                  <img
                    src={webDatum.webImage}
                    alt={webDatum.webText}
                    className=""
                  />
                  <p className="font-inter font-[400] text-[0.875rem] text-black">
                    {webDatum.webText}
                  </p>
                </div>
              );
            })}
          </div>
          {/* <div className="w-[2rem] flex items-center justify-end">
            <img src={arrowLeftSvg} />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Analysis;
