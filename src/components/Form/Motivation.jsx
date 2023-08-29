import { CSSTransition } from "react-transition-group";
import { useState, useEffect } from "react";

const Motivation = ({ image, quote, payment }) => {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    setIsShowing(false);
    const showTimeout = setTimeout(() => {
      setIsShowing(true);
    }, 50);

    const hideTimeout = setTimeout(() => {
      setIsShowing(false);
    }, 8000);

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, [quote, image]);
  return (
    <CSSTransition
      in={isShowing}
      timeout={500}
      classNames={"fade"}
      unmountOnExit
    >
      <div
        className={`fixed flex top-[9rem] ${
          payment ? " right-[0px]" : " right-[-4px]"
        }  justify-start items-center z-[1000] max-sm:opacity-0 `}
      >
        <div className="quote bg-purple_color border-border_color w-[15rem] min-h-[10rem] p-3 text-center grid place-items-center rounded-lg opacity-80 ">
          <p className="font-inter text-white font-bold text-[1.2rem] mt-[-2rem]">
            {quote}
          </p>
        </div>
        <img
          src={image}
          className={`${
            payment ? "w-[12rem] h-[12rem]" : "w-[7rem] h-[7rem]"
          }  object-contain relative top-[100px] ${
            payment ? "left-[-80px]" : "left-[-38px]"
          }`}
          alt="motivation image"
        />
      </div>
    </CSSTransition>
  );
};

export default Motivation;
