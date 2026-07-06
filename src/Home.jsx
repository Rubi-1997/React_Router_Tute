import React from "react";

const Home = () => {
  return (
    <div className="grid grid-cols-3 gap-8 w-full px-2 ">
      <div className=" col-span-2 ">
        <div class="w-full rounded overflow-hidden shadow-2xl">
          <img
            className="w-full h-100 object-cover object-center"
            src="/download.jpg"
            alt="Sunset in the mountains"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-md mb-2">The Coldest Sunset</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2 flex justify-between">
            <button className="shadow-md px-6 py-2">READ MORE</button>
            <button className=" px-6 py-2">
              comments <span className="px-2 py-1 bg-black">💬</span>
            </button>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-1 gap-4">
        <div class=" shadow-2xl ">
          <img
            class="w-full object-contain object-center"
            src="download (1).jpg "
            alt="Sunset in the mountains"
          />
          <div class="px-6 w-full py-2">
            <div class="font-bold text-md mb-2">The Coldest Sunset</div>
            <p class="text-gray-700 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
       <hr className="text-gray-400"></hr>
        <div className="border-gray-100 shadow-2xl grid grid-rows-5  ">
          <div className=" px-4 flex items-center">
            <h1 className="text-md ">Popular Posts</h1>
          </div>
          <div className="py-2 px-4 border-b-2 border-gray-300 flex items-center">
            <img src="download (6).jpg" className="w-15"></img>
            <div className="px-2">
              <p className="font-bold">Lorem</p>
              <p className="text-sm">Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div className="py-2 px-4 border-b-2 border-gray-300 flex items-center">
            <img src="download (1).jpg" className="w-15"></img>
            <div className="px-2">
              <p className="font-bold">Lorem</p>
              <p className="text-sm">Lorem ipsum dolor sit.</p>
            </div>
          </div>
         <div className="py-2 px-4 border-b-2 border-gray-300 flex items-center">
            <img src="download (2).jpg" className="w-15"></img>
            <div className="px-2">
              <p className="font-bold">Lorem</p>
              <p className="text-sm">Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div className="py-2 px-4 border-b-2 border-gray-300 flex items-center">
            <img src="download (1).jpg" className="w-15"></img>
            <div className="px-2">
              <p className="font-bold">Lorem</p>
              <p className="text-sm">Lorem ipsum dolor sit.</p>
            </div>
          </div>
          
        </div>
        <hr className="text-gray-400"></hr>
        <div className="  shadow-2xl px-4 py-2">
         <p className="text-md font-bold">Tags</p>
         <div className="flex flex-wrap "><p className="text-white text-sm px-2 py-1 mx-2 my-2 bg-black">Travel</p>
         <p className="text-white  text-sm px-4 py-2 mx-2 my-2 bg-black">London</p>
         <p className="text-white text-sm px-4 py-2 mx-2 my-2 bg-black">NewYork</p>
         <p className="text-white text-sm px-4 py-2 mx-2 my-2 bg-black">Norway</p>
         <p className="text-white  text-sm px-4 py-2 mx-2 my-2 bg-black">Farmey</p>
         <p className="text-white text-sm px-4 py-2 mx-2 my-2 bg-black">KeA</p>
         <p className="text-white text-sm px-4 py-2 mx-2 my-2 bg-black">Sports</p>
         <p className="text-white text-sm px-4 py-2 mx-2 my-2 bg-black">Diy</p>
         <p className="text-white  text-sm px-4 py-2 mx-2 my-2 bg-black">Korea</p>
         <p className="text-white text-sm px-4 py-2 mx-2 my-2 bg-black">hMG</p>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
