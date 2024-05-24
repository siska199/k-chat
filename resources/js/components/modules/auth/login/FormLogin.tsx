import Container from '@/components/ui/Container'
import Image from '@/components/ui/Image'
import Button from '@/components/ui/buttons/Button'
import Link from '@/components/ui/buttons/Link'
import InputBase from '@/components/ui/inputs/InputBase'
import InputCheckbox from '@/components/ui/inputs/InputCheckbox'
import { useForm } from '@inertiajs/react'
import { FormEventHandler, useEffect } from 'react'

interface TProps {
    className? : string;
}

interface TFormData {
    email: string;
    password: string;
    remember: boolean;
}

const FormLogin = (props: TProps) => {
    const {className} = props
    const { data, setData, post, processing, errors, reset } = useForm<TFormData>({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setData(e.target.name as keyof TFormData, e.target.value)
    }

    const handleLogin: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    console.log("errors: ", errors)
  return (
    <Container variant={"vcc"} padding={"large"} gap={"large"} className={`${className}  `}>
        <div className='flex items-center flex-col'>
            <Image src={"k-chat-logo.png"} alt={"logo aplikasi"} className='w-[6rem] cursor-pointer-custome'/>
            <h5 className='text-heading-05 font-medium text-center mt-4'>Welcome back!</h5>
            <p className='text-center text-gray'>Please enter your credentail to sign in.</p>
        </div>
        <Container customElement='form' gap={"base"} className='w-full'>
            <InputBase onChange={handleOnChange} name={"email"} label={"Username"} placeholder='Enter your password' errorMessage={errors.email}/>
            <InputBase onChange={handleOnChange} name="password" label={"Password"} type="password" placeholder='Enter your username' errorMessage={errors.password}/>
            <Container variant={"hbc"} gap={"small"}>
                <InputCheckbox vertical={false} name={"remember"} label='Remember' />
                <Link href={'/remember-me'}>Forgot Password?</Link>
            </Container>
        </Container>
        <Button variant={"primary-contained"} onClick={handleLogin}>
            Log In
        </Button>
    </Container>
  )
}

export default FormLogin