import Container from '@/components/ui/Container'
import { IconEdit, IconSearch } from '@/components/ui/Icon'
import useBoundStore from '@/store'

type Props = {}

const HeaderMessages = (props: Props) => {

  const {setShowProfileConversation , isShowProfileConversation } = useBoundStore()

  return (
    <Container typeComp={"card"} variant={"hbc"} className='pb-0' >
        <h5 className='text-primary font-bold'>Messages</h5>
        <Container variant={"hsc"} fit gap={"small"} >
            <IconSearch className='cursor-pointer-custome w-[1.25rem]'/>
            <IconEdit className='cursor-pointer-custome w-[1.25rem]'/>
        </Container>
    </Container>
  )
}

export default HeaderMessages