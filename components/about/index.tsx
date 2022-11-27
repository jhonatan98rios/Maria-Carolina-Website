import styles from './style.module.scss'

export default function About() {
  return (
    <section className="" id="sobre">
      <div className="container flex flex-col lg:flex-row mx-auto py-16 gap-12">
        <div className="mx-auto lg:h-1/3">
          <img className="md:ml-16 h-64 lg:h-1/3" src="./about/Carolina.png" alt="Maria Carolina dos Anjos"/>
        </div>

        <div className="h-full flex justify-items-center items-center my-auto lg:w-1/2 px-8 mx-auto">
          <p className="text-[#555555] text-2xl">
            Nossa advocacia é acima de tudo especializada em pessoas. Sob a perspectiva de que toda pessoa deve ser assistida e amparada. Assim baseamos nossas diretrizes. Uma advocacia feita para cada cliente de forma individualizada e humana, desenvolvida em alto nível, com entrega 100% de nossa equipe. Você não está só!
          </p>
        </div>
      </div>
    </section>
  )
}