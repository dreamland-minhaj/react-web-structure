const Home =()=>{
  return(
    <>
    <div className="content-area">
      <div className="container w-10/12 flex justify-between">
        <div className="relative h-[450px]">
            <div className=" inset-0 bg-header-bg bg-cover bg-center"></div>
            <div className=" inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-90"></div>
            <div className="relative z-10 flex justify-center items-center h-full">
            <div className="w-1/2">
              <h2 className="text-4xl">Build Your Landing Page With Bootslander</h2>
              <p>We are team of talented designers making websites with Bootstrap</p>
            </div>
            <div className="w-1/2">
              <img className="h-[390px]"src="https://bootstrapmade.com/demo/templates/Bootslander/assets/img/hero-img.png" alt="" />
            </div>
            </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;