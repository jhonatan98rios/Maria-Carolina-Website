import styles from './style.module.scss'

export default function Header() {
  return (
    <header className={styles.header + " bg-white pt-8 drop-shadow-md"}>
      <span className={styles.goldbg} />

      <div className="container mx-auto columns-2 gap-8 flex flex-col md:flex-row">
        <div className="flex items-end justify-items-end md:mb-16 xl:w-1/3 md:w-1/2 ml-8">
          <h2 className="text-5xl lg:text-5xl md:text-4xl  font-display text-[#333333]">
            Precisa de um <br/> <strong> Advogado? </strong><br/><br/>
            <span className="text-white drop-shadow-md"> Clique aqui <br/> agora mesmo </span>
          </h2>
        </div>

        <div className="xl:w-2/3 md:w-1/2">
          <img className={styles.image} src="./header/themis.png" alt="Imagem da Themis"/>
        </div>
      </div>
      
    </header>
  )
}