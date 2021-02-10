import React, {useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components'
import {editProfile} from '../../store/profile'

const Left = styled.div`

.about-left{
    background: ${(props) => props.theme.bg};;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}
.about-left-content > div{
    background: ${(props) => props.theme.gray};
    padding: 4rem 4rem 2.5rem 5rem;
    text-align: center;
}
.about-left-content{
    box-shadow: 0px 0px 18px -1px rgba(0, 0, 0, 0.39);
    -webkit-box-shadow: 0px 0px 18px -1px rgba(0, 0, 0, 0.39);
    -moz-box-shadow: 0px 0px 18px -1px rgba(0, 0, 0, 0.39);
}
.about-img img{
    display: block;
    width: 200px;
}
.about-img{
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 50%;
    transition: all 0.5s ease-in-out;
}
.shadow{
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    position: relative;
    cursor: pointer;
}
.shadow::after{
    content: "";
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
    left: 50%;
    transform: translateX(-50%);
    bottom: -20px;
    height: 7px;
    width: 50px;
    filter: blur(3px);
    -webkit-filter: blur(3px);
    opacity: 0;
    transition: all 0.6s ease;
}
.shadow:hover .about-img{
    transform: translateY(-10px);
}
.shadow:hover::after{
    opacity: 1;
}
.about-left-content h2{
    font-size: 2rem;
    margin: 2.2rem 0 0.6rem 0;
    line-height: 1.2;
    padding-bottom: 1rem;
    border-bottom: 2px solid #edffec;
}
.about-left-content h3{
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 5px;
    margin-top: 1.2rem;
}
.icons{
    background: #fff;
    display: flex;
    justify-content: center;
    padding: 0.8rem 0;
}
.icons li{
    list-style-type: none;
    background: ${(props) => props.theme.primaryColor};
    color: #fff;
    width: 40px;
    height: 40px;
    margin: 0 0.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
}
.icons li:hover{
    background: #edffec;
    color: #000;
}
  label input {
    height: 0;
    width: 0;
    opacity: 0;
  }
  label {
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
  label:hover {
    background: var(--primary);
    color: white;
  }
    .imgPreview {
    width: auto;
    height: 25px;
    border-radius: 50%;
  }
`

export default function AboutMeLeft() {
  const dispatch = useDispatch();
  const [imgPreview, setImagePreview] = useState(null);
  const [image, setImage] = useState({ name: null });
   const [errors, setErrors] = useState([]);

  const loggedInUser = useSelector((state) => {
    return state.session.user;
  });

  console.log(loggedInUser)

    const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = [];
    console.log(image)
    dispatch(editProfile({ userId: loggedInUser.id, image }))
      .then(() => {
        setImage(null);
      })
      .catch((res) => {
        if (res.data && res.data.errors) {
          newErrors = res.data.errors;
          setErrors(newErrors);
        }
      });
  };


    const updatePost = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);

    const fileReader = new FileReader();
    if (file) {
      fileReader.readAsDataURL(file);
    }
    fileReader.onloadend = () => {
      setImagePreview(fileReader.result);
    };
  };

    return (
        <Left>
        <div class = "about-left">
        <div class = "about-left-content">
          <div>
              <form onSubmit={handleSubmit}>
              <label>
                <input type="file" onChange={updatePost} name="image" />
                <span>+</span>
              </label>
              <img className="imgPreview" src={imgPreview} alt=""></img>
              <br></br>
              <button className="contact-form-btn-upload"  type="submit">
                Post
              </button>
            </form>
            <div class = "shadow">
              <div class = "about-img">
                <img src = {loggedInUser.profilePic}/>
              </div>
            </div>
            <h2>{loggedInUser.username}<br></br></h2>
            <h3></h3>
          </div>
          <ul class = "icons">
            <li><i class = "fab fa-facebook-f"></i></li>
            <li><i class = "fab fa-twitter"></i></li>
            <li><i class = "fab fa-linkedin"></i></li>
            <li><i class = "fab fa-instagram"></i></li>
          </ul>
        </div>
      </div>
      </Left>
    )
}
