import { Form, Modal, message, Input } from "antd";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  HideLoading,
  ReloadData,
  ShowLoading,
} from "../../redux/rootSlice";

function Experience() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { experiences } = portfolioData;
  const [showModal, setShowModal] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      let res;
      const endpoint = selectedItemForEdit
        ? "/api/portfolio/update-experience"
        : "/api/portfolio/add-experience";

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
      const res = await fetch("/api/portfolio/delete-experience", {
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
      form.setFieldsValue(selectedItemForEdit);
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

  const handleEditExperience = (experience) => {
    setSelectedItemForEdit(experience);
    setShowModal(true);
  };

  return (
    <div>
      <div className="flex justify-end">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-5 rounded"
          onClick={handleAddExperience}
        >
          Add Experience
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {experiences.map((experience, idx) => (
          <div
            key={idx}
            className="shadow border p-5 border-gray-400 rounded flex flex-col gap-5 relative"
          >
            <h1 className="text-primary text-xl font-bold">
              {experience.period}
            </h1>
            <h1>
              <b>Company:</b> {experience.company}
            </h1>
            <h1>
              <b>Role:</b> {experience.title}
            </h1>
            <p>
              <b>Description:</b> {experience.description}
            </p>
            <div className="flex justify-end gap-5 sm:gap-2">
              <button
                className="bg-primary text-white px-5 py-2 rounded-md"
                onClick={() => handleEditExperience(experience)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-5 py-2 rounded-md"
                onClick={() => handleDelete(experience._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal
        open={showModal}
        title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}
        footer={null}
        onCancel={handleCancel}
      >
        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Form.Item name="period" label="Period">
            <Input placeholder="Period" />
          </Form.Item>
          <Form.Item name="company" label="Company">
            <Input placeholder="Company" />
          </Form.Item>
          <Form.Item name="title" label="Title">
            <Input placeholder="Title" />
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

export default Experience;
