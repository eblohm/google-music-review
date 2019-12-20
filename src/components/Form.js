import React from "react";

const Form = setFile => {
  return (
    <form method="post" action="#">
      <div class="file-upload">
        <label>Upload Your Google Play Music Activity File</label>
        <input type="file" class="gpm-file-uploader" />
      </div>
      <button type="button" onClick={setFile}>
        Upload
      </button>
    </form>
  );
};

export default Form;
