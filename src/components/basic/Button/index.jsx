import classes from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(classes);

export default function Button({ className, ...props }) {
  return <button className={cx("button", className)} {...props} />;
}
