import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './style.module.scss'

export default function Navbar() {

  const [isOpen, setOpen] = useState(false)
  const [isMobile, setMobile] = useState(true)

  function onResizeHandler() {
    setMobile(window.innerWidth <= 1023)
    setOpen(false)
  }

  useEffect(() => {
    onResizeHandler()
    window.addEventListener("resize", onResizeHandler);

    return () => {
      window.removeEventListener("resize", onResizeHandler);
    } 
  }, [])

  return (
    <nav className={styles.navbar + (isOpen ? ' active' : '') + ' bg-neutral-900'}>
      <div className="container mx-auto colums-2 flex flex-row-reverse lg:flex-row items-center justify-between h-full">

        <div className="mt-0 mb-auto mr-10 lg:my-auto">
          <Link href="/">
            <a>
              <img 
                className="w-60 lg:w-80" 
                src="./navbar/logo-light.png" 
                alt="Logo Maria Carolina dos Anjos - Advogada"
              />
            </a>
          </Link>
        </div>

        <div className="text-white ml-10 lg:ml-0"> 

          <div className={isOpen ? 'menu-icon active' : 'menu-icon'} onClick={() => setOpen(!isOpen)}>
            <div></div>
          </div>
          
          {(isOpen || !isMobile) && (
            <ul 
              onClick={() => setOpen(!isOpen)} 
              className="flex flex-col lg:flex-row gap-8 lg:gap-8 lg:gap-16 text-2xl lg:text-3x pt-8 pb-4 lg:py-0"
            >
              <li>
                <Link href="/">
                  <a> Inicio </a>
                </Link>
              </li>
              <li> 
                <Link href="#sobre">
                  <a> Sobre nós </a>
                </Link>
              </li>
              <li> 
                <Link href="#servicos">
                  <a> Serviços </a>
                </Link>
              </li>
              <li> 
                <Link href="#contato">
                  <a> Entrar em contato </a>
                </Link>
              </li>
            </ ul>
          )}
        </div> 
      </div>
    </nav>
  )
}