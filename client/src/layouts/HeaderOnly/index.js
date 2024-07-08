import classNames from "classnames/bind";

import styles from "./HeaderOnly.module.scss";
import Header from "../components/Header";

const cx = classNames.bind(styles);

function HeaderOnly({ children }) {
  return (
    <div>
      <Header />
      <div className={cx("container")}>
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default HeaderOnly;
