function Text() {
  return (
    <div className="bg-[#21e6c1] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="css-ew64yg font-bold font-sans font-bold leading-[20px] not-italic relative shrink-0 text-[#0f2537] text-[14px]">02</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="css-ew64yg font-museum font-normal leading-[36px] relative shrink-0 text-[#101828] text-[30px]">Gradient System</p>
      </div>
    </div>
  );
}

function Container() {
  return <div className="bg-[#e5e7eb] flex-[1_0_0] h-px min-h-px min-w-px" data-name="Container" />;
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
    <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[16777200px] shrink-0" data-name="GradientSystem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] py-[4px] relative">
        <p className="css-ew64yg font-bold font-sans font-bold leading-[16px] not-italic relative shrink-0 text-[#0f2537] text-[12px] tracking-[0.6px] uppercase">Primary Gradient</p>
      </div>
    </div>
  );
}

function Colors() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between pl-[20px] pt-[20px] relative rounded-[32px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] shrink-0 size-[592px]" data-name="Colors" style={{ backgroundImage: "linear-gradient(135deg, rgb(33, 230, 193) 0%, rgb(205, 239, 99) 100.02%)" }}>
      <GradientSystem />
    </div>
  );
}

function GradientSystem1() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[16777200px] shrink-0" data-name="GradientSystem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] py-[4px] relative">
        <p className="css-ew64yg font-bold font-sans font-bold leading-[16px] not-italic relative shrink-0 text-[#0f2537] text-[12px] tracking-[0.6px] uppercase">Secondary Gradient</p>
      </div>
    </div>
  );
}

function Colors1() {
  return (
    <div className="content-stretch flex flex-col h-[592px] items-start justify-between pl-[20px] pt-[20px] relative rounded-[32px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] shrink-0 w-[360px]" data-name="Colors" style={{ backgroundImage: "linear-gradient(148.696deg, rgb(220, 243, 145) 0%, rgb(250, 253, 239) 100.03%)" }}>
      <GradientSystem1 />
    </div>
  );
}

function GradientSystem2() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[16777200px] shrink-0" data-name="GradientSystem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] py-[4px] relative">
        <p className="css-ew64yg font-bold font-sans font-bold leading-[16px] not-italic relative shrink-0 text-[#0f2537] text-[12px] tracking-[0.6px] uppercase">Tertiary Gradient</p>
      </div>
    </div>
  );
}

function Colors2() {
  return (
    <div className="flex-[1_0_0] h-[592px] min-h-px min-w-px relative rounded-[32px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)]" data-name="Colors" style={{ backgroundImage: "linear-gradient(161.333deg, rgb(255, 187, 105) 0%, rgb(255, 245, 233) 100.04%)" }}>
      <div className="content-stretch flex flex-col items-start justify-between pl-[20px] pt-[20px] relative size-full">
        <GradientSystem2 />
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