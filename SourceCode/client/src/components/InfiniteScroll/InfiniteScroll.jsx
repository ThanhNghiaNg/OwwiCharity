import React, { forwardRef, useImperativeHandle, useState } from "react";

const InfiniteScroll = forwardRef((props, ref) => {
  const [page, setPage] = useState(1);
  const [hideSeeMoreBtn, setHideSeeMoreBtn] = useState(false);
  const pageSize = props.pageSize ? props.pageSize : 8;
  const onReload = props.onReload;
  const buttonInfinity = props.buttonInfinity;
  const increasePageHandler = () => {
    setPage((page) => page + 1);
    if (onReload) {
      onReload();
    }
  };
  const getPageInfo = () => {
    return {
      page,
      pageSize,
      setHideSeeMoreBtn,
    };
  };
  useImperativeHandle(ref, () => ({
    getPageInfo,
  }));
  console.log("isload: ", props.isLoading);
  return (
    <React.Fragment>
      {props.children}
      {buttonInfinity && !hideSeeMoreBtn && !props.isLoading && buttonInfinity}
      {!buttonInfinity && !hideSeeMoreBtn && (
        <div className="text-center">
          <button
            className="btn btn-outline-primary"
            onClick={increasePageHandler}
            disabled={props.isLoading}
          >
            {props.isLoading ? "Loading..." : "See more"}
          </button>
        </div>
      )}
    </React.Fragment>
  );
});

export default InfiniteScroll;
