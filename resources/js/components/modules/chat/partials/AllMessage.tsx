import Container from '@/components/ui/Container'
import CardMessage from './CardMessage'
import { IconMessageFill } from '@/components/ui/Icon'

type Props = {}

const AllMessage = (props: Props) => {
  return (
    <Container gap={"base"} className="overflow-y-auto ">
      <Container className='px-4' variant={"hsc"} gap={'small'}>
        <IconMessageFill className='w-[1.2rem]'/>
        <p className='text-gray'>All Message</p>
      </Container>
      <Container customElement='ul'  className='overflow-x-hidden ' >
        {
          listMessage?.map((data,i)=>
            <CardMessage key={i} {...data} className={" p-4"}/>
          )
        }
      </Container>
  </Container>
  )
}


export type TMessage= {
  id                : string;
  image             : string;
  latestMessage     : string;
  latestMessageDate : string;
  name              : string;
  isRead            : boolean;
  totalUnreadMessage: number;
  isTyping          : boolean;
  isSelected        : boolean;
}

const listMessage : TMessage[] = [...Array(10)]?.map((_,i)=>({
  id                  : `${i}`,
  image               : 'https://i.pinimg.com/736x/ae/ef/5d/aeef5db2d48858931f597cccb591241d.jpg',
  latestMessage       :  `Latest message ${i}`,
  latestMessageDate   :  '2023-09-24 10:10:49',
  name                : `name ${i}`,
  isRead              : true,
  totalUnreadMessage  : 0,
  isTyping            : true, 
  isSelected          : i===0? true:false,
}))

export default AllMessage