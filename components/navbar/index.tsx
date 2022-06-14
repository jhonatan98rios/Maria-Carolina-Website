import styles from './style.module.scss'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className="container mx-auto colums-2 flex items-center justify-between h-full">

        <div className="">
          <img 
            className="w-60 md:w-80" 
            src="./navbar/logo-light.png" 
            alt="Logo Maria Carolina dos Anjos - Advogada"
          />
        </div>

        <ul className="flex gap-8 lg:gap-16 text-white">
          <ul> Inicio </ul>
          <ul> Sobre nós </ul>
          <ul> Serviços </ul>
          <ul> Entrar em contato </ul>
        </ul>

      </div>
    </nav>
  )
}