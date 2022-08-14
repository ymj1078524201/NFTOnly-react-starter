import { useSelector } from "react-redux";

import classes from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(classes);

export default function Count() {
  const { count } = useSelector((state) => state.counter);

  return <div className={cx("count")}>{count}</div>;
}
