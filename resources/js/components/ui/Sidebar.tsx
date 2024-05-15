import React from 'react'
import Container from './Container'
import Image from './Image'

interface TProps extends React.HTMLProps<HTMLDivElement>{

}

const Sidebar = (props: TProps) => {
  const {...attrs} = props
  return (
    <Container {...attrs} variant={"vcs"} fit className='border min-h-screen bg-white'>
      <Image src={"logo-k-chat.webp"} alt={"logo aplikasi"} className='w-[2rem] '/>
    </Container>
  )
}

export default Sidebar