import styles from './style.module.scss'

export default function Contact() {
  return (
    <section className='py-24 bg-contact-image bg-no-repeat bg-center lg:bg-right-top bg-cover'>
      <div className='container mx-auto'>
        <div className="max-w-[85%] sm:max-w-[70%] lg:max-w-[50%]">
          <p className="text-3xl text-[#555555] pl-8">
            Atendimento consultivo das <strong> 8h às 18h </strong> de <strong> segunda à sexta </strong>, 
            por <strong> Instagram </strong> e <strong>Facebook</strong>. <br />
            Atuação em toda <strong>Grande São Paulo</strong> e <strong>Alto Tietê</strong>.
          </p>
        </div>

        <button className={
          `${styles.button} flex justify-center items-center py-5 m-auto lg:mr-auto lg:ml-0
            max-w-[50rem] rounded-2xl w-4/5 mt-12 px-8`
        }>
          <img src="header/whatsapp.png" alt="icone do whatsapp" className="mr-3.5 w-8" />
          <p className="text-2xl text-white font-bold text-left"> 24hs Flagrante ou Emergência </p>
        </button>

      </div>
    </section>
  )
}


