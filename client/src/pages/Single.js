import React, { useState, useEffect, useContext } from 'react';
import Menu from "../components/Menu.js"
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";
import { AuthContext } from '../contex/contexAuth.js';


const Single = () => {
  const [course, setCourse] = useState({});

  const location = useLocation();
  const navigate = useNavigate();
  const courseId = location.pathname.split("/")[2];
  //console.log(postId);

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/courses/${courseId}`); 
        setCourse(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [courseId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/courses/${courseId}`); 
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  }

  return (
    <div className="single">
      <div className="content"> 
        <div className="user">
          <h1>{course.name}</h1>
          { currentUser.role==="1" && <div className='edit'>
            <Link to={`/create?edit=${course.course_id}`} state={course}>
              <img src={Edit} alt=""></img>
            </Link> 
            <img onClick={handleDelete} src={Delete} alt=""></img>
          </div>}  
        </div>
        {getText(course.content)}
        </div>
      <Menu />
    </div>
  )
}

export default Single