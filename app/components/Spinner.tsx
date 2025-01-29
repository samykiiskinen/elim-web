import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div
        className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-black border-e-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
        role="status"
      ></div>
    </div>
  );
};

export default Spinner;
