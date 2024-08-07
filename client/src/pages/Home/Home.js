import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Breadcrumb from "~/layouts/components/Breadcrumb";
import TaskList from "~/components/TaskList";

const cx = classNames.bind(styles);

function Home() {
  return (
    <main className={cx("wrapper")}>
      <Breadcrumb
        title="Upcoming"
        path={[]}
      />
      <TaskList />
    </main>
  );
}

export default Home;
