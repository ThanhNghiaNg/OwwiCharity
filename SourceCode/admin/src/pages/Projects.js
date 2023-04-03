import React, { useRef } from "react";
import ProjectList from "../components/ProjectList/ProjectList";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import useHttp from "../hooks/useHttp";
import { useState } from "react";
import { useEffect } from "react";
import { serverUrl } from "../utils/global";
import { Link } from "react-router-dom";

function Projects(props) {
  const { sendRequest, isLoading } = useHttp();
  const [projects, setProjects] = useState([]);
  const [reload, setReload] = useState(false)
  const [query, setQuery] = useState("");
  const queryRef = useRef();

  const changeReloadHandler = ()=>{
    setReload(prev=>!prev)
  }
  const onChangeQueryHandler = (event) => {
    event.preventDefault();
    changeReloadHandler()
    setQuery(queryRef.current.value);
  };

  useEffect(() => {
    sendRequest({ url: `${serverUrl}/admin/projects?q=${query}` }, (data) => {
      setProjects(data);
    });
  }, [query, reload]);

  return (
    <div>
      <div className="d-flex justify-content-between mb-3">
        <Form className="d-flex" onSubmit={onChangeQueryHandler}>
          <Form.Control
            type="search"
            placeholder="Search by Title or ID"
            className="me-2"
            aria-label="Search"
            ref={queryRef}
          />
          <Button variant="outline-secondary" type="submit">Search</Button>
        </Form>
        <Button as={Link} to="/project/create" variant="outline-primary">
          New Project
        </Button>
      </div>
      <ProjectList projects={projects} onReload={reload} changeReload={changeReloadHandler}/>
    </div>
  );
}

export default Projects;
