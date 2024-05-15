import Container from '@/components/ui/Container';
import Sidebar from '@/components/ui/Sidebar';

type TProtectedLayout =  {
    children : React.ReactNode
}

const ProtectedLayout = (props:TProtectedLayout )=> {
    const {  children } = props

    return (
        <Container className="min-h-screen h-screen " variant={"hss"}>
            <Sidebar/>
            <Container className='flex-grow h-full' customElement={"main"}>{children}</Container>
        </Container>
    );
}

export default ProtectedLayout


