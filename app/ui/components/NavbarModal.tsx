"use client";

import clsx from "clsx";

export default function NavbarModal({ isOpen }: { isOpen: boolean }) {
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
                <a href="#" className="navbar-link">Home</a>
                <a href="https://linkedin.com/in/andresbytes" className="navbar-link">About me</a>
                <a href="https://linkedin.com/in/andresbytes" className="navbar-link">Projects</a>
                <a href="https://dresnite.com" className="navbar-link">Blog</a>
                <a href="https://twitter.com/dresnite" className="navbar-link">Contact me</a>
            </div>
        </div>
    );
}