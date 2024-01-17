"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function AboutMeButton() {
    function handleAboutMe() {
        alert("About me not ready!");
      }

    return <button className="about-me-button" onClick={handleAboutMe}><b>Learn more about me</b> <FontAwesomeIcon icon={faArrowRight}/></button>;
}