import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  tryDemoText,
  learnMoreText,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container py-5 mb-5 text-muted">
      <div className="row align-items-center">

        <div className="col-1"></div>

        {/* IMAGE */}
        <div className="col-4 text-center">
          <img 
            src={imageURL} 
            alt={productName}
            className="img-fluid"
            style={{ maxWidth: "90%" }}
          />
        </div>

        <div className="col-2"></div>

        {/* TEXT */}
        <div className="col-4">
          <h3 className="fw-semibold mb-3">{productName}</h3>

          <p className="text-muted mb-4">
            {productDescription}
          </p>

          {/* LINKS */}
          <div className="mb-4">
            <a href={tryDemo} className="me-4 text-decoration-none">
              {tryDemoText}
            </a>

            <a href={learnMore} className="text-decoration-none">
              {learnMoreText}
            </a>
          </div>

          {/* BADGES */}
          <div>
            <a href={googlePlay} className="me-3">
              <img 
                src="/Assets/googlePlayBadge.svg" 
                alt="Google Play" 
                style={{ height: "40px" }}
              />
            </a>

            <a href={appStore}>
              <img 
                src="/Assets/appstoreBadge.svg" 
                alt="App Store" 
                style={{ height: "40px" }}
              />
            </a>
          </div>
        </div>

        <div className="col-1"></div>

      </div>
    </div>
  );
}

export default LeftSection;