import Container from '@/components/ui/Container'
import useBoundStore from '@/store'
import clsx from 'clsx'
import HeaderProfileChat from './partials/HeaderProfileChat'
import ProfileChatInfo from './partials/ProfileChatInfo'
import CopyText from '@/components/ui/CopyText'
import Toggle from '@/components/ui/Toggle'
import { useState } from 'react'
import { IconNotificationFill } from '@/components/ui/Icon'

const ProfileChat = () => {
    const { isShowProfileConversation } = useBoundStore()
    const [isNotified, setIsNotified] = useState(true)

    const handleToggleNotification = (e:React.ChangeEvent<HTMLInputElement>)=>{
      setIsNotified(e.target.checked)
    }
  return (
    <Container typeComp={"card"} gap="large" fit  className={clsx({
        'min-w-[17rem] w-[17rem]  h-full transition-all duration-300' : true,
        'min-w-[0] w-[0] p-0' : !isShowProfileConversation 
    })}>
      {
        isShowProfileConversation && 
        <>
          <HeaderProfileChat/>
          <ProfileChatInfo/>
          <CopyText text={"@colombusstream"} variant="hbc" classText={"text-primary"} classContainer={"border-b pb-4"}/>
          <Container variant={"hbc"} className='border-b pb-4'>
            <p className='text-gray flex gap-2 items-center'><IconNotificationFill/> Notification</p>
            <Toggle value={isNotified} onChange={handleToggleNotification}/>
          </Container>
        </>
      }
    </Container>
  )
}

export default ProfileChat