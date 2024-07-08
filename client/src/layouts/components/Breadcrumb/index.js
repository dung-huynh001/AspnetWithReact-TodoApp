import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./Breadcrumb.module.scss";

const cx = classNames.bind(styles);

function Breadcrumb({ title, path }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("breadcrumb")}>
        <h4 className={cx("title")}>{title}</h4>
        <p>
          {path.map(({ label, link }, index) => {
            let active = false;
            if (label === title) {
              active = true;
            }

            return (
              link ? (
                <Link key={index} to={link} className={cx("label", { active })}>
                  {label}
                </Link>
              ) : (
                <span key={index} className={cx("label", { active })}>
                  {label}
                </span>
              )
            );
          })}
        </p>
      </div>
    </div>
  );
}

export default Breadcrumb;
