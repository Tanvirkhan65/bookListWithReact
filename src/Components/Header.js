import React from 'react'
import '../Components Css/Header.css'
export default function Header(props) {
    return <div className="header">{props.headerTitle}</div>;
}
