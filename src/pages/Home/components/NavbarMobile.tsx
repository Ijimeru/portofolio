import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import staticroute from "../../../utils/staticroute";
import { navList } from "./navList";
import { useTranslation } from "react-i18next";

export default function NavbarMobile() {
  const location = useLocation();
  const { t } = useTranslation();
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white flex md:hidden p-4 shadow-lg shadow-primary-600">
      <div className="border-4 border-primary-100 p-2 rounded-full w-24">
        <div className="rounded-full overflow-hidden">
          <img src={staticroute("fotodiri.jpg")} alt="foto diri" />
        </div>
      </div>
      <ul className="py-2 uppercase text-gray-500 flex items-center overflow-auto no-scrollbar w-full">
        {navList.map((nav) => (
          <li key={nav.name}>
            <Link
              to={nav.href}
              className={clsx(
                "hover:border-b-[1px] hover:border-b-primary-100 border-b-[1px] transition-all duration-500 mx-4 px-4 py-1 font-bold text-lg font-mono focus:bg-primary-50 focus:rounded-lg outline-none active:outline active:outline-primary-200",
                location.pathname == nav.href ? "border-b-primary-100" : "border-b-transparent"
              )}
            >
              {t(nav.name)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
