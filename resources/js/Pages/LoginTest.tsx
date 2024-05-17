import FormLogin from '@/components/modules/auth/login/FormLogin'
import Container from '@/components/ui/Container'
import Image from '@/components/ui/Image'
import NonProtectedLayout from '@/layouts/NonProtectedLayout'
import React from 'react'

type Props = {}

const LoginTest = (props: Props) => {
  return (
    <Container typeComp={"page"} className='' variant={"hsc"}>
      <div className='flex-[0.75] h-full w-full'>
        <Image src={"login-image.jpg"} className='w-full h-full object-cover'/>
      </div>
      <FormLogin/>
    </Container>
  )
}


LoginTest.layout = (page:React.ReactNode)=>{
    return <NonProtectedLayout>{page}</NonProtectedLayout>
  }
  

export default LoginTest