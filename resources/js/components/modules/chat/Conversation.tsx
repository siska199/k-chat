import Container from '@/components/ui/Container'
import HeaderConversation from './partials/HeaderConversation'
import GroupConversationByDate from './partials/GroupConversationByDate'
import InputBase from '@/components/ui/inputs/InputBase'
import FormConversation from './partials/FormConversation'

type Props = {}

const Conversation = (props: Props) => {
  return (
    <Container  className='max-h-full h-full bg-broken-white'>
      <HeaderConversation/>
      <Container className='bg-broken-white h-full overflow-y-auto'>
        <GroupConversationByDate/>
        <GroupConversationByDate/>
        <GroupConversationByDate/>
        <GroupConversationByDate/>
      </Container>
      <FormConversation/>
    </Container>
  )
}

export default Conversation