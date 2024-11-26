"use client";
import React, { useState } from "react";
import ProgressLoading from "./ProgressLoading";

const Header = () => {
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    // 가상의 API 호출을 setTimeout으로 시뮬레이션
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  };

  return (
    <div>
      {isLoading && <ProgressLoading />}
      Header
      <div>
        <button onClick={fetchData}>데이터조회</button>
      </div>
    </div>
  );
};

export default Header;
