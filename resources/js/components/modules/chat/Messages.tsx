import Container from '@/components/ui/Container'
import HeaderMessages from './partials/HeaderMessages'
import OnlineFiends from './partials/OnlineFiends'
import PinnedMessages from './partials/PinnedMessages'
import AllMessage from './partials/AllMessage'

const Messages = () => {
  return (
   <Container typeComp={"card"} fit gap={"medium"} className=' max-w-[21rem] w-[21rem] h-full hidden md:flex border-r'>
      <HeaderMessages/>
      <OnlineFiends/>
      <PinnedMessages/>
      <AllMessage/>
   </Container>
  )
}



export default Messages