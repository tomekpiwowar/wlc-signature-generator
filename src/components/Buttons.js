import React from "react";

function Buttons(props) {
  const [prettyPrint, setPrettyPrint] = React.useState(false);

  const [showCode, setShowCode] = React.useState(false);

  const downloadDoc = () => {
    let file = new File(
      [props.templates[props.template - 1]],
      "signature.html",
      {
        type: "text/html",
      }
    );

    const link = document.createElement("a");
    const url = URL.createObjectURL(file);

    link.href = url;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const [slideUp, setSlideUp] = React.useState(0);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(props.templates[props.template - 1]);
    setSlideUp(1);
  };

  const togglePrettyPrint = () => {
    setPrettyPrint((prevState) => !prevState);
  };

  const toggleShowCode = () => {
    setShowCode((prevState) => !prevState);
  };

  const codePreviewStyles = {
    transform: showCode ? "translateX(0)" : "translateX(100%)",
  };

  return (
    <>
      <div className="buttons">
        <div onClick={downloadDoc} className="button">
          Download
        </div>
        <div
          onClick={copyToClipboard}
          onAnimationEnd={() => setSlideUp(0)}
          slideup={slideUp}
          className="button button--copy"
        >
          Copy to clipboard
        </div>
        <div onClick={toggleShowCode} className="button">
          Show code
        </div>
      </div>

      <div className="code-preview" style={codePreviewStyles}>
        <div className="code-preview__top-bar">
          <p className="code-preview__title">Pretty Print ?</p>
          <div className="switch" onClick={togglePrettyPrint}>
            <div
              className={`switch__circle ${
                prettyPrint ? "switch__circle--on" : "switch__circle--off"
              }`}
            ></div>
          </div>
          <p className="code-preview__close" onClick={toggleShowCode}>
            Close
          </p>
        </div>
        <code className="code-preview__code">
          {prettyPrint ? (
            <pre>{props.templates[props.template - 1]}</pre>
          ) : (
            props.templates[props.template - 1]
          )}
        </code>
      </div>
    </>
  );
}

export default Buttons;
