import Badge from '@/components/ui/Badge'
import Container from '@/components/ui/Container'
import { IconMedia } from '@/components/ui/Icon'

const Media = () => {
  return (
    <Container gap={"base"} className='pb-4 border-b'>
      <Container variant={"hbc"}>
        <p className='text-gray flex gap-2 items-center'>
          <IconMedia className='w-[1.2rem]'/>
          Media
          <Badge color='primary' text={60}/>
        </p>
        <p className='text-gray text-body-small cursor-pointer-custome'>See All</p>
      </Container>
      <Container customElement='ul' variant={"hsc"} gap={"small"}>
        {
          listMedia?.map((data,i)=>(
            <div className='w-[4.5rem] h-[4.5rem] relative rounded-md overflow-hidden cursor-pointer-custome'>
              <img key={i} className=' aspect-square ' src={data.url} alt={"Media"}/>
              {
                i==2 && 
                <div className='items-center justify-center flex absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)] text-white'>
                  50+
                </div>
              }
            </div>
          ))
        }
      </Container>
    </Container>
  )
}

const listMedia = [...Array(3)]?.map((_,i)=>({
  file : null,
  url : "https://i.pinimg.com/564x/73/84/b5/7384b5480bcaef6f7e8664e320a6aea7.jpg"
}))

export default Media