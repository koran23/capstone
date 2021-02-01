import React, { useState } from "react";
import styled from "styled-components";

const Upload = styled.div`
form{
  margin: 0px auto 10px;
  text-align: center;
}
label input{
  height: 0;
  width: 0;
  opacity: 0;
}
label{
  display: block;
  width: 30px;
  height: 30px;
  border: 1px solid var(--primary);
  border-radius: 50%;
  margin: 10px auto;
  line-height: 30px;
  color: var(--primary);
  font-weight: bold;
  font-size: 24px;
}
label:hover{
  background: var(--primary);
  color: white;
}
.output{
  height: 60px;
  font-size: 0.8rem;
}
.createPost {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}
.createPost__loggedIn {
  /* background-color: ${(props) => props.theme.primaryColor}; */
  width: 100%;
  max-width: 650px;
}
.createPost__textarea {
  border: none;
  width: 100%;
  max-width: 650px;
}
.createPost__textarea:focus{
  outline: none;
  margin-top: 6px;
.error{
  color: var(--error);
}
}
`

export default function CreatePost() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpg)");
    }
  };

  return (
    <Upload>
      <div className="createPost">
        <div className="createPost__loggedIn">
          <p>Create Post</p>
          <div className="createPost__loggedInCenter"> </div>
          <div>
            <textarea className="createPost__textarea" rows="3"></textarea>
          </div>
          <div>
            <form>
              <label>
                <input type="file" onChange={handleChange} />
                <span>+</span>
              </label>
              <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </Upload>
  );
}
