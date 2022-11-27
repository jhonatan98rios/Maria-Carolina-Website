import style from './style.module.scss'
import { IContent } from '../content'

interface IProps {
  content: IContent
}

export default function Card({ content }: IProps) {
  return (
    <div 
      className={`
        ${style.card}
        bg-white w-11/12 max-w-[96rem] rounded-2xl py-12 px-8 lg:p-8 drop-shadow-lg text-xl
        mx-4 min-h-[32rem] h-fit flex flex-col lg:flex-row columns-2 gap-8 lg:justify-center items-center
      `}
    >
      <img className="w-[22.5rem] h-[22.5rem]" src={content.img.src} alt={content.img.alt} title={content.img.title}/>
      <div className="w-full lg:w-4/6 text-[#555555]">
        <h3 className="font-display mb-6"> {content.title} </h3>
        <> {content.description()} </>
      </div>
    </div>
  )
}