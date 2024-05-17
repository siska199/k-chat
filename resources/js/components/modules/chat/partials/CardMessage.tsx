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
  const {id, name,isSelected, image,latestMessage,latestMessageDate, totalUnreadMessage,className, isRead, isTyping} = props
  return (
    <Container variant={"hbs"} className={clsx({
      "hover:bg-broken-white cursor-pointer-custome" : true,
      [className || ""] : className,
      "bg-broken-white" : isSelected
    })}>
      <Container variant={"hss"} gap={"small"}>
        <Avatar src={image} alt={"User"}/>
        <Container variant={"vsc"} className=''>
          <p className='text-body-medium font-medium'>{name}</p>
          <p className={clsx({
            "text-base-tiny text-gray-400" : true,
            "italic text-success" : isTyping
          })}>
            {
              isTyping ? 
              <>{name} is Typing...</> : <>{latestMessage}</>
            }
          </p>
        </Container>
        <Container variant={"vec"} fit className='min-w-[4rem]'>
          <p className={clsx({
            'text-body-base' : true
          })}>07.45 AM</p>
          {
            isRead?
            <IconDoubleCheck className='w-[1.1rem] h-[1.1rem]'/>
            : <div className='flex items-center justify-center rounded-full bg-error-500 p-1 text-body-small text-white min-w-[0.75rem] min-h-[0.75rem] aspect-square'>{totalUnreadMessage}</div>
          }
        </Container>
      </Container>
    </Container>
  )
}

export default CardMessage