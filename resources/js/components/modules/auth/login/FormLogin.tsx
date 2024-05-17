import Container from '@/components/ui/Container'
import Image from '@/components/ui/Image'
import Button from '@/components/ui/buttons/Button'
import Link from '@/components/ui/buttons/Link'
import InputBase from '@/components/ui/inputs/InputBase'
import InputCheckbox from '@/components/ui/inputs/InputCheckbox'

type Props = {}

const FormLogin = (props: Props) => {
  return (
    <Container variant={"vcc"} padding={"large"} gap={"large"} className=' bg-white  flex-[0.25] ml-auto  '>
        <div className='flex items-center flex-col'>
            <Image src={"k-chat-logo.png"} alt={"logo aplikasi"} className='w-[6rem] cursor-pointer-custome'/>
            <h5 className='text-heading-05 font-medium text-center mt-4'>Welcome back!</h5>
            <p className='text-center text-gray'>Please enter your credentail to sign in.</p>
        </div>
        <Container gap={"base"} className='w-full'>
            <InputBase label={"Username"} placeholder='Enter your username'/>
            <InputBase label={"Password"} type="password" placeholder='Enter your username'/>
            <Container variant={"hbc"}>
                <InputCheckbox vertical={false} label='Remember' />
                <Link href={'/remember-me'}>Forgot Password?</Link>
            </Container>
        </Container>
        <Button variant={"primary-contained"}>
            Log In
        </Button>
    </Container>
  )
}

export default FormLogin