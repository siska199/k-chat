import Avatar from "@/components/ui/Avatar";
import Container from "@/components/ui/Container";
import { IconDoubleCheck } from "@/components/ui/Icon";
import clsx from "clsx";

type TProps = {
  name      : string;
  message   : string;
  avatar    : string;
  isSender  : boolean;
  date      : string;
}

const Texting = (props: TProps) => {
  const {name, message, avatar, isSender, date} = props;

  return (
    <Container variant={"hes"} gap={"small"} fit className={clsx({
      "" : true,
      "ml-auto" : !isSender
    })}>
      {
        isSender && 
        <Avatar src={avatar} alt="Avatar"/>
      }
      <Container gap={"small"}>
        <Container variant={"hes"} gap={"small"}>
          <h5 className={clsx({
              "text-body-base" : true,
              "ml-auto":!isSender
          })}>
            {name} 
            <span className="ml-4 text-gray">{date}</span>
          </h5>
          {
            !isSender &&
          <IconDoubleCheck className="icon-green w-[1.1rem] h-[1.1rem]" />
          }
        </Container>
          <Container typeComp={"card"} fit className={clsx({
            " bg-primary text-white ml-auto" : true,
            "rounded-e-xl rounded-bl-xl  bg-white text-black ml-0" :isSender,
            "rounded-s-xl rounded-br-xl":!isSender
          })}>
            {message}
          </Container>
      </Container>
    </Container>
  )
}

export default Texting