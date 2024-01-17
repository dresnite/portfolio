"use client";

import Image from "next/image";

export default function NavigationToggler() {
    function handleToggler() {
        alert("You clicked me, wow!");
    }

    return (
        <button className="navbar-toggler">
            <Image src="/button.png" alt="Navigator toggler" onClick={handleToggler} width={34} height={18} />
        </button>
    );
}