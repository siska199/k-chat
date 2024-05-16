import Container from "@/components/ui/Container"
import { IconAttachment, IconSend, IconSmile } from "@/components/ui/Icon"
import InputBase from "@/components/ui/inputs/InputBase"

type TProps = {}

const FormConversation = (props: TProps) => {
  return (
    <Container typeComp={"card"} variant={"hcc"} className="">
        <InputBase
          placeholder="Type Message"
          customeElement={{
            Element : <Container fit variant={"hsc"} gap="small">
              <IconAttachment className="w-[1.1rem] h-[1.1rem] cursor-pointer-custome"/>
              <IconSmile className="w-[1.1rem] h-[1.1rem] cursor-pointer-custome"/>
              <div className="p-2 bg-primary rounded-lg">
                <IconSend className="icon-white-fill w-[1.1rem] h-[1.1rem] cursor-pointer-custome"/>
              </div>
            </Container>,
            position : "end"
          }}
        />
    </Container>
  )
}

export default FormConversation