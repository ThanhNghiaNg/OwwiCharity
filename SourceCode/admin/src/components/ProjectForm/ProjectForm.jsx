import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";
import useHttp from "../../hooks/useHttp";
import { serverUrl } from "../../utils/global";
import ImagesDisplay from "./ImagesDisplay";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import classes from "./ProjectForm.module.css";

function ProductForm(props) {
  const isEdit = props.isEdit;
  const projectId = useParams().id;
  const navigate = useNavigate();
  const { sendRequest, error, isLoading, success, setSuccess } = useHttp();
  const inputImageRef = useRef();
  const [images, setImages] = useState([]);
  const [partners, setPartners] = useState([]);
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState({});
  const [text, setText] = useState("");

  const {
    sendRequest: getPartners,
    isLoading: isLoadingPartners,
    cancelRequest: cancelGetPartners,
  } = useHttp();
  const {
    sendRequest: getCategories,
    isLoading: isLoadingCategories,
    cancelRequest: cancelGetCategories,
  } = useHttp();
  const {
    sendRequest: getProject,
    isLoading: isLoadingProject,
    cancelRequest: cancelGetProject,
  } = useHttp();

  const removeImageHandler = (index) => {
    setImages((prev) => prev.filter((img, i) => i !== index));
  };

  const updateImageHandler = (index, name, description) => {
    setImages((prev) => {
      prev[index].name = name;
      prev[index].description = description;
      return [...prev];
    });
  };

  const onAddImageHandler = (event) => {
    const selectedFiles = [...event.target.files];
    setImages((prev) => [
      ...prev,
      ...selectedFiles.map((img) => {
        return { image: img, name: "", description: "" };
      }),
    ]);
    inputImageRef.current.value = ""; // clear the file input
  };

  const openChooseFileHandler = () => {
    inputImageRef.current.click();
  };

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const obj = Object.fromEntries(formData.entries());
    const submitFormData = new FormData();
    images.forEach((img) => {
      submitFormData.append("files", img.image);
    });
    submitFormData.append("imagesDesc", JSON.stringify(images));
    submitFormData.append("title", obj.title);
    submitFormData.append("category", obj.category);
    submitFormData.append("shortDesc", obj.shortDesc);
    submitFormData.append("story", obj.story);
    submitFormData.append("startDate", obj.startDate);
    submitFormData.append("endDate", obj.endDate);
    submitFormData.append("expectedMoney", obj.expectedMoney);
    submitFormData.append("partner", obj.partner);
    sendRequest(
      {
        url: `${serverUrl}/admin/project${isEdit ? `/${projectId}` : ""}`,
        method: isEdit ? "PUT" : "POST",
        headers: {},
        body: submitFormData,
      },
      (data) => {
        if (isEdit) {
          setTimeout(() => {
            setSuccess("");
          }, 3000);
        } else {
          setTimeout(() => {
            navigate("/projects");
          }, 1000);
        }
      }
    );
  }

  useEffect(() => {
    if (isEdit) {
      getProject({ url: `${serverUrl}/admin/project/${projectId}` }, (data) => {
        setProject(data);
        setImages(data.images);
      });
    }

    getPartners({ url: `${serverUrl}/admin/partners` }, (data) => {
      console.log(data)
      setPartners(data);
    });

    getCategories({ url: `${serverUrl}/admin/categories` }, (data) => {
      setCategories(data);
    });
  }, []);

  const partnerListEl = partners.map((partner) => {
    return (
      <option
        key={partner._id}
        value={partner._id}
        selected={project.partner ? project.partner._id === partner._id : false}
      >
        {partner.name}
      </option>
    );
  });
  const categoryListEl = categories.map((category) => {
    return (
      <option
        key={category._id}
        value={category._id}
        selected={
          project.category ? project.category._id === category._id : false
        }
      >
        {category.name}
      </option>
    );
  });
  return (
    <Form onSubmit={handleSubmit}>
      <div className={classes.grid2}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title of project"
            required
            name="title"
            defaultValue={project.title}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Select
            aria-label="Default select example"
            name="category"
            className={"text-capitalize"}
          >
            <option>Select a category</option>
            {categoryListEl}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Short Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter short description of project"
            required
            name="shortDesc"
            defaultValue={project.shortDesc}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Story</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter story of project"
            required
            name="story"
            defaultValue={project.story}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Start Date</Form.Label>
          <Form.Control
            type="date"
            required
            name="startDate"
            defaultValue={
              project.startDate
                ? new Date(project.startDate).toISOString().substr(0, 10)
                : ""
            }
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>End Date</Form.Label>
          <Form.Control
            type="date"
            required
            name="endDate"
            defaultValue={
              project.endDate
                ? new Date(project.endDate).toISOString().substr(0, 10)
                : ""
            }
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Expected Money</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter expected money of project"
            required
            name="expectedMoney"
            defaultValue={project.expectedMoney}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Partner</Form.Label>
          <Form.Select aria-label="Default select example" name="partner">
            <option>Select partner</option>
            {partnerListEl}
          </Form.Select>
        </Form.Group>
      </div>
      <Form.Group className="mb-3 mt-3 d-flex align-items-center">
        <Form.Label className="me-3">Images</Form.Label>
        <Button onClick={openChooseFileHandler} variant="dark">
          +
        </Button>
        <Form.Control
          style={{ display: "none" }}
          type="file"
          ref={inputImageRef}
          multiple={true}
          onChange={onAddImageHandler}
        ></Form.Control>
      </Form.Group>
      <ImagesDisplay
        images={images}
        onRemove={removeImageHandler}
        onUpdate={updateImageHandler}
        hasURL={!!project.images}
      />

      <div className="text-center mt-4">
        {success && <p className="mb-2 text-success">{success}</p>}
        {error && <p className="mb-2 text-danger">{error}</p>}

        <Button variant="success" type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Submit"}
        </Button>
      </div>
    </Form>
  );
}

export default ProductForm;
