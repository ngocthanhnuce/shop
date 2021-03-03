import React from 'react'
import { Pagination } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

interface interfaceProps {
  pages: any ,
  page: any,
  isAdmin: boolean,
  keyword: any
}
const Paginate = (props: interfaceProps) => {
  const { pages, page, isAdmin = false, keyword = '' } = props;
  return (
    pages > 1 && (
      <Pagination>
        {[].map((x: any) => (
          <LinkContainer
            key={x + 1}
            to={
              !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/${x + 1}`
                  : `/page/${x + 1}`
                : `/admin/productlist/${x + 1}`
            }
          >
            <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  )
}

export default Paginate;