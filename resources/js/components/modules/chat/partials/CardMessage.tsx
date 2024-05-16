import Avatar from '@/components/ui/Avatar';
import Container from '@/components/ui/Container'
import { IconDoubleCheck } from '@/components/ui/Icon';
import clsx from 'clsx';

export type TPropsCardMessage = {
  id                : string;
  image             : string;
  latestMessage     : string;
  latestMessageDate : string;
  name              : string;
  isRead            : boolean;
  totalUnreadMessage: number;
  isTyping          : boolean;

  className?        : string;
  isSelected        : boolean;
}

const CardMessage = (props: TPropsCardMessage) => {
  const {id, name,isSelected, image,latestMessage,latestMessageDate, className, isRead, isTyping} = props
  return (
    <Container variant={"hbs"} className={clsx({
      "hover:bg-broken-white cursor-pointer-custome" : true,
      [className || ""] : className,
      "bg-broken-white" : isSelected
    })}>
      <Container variant={"hss"} gap={"small"}>
        <Avatar src={image} alt={"User"}/>
        <Container variant={"vsc"}>
          <p className='text-body-medium font-medium'>{name}</p>
          {
            isTyping ? 
            <p className='italic text-success'>{name} is Typing...</p>
            :
            <p className='text-gray-400'>{latestMessage}</p>
          }
        </Container>
        <Container variant={"vec"} >
          <p className={clsx({
            'text-body-base' : true
          })}>07.45 AM</p>
          {
            isRead && <IconDoubleCheck className='w-[1.1rem] h-[1.1rem]'/>
          }
        </Container>
      </Container>
    </Container>
  )
}

export default CardMessage