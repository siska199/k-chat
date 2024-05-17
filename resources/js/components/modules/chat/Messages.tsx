import Container from '@/components/ui/Container'
import AllMessage from './partials/AllMessage'
import HeaderMessages from './partials/HeaderMessages'
import OnlineFiends from './partials/OnlineFiends'
import PinnedMessages from './partials/PinnedMessages'

const Messages = () => {

  return (
   <Container  fit gap={"medium"} className='max-h-full h-full max-w-[21rem] w-[21rem] md:flex border-r'>
      <HeaderMessages/> 
      <OnlineFiends/> 
      <PinnedMessages/>
      <AllMessage/>
   </Container>
  )
}



export default Messages