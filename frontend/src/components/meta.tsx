  
import React from 'react'
import { Helmet } from 'react-helmet'

interface interfaceProps {
  title: string;
  description: string;
  keywords: any;
}
const Meta = (props: interfaceProps) => {
  const { title, description, keywords } = props
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome To ProShop',
  description: 'We sell the best products for cheap',
  keywords: 'electronics, buy electronics, cheap electroincs',
}

export default Meta