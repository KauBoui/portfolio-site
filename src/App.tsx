import React from 'react';
import Card from './components/Card';
import Footer from './components/Footer';
import MainBody from './components/Mainbody';
import NavBar from './components/Navbar';
import './input.css';


function App() {
  return (
    <div className='bg-blue-200 m-auto w-screen font-["Noto Sans Mono mono-space"]'>
      <NavBar/>
      <MainBody/>
      <Card title='FractalAnimation.jl' imgsrc={process.env.PUBLIC_URL+'MandelBrot_Progression_tan_1_Cropped.jpg'} githublnk='https://github.com/KauBoui/FractalAnimation.jl'>
        Mandelbrot and Julia set plotter written in the Julia language. 
        This package is focused on utilities for animating progressions of sets
        along paths in the complex plane. Calculation of sets is GPU-accelerated using CUDA.jl. 
      </Card>
      <Card title='Dog Time!' imgsrc='https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg' githublnk='https://github.com/ogham/dog'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem impedit ipsum, earum sunt expedita minima ullam magnam itaque quasi ducimus qui non exercitationem et adipisci, mollitia, dolorum ea recusandae? Tempora.
      </Card>
      <Footer/>
    </div>
  );
}

export default App;
