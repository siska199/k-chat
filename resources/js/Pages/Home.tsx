import Container from '@/components/ui/Container';
import ProtectedLayout from '@/layouts/ProtectedLayout';

type Props = {}

const Home = (props: Props) => {
  return (
    <Container variant={"page"}>
      SISKA AP
    </Container>
  )
}

Home.layout = (page:React.ReactNode)=>{
  return <ProtectedLayout>{page}</ProtectedLayout>
}

export default Home