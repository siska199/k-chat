import Avatar from "@/components/ui/Avatar"
import Container from "@/components/ui/Container"
import { IconPhone, IconThreeDotsVertical, IconVideo } from "@/components/ui/Icon"

const HeaderConversation = ()=>{
    const data = {
      image               : 'https://i.pinimg.com/736x/ae/ef/5d/aeef5db2d48858931f597cccb591241d.jpg',
    }
    return (
      <Container typeComp={"card"} variant={"hbc"} className="border">
        <Container variant={"hsc"} gap={"base"}>
          <Avatar src={data.image} variant={"medium"} alt={"user"} className="cursor-pointer-custome"/>
          <Container>
            <h4 className="text-body-large font-extrabold">Columbus Studio</h4>
            <p className="text-gray">12 Member, <span className="text-success">4 Online</span></p>
          </Container>
        </Container>
        
        <Container fit variant={"hsc"} gap={"base"}>
          <IconVideo className="w-[1.2rem] cursor-pointer-custome"/>
          <IconPhone className="w-[1.2rem] cursor-pointer-custome"/>
          <IconThreeDotsVertical className=" cursor-pointer-custome"/>
        </Container>
      </Container>
    )
  }

  
  export default HeaderConversation