import Carausel from '../Carausel'

function MainSection() {
    const images = [
        { src: "assets/Burger.png", text: "Burger" },
        { src: "assets/Burger.png", text: "Burger" },
        { src: "assets/Burger.png", text: "Burger" },
        { src: "assets/Burger.png", text: "Burger" },
        { src: "assets/Burger.png", text: "Burger" },
        { src: "assets/Burger.png", text: "Burger" },
        { src: "assets/Burger.png", text: "Burger" },
        { src: "assets/Burger.png", text: "Burger" },
        { src: "assets/Burger.png", text: "Burger" },
      ];
  return (
    <div className='w-[100vw]'>
        <Carausel  images = {images}  length={7}  restCard = {2} shape = 'S'/>
    </div>
  )
}

export default MainSection