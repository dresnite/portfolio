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
      <NavbarModal isOpen={isModalOpen} handleModalClose={handleModalClose} />
      <Navbar
        isModalOpen={isModalOpen}
        handleModalOpen={handleModalOpen}
        handleModalClose={handleModalClose}
      />

      <section className="hero" id="hero">
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

      <section className="project-section" id="project-section">
        <div className="container">
          <div className="row">
            <h3 className="section-title text-center text-md-start">Projects</h3>
          </div>

          <div className="row">
            <div className="col-12 col-md-6 text-center text-md-start project">
              <h1 className="project-number">01</h1>
              <h2 className="project-title">UP2</h2>
              <p className="project-description col-12 col-md-10">
                A public calendar to let everybody know what you are up to. I
                made this during a 24-hour code marathon that I streamed, you
                can watch it here.
              </p>
              <p className="project-stack">
                Built with Next. js, TypeScript, PostgreSQL and Express.
              </p>
            </div>

            <div className="col-12 col-md-6 text-center text-md-start project">
              <h1 className="project-number">02</h1>
              <h2 className="project-title">SkyBlock</h2>
              <p className="project-description col-12 col-md-10">
                An open-source minigame with over +100k downloads. I made this
                software for fun, and it turned out to be one of the most
                popular Minecraft Bedrock minigames.
              </p>
              <p className="project-stack">
                Built with PHP over the PocketMine-MP API.
              </p>
            </div>

            <div className="col-12 col-md-6 text-center text-md-start project">
              <h1 className="project-number">03</h1>
              <h2 className="project-title">Pigify</h2>
              <p className="project-description col-12 col-md-10">
                A decentralized website to force yourself to save. I built this
                website to force myself to save money, it’s designed to not let
                you withdraw your money until you achieve your saving goal.
              </p>
              <p className="project-stack">
                Built with Solidity, React and JavaScript over the BNB Smart
                Chain.
              </p>
            </div>

            <div className="col-12 col-md-6 text-center text-md-start project">
              <h1 className="project-number">04</h1>
              <h2 className="project-title">Paycraft</h2>
              <p className="project-description col-12 col-md-10">
                A gaming payment solution for game servers. I designed this to
                help Minecraft server owners. The only available alternative was
                too expensive and I realized it would be easier to make my own
                version.
              </p>
              <p className="project-stack">
                Built with PHP + PocketMine, Next.js, TypeScript, MongoDB and
                Express.
              </p>
            </div>
          </div>

          <div className="projects-footer">
            <p>And much more... But I don’t have enough space to add all of the projects I’ve made, so just check out my <a href="https://github.com/dresnite" className="projects-link">GitHub</a>. 😉</p>
          </div>
        </div>
      </section>
    </main>
  );
}
