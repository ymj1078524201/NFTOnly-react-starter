import { Link } from "react-router-dom";

import classes from "./Playground.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(classes);

export default function Playground() {
  return (
    <div className={cx("playground")}>
      <h1>Visionteam React Starter</h1>
      <h2>Playground</h2>
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}
