"use client";

export default function NavigationToggler() {
    function handleToggler() {
        alert("You clicked me, wow!");
    }

    return (
        <button className="navbar-toggler">
            <img src="/button.png" alt="Navigator toggler" onClick={handleToggler} />
        </button>
    );
}