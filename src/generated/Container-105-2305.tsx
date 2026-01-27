function Hero() {
  return (
    <div className="h-[46px] relative rounded-[16777200px] shrink-0" data-name="Hero" style={{ backgroundImage: "linear-gradient(132.174deg, rgb(33, 230, 193) 35.497%, rgb(208, 245, 240) 99.57%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center px-[24px] py-[12px] relative">
        <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#0f2537] text-[14px] text-center">Primary</p>
      </div>
    </div>
  );
}

function Hero1() {
  return (
    <div className="bg-gradient-to-b from-[#cdef63] from-[134.79%] h-[46px] relative rounded-[16777200px] shrink-0 to-[#e8f5d6]" data-name="Hero">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center px-[24px] py-[12px] relative">
        <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#0f2537] text-[14px] text-center">Secondary</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[46px] relative rounded-[16777200px] shrink-0 w-[99px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ff9f29] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[50px] not-italic text-[#ff9f29] text-[14px] text-center top-[11.5px] translate-x-[-50%]">Outline</p>
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative size-full" data-name="Container">
      <Hero />
      <Hero1 />
      <Button />
    </div>
  );
}