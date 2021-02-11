import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, useParams } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Container from "./styles/Container";
import Home from "./pages/Home/";
import Chat from "./components/Chat/Chat";
import Title from "./components/Gallery/Title";
import UploadForm from "./components/Gallery/UploadForm";
import { SliderData } from "./components/ImageSlider/SliderData";
import ImageGrid from "./components/Gallery/Index";
import Modal from "./components/Gallery/Modal";
import Splash from "./components/Splash";
import AboutMeContainer from "./containers/AboutMeContainer";
import EditSocialPage from "./components/EditSocialPage";
import SinglePhotoPage from './components/SinglePhotoPage'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);


  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Container>
          <Switch>
            <Route path="/login">
              <LoginFormPage />
            </Route>
            <Route path="/splash">
              <SinglePhotoPage />
            </Route>
            <Route path="/signup">
              <SignupFormPage />
            </Route>
            <Route path="/posts" exact>
              <Home />
            </Route>
            <Route path="/chat" exact>
              <Chat />
            </Route>
            <Route path="/about-me" exact>
              <AboutMeContainer />
            </Route>
            <Route path="/social/:userId" exact>
              <EditSocialPage />
            </Route>
            <Route path="/gallery/:userId">
              {/* <UploadForm/> */}
              <ImageGrid
                setSelectedImg={setSelectedImg}
                selectedImg={selectedImg}
              />
              {selectedImg && (
                <Modal
              
                  selectedImg={selectedImg}
                  setSelectedImg={setSelectedImg}
                />
              )}
            </Route>
          </Switch>
        </Container>
      )}
    </>
  );
}

export default App;
