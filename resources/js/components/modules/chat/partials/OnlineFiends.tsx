import Avatar from '@/components/ui/Avatar'
import Container from '@/components/ui/Container'

const OnlineFiends = () => {
  const handleClickOnlineUser = (id:string)=>{

  }
  return (
    <Container gap={"base"} typeComp={"card"}>
      <Container variant={"hbc"}>
        <p className='text-gray'>Online Now</p>
        <p className='text-gray text-body-small cursor-pointer-custome'>See All</p>
      </Container>
      <Container customElement='ul' variant={"hsc"} className='overflow-x-auto scrollbar-hidden' gap={"base"} >
        {
          listOnlineUser?.map((data,i)=><li key={i}>
            <Avatar src={data.image} alt={'image online'} onClik={()=>handleClickOnlineUser(data.id)} isMarkOnline/>
          </li>)
        }
      </Container>
    </Container>
  )
}

const listOnlineUser = [...Array(10)]?.map((_,i)=>({
  id : `${i}`,
  image : 'https://i.pinimg.com/736x/ae/ef/5d/aeef5db2d48858931f597cccb591241d.jpg'
}))

export default OnlineFiends