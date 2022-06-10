import styles from './style.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.goldbg} />

      <div className="container flex flex-column-tablet relative w-100 p-r-32 p-l-32">
        <div className="flex w-40 w-100-tablet">
          <h2 className="font-primary fs-48 lh-56 flex flex-column jc-end">
            Precisa de um <br/> <strong> Advogado? </strong>
            <span className="color-light m-t-32 flex"> Clique aqui <br/> agora mesmo </span>
          </h2>
        </div>

        <div className="w-60 w-100-tablet">
          <img className={styles.image} src="./header/athemis.png" alt=""/>
        </div>
      </div>
      <a href="./" target="_blank">
        <img className={styles.whatsapp} src="./header/whatsapp.png" alt="icone do whatsapp"/>
      </a>
    </header>
  )
}