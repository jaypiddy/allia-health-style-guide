function Container() {
  return <div className="absolute bg-[#21e6c1] blur-3xl filter left-[1002.51px] opacity-[0.154] rounded-[1.67772e+07px] size-[298.988px] top-[-85.49px]" data-name="Container" />;
}

function Container1() {
  return <div className="absolute bg-[#d0f5f0] blur-3xl filter left-[-68.11px] opacity-[0.108] rounded-[1.67772e+07px] size-[264.212px] top-[322.14px]" data-name="Container" />;
}

function Text() {
  return (
    <div className="absolute bg-[rgba(255,232,209,0.1)] border border-[#ff9f29] border-solid h-[26px] left-0 rounded-[1.67772e+07px] top-[0.5px] w-[167.922px]" data-name="Text">
      <p className="absolute font-bold font-sans font-bold leading-[16px] left-[12px] not-italic text-[#ff9f29] text-[12px] text-nowrap top-[4.5px] tracking-[0.6px] uppercase whitespace-pre">Allia Health Group</p>
    </div>
  );
}

function Hero() {
  return (
    <div className="absolute content-stretch flex h-[81.5px] items-start left-0 top-[71.5px] w-[313.852px]" data-name="Hero">
      <p className="bg-clip-text font-['Nunito:ExtraBold',sans-serif] font-extrabold leading-[75px] relative shrink-0 text-[60px] text-[rgba(0,0,0,0)] text-nowrap whitespace-pre" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(rgb(33, 230, 193) 0%, rgb(69, 240, 213) 100%)" }}>
        Accessible.
      </p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[150px] left-0 top-[50.5px] w-[520px]" data-name="Heading 1">
      <p className="absolute font-['Nunito:ExtraBold',sans-serif] font-extrabold leading-[75px] left-0 text-[60px] text-nowrap text-white top-[0.5px] whitespace-pre">Bold, Natural,</p>
      <Hero />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[87.75px] left-0 top-[224.5px] w-[448px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] left-0 not-italic text-[#d1d5dc] text-[18px] top-[0.5px] w-[436px]">Our visual language combines the organic warmth of nature with the sharp precision of modern digital interfaces.</p>
    </div>
  );
}

function Hero1() {
  return (
    <div className="h-[46px] relative rounded-[1.67772e+07px] shrink-0" data-name="Hero">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[46px] items-center px-[24px] py-[12px] relative">
        <p className="font-bold font-sans font-bold leading-[20px] not-italic relative shrink-0 text-[#0f2537] text-[14px] text-center text-nowrap whitespace-pre">Primary</p>
      </div>
    </div>
  );
}

function Hero2() {
  return (
    <div className="h-[46px] relative rounded-[1.67772e+07px] shrink-0" data-name="Hero">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[46px] items-center px-[24px] py-[12px] relative">
        <p className="font-bold font-sans font-bold leading-[20px] not-italic relative shrink-0 text-[#0f2537] text-[14px] text-center text-nowrap whitespace-pre">Secondary</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[42px] relative rounded-[1.67772e+07px] shrink-0 w-[99.32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#cdef63] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[42px] relative w-[99.32px]">
        <p className="absolute font-bold font-sans font-bold leading-[20px] left-[50px] not-italic text-[#cdef63] text-[14px] text-center text-nowrap top-[11.5px] translate-x-[-50%] whitespace-pre">Outline</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[46px] items-start left-0 top-[344px] w-[520px]" data-name="Container">
      <Hero1 />
      <Hero2 />
      <Button />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[390.25px] left-0 top-0 w-[520px]" data-name="Container">
      <Text />
      <Heading />
      <Paragraph />
      <Container2 />
    </div>
  );
}

function Hero3() {
  return (
    <div className="absolute h-[390.25px] left-[64px] top-[64px] w-[1088px]" data-name="Hero">
      <Container3 />
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-[#0f2537] overflow-clip relative rounded-[32px] size-full" data-name="Section">
      <Container />
      <Container1 />
      <Hero3 />
    </div>
  );
}