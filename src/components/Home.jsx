import React from "react";

function Home() {
  return (
    <div className="flex flex-col justify-center">
      <div className="font-semibold text-center hover:font-bold  p-3">
        <p>
          This awareness application is designed for children, parents, and
          teachers to understand and manage mobile phone usage effectively.
        </p>
      </div>
      <div className="flex flex-row items-center px-2">
        <div data-aos="fade-up" className="flex border bg-[#f9dbbd] m-3 px-2 py-2 rounded flex-row">
          <p  className="text-center text-[15px]">
            excessive screen time is linked to sleep issues, attention problems,
            eye strain, and mental health concerns like anxiety, depression,
            etc..
          </p>
        </div>
        <img
          src="https://i0.wp.com/intheplayroom.co.uk/wp-content/uploads/2021/11/bruce-mars-zeCdye9bUmI-unsplash-scaled.jpg?resize=910%2C1325&ssl=1"
          className="h-[100px] ml-2 rounded"
        />
      </div>
      <h1 className=" px-2 pt-1 font-semibold">
        In 2026, mobile usage among children continues to be a central concern
        for parents and health professionals. Research indicates that
        approximately 90% of children aged 5–16 have mobile access
      </h1>
      <h1 data-aos="fade-in" className="mt-10 text-center font-bold">
        MOBILE USAGE IS NOT WRONG BUT OVER USE WILL HARM OUR HEALTH ESPECIALLY
        CHILDREN
      </h1>
    </div>
  );
}

export default Home;
