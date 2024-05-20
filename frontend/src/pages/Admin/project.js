import { Form, Modal, message, Input } from "antd";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  HideLoading,
  ReloadData,
  ShowLoading,
} from "../../redux/rootSlice";

function Project() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData;
  const [showModal, setShowModal] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      let res;
      const endpoint = selectedItemForEdit
        ? "/api/portfolio/update-project"
        : "/api/portfolio/add-project";

      values.technologies = values.technologies.split(',').map(tech => tech.trim());


      res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(selectedItemForEdit ? { ...values, _id: selectedItemForEdit._id } : values),
      });

      const data = await res.json();
      dispatch(HideLoading());

      if (res.ok) {
        message.success(data.message);
        setShowModal(false);
        dispatch(ReloadData(true));
      } else {
        message.error(data.error || "Something went wrong");
      }
    } catch (error) {
      message.error(error.message);
      dispatch(HideLoading());
    }
  };

  const handleDelete = async (id) => {
    try {
      dispatch(ShowLoading());
      const res = await fetch("/api/portfolio/delete-project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ _id: id }),
      });

      const data = await res.json();
      dispatch(HideLoading());

      if (res.ok) {
        message.success(data.message);
        dispatch(ReloadData(true));
      } else {
        message.error(data.error || "Something went wrong");
      }
    } catch (error) {
      message.error(error.message);
      dispatch(HideLoading());
    }
  };

  useEffect(() => {
    if (selectedItemForEdit) {
      // Join technologies array into a comma-separated string
      form.setFieldsValue({
        ...selectedItemForEdit,
        technologies: selectedItemForEdit.technologies.join(', ')
      });
    } else {
      form.resetFields();
    }
  }, [selectedItemForEdit, form]);

  const handleCancel = () => {
    form.resetFields();
    setShowModal(false);
    setSelectedItemForEdit(null);
  };

  const handleAddExperience = () => {
    setSelectedItemForEdit(null);
    form.resetFields();
    setShowModal(true);
  };

  const handleEditExperience = (project) => {
    setSelectedItemForEdit(project);
    setShowModal(true);
  };

  return (
    <div>
      <div className="flex justify-end">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-5 rounded"
          onClick={handleAddExperience}
        >
          Add Project
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5 sm:grid-cols-2">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="shadow border p-5 sm:px-4 sm:py-2 border-gray-400 rounded flex flex-col gap-5 "
          ><img src={project.image} alt="" className="h-60 w-72"/>
            <h1 className="text-primary text-xl font-bold">
              {project.title}
            </h1>
            <div>
                <b>Link:</b>
            <a href={project.link} className ="text-primary hover:text-secondary"alt ="/">
              {project.link} 
            </a>
            </div>
            <h1>
              <b>Technologies:</b> {project.technologies.join(" , ")}
            </h1>
            <p>
              <b>Description:</b> {project.description}
            </p>
            <div  className="mt-auto flex justify-end gap-5 sm:gap-2 sm:justify-center">
              <button
                className="bg-primary text-white px-5 py-2 rounded-md"
                onClick={() => handleEditExperience(project)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-5 py-2 rounded-md"
                onClick={() => handleDelete(project._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal
        open={showModal}
        title={selectedItemForEdit ? "Edit Project" : "Add Project"}
        footer={null}
        onCancel={handleCancel}
      >
        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Form.Item name="title" label="Title">
            <Input placeholder="Title" />
          </Form.Item>
          <Form.Item name="link" label="Link">
            <Input placeholder="Link" />
          </Form.Item>
          <Form.Item name="image" label="Image URL">
            <Input placeholder="ImageURL" />
          </Form.Item>
          <Form.Item name="technologies" label="Technologies">
            <Input placeholder="Technologies" />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea placeholder="Description" />
          </Form.Item>
          <div className="flex justify-end">
            <button
              type="button"
              className="border-primary text-primary px-5 py-2 m-2"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button className="bg-primary text-white px-5 py-2" type="submit">
              {selectedItemForEdit ? "Update" : "Add"}
            </button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default Project;
