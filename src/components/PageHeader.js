import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'
import Content from './Content'
import './PageHeader.css'

const PageHeader = ({
  title,
  subtitle,
  backgroundImage,
  large,
  className = '',
  backgroundPosition
}) => {
  if (large) className += ' PageHeader-large'
  return (
    <div className={`PageHeader relative ${className}`}>
      {backgroundImage && (
        <Image
          background
          resolutions="large"
          src={backgroundImage}
          alt={title}
          backgroundSize="cover"
          backgroundPosition={backgroundPosition}
        />
      )}
      <div className="container relative">
        <h1 className="PageHeader--Title">{title}</h1>
        {subtitle && <p className="PageHeader--Subtitle">{subtitle}</p>}
      </div>
    </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default PageHeader
