export default function PageTitle({ subtitle, title, brief, background }) {
  return (
    <div
      style={{ background: `url(${background})` }}
      className="relative lg:h-[592px] h-[200px] !bg-no-repeat !bg-center !bg-cover "
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[rgba(28,25,37,1)] to-[rgba(28,25,37,0.26)]"></div>
      <div className="container h-full flex items-center justify-center">
        <div className="max-w-[614px] text-center text-white mx-auto z-[1]">
          <span className="block font-semibold uppercase mb-[1rem] ">
            {subtitle}
          </span>
          <h1 className="lg:text-[3.5rem] text-[1.5rem] text-white font-[800] lg:leading-[4rem] mb-[1rem]">
            {title}
          </h1>
          <p>{brief}</p>
        </div>
      </div>
    </div>
  );
}
