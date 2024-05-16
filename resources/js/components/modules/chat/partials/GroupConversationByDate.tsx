import Container from "@/components/ui/Container"
import HorizontalLineText from "@/components/ui/HorizontalLineText"
import Texting from "./Texting"

type TProps = {}

const GroupConversationByDate = (props: TProps) => {
  return (
    <Container padding={"large"} className="mx-auto">
        <HorizontalLineText text={"Today"} width="5rem"/>
        {
            conversationByDate.listMessage?.map((data,i)=>
                <Texting key={i} {...data}/>
            )
        }
    </Container>
  )
}

const conversationByDate = {
    date : 'Today',
    listMessage : [
        {
            name : 'Song Kang',
            message : 'Hi',
            avatar :'https://i.pinimg.com/474x/21/69/09/2169098906d4941aea840dc20f255510.jpg',
            isSender : true,
            date : '06.38 AM'
        },
        {
            name : 'Siska Apriana',
            message : 'huhsufhsjfh sehfuawef duhfiusdcsdv',
            avatar :'https://i.pinimg.com/474x/2e/59/2f/2e592f79b3a9c529accfd55e213ec89e.jpg',
            isSender : false,
            date : '06.38 AM'
        },
        {
            name : 'Song Kang',
            message : 'sjkfhuhfiuha seufhiurhfui sefhiu',
            avatar :'https://i.pinimg.com/474x/21/69/09/2169098906d4941aea840dc20f255510.jpg',
            isSender : true,
            date : '06.38 AM'
        },
        {
            name : 'Siska Apriana',
            message : 'Hi todyrdth xhgfdhtrd',
            avatar :'https://i.pinimg.com/474x/2e/59/2f/2e592f79b3a9c529accfd55e213ec89e.jpg',
            isSender : false,
            date : '06.38 AM'
        },
        {
            name : 'Song Kang',
            message : 'sjkfhuhfiuha seufhiurhhrthd gjhiuesr suhfguie sughiues zuiyfiya fui sefhiu 😍',
            avatar :'https://i.pinimg.com/474x/21/69/09/2169098906d4941aea840dc20f255510.jpg',
            isSender : true,
            date : '06.38 AM'
        },
        {
            name : 'Siska Apriana',
            message : 'Hi to fthdry xdhrthtr rgdse ',
            avatar :'https://i.pinimg.com/474x/2e/59/2f/2e592f79b3a9c529accfd55e213ec89e.jpg',
            isSender : false,
            date : '06.38 AM'
        },
        {
            name : 'Siska Apriana',
            message : 'Hi to fthdry xdhrthtr rgdse ferg drdt ',
            avatar :'https://i.pinimg.com/474x/2e/59/2f/2e592f79b3a9c529accfd55e213ec89e.jpg',
            isSender : false,
            date : '06.38 AM'
        },
        {
            name : 'Song Kang',
            message : ' suhfguie sughiues zuiyfiya fui sefhiu 😍',
            avatar :'https://i.pinimg.com/474x/21/69/09/2169098906d4941aea840dc20f255510.jpg',
            isSender : true,
            date : '06.38 AM'
        },
        {
            name : 'Siska Apriana',
            message : 'Hi to fthdry xdhrthtr rgdse dfdrbfgx xdhfjh zsgd ',
            avatar :'https://i.pinimg.com/474x/2e/59/2f/2e592f79b3a9c529accfd55e213ec89e.jpg',
            isSender : false,
            date : '06.38 AM'
        },
        {
            name : 'Song Kang',
            message : ' suhfguie slooo',
            avatar :'https://i.pinimg.com/474x/21/69/09/2169098906d4941aea840dc20f255510.jpg',
            isSender : true,
            date : '06.38 AM'
        },
        {
            name : 'Siska Apriana',
            message : 'Hi to fthdr ',
            avatar :'https://i.pinimg.com/474x/2e/59/2f/2e592f79b3a9c529accfd55e213ec89e.jpg',
            isSender : false,
            date : '06.38 AM'
        },
    ]
}


export default GroupConversationByDate