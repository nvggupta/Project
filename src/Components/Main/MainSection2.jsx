import Carausel from '../Carausel'

function MainSection2() {
    const images = [
        { src: "assets/pro1.jpg" },
        {src: "assets/pro1.jpg" },
        { src: "assets/pro1.jpg" },
        { src: "assets/pro1.jpg" },
        { src: "assets/pro1.jpg" },
        { src: "assets/pro1.jpg" },
      ];
  return (
    <div className='w-[100vw]'>
        <Carausel  images = {images}  length={4}  restCard = {1} shape = 'L'/>
    </div>
  )
}

export default MainSection2