import classNames from "classnames/bind";

import styles from "./HeaderOnly.module.scss";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";

const cx = classNames.bind(styles);

function HeaderOnly({ children }) {
  return (
    <div>
      <Header />
      <Breadcrumb
        title="Add New Task"
        path={[
          {
            label: "Home",
            link: "/",
          },
          {
            label: "Add New Task",
          },
        ]}
      />
      <div className={cx("container")}>
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}

export default HeaderOnly;
