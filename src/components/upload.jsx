
export function Upload () {
  return (
    <>
      <div className="page-top-section flex-1">
        <div className="image-upload-box d-flex align-items-center justify-content-center border mb-5 mx-auto">
        </div>
      </div>
      <input type="text" className="form-control p-3 jv-input text-white bg-transparent mb-4" placeholder="Type here what you wanna create, image style, lighting details, etc." />
      <div className="button-grp">
        <button className="btn btn-dark text-uppercase">
          Clear
        </button>
        <button className="btn btn-default text-uppercase ms-4">
          Next
        </button>
      </div>
    </>
  );
}