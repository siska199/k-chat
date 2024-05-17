import React from 'react'
import { IconCopy } from './Icon'
import Container from './Container'

type Props = {
    variant? : "hbc" | "hsc";
    text     : string;
}

const CopyText = (props: Props) => {
    const {variant, text} = props
  return (
    <Container variant={variant||"hsc"} gap={"small"}>
        <p>{text}</p>
        <IconCopy/>
    </Container>
  )
}

export default CopyText