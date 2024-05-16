import Container from '@/components/ui/Container'
import useBoundStore from '@/store'
import clsx from 'clsx'

const ProfileChat = () => {
    const {setShowProfileConversation , isShowProfileConversation } = useBoundStore()
  return (
    <Container onClick={()=>setShowProfileConversation(!isShowProfileConversation )} className={clsx({
        'min-w-[17rem] w-[17rem]  h-full transition-all duration-300' : true,
        'min-w-[0] w-[0]' : !isShowProfileConversation 
    })}>
        SISKA
    </Container>
  )
}

export default ProfileChat