import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
      background: 'black',
      color: 'white',
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `40px`,
        textDecoration: `none`,
        color: 'white',
      }}
    >
      {siteTitle}
    </Link>
    <div
    style={{
      color: 'white',
      paddingTop: '10px',
      width: '100%',
    }}
  >
    <ul
      style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-evenly',
        color: 'white',
        fontSize: '20px',
       
      }}
    >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </ul>
  </div>
  <StaticImage
        src="../images/BCO.png"
        loading="eager"
        width={200}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
  </header>
)

export default Header
