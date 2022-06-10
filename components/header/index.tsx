import styles from './style.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.goldbg} />

      <div className={'container flex'}>
        <div className="flex w-40">
          <h2 className="font-primary fs-48 lh-56">
            Precisa de um <br/> <strong> Advogado? </strong>  <br/>
            <span className="color-light m-t-32 flex"> Clique aqui <br/> agora mesmo </span>
          </h2>
        </div>

        <div className="w-60">
          <img className={styles.image} src="./header/athemis.png" alt=""/>
        </div>
      </div>
    </header>
  )
}