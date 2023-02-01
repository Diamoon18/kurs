import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";
import { AuthContext } from "../contex/contexAuth.js";

const Home = () => {

  const [courses, setCourses] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/courses");
        setCourses(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  }


  return (
    <div className='home'>
      <div className='courses'>
        {courses.map(course=>(
          <div className="course" key={course.course_id}>
            <div className="img">
              <img src={`../upload/${course.image_url}`} alt="" />
            </div>
            <div className="content">
              {currentUser ? (
                <Link className='link' to={`/courses/${course.course_id}`}>
                  <h1>{course.name}</h1>
                </Link>
              ):(
                <Link className='link' to="/login">
                  <h1>{course.name}</h1>
                </Link>
              )}
              <p>{getText(course.content)}</p>
              <button>
                {currentUser ? (
                  <Link className='link' to={`/courses/${course.course_id}`}>Czytaj więcej</Link>
                ):(
                  <Link className='link' to="/login">Czytaj więcej</Link>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
