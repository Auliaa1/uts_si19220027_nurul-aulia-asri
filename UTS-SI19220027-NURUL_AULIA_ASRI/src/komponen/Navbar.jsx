import React from "react";
import Navlink from "./Navlink";
import Tombol from './atoms/tombol';
import Logo from './Logo';

export default function Navbar() {
    return (
        <nav className="d-flex justify-content-between py-4 px-3">
            <div className="">
                <Logo href="" src="data:image/jpeg;base64,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" width="100px" />
            </div>
            <div className="">
                <ul className="d-flex">
                    <Navlink>Beranda</Navlink>
                    <Navlink>Produk</Navlink>
                    <Navlink>Tentang</Navlink>
                </ul>
            </div>
            <div className="d-flex gap-2 align-items-center">
                <Tombol className="btn btn-outline-primary">Log in</Tombol>
                <Tombol className="btn btn-primary">Register</Tombol>
            </div>
        </nav >
    );
}