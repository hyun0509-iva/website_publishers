import React from "react";
import style from "./style.module.css";

const ProgressLoading = () => {
  return (
    <div className={style.progress}>
      <div className={style.indeterminate}></div>
    </div>
  );
};

export default ProgressLoading;
