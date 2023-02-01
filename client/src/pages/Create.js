import React, { useState } from 'react'
// react-quill
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from "axios";

const Write = () => {
  const state = useLocation().state;

  const [value, setValue] = useState(state?.content || "");
  const [name, setName] = useState(state?.name || "");
  const [file, setFile] = useState(null);
  //const [cat, setCat] = useState("");

  console.log(file);

  const navigate = useNavigate();

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("api/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    try {
      state
        ? await axios.put(`api/courses/${state.course_id}`, {
            name,
            content: value,
            image_url: file ? imgUrl : "",
          })
        : await axios.post(`api/courses/`, {
            name,
            content: value,
            image_url: file ? imgUrl : "",
            //date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          });
          navigate("/")
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <div className='add'>
      <div className='content'>
        <input type="text" value={name} placeholder='Title' onChange={(e) => setName(e.target.value)} />
        <div className='editorContainer'>
          <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className='menu'>
        <div className='item'>
          <input style={{display:"none"}} type="file" id="file" onChange={(e) => setFile(e.target.files[0])}/>
          <label htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button onClick={handleClick}> Publish </button>
          </div>
        </div>
        <div className='item'>
          <h1>Publish</h1>
        </div>
      </div>
    </div>
  )
}

export default Write
