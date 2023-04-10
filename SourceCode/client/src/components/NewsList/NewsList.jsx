import classes from "./NewsList.module.css";
import useHttp from "../../hooks/useHttp";
import { serverUrl } from "../../utils/global";
import NewsItem from "./NewsItem";
import React, { useEffect, useState } from "react";
import { Spin } from "antd";

function NewsList(props) {
  const { sendRequest, isLoading } = useHttp();
  const [data, setData] = useState([]);

  useEffect(() => {
    sendRequest({ url: `${serverUrl}/news` }, (data) => {
      console.log(data);
      setData(data);
    });
  }, []);

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
      <ul className={classes.news__list}>{newsListContent}</ul>
    </>
  );
}

export default NewsList;
