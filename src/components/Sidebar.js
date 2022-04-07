import React from "react";
import { ReactComponent as EditIcon } from "../images/edit-icon.svg";
import { ReactComponent as SettingsIcon } from "../images/settings-icon.svg";

function Sidebar(props) {
  const [activeTab, setActiveTab] = React.useState(1);

  const toggleTab = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="sidebar">
      <div className="tabs">
        <div
          className="tabs__selected-bg"
          style={
            activeTab === 1
              ? { transform: "translateX(0%)" }
              : { transform: "translateX(100%)" }
          }
        ></div>
        <div
          onClick={() => toggleTab(1)}
          className={`tabs__tab ${activeTab === 1 ? "active" : ""}`}
        >
          <EditIcon className="tabs__icon" />
        </div>
        <div
          onClick={() => toggleTab(2)}
          className={`tabs__tab ${activeTab === 2 ? "active" : ""}`}
        >
          <SettingsIcon className="tabs__icon" />
        </div>
      </div>

      {activeTab === 1 ? (
        <div className="settings settings--form">
          <h3 className="settings__title">Enter Your Signature Details</h3>
          <label>First & Last Name</label>
          <input
            type="text"
            onChange={props.handleChange}
            name="name"
            value={props.name}
            className="settings__field"
            placeholder="e.g. Jan Kowalski"
          />
          <label>Job Title</label>
          <input
            type="text"
            onChange={props.handleChange}
            name="jobTitle"
            value={props.jobTitle}
            className="settings__field"
            placeholder="e.g. Front-end Developer"
          />
          <label>Phone Numeber</label>
          <input
            type="tel"
            onChange={props.handleChange}
            name="phone"
            value={props.phone}
            className="settings__field"
            placeholder="e.g. +48 123 123 123"
          />
          <label>Email Address</label>
          <input
            type="email"
            onChange={props.handleChange}
            name="email"
            value={props.email}
            className="settings__field"
            placeholder="e.g. jkowalski@whitelabelcoders.com"
          />
          <label>Choose a profile picture:</label>
          <input
            type="file"
            onChange={props.convertToBase64}
            accept=".jpg, .jpeg, .png"
            name="avatar"
            className="settings__field"
          ></input>
        </div>
      ) : (
        <div className="settings settings--templates">
          <h3 className="settings__title">Settings</h3>
          <label>Choose a profile picture:</label>
          <select
            id="template"
            value={props.template}
            onChange={props.handleChange}
            name="template"
            className="settings__field"
          >
            <option value="1">Default</option>
            <option value="2">No-photo</option>
            <option value="3">Reply</option>
          </select>
          {props.template === "1" && (
            <div className="settings__checkbox-wrapper">
              <input
                type="checkbox"
                id="addRadius"
                checked={props.addRadius}
                onChange={props.handleChange}
                name="addRadius"
              />
              <label htmlFor="addRadius">Round a photo?</label>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Sidebar;
