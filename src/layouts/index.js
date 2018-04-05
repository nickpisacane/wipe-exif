import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import 'modern-normalize'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Wipe EXIF"
      meta={[
        { name: 'description', content: 'Wipe EXIF from images' },
        { name: 'keywords', content: 'wipe, exif' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
