import Container from './Container';
import { IconCopy } from './Icon';

type Props = {
    variant? : "hbc" | "hsc";
    text     : string;
    classContainer? : string;
    classText?      : string;
    classIcon?      : string;
}

const CopyText = (props: Props) => {
    const {variant, text, classContainer, classText, classIcon } = props

    const handleCopyToClipboard = () => {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
        }).catch(err => {
          console.error('Failed to copy text: ', err);
        });
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';  
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
          //set alert in here to notify user if success to copy the text
          document.execCommand('copy');
        } catch (err) {
          console.error('Failed to copy text: ', err);
        }
        document.body.removeChild(textArea);
      }
    };

  return (
    <Container variant={variant||"hsc"} gap={"small"} className={`${classContainer}`}>
        <p className={classText}>{text}</p>
        <IconCopy onClick={ handleCopyToClipboard} className={`${classIcon} w-[1rem] cursor-pointer-custome icon-primary-fill`}/>
    </Container>
  )
}

export default CopyText