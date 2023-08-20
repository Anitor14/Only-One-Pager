import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Error = () => {
  const { t } = useTranslation();
  return (
    <section className="flex px-20 max-sm:px-6 items-center h-screen p-16 bg-background_grey_color text-black">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto mt-20">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
            <span className="sr-only">{`${t("Error")}`}</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            {`${t("Sorry")}`}
          </p>
          <p className="mt-4 mb-8 dark:text-gray-400">{`${t("SorryMsg")}`}</p>
          <NavLink
            to={"/"}
            className="px-8 py-3 font-semibold rounded bg-purple_color text-white"
          >
            {`${t("BackToHomepage")}`}
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Error;
