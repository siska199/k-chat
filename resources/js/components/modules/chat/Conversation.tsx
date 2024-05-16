import Container from '@/components/ui/Container'
import HeaderConversation from './partials/HeaderConversation'
import GroupConversationByDate from './partials/GroupConversationByDate'

type Props = {}

const Conversation = (props: Props) => {
  return (
    <Container  className='h-full'>
      <HeaderConversation/>
      <Container className='bg-broken-white h-full max-h-full overflow-y-auto'  >
        <GroupConversationByDate/>
        <GroupConversationByDate/>
        <GroupConversationByDate/>
        <GroupConversationByDate/>
      </Container>
    </Container>
  )
}

export default Conversation