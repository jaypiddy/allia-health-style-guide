function Interactive() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Interactive">
      <p className="font-bold font-sans font-bold leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] text-nowrap tracking-[0.7px] uppercase whitespace-pre">Buttons</p>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[1.67772e+07px] shrink-0" data-name="Button">
      <p className="font-bold font-sans font-bold leading-[20px] not-italic relative shrink-0 text-[#0f2537] text-[14px] text-center text-nowrap whitespace-pre">Primary Action</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[1.67772e+07px] shrink-0" data-name="Button">
      <p className="font-bold font-sans font-bold leading-[20px] not-italic relative shrink-0 text-[#0f2537] text-[14px] text-center text-nowrap whitespace-pre">Secondary</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[#cdef63] from-[134.79%] items-center justify-center px-[24px] py-[12px] relative rounded-[1.67772e+07px] shrink-0 to-[#e8f5d6]" data-name="Button">
      <p className="font-bold font-sans font-bold leading-[20px] not-italic relative shrink-0 text-[#0f2537] text-[14px] text-center text-nowrap whitespace-pre">Secondary</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[7px] py-0 relative shrink-0" data-name="Button">
      <p className="font-bold font-sans font-bold leading-[20px] not-italic relative shrink-0 text-[#0f2537] text-[14px] text-center text-nowrap whitespace-pre">Link Style</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center px-[24px] py-[12px] relative rounded-[1.67772e+07px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <p className="font-bold font-sans font-bold leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-center text-nowrap whitespace-pre">Outline</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center px-[24px] py-[12px] relative rounded-[1.67772e+07px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#21e6c1] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <p className="font-bold font-sans font-bold leading-[20px] not-italic relative shrink-0 text-[#21e6c1] text-[14px] text-center text-nowrap whitespace-pre">Outline</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center px-[24px] py-[12px] relative rounded-[1.67772e+07px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ff9f29] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <p className="font-bold font-sans font-bold leading-[20px] not-italic relative shrink-0 text-[#ff9f29] text-[14px] text-center text-nowrap whitespace-pre">Outline</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center px-[24px] py-[12px] relative rounded-[1.67772e+07px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#cdef63] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <p className="font-bold font-sans font-bold leading-[20px] not-italic relative shrink-0 text-[#cdef63] text-[14px] text-center text-nowrap whitespace-pre">Outline</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
    </div>
  );
}

function Interactive1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Interactive">
      <div className="absolute bg-[#0f2537] h-[56px] left-[106px] top-[51.95px] w-[342px]" />
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative rounded-[32px] shrink-0 w-full" data-name="Container">
      <Interactive />
      <Interactive1 />
    </div>
  );
}

function Interactive2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Interactive">
      <p className="font-bold font-sans font-bold leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] text-nowrap tracking-[0.7px] uppercase whitespace-pre">Badges</p>
    </div>
  );
}

function Text() {
  return (
    <div className="bg-[#21e6c1] content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[1.67772e+07px] shrink-0" data-name="Text">
      <p className="font-bold font-sans font-bold leading-[16px] not-italic relative shrink-0 text-[#0f2537] text-[10px] text-nowrap uppercase whitespace-pre">New</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="bg-[#0f2537] content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[1.67772e+07px] shrink-0" data-name="Text">
      <p className="font-bold font-sans font-bold leading-[16px] not-italic relative shrink-0 text-[#21e6c1] text-[10px] text-nowrap uppercase whitespace-pre">Featured</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="bg-gray-100 content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[1.67772e+07px] shrink-0" data-name="Text">
      <p className="font-bold font-sans font-bold leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[10px] text-nowrap uppercase whitespace-pre">Neutral</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[1.67772e+07px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#21e6c1] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <p className="font-bold font-sans font-bold leading-[16px] not-italic relative shrink-0 text-[#21e6c1] text-[10px] text-nowrap uppercase whitespace-pre">Outline</p>
    </div>
  );
}

function Interactive3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Interactive">
      <Text />
      <Text1 />
      <Text2 />
      <Text3 />
    </div>
  );
}

function Text4() {
  return (
    <div className="bg-[#ff9f29] content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[1.67772e+07px] shrink-0" data-name="Text">
      <p className="font-bold font-sans font-bold leading-[16px] not-italic relative shrink-0 text-[#0f2537] text-[10px] text-nowrap uppercase whitespace-pre">New</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="bg-[#0f2537] content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[1.67772e+07px] shrink-0" data-name="Text">
      <p className="font-bold font-sans font-bold leading-[16px] not-italic relative shrink-0 text-[#ff9f29] text-[10px] text-nowrap uppercase whitespace-pre">Featured</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="bg-gray-100 content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[1.67772e+07px] shrink-0" data-name="Text">
      <p className="font-bold font-sans font-bold leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[10px] text-nowrap uppercase whitespace-pre">Neutral</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[1.67772e+07px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#ff9f29] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <p className="font-bold font-sans font-bold leading-[16px] not-italic relative shrink-0 text-[#ff9f29] text-[10px] text-nowrap uppercase whitespace-pre">Outline</p>
    </div>
  );
}

function Interactive4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Interactive">
      <Text4 />
      <Text5 />
      <Text6 />
      <Text7 />
    </div>
  );
}

function Text8() {
  return (
    <div className="bg-[#cdef63] content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[1.67772e+07px] shrink-0" data-name="Text">
      <p className="font-bold font-sans font-bold leading-[16px] not-italic relative shrink-0 text-[#0f2537] text-[10px] text-nowrap uppercase whitespace-pre">New</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="bg-[#0f2537] content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[1.67772e+07px] shrink-0" data-name="Text">
      <p className="font-bold font-sans font-bold leading-[16px] not-italic relative shrink-0 text-[#cdef63] text-[10px] text-nowrap uppercase whitespace-pre">Featured</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="bg-gray-100 content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[1.67772e+07px] shrink-0" data-name="Text">
      <p className="font-bold font-sans font-bold leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[10px] text-nowrap uppercase whitespace-pre">Neutral</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[1.67772e+07px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#cdef63] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <p className="font-bold font-sans font-bold leading-[16px] not-italic relative shrink-0 text-[#cdef63] text-[10px] text-nowrap uppercase whitespace-pre">Outline</p>
    </div>
  );
}

function Interactive5() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Interactive">
      <Text8 />
      <Text9 />
      <Text10 />
      <Text11 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <Interactive3 />
      <Interactive4 />
      <Interactive5 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative rounded-[32px] shrink-0 w-full" data-name="Container">
      <div className="absolute bg-[#0f2537] h-[108px] left-[213px] top-[35.95px] w-[76px]" />
      <Interactive2 />
      <Frame />
    </div>
  );
}

export default function Interactive6() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-start relative size-full" data-name="Interactive">
      <Container />
      <Container1 />
    </div>
  );
}