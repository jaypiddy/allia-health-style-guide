function Text() {
  return (
    <div className="bg-[#21e6c1] relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[32px]">
        <p className="font-bold font-sans font-bold leading-[20px] not-italic relative shrink-0 text-[#0f2537] text-[14px] text-nowrap whitespace-pre">02</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-bold font-nunito font-bold leading-[36px] relative shrink-0 text-[#101828] text-[30px] text-nowrap whitespace-pre">Gradient System</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 bg-gray-200 grow h-px min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-px w-full" />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[16px] h-[36px] items-center relative shrink-0 w-full" data-name="Container">
      <Text />
      <Heading />
      <Container />
    </div>
  );
}

function GradientSystem() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[1.67772e+07px] shrink-0" data-name="GradientSystem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] py-[4px] relative">
        <p className="font-bold font-sans font-bold leading-[16px] not-italic relative shrink-0 text-[#0f2537] text-[12px] text-nowrap tracking-[0.6px] uppercase whitespace-pre">Primary Gradient</p>
      </div>
    </div>
  );
}

function Colors() {
  return (
    <div className="bg-gradient-to-br from-[#21e6c1] to-[#b8f5ed] content-stretch flex flex-col items-start justify-between pb-0 pl-[20px] pr-0 pt-[20px] relative rounded-[32px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] shrink-0 size-[592px]" data-name="Colors">
      <GradientSystem />
    </div>
  );
}

function GradientSystem1() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[1.67772e+07px] shrink-0" data-name="GradientSystem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] py-[4px] relative">
        <p className="font-bold font-sans font-bold leading-[16px] not-italic relative shrink-0 text-[#0f2537] text-[12px] text-nowrap tracking-[0.6px] uppercase whitespace-pre">Secondary Gradient</p>
      </div>
    </div>
  );
}

function Colors1() {
  return (
    <div className="bg-gradient-to-br from-[#ff9f29] to-[#ffe4c4] basis-0 grow h-[592px] min-h-px min-w-px relative rounded-[32px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Colors">
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[592px] items-start justify-between pb-0 pl-[20px] pr-0 pt-[20px] relative w-full">
          <GradientSystem1 />
        </div>
      </div>
    </div>
  );
}

function GradientSystem2() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[1.67772e+07px] shrink-0" data-name="GradientSystem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] py-[4px] relative">
        <p className="font-bold font-sans font-bold leading-[16px] not-italic relative shrink-0 text-[#0f2537] text-[12px] text-nowrap tracking-[0.6px] uppercase whitespace-pre">Secondary Gradient</p>
      </div>
    </div>
  );
}

function Colors2() {
  return (
    <div className="basis-0 bg-gradient-to-b from-[#cdef63] to-[#e8f5d6] grow h-[592px] min-h-px min-w-px relative rounded-[32px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Colors">
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[592px] items-start justify-between pb-0 pl-[20px] pr-0 pt-[20px] relative w-full">
          <GradientSystem2 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
      <Colors />
      <Colors1 />
      <Colors2 />
    </div>
  );
}

function Gradients() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Gradients">
      <Frame />
    </div>
  );
}

export default function GradientSystem3() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative size-full" data-name="GradientSystem">
      <Container1 />
      <Gradients />
    </div>
  );
}