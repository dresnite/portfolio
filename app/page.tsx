"use client";

import "@/app/ui/styles/landing.scss";
import NavigationToggler from "@/app/ui/components/NavigationToggler";
import AboutMeButton from "./ui/components/AboutMeButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitterSquare,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Navbar from "./ui/components/Navbar";
import NavbarModal from "./ui/components/NavbarModal";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  function handleModalOpen() {
    setModalOpen(true);
  }

  function handleModalClose() {
    setModalOpen(false);
  }

  return (
    <main>
      <NavbarModal isOpen={isModalOpen} />
      <Navbar isModalOpen={isModalOpen} handleModalOpen={handleModalOpen} handleModalClose={handleModalClose}/>

      <section className="hero">
        <div className="container full-height">
          <div className="row hero-row align-items-center justify-content-center justify-content-lg-between">
            <div className="col-12 col-md-8 col-lg-5 hero-text text-center text-lg-start">
              <header>
                <h1>The</h1>
                <h1>All-in-one</h1>
                <h1>Developer.</h1>
              </header>

              <p>
                Some times <b>applications</b>, some times <b>web pages</b>,
                some times even <b>games</b>. I&apos;m <b>always building</b>{" "}
                something new, and <b>always doing it fast</b>.
              </p>

              <AboutMeButton />

              <div className="brand-icons-phone d-flex d-lg-none justify-content-center">
                <a
                  className="brand-icon-phone"
                  href="https://www.linkedin.com/in/andresbytes/"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a className="brand-icon-phone" href="https://x.com/dresnite">
                  <FontAwesomeIcon icon={faTwitterSquare} />
                </a>
                <a
                  className="brand-icon-phone"
                  href="https://github.com/dresnite"
                >
                  <FontAwesomeIcon icon={faGithubSquare} />
                </a>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 d-none d-lg-block order-lg-11">
              <div className="d-flex">
                <div>
                  <Image
                    className="img-fluid my-picture"
                    src="/andres.png"
                    alt="Picture of the website developer"
                    width={380}
                    height={385}
                  />
                </div>

                <div className="brand-icons">
                  <a
                    className="brand-icon"
                    href="https://www.linkedin.com/in/andresbytes/"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a className="brand-icon" href="https://x.com/dresnite">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </a>
                  <a className="brand-icon" href="https://github.com/dresnite">
                    <FontAwesomeIcon icon={faGithubSquare} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
