import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className='bg-neutral-900 py-12'>
      <div className='container columns-2 mx-auto flex flex-col sm:flex-row justify-center gap-16'>
        <div className='w-fit mx-auto sm:mx-0'>
          <p className='text-white text-2xl mb-4'> Entre em contato </p>
          <span className='flex mb-2'>
            <img src="footer/mail.png" alt="icon de email"/>
            <p className='text-white ml-4 text-xl'> adv.carolinarios@gmail.com </p>
          </span>
          <span className='flex mb-2'>
            <img src="footer/phone.png" alt="icone de telefone"/>
            <p className='text-white ml-4 text-xl'> (11) 98961-3841 </p>
          </span>
        </div>

        <div className='w-fit mx-auto sm:mx-0'>
          <h3 className="text-white mb-4 text-2xl"> Redes Sociais </h3>
          <ul className='flex gap-4'>
            <li> 
              <Link rel="noreferrer noopener" target="_blank" href="https://www.facebook.com/mecontadireitoo/">
                <img src="footer/facebook.png" alt="icone do facebook"/>
              </Link> 
            </li>
            <li>
              <Link rel="noreferrer noopener" target="_blank" href="https://www.instagram.com/carolsuaadvogada/">
                <img src="footer/instagram.png" alt="icone do instagram"/>
              </Link> 
            </li>
            <li>
              {/* <Link rel="noreferrer noopener" target="_blank" href="">
                <img src="footer/linkedin.png" alt="icone do linkedin"/>
              </Link>  */}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
