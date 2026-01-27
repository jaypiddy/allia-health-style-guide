import svgPaths from "./svg-3t6br2zi0p";
import imgInteractive from "figma:asset/69e99ab61598e19b99ad222527f0b38291d93629.png";
import imgImageJoyfulDiversePeople from "figma:asset/d936a78e5b689123a98ab4e679b929c6740ee471.png";

function Heading() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 3">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] text-nowrap tracking-[0.7px] uppercase whitespace-pre">Card Layouts</p>
    </div>
  );
}

function Interactive() {
  return (
    <div className="absolute h-[342px] left-0 top-0 w-[389.336px]" data-name="Interactive">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgInteractive} />
    </div>
  );
}

function Interactive1() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[342px] left-0 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0.2)] w-[389.336px]" data-name="Interactive" />;
}

function Text() {
  return (
    <div className="bg-[#21e6c1] relative rounded-[1.67772e+07px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] py-[2px] relative">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#0f2537] text-[10px] text-nowrap whitespace-pre">NEW</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)] text-nowrap whitespace-pre">5 mins ago</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19px] items-center relative shrink-0 w-full" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 4">
      <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Misty Forests</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#d1d5dc] text-[14px]">Discover the secrets hidden within the ancient trees.</p>
    </div>
  );
}

function Interactive2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Interactive">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[24px] relative w-full">
          <Container />
          <Heading1 />
          <Paragraph />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[8px] grow h-[342px] items-start justify-end min-h-px min-w-px overflow-clip relative rounded-[32px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Container">
      <Interactive />
      <Interactive1 />
      <Interactive2 />
    </div>
  );
}

function ImageJoyfulDiversePeople() {
  return (
    <div className="h-[160px] relative shrink-0 w-full" data-name="Image (Joyful diverse people)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageJoyfulDiversePeople} />
    </div>
  );
}

function Interactive3() {
  return (
    <div className="content-stretch flex flex-col h-[160px] items-start overflow-clip relative shrink-0 w-full" data-name="Interactive">
      <ImageJoyfulDiversePeople />
    </div>
  );
}

function Text2() {
  return (
    <div className="bg-[#0f2537] content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[1.67772e+07px] shrink-0" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#ff9f29] text-[10px] text-nowrap uppercase whitespace-pre">Nature</p>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Heading 4">
      <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#101828] text-[20px] text-nowrap whitespace-pre">Highland Peaks</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#6a7282] text-[14px]">Explore the rugged beauty of the highlands with our guided tours.</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #0F2537)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #0F2537)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Link">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#0f2537] text-[14px] text-nowrap whitespace-pre">Read More</p>
      <Icon />
    </div>
  );
}

function Interactive4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Interactive">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
          <Text2 />
          <Heading2 />
          <Paragraph1 />
          <Link />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="basis-0 bg-white grow h-[342px] min-h-px min-w-px relative rounded-[32px] shrink-0" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col h-[342px] items-start p-px relative w-full">
          <Interactive3 />
          <Interactive4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f4f8fa] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[1.67772e+07px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#cdef63] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#cdef63] text-[10px] text-nowrap uppercase whitespace-pre">Info</p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 4">
      <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Standard Plan</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-white">Get access to all basic features including health tracking and weekly reports.</p>
    </div>
  );
}

function Interactive5() {
  return (
    <div className="h-[128px] relative shrink-0 w-full" data-name="Interactive">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] h-[128px] items-start relative w-full">
        <Text3 />
        <Heading3 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-gradient-to-b from-[#cdef63] from-[134.79%] relative rounded-[1.67772e+07px] shrink-0 to-[#e8f5d6] w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[21px] py-[10px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#0f2537] text-[14px] text-center text-nowrap whitespace-pre">Get Started</p>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="basis-0 bg-[#0f2537] grow h-[342px] min-h-px min-w-px relative rounded-[32px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[342px] items-start justify-between p-[24px] relative w-full">
          <Interactive5 />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] py-[2px] relative rounded-[1.67772e+07px] shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#ff9f29] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#ff9f29] text-[10px] text-nowrap uppercase whitespace-pre">Info</p>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 4">
      <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#0f2537] text-[20px] text-nowrap whitespace-pre">Standard Plan</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#6a7282] text-[14px]">Get access to all basic features including health tracking and weekly reports.</p>
    </div>
  );
}

function Interactive6() {
  return (
    <div className="h-[128px] relative shrink-0 w-full" data-name="Interactive">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] h-[128px] items-start relative w-full">
        <Text4 />
        <Heading4 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative rounded-[1.67772e+07px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[21px] py-[10px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#0f2537] text-[14px] text-center text-nowrap whitespace-pre">Get Started</p>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="basis-0 bg-white grow h-[342px] min-h-px min-w-px relative rounded-[32px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[342px] items-start justify-between p-[25px] relative w-full">
          <Interactive6 />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}

export default function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative size-full" data-name="Container">
      <Heading />
      <Container5 />
    </div>
  );
}