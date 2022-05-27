import Link from "next/link";
import Image from "next/image";
import layout from "../styles/layout.module.css";
import routes from "../pages/_routes";
import {
  Provider as NavigationProvider,
  useDispatch,
  useSelector,
} from "react-redux";
import { reducer } from "../redux";
import { createStore } from "@reduxjs/toolkit";
const store = createStore(reducer);

function Header() {
  return (
    <header className={layout.header}>
      <h2>Motion</h2>
      <button type="button">
        <hr />
        <hr />
      </button>
    </header>
  );
}

export function Navigation() {
  return (
    <nav className={layout.navigation}>
      <ul>
        <NavigationProvider store={store}>
          {routes.mainRoutes.map((route) => {
            return <NavigationLink key={route.name} route={route} />;
          })}
        </NavigationProvider>
      </ul>
    </nav>
  );
}

function NavigationLink({ route }) {
  const dispatch = useDispatch();
  function changePage(path) {
    dispatch({ type: "CHANGE_PAGE", payload: path });
  }
  const state = useSelector((state) => state);
  return (
    <Link key={route.name} href={route.path}>
      <li
        onClick={function () {
          changePage(route.path);
        }}
      >
        <Image
          src={
            state.current === route.path
              ? route.icon.selected
              : route.icon.initial
          }
          alt={route.name}
          objectFit="contain"
        />
      </li>
    </Link>
  );
}
export default function ClientLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Navigation />
    </>
  );
}
