import Container from '@/components/ui/Container'
import useBoundStore from '@/store'
import clsx from 'clsx'
import HeaderProfileChat from './partials/HeaderProfileChat'
import ProfileChatInfo from './partials/ProfileChatInfo'
const ProfileChat = () => {
    const { isShowProfileConversation } = useBoundStore()
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
        </>
      }
    </Container>
  )
}

export default ProfileChat