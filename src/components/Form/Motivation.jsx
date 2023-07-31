import { CSSTransition } from "react-transition-group";
import { useState, useEffect } from "react";

const Motivation = ({ image, quote }) => {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    setIsShowing(false);
    const showTimeout = setTimeout(() => {
      setIsShowing(true);
    }, 50);

    const hideTimeout = setTimeout(() => {
      setIsShowing(false);
    }, 4000);

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
      <div className="fixed flex top-[9rem] right-[-4px] justify-start items-center z-[1000]">
        <div className="quote bg-purple_color border-border_color w-[15rem] h-[10rem] p-3 text-center grid place-items-center rounded-lg opacity-80 ">
          <p className="font-inter text-white font-bold text-[1.2rem] mt-[-2rem]">
            {quote}
          </p>
        </div>
        <img
          src={image}
          className="w-[7rem] h-[7rem] relative top-[100px] left-[-38px]"
          alt="motivation image"
        />
      </div>
    </CSSTransition>
  );
};

export default Motivation;
