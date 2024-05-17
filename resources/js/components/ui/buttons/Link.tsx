import React from 'react'

interface TProps extends React.HTMLProps<HTMLAnchorElement>  {
    href : string;
}

const Link = (props: TProps) => {
    const {children,...attrs} = props
  return (
    <a {...attrs} className='text-primary font-medium w-fit'>
        {children}
    </a>
  )
}

export default Link