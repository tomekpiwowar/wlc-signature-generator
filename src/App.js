import React from "react";
import Resizer from "react-image-file-resizer";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import placeholder from "./data/Placeholder";

export default function App() {
  const [formData, setFormData] = React.useState({
    name: "Jan Kowalski",
    jobTitle: "Front-end Developer",
    phone: "+48 123 123 123",
    email: "jkowalski@whitelabelcoders.com",
    avatar: placeholder,
    addRadius: false,
    template: "1",
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  /* Conversion to Base64 with FileReader API - optimize problems! */
  // const convertToBase64 = (event) => {
  //   let file = event.target.files[0];
  //   const reader = new FileReader();
  //   reader.addEventListener(
  //     "load",
  //     function () {
  //       setFormData((prevFormData) => {
  //         return {
  //           ...prevFormData,
  //           avatar: reader.result,
  //         };
  //       });
  //     },
  //     false
  //   );
  //   reader.readAsDataURL(file);
  // };

  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        200,
        200,
        "JPEG",
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });

  const convertToBase64 = async (event) => {
    try {
      const file = event.target.files[0];
      const image = await resizeFile(file);
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          avatar: image,
        };
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="app-container">
      <Sidebar
        name={formData.name}
        jobTitle={formData.jobTitle}
        phone={formData.phone}
        email={formData.email}
        avatar={formData.avatar}
        addRadius={formData.addRadius}
        template={formData.template}
        handleChange={handleChange}
        convertToBase64={convertToBase64}
      />
      <Main
        name={formData.name}
        jobTitle={formData.jobTitle}
        phone={formData.phone}
        email={formData.email}
        avatar={formData.avatar}
        addRadius={formData.addRadius}
        template={formData.template}
        handleChange={handleChange}
        convertToBase64={convertToBase64}
      />
    </div>
  );
}
