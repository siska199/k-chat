import Avatar from '@/components/ui/Avatar'
import Container from '@/components/ui/Container'
import { IconNote } from '@/components/ui/Icon'
import React from 'react'

const ProfileChatInfo = () => {
  const avatar = 'https://i.pinimg.com/474x/21/69/09/2169098906d4941aea840dc20f255510.jpg'
  return (
    <Container gap={"base"}>
      <Container variant={"vcc"} >
        <Avatar variant={"large"} src={avatar} alt="Picture"/>
        <h3 className='text-center text-body-large font-medium'>Colombus Studio</h3>
        <p className='text-gray font-thin'>12 Member</p>
      </Container>

      <Container gap={"base"}>
        <h5 className='text-body-medium font-bbold text-gray flex items-center gap-1'>
          <IconNote className='w-[1.1rem]' />
          Description
        </h5>
        <p className='text-gray text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus tempore error mollitia veritatis labore vel beatae at sit laborum tempora dolorum, ipsum, nobis ducimus est? Quod dolorem in porro? Voluptatum.</p>
      </Container>
    </Container>
  )
}



export default ProfileChatInfo