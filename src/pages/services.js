import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Services = () => (
  <Layout>
    <div>
    <h1>Our Services</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
      adipisci, voluptatum, nisi velit praesentium error quia explicabo voluptas
      ad recusandae enim. Recusandae sequi non vel voluptas. Labore omnis
      provident ex, perferendis esse, voluptate atque alias officiis dolor
      eligendi itaque qui?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
      adipisci, voluptatum, nisi velit praesentium error quia explicabo voluptas
      ad recusandae enim. Recusandae sequi non vel voluptas. Labore omnis
      provident ex, perferendis esse, voluptate atque alias officiis dolor
      eligendi itaque qui?
    </p>
  </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default Services
