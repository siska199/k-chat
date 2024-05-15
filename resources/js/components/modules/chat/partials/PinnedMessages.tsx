import Container from '@/components/ui/Container'
import { IconPin } from '@/components/ui/Icon'
import CardMessage, { TPropsCardMessage } from './CardMessage'

type Props = {}

const PinnedMessages = (props: Props) => {
  return (
    <Container gap={"base"}>
      <Container variant={"hsc"} gap={'small'}>
        <IconPin/>
        <p className='text-gray'>Pinned Message</p>
      </Container>
      <Container customElement='ul'  className='overflow-x-auto scrollbar-hidden' gap={"base"} >
        {
          listPinnedMessage?.map((data,i)=>
            <CardMessage key={i} {...data}/>
          )
        }
      </Container>
    </Container>
  )
}

const listPinnedMessage : TPropsCardMessage[] = [...Array(10)]?.map((_,i)=>({
  id                  : `${i}`,
  image               : 'https://i.pinimg.com/736x/ae/ef/5d/aeef5db2d48858931f597cccb591241d.jpg',
  latestMessage       :  `Latest message ${i}`,
  latestMessageDate   :  '2023-09-24 10:10:49',
  name                : `name ${i}` 
}))

export default PinnedMessages