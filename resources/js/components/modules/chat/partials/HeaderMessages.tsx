import Container from '@/components/ui/Container'
import { IconEdit, IconSearch } from '@/components/ui/Icon'

type Props = {}

const HeaderMessages = (props: Props) => {
  return (
    <Container variant={"hbc"} >
        <h5 className='text-primary font-bold'>Messages</h5>
        <Container variant={"hsc"} fit gap={"small"} >
            <IconSearch className='cursor-pointer-custome w-[1.25rem]'/>
            <IconEdit className='cursor-pointer-custome w-[1.25rem]'/>
        </Container>
    </Container>
  )
}

export default HeaderMessages