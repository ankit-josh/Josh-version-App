import { useState } from "react";

export function Camera () {

  const [url,setUrl]=useState("")

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const imageUrl = reader.result;
      setUrl(imageUrl)
      // Do something with the imageUrl, such as set it to state
    };
    
  };
  
  return (
    <>
      <div className="page-top-section flex-1">
        <div className="image-upload-box d-flex align-items-center justify-content-center border mb-5 mx-auto">
          <img src={url} alt="pic" style={{height:"400px",width:"400px"}}/>
        </div>
        {/* <button className="btn-camera d-block mb-4 mx-auto border-0"></button> */}
      </div>
      <div className="camera-page-btns">
        <label className="custom-file-upload mb-4 fw-bold">
          <input type="file" onChange={handleFileUpload} />
          Upload a photo
        </label>
        <button className="btn btn-default text-uppercase d-block m-auto">
          Next
        </button>
      </div>
    </>
  );
}