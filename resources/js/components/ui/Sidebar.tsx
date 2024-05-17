import clsx from 'clsx'
import Container from './Container'
import { IconBookmark, IconHome, IconMessage, IconPhone, IconSetting, IconUsers, IconVideo } from './Icon'
import Image from './Image'

interface TProps {

}

const Sidebar = (props: TProps) => {
  
  return (
    <Container variant={"vcs"} fit typeComp={"card"} gap={"x-large"} className='h-full bg-white border-r' >
      <Image src={"k-chat-logo.png"} alt={"logo aplikasi"} className='w-[3rem] cursor-pointer-custome'/>
      <Container customElement='ul' gap="base" className="">
        {
          listMenuSidebar?.map((data,i)=><li key={i} className={clsx({
            "p-2 rounded-md cursor-pointer-custome":true,
            "bg-primary" : i==4
          })}>
            {data.icon({
              className: clsx({
                " w-[1.2rem] h-[1.2rem] " : true,
                "icon-white" : i==4
              })
            })}
          </li>)
        }
      </Container>
    </Container>
  )
}


const listMenuSidebar = [
  {
    id : 0,
    menu : 'Home',
    icon : ({...attrs})=><IconHome {...attrs}/>
  },
  {
    id : 1,
    menu : 'File',
    icon : ({...attrs})=><IconMessage {...attrs}/>
  },
  {
    id : 2,
    menu : 'Bookmark',
    icon : ({...attrs})=><IconBookmark {...attrs}/>
  },
  {
    id : 3,
    menu : 'Call',
    icon : ({...attrs})=><IconPhone {...attrs}/>
  },
  {
    id : 4,
    menu : 'Message',
    icon : ({...attrs})=><IconMessage {...attrs}/>
  },
  {
    id : 5,
    menu : 'Video Call',
    icon : ({...attrs})=><IconVideo {...attrs}/>
  },
  {
    id : 6,
    menu : 'Friend',
    icon : ({...attrs})=><IconUsers {...attrs}/>
  },
  {
    id : 7,
    menu : 'Setting',
    icon : ({...attrs})=><IconSetting {...attrs}/>
  },
]


export default Sidebar