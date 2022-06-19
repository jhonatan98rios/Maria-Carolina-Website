
import { IContent } from '../content'

interface IProps {
  content: IContent
}

export default function Card({ content }: IProps) {
  return (
    <div 
      className={`
        bg-white w-11/12 max-w-[64rem] rounded-2xl p-8 drop-shadow-lg 
        mx-4 min-h-[32rem] h-fit flex flex-col md:flex-row columns-2 gap-8 justify-center items-center
      `}
    >

      <img className="w-80 h-80" src={content.img.src} alt={content.img.alt} title={content.img.title}/>

      <div className="md:w-3/5 text-[#555555]">
        <h3 className="font-display mb-6"> { content.title } </h3>
        <> { content.description() } </>
      </div>
    </div>
  )
}