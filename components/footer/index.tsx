import styles from './style.module.scss'

export default function Footer() {
  return (
    <footer className='bg-neutral-900 py-12'>
      <div className='container columns-2 mx-auto flex justify-center gap-16'>
        <div>
          <p className='text-white text-2xl mb-4'> Entre em contato </p>
          <span className='flex mb-2'>
            <img src="footer/mail.png" alt=""/>
            <p className='text-white ml-4 text-xl'> email@gmail.com </p>
          </span>
          <span className='flex mb-2'>
            <img src="footer/phone.png" alt=""/>
            <p className='text-white ml-4 text-xl'> (11) 98961-3841 </p>
          </span>
        </div>

        <div>
          <h3 className="text-white mb-4 text-2xl"> Redes Sociais </h3>
          <ul className='flex gap-4'>
            <li> <img src="footer/facebook.png" alt=""/> </li>
            <li> <img src="footer/instagram.png" alt=""/> </li>
            <li> <img src="footer/linkedin.png" alt=""/> </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}