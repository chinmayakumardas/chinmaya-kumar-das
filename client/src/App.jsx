import React,{useEffect,useRef} from 'react'
import './styles/locomotive-scroll.css';
import LocomotiveScroll from 'locomotive-scroll';
const App = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp:0.05,
      // add any additional Locomotive Scroll options here
    });

    return () => {
      scroll.destroy();
    };
  }, []);
  return (
    <div ref={scrollRef} className='scroll-container  bg-primary  max-w-[100vw]  flex flex-col justify-evenly overflow-hidden h-[200vh] '>
              App
    </div>
  )
}

export default App