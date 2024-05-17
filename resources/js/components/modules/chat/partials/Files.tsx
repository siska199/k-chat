import Badge from '@/components/ui/Badge'
import Container from '@/components/ui/Container'
import { IconFile, IconMedia, IconVideoPlay } from '@/components/ui/Icon'
import clsx from 'clsx'

type TProps = {}

const Files = (props: TProps) => {
  return (
    <Container gap={"base"} className='pb-4 border-b'>
        <Container variant={"hbc"}>
        <p className='text-gray flex gap-2 items-center'>
            <IconFile className='w-[1.1rem] h-[1.1rem]'/>
            Files
            <Badge color='primary' text={60}/>
        </p>
        <p className='text-gray text-body-small cursor-pointer-custome'>See All</p>
        </Container>
        <Container customElement='ul' variant={"vss"} gap={"small"}>
        {
            listFile?.map((data,i)=>(
                <Container variant={"hss"} gap={"base"} className='cursor-pointer'>
                    <IconTypeFile type={data.type}/>
                    <Container className='gap-1'>
                        <p className='font-medium line-clamp-1 hover:line-clamp-none'>{data.filename}</p>
                        <p className='text-body-tiny text-gray'>{data.size} {data.date}</p>
                    </Container>
                </Container>
            ))
        }
        </Container>
  </Container>
  )
}

interface TPropsTypeFile {
    type : 'image' | 'video' | 'pdf'
}

const IconTypeFile = (props:TPropsTypeFile)=>{
    const {type} = props
    return (
        <div className={clsx({
            "bg-error rounded-md p-2" : true,
            "bg-warning" : type==="image",
            "bg-success" : type==="video"
        })}>
            {type=="image" && <IconMedia className='w-[1.25rem]  h-[1.25rem] icon-white-fill'/>}
            {type=="video" && <IconVideoPlay className='w-[1.25rem]  h-[1.25rem] icon-white-fill'/>}
            {!["image" , "video" ]?.includes(type)&& <IconFile className='w-[1.25rem] h-[1.25rem] icon-white-fill'/>}

        </div>
    )
}
interface TFile {
    type        : TPropsTypeFile['type'];
    filename    : string;
    size        : string;
    date        : string;
    
}

const listFile: TFile[] = [
    {
        type        : 'pdf',
        filename    : 'Preview shot webinar.ai',
        size        : '29.2MB',
        date        : '26thmar2023'
    },
    {
        type        : 'image',
        filename    : 'Mountain shoot travel.png',
        size        : '13.4MB',
        date        : '25thMar2023'
    },
    {
        type        : 'video',
        filename    : 'Ramadhan vibes.mp4',
        size        : '82.3MB',
        date        : '25thMar2023'
    }
]

export default Files