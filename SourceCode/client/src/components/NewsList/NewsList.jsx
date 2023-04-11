import classes from "./NewsList.module.css";
import useHttp from "../../hooks/useHttp";
import { serverUrl } from "../../utils/global";
import NewsItem from "./NewsItem";
import React, { useEffect, useState, useRef } from "react";
import { Spin } from "antd";
import InfiniteScroll from "../InfiniteScroll/InfiniteScroll";

function NewsList(props) {
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
      { url: `${serverUrl}/news?page=${page}&&pageSize=${pageSize}` },
      (data) => {
        setData((prev) => prev.concat(data.data));
        if (page === data.totalPages) {
          setHideSeeMoreBtn(true);
        }
      }
    );
  }, [reload]);

  const newsListContent = data.map((news) => (
    <NewsItem item={news} key={news._id} />
  ));

  return (
    <>
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
        <ul className={classes.news__list}>{newsListContent}</ul>
      </InfiniteScroll>
    </>
  );
}

export default NewsList;
