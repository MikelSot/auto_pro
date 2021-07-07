// custom dropDow
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
        href="/"
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
            document.getElementById("rotateIconPah").classList.toggle("nav-item_dropdown-header-rotate")
        }}
    >
        {children}
        <FontAwesomeIcon icon={faChevronDown} id="rotateIconPah" className="path-icon-arrow"/>
    </a>
));

export default CustomToggle;