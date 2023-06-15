import React from "react";
import "./brands.scss";
import Vtex from "../../assets/VtexLogo.svg";

interface BrandsProps {
    title: string;
}

export default function Brands({ title }: BrandsProps) {
    return (
        <>
            <div className="ctnCircle">
                <img src={Vtex} alt="logo" />
            </div>
        </>
    );
}
