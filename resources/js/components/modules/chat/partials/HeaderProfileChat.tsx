import Container from '@/components/ui/Container'
import { IconClose } from '@/components/ui/Icon'
import useBoundStore from '@/store'

const HeaderProfileChat = () => {
    const {setShowProfileConversation , isShowProfileConversation } = useBoundStore()

  return (
    <Container variant={"hbc"} className='pb-4 border-b'>
        <h5 className='text-body-medium font-bold'>Group Info</h5>
        <IconClose onClick={()=>setShowProfileConversation(!isShowProfileConversation )} className='w-[1.1rem] h-[1.1rem] cursor-pointer-custome'/>
    </Container>
  )
}

export default HeaderProfileChat