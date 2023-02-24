
export function Camera () {
  return (
    <>
      <div className="page-top-section flex-1">
        <h6 className="main-heading mb-5 text-white">What do you wanna create?</h6>
        <div className="image-upload-box d-flex align-items-center justify-content-center border mb-5 mx-auto">
        </div>
        <button className="camera-btn d-block mb-4 mx-auto border-0"></button>
      </div>
      <div className="camera-page-btns">
        <label className="custom-file-upload mb-4 fw-bold">
          <input type="file" />
          Upload a photo
        </label>
        <button className="btn btn-default text-uppercase d-block m-auto">
          Next
        </button>
      </div>
    </>
  );
}