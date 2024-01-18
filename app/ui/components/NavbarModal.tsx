"use client";

import clsx from "clsx";

export default function NavbarModal({ isOpen, handleModalClose }: { isOpen: boolean, handleModalClose: () => void }) {
    return (
        <div className={
            clsx(
                "container-fluid",
                {
                    "modal-open": isOpen,
                    "d-none": !isOpen
                }
            )
        }>
            <div className="nav-links">
                <a href="#hero" onClick={handleModalClose} className="navbar-link">Home</a>
                <a href="https://linkedin.com/in/andresbytes" onClick={handleModalClose} className="navbar-link">About me</a>
                <a href="#project-section" onClick={handleModalClose} className="navbar-link">Projects</a>
                <a href="https://dresnite.com" onClick={handleModalClose} className="navbar-link">Blog</a>
                <a href="https://twitter.com/dresnite" onClick={handleModalClose} className="navbar-link">Contact me</a>
            </div>
        </div>
    );
}