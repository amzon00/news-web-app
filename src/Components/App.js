import React from "react";
import NotFoundPage from "./NotFoundPage";
import { Switch, Route } from "react-router-dom";
import Header from "./common/Header";
import UsNewsPage from "./UsNewsPage";
import AppleNews from "./AppleNews";
import WallStreetJournal from "./WallStreetJournal";
import TheGuardianNews from "./TheGuardianNews";
import ClimateChangeNews from "./ClimateChangeNews";
import Registration from "./Authentication/Registration";
import Login from "./Authentication/Login";
import ProfileInfo from "./ProfileInfo";
import * as firebase from "firebase";

(function () {
  const config = {
    apiKey: "AIzaSyDO5eCnmp9o-Wd6S7qSOpkgxV2k_0NiyyI",
    authDomain: "myprojce-b230b.firebaseapp.com",
    databaseURL: "https://myprojce-b230b.firebaseio.com",
    projectId: "myprojce-b230b",
    storageBucket: "myprojce-b230b.appspot.com",
    messagingSenderId: "235115805884",
    appId: "1:235115805884:web:07160c54b76a0f55e924b9",
    measurementId: "G-LRRDXV16ZS",
  };

  firebase.initializeApp(config);
})();

function App() {
  return (
    <div className="container-fluid">
      <Switch>
        <Route path="/" exact component={UsNewsPage} />
        <Route path="/header" component={Header} />
        <Route path="/appleNews" component={AppleNews} />
        <Route path="/climateChange" component={ClimateChangeNews} />
        <Route path="/wallStreetJournal" component={WallStreetJournal} />
        <Route path="/theGuardian" component={TheGuardianNews} />
        <Route path="/register" component={Registration} />
        <Route path="/login" component={Login} />
        <Route path="/accountInfo" component={ProfileInfo} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
