import React from "react";
import { Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  HideLoading,
  SetPortfolioData,
  ShowLoading,
} from "../../redux/rootSlice";
import { message } from "antd";

function AdminIntro() {
  const dispatch = useDispatch();
  const { loading, portfolioData } = useSelector((state) => state.root);

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const res = await fetch("/api/portfolio/update-intro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, _id: portfolioData.intro._id }),
      });
      dispatch(HideLoading());

      const data = await res.json();

      if (data.success) {
        message.success(data.message);
        // Update the Redux state with the updated portfolio data
        dispatch(SetPortfolioData({ ...portfolioData, intro: data.data }));
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
        initialValues={portfolioData?.intro}
      >
        <Form.Item name="welcomeText" label="welcomeText">
          <input placeholder="welcome text" />
        </Form.Item>
        <Form.Item name="firstName" label="First Name">
          <input placeholder="First Name" />
        </Form.Item>
        <Form.Item name="lastName" label="Last Name">
          <input placeholder="Last Name" />
        </Form.Item>
        <Form.Item name="caption" label="Caption">
          <input placeholder="Caption " />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <textarea placeholder="Description " />
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

export default AdminIntro;
