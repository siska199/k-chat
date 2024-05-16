import Conversation from '@/components/modules/chat/Conversation';
import Messages from '@/components/modules/chat/Messages';
import ProfileChat from '@/components/modules/chat/partials/ProfileChat';
import Container from '@/components/ui/Container';
import ProtectedLayout from '@/layouts/ProtectedLayout';

type Props = {}

const Home = (props: Props) => {
  return (
    <Container typeComp={"page"}  variant={"hss"} className='overflow-hidden'>
      <Messages/>
      <Conversation/>
      <ProfileChat/>
    </Container>
  )
}

Home.layout = (page:React.ReactNode)=>{
  return <ProtectedLayout>{page}</ProtectedLayout>
}

export default Home