import useHttp from "../../hooks/useHttp";
import { serverUrl } from "../../utils/global";
import PartnerItem from "./PartnerItem";
import classes from "./PartnerList.module.css";
import { Spin } from "antd";

import React, { useEffect, useState } from "react";

function PartnerList(props) {
  const { sendRequest, isLoading } = useHttp();
  const [data, setData] = useState([]);
  useEffect(() => {
    sendRequest({ url: `${serverUrl}/partners` }, (data) => {
      setData(data);
    });
  }, []);
  const partnerListContent = data.map((partner) => (
    <PartnerItem item={partner} key={partner._id} />
  ));
  return (
    <div>
      <h2 className="my-4">Các đối tác đồng hành</h2>
      {isLoading && <div className="my-5 text-center"><Spin size="lg"/></div>}
      <ul className={classes.list}>{partnerListContent}</ul>
    </div>
  );
}

export default PartnerList;
