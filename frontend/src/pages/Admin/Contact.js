import React from "react";
import { Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  HideLoading,
  SetPortfolioData,
  ShowLoading,
} from "../../redux/rootSlice";
import { message } from "antd";

function Contact() {
  const dispatch = useDispatch();
  const { loading, portfolioData } = useSelector((state) => state.root);

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const res = await fetch("/api/portfolio/update-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, _id: portfolioData.contact._id }),
      });
      dispatch(HideLoading());

      const data = await res.json();

      if (data.success) {
        message.success(data.message);
        // Update the Redux state with the updated portfolio data
        dispatch(SetPortfolioData({ ...portfolioData, contact: data.data }));
      } else {
        message.error(data.error);
        console.log(data.error);
      }
    } catch (error) {
      message.error(error.message);
      dispatch(HideLoading());
    }
  };

  return (
    <div>
      <Form
        onFinish={onFinish}
        layout="vertical"
        initialValues={portfolioData?.contact}
      >
        <Form.Item name="name" label="Name">
          <input placeholder="Name" />
        </Form.Item>
        <Form.Item name="gender" label="Gender">
          <input placeholder="Gender" />
        </Form.Item>
        <Form.Item name="email" label="Email">
          <input placeholder="Email" />
        </Form.Item>
        <Form.Item name="mobile" label="Number">
          <input placeholder="Contact Number " />
        </Form.Item>
        <Form.Item name="age" label="Age">
          <input placeholder="Age " />
        </Form.Item>
        <Form.Item name="address" label="Address">
          <textarea placeholder="address" />
        </Form.Item>
        <div className="flex justify-end w-full">
          <button className="px-10 py-2 bg-primary text-white " type="submit">
            SAVE
          </button>
        </div>
      </Form>
    </div>
  );
}

export default Contact;
