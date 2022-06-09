import styles from './style.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>

      <span className={styles.goldbg} />

      <div className={'container flex'}>

        <div>
          <h2>
            Precisa de um Advogado? 
            <span className="color-light"> Clique aqui agora mesmo </span>
          </h2>
        </div>

        <div>
          <img className={styles.image} src="./header/athemis.png" alt=""/>
        </div>

      </div>

    </header>
  )
}