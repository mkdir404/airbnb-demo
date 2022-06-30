import Images from 'next/image'

export default function MediumCard(props:any) {
  return (
    <div className='cursor-poiner hover:scale-105 trasnform transition duration-300 ease-out'>
        <div className='relative h-80 w-80'>
            <Images
                src={props.img}
                layout='fill' 
                className='rounded-lg'
            />
        </div>
        <h3 className='text-2xl mt-2'>{props.title}</h3>
    </div>
  )
}
