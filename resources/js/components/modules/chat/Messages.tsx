import Container from '@/components/ui/Container'
import AllMessage from './partials/AllMessage'
import HeaderMessages from './partials/HeaderMessages'
import OnlineFiends from './partials/OnlineFiends'
import PinnedMessages from './partials/PinnedMessages'
import clsx from 'clsx'

const Messages = () => {

  return (
   <Container  fit gap={"medium"} className={clsx({
    'max-h-full h-full w-[calc(100%-4rem)] md:max-w-[21rem] md:w-[21rem] md:flex border-r' : true,
    
   })}>
      <HeaderMessages/> 
      <OnlineFiends/> 
      <PinnedMessages/>
      <AllMessage/>
   </Container>
  )
}



export default Messages