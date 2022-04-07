function Preview(props) {
  return (
    <div className="preview">
      <div className="preview__nav">
        <div className="preview__nav-button preview__nav-button--red"></div>
        <div className="preview__nav-button preview__nav-button--yellow"></div>
        <div className="preview__nav-button preview__nav-button--green"></div>
      </div>
      <div className="preview__details">
        <p className="preview__details-text">
          To: <span>Your Recipient</span>
        </p>
        <p className="preview__details-text">
          Subject:{" "}
          <span>
            {props.template === "3" && "RE: "}Check out my new Email Signature
          </span>
        </p>
      </div>
      <div className="preview__main">
        <div
          className="preview__signature"
          dangerouslySetInnerHTML={{
            __html: props.templates[props.template - 1],
          }}
        ></div>
      </div>
    </div>
  );
}

export default Preview;
