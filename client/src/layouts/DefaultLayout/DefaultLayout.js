import classNames from "classnames/bind";

import styles from "./DefaultLayout.module.scss";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import BtnAddTask from "~/components/BtnAddTask";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className={cx("container")}>
        <Sidebar />
        <BtnAddTask />
        <div className={cx("content")}>{children}</div>
        <Footer />
      </div>
    </div>
  );
}

export default DefaultLayout;
