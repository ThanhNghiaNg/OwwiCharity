import useHttp from "../../hooks/useHttp";
import { serverUrl } from "../../utils/global";
import InfiniteScroll from "../InfiniteScroll/InfiniteScroll";
import PartnerItem from "./PartnerItem";
import classes from "./PartnerList.module.css";
import { Spin } from "antd";

import React, { useEffect, useRef, useState } from "react";

function PartnerList(props) {
  const { sendRequest, isLoading } = useHttp();
  const [data, setData] = useState([]);
  const [reload, setReload] = useState(false);
  const scrollRef = useRef();
  const reloadHandler = () => {
    setReload((prev) => !prev);
  };

  useEffect(() => {
    const { page, pageSize, setHideSeeMoreBtn } =
      scrollRef.current.getPageInfo();
    sendRequest(
      { url: `${serverUrl}/partners?page=${page}&&pageSize=${pageSize}` },
      (data) => {
        setData((prev) => prev.concat(data.data));
        if (page === data.totalPages) {
          setHideSeeMoreBtn(true);
        }
      }
    );
  }, [reload]);
  const partnerListContent = data.map((partner) => (
    <PartnerItem item={partner} key={partner._id} />
  ));
  return (
    <div>
      <h2 className="my-4">Các đối tác đồng hành</h2>
      {isLoading && (
        <div className="my-5 text-center">
          <Spin size="lg" />
        </div>
      )}
      <InfiniteScroll
        onReload={reloadHandler}
        ref={scrollRef}
        isLoading={isLoading}
        pageSize={12}
      >
        <ul className={classes.list}>{partnerListContent}</ul>
      </InfiniteScroll>
    </div>
  );
}

export default PartnerList;
