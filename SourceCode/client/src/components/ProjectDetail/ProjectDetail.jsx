import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/useHttp";
import { serverUrl } from "../../utils/global";
function ProjectDetail(props) {
  const id = useParams().id;
  const [data, setData] = useState(null);
  const { sendRequest: getProjectDetail } = useHttp();

  useEffect(() => {
    getProjectDetail({ url: `${serverUrl}/project/${id}` }, (data) => {
      console.log(data);
      setData(data);
    });
  }, []);
  return <div>{data && <>Fetched</>}</div>;
}

export default ProjectDetail;
