import Container from '@/components/ui/Container';
import Sidebar from '@/components/ui/Sidebar';

type TProtectedLayout =  {
    children : React.ReactNode
}

const ProtectedLayout = (props:TProtectedLayout )=> {
    const {  children } = props

    return (
        <Container className="min-h-screen bg-gray-100 border-2 flex-nowrap" variant={"hss"}>
            <Sidebar className=''/>
            <Container className='flex-grow min-h-screen' customElement={"main"}>{children}</Container>
        </Container>
    );
}

export default ProtectedLayout


