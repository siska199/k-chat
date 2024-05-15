import Container from '@/components/ui/Container'
import { IconPin } from '@/components/ui/Icon'
import CardMessage, { TPropsCardMessage } from './CardMessage'

type TProps = {}

const PinnedMessages = (props: TProps) => {
  return (
    <Container gap={"base"}>
      <Container className='px-4' variant={"hsc"} gap={'small'}>
        <IconPin/>
        <p className='text-gray'>Pinned Message</p>
      </Container>
      <Container customElement='ul'  className='pl-4 overflow-x-hidden max-h-[10rem] ' gap={"base"} >
        {
          listPinnedMessage?.map((data,i)=>
            <CardMessage key={i} {...data} className={" max-w-[calc(100%-1rem)]"}/>
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

const listPinnedMessage : TMessage[] = [...Array(10)]?.map((_,i)=>({
  id                  : `${i}`,
  image               : 'https://i.pinimg.com/736x/ae/ef/5d/aeef5db2d48858931f597cccb591241d.jpg',
  latestMessage       :  `Latest message ${i}`,
  latestMessageDate   :  '2023-09-24 10:10:49',
  name                : `name ${i}`,
  isRead              : true,
  totalUnreadMessage  : 0,
  isTyping            : true, 
  isSelected          : true,
}))

export default PinnedMessages