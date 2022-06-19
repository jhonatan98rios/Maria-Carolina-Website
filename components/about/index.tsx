import styles from './style.module.scss'

export default function About() {
  return (
    <section className="" id="sobre">
      <div className="container flex flex-col lg:flex-row mx-auto py-16 lg:gap-24 gap-12">
        <div className="mx-auto lg:h-1/3">
          <img className="md:ml-16 h-64 lg:h-1/3" src="./about/Carolina.png" alt=""/>
        </div>

        <div className="h-full flex justify-items-center items-center my-auto lg:w-1/2 px-8 mx-auto">
          <p className="text-[#555555] text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Leo duis ut diam quam nulla porttitor. Gravidad rutrum quisque non tellus orci ac auctor.
          </p>
        </div>
      </div>
    </section>
  )
}