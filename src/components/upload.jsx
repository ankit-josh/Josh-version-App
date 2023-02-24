
export function Upload () {
  return (
    <>
      <div className="page-top-section flex-1">
        <a href="#" className="back-arrow d-flex mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
          </svg>
        </a>
        <div className="image-upload-box d-flex align-items-center justify-content-center border mb-2 mx-auto">
        </div>
        <span className="text-white fw-bold d-inline-block mb-5">Change Photo</span>
      </div>
      <input type="text" className="form-control p-3 jv-input text-white mb-4" placeholder="Add Prompt here" />
      <div className="button-grp">
        <button className="btn btn-dark text-uppercase">
          Clear
        </button>
        <button className="btn btn-default text-uppercase ms-4">
          Submit
        </button>
      </div>
    </>
  );
}