import Avatar from '@/components/ui/Avatar';
import Container from '@/components/ui/Container'

export type TPropsCardMessage = {
  id                : string;
  image             : string;
  latestMessage     : string;
  latestMessageDate : string;
  name              : string;
  isRead            : boolean;
  totalUnreadMessage: number;
  isTyping          : boolean;
}

const CardMessage = (props: TPropsCardMessage) => {
  const {id, name, image,latestMessage,latestMessageDate,} = props
  return (
    <Container variant={"hbs"}>
      <Container variant={"hss"} gap={"small"}>
        <Avatar src={image} alt={"User"}/>
        <Container variant={"vsc"}>
          <p className='text-body-medium font-medium'>{name}</p>
          <p className='text-gray-400'>{latestMessage}</p>
        </Container>
      </Container>
    </Container>
  )
}

export default CardMessage