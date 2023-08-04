import React from 'react'
import { StyleFooter, StyledLink, StyleCompanyName } from './styles/Footer.styled';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <StyleFooter>
        <StyleCompanyName>
            Pennywise
        </StyleCompanyName>
        <div>
            Pennywise Inc. All rights Reserved
        </div>
        <div>
        <Link to="/" style={{ textDecoration: "none", color: "#40916C" }}>
        Privacy
      </Link>{" "}
      <Link to="/" style={{ textDecoration: "none", color: "#40916C" }}>
        Terms
      </Link>
        </div>
    </StyleFooter>
  )
}
