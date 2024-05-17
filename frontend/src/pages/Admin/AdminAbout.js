import React from "react";
import { Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  HideLoading,
  SetPortfolioData,
  ShowLoading,
} from "../../redux/rootSlice";
import { message } from "antd";

function AdminAbout() {
  const dispatch = useDispatch();
  const { loading, portfolioData } = useSelector((state) => state.root);
 
  const onFinish = async (values) => {
    try {
      const tempSkills = values.skills.split(",");
      values.skills =tempSkills;
      dispatch(ShowLoading());
      const res = await fetch("/api/portfolio/update-about", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({...values, _id: portfolioData.about._id }),
      });
      dispatch(HideLoading());

      const data = await res.json();
      console.log(data)

      if (data.success) {
        message.success(data.message);
       
        // Update the Redux state with the updated portfolio data
        dispatch(SetPortfolioData({ ...portfolioData, about: data.data }));
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
        initialValues={{...portfolioData?.about,
          skills: portfolioData.about.skills.join(" , ")
        }}
      >
        <Form.Item name="lottieURL" label="lottie URL">
          <input placeholder="Lottie URL" />
        </Form.Item>
        <Form.Item name="description1" label="Description1">
          <textarea placeholder="Description 1" />
        </Form.Item>
        <Form.Item name="description2" label="Description2">
          <textarea placeholder="Description 2" />
        </Form.Item>
        <Form.Item name="skills" label="Skills">
          <textarea placeholder="Skills" />
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

export default AdminAbout;