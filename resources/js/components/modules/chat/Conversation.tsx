import Container from '@/components/ui/Container'
import clsx from 'clsx'
import FormConversation from './partials/FormConversation'
import GroupConversationByDate from './partials/GroupConversationByDate'
import HeaderConversation from './partials/HeaderConversation'

type Props = {}

const Conversation = (props: Props) => {
  return (
    <Container className={clsx({
      'max-h-full h-full bg-broken-white hidden md:flex' : true,
      '' : true
    })}>
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