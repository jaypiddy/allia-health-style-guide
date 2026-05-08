function Text() {
  return (
    <div className="bg-[var(--color-primary)] relative rounded-full shrink-0 flex items-center justify-center w-8 h-8" data-name="Text">
      <p className="font-bold font-montreal font-bold leading-[20px] not-italic relative text-[var(--color-secondary)] text-[14px]  text-wrap break-words">01</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-museum font-normal leading-[36px] relative shrink-0 text-[#101828] text-[30px] text-wrap break-words">Color Palette</p>
      </div>
    </div>
  );
}

function Container() {
  return <div className="bg-[#e5e7eb] flex-[1_0_0] h-px min-h-px min-w-px" data-name="Container" />;
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[16px]  items-center relative shrink-0 w-full" data-name="Container">
      <Text />
      <Heading />
      <Container />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container1 />
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <p className="font-bold font-sans font-bold leading-[24px] not-italic relative text-[#1e2939] text-[18px]  text-wrap break-words">Oxygenated Mist</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex items-center opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="font-bold font-sans font-bold leading-[16px] not-italic relative text-[#1e2939] text-[12px] uppercase whitespace-normal w-full text-wrap break-words">Usage</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex items-center relative w-full shrink-0 w-full" data-name="Paragraph">
      <p className="font-medium font-sans font-medium leading-[17.5px] not-italic relative text-[#1e2939] text-[14px] w-full text-wrap break-words">Primary page background.</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Text2 />
      <Paragraph />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex  items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-medium font-sans font-medium leading-[28px] not-italic relative text-[#1e2939] text-[18px]  text-wrap break-words">#F4F8FA</p>
    </div>
  );
}

function Container3() {
  return (
    <div className=" relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="relative border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col  items-start pb-0 pl-0 pr-0 pt-[20.5px] relative w-full">
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Container2 />
        <Container3 />
      </div>
    </div>
  );
}

function Colors() {
  return (
    <div className="bg-[#f4f8fa] content-stretch flex flex-col  items-start justify-between p-[20px] relative shrink-0 w-full" data-name="Colors">
      <Text1 />
      <Container4 />
    </div>
  );
}

function Colors1() {
  return (
    <div className="relative shrink-0" data-name="Colors">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <p className="font-bold font-sans font-bold leading-[24px] not-italic relative text-[#0f2537] text-[18px] tracking-[-0.45px] whitespace-normal w-full text-wrap break-words">Laser Scalpel Teal</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex items-end opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="font-bold font-sans font-bold leading-[16px] not-italic relative text-[#0f2537] text-[12px] uppercase whitespace-normal w-full text-wrap break-words">Usage</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-medium font-sans font-medium grow leading-[17.5px] min-h-px min-w-px not-italic relative text-[#0f2537] text-[14px] text-wrap break-words">Primary buttons and icons</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Text4 />
      <Paragraph1 />
    </div>
  );
}

function Text5() {
  return (
    <div className=" relative shrink-0 w-[96.945px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid  relative w-[96.945px]">
        <p className="relative font-bold font-sans font-bold leading-[32px] not-italic text-[#0f2537] text-[24px] tracking-[-0.6px] whitespace-normal w-full text-wrap break-words">#21E6C1</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className=" relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="relative border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex  items-end justify-between pb-0 pl-0 pr-0 pt-px relative w-full">
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Colors2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Colors">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Container5 />
        <Container6 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#21e6c1]  relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col h-full items-start justify-between p-[20px] relative w-full">
          <Colors1 />
          <Colors2 />
        </div>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <p className="font-bold font-sans font-bold leading-[24px] not-italic relative text-[#1e2939] text-[16px]  text-wrap break-words">Saline Solution</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex items-center opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="font-bold font-sans font-bold leading-[16px] not-italic relative text-[#1e2939] text-[12px] uppercase whitespace-normal w-full text-wrap break-words">Usage</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-medium font-sans font-medium grow leading-[17.5px] min-h-px min-w-px not-italic relative text-[#1e2939] text-[14px] text-wrap break-words">Secondary background specific sections.</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Text7 />
      <Paragraph2 />
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
      <p className="font-medium font-sans font-medium leading-[28px] not-italic relative text-[#1e2939] text-[18px]  text-wrap break-words">#D0F5F0</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pt-[20px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="relative border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Text8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Container8 />
        <Container9 />
      </div>
    </div>
  );
}

function Colors3() {
  return (
    <div className="basis-0 bg-[#d0f5f0] grow h-[400px]  min-h-px min-w-px relative shrink-0" data-name="Colors">
      <div className="size-full">
        <div className="content-stretch flex flex-col h-full items-start justify-between p-[20px] relative w-full">
          <Text6 />
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full w-full">
        <p className="basis-0 font-bold font-sans font-bold grow leading-[24px] min-h-px min-w-px not-italic relative text-[16px] text-white text-wrap break-words">Deep Scrub Navy</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex items-center opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="font-bold font-sans font-bold leading-[16px] not-italic relative text-[12px] text-white uppercase whitespace-normal w-full text-wrap break-words">Usage</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-medium font-sans font-medium grow leading-[17.5px] min-h-px min-w-px not-italic relative text-[14px] text-white text-wrap break-words">Hero section and footer</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Text10 />
      <Paragraph3 />
    </div>
  );
}

function Text11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-medium font-sans font-medium leading-[28px] not-italic relative text-[18px] text-white whitespace-normal w-full text-wrap break-words">#0F2537</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pt-[21px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="relative border-[1px_0px_0px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none" />
      <Text11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Container11 />
        <Container12 />
      </div>
    </div>
  );
}

function Colors4() {
  return (
    <div className="basis-0 bg-[#0f2537] grow h-[400px]  min-h-px min-w-px relative shrink-0" data-name="Colors">
      <div className="size-full">
        <div className="content-stretch flex flex-col h-full items-start justify-between p-[20px] relative w-full">
          <Text9 />
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative w-full shrink-0 w-full">
      <Colors3 />
      <Colors4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container7 />
      <Frame />
    </div>
  );
}

function Colors5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Colors">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full w-full">
        <p className="basis-0 font-bold font-sans font-bold grow leading-[24px] min-h-px min-w-px not-italic relative text-[#422016] text-[18px] tracking-[-0.45px] text-wrap break-words">Vitamin C Burst</p>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex items-center opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="font-bold font-sans font-bold leading-[16px] not-italic relative text-[#422016] text-[12px] uppercase whitespace-normal w-full text-wrap break-words">Usage</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-medium font-sans font-medium grow leading-[17.5px] min-h-px min-w-px not-italic relative text-[#422016] text-[14px] text-wrap break-words">Secondary buttons and icons</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Text12 />
      <Paragraph4 />
    </div>
  );
}

function Text13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-medium font-sans font-medium leading-[28px] not-italic relative text-[#422016] text-[18px] tracking-[-0.6px] whitespace-normal w-full text-wrap break-words">#FF9F29</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex items-end justify-between pb-0 pt-[21px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="relative border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Text13 />
    </div>
  );
}

function Colors6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Colors">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Container14 />
        <Container15 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="basis-0 bg-[#ff9f29] grow h-[400px]  min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col h-full items-start justify-between p-[20px] relative w-full">
          <Colors5 />
          <Colors6 />
        </div>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full w-full">
        <p className="basis-0 font-bold font-sans font-bold grow leading-[24px] min-h-px min-w-px not-italic relative text-[#1e2939] text-[18px] text-wrap break-words">Epidermal Glow</p>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="content-stretch flex items-center opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="font-bold font-sans font-bold leading-[16px] not-italic relative text-[#1e2939] text-[12px] uppercase whitespace-normal w-full text-wrap break-words">Usage</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex items-center relative w-full shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-medium font-sans font-medium grow leading-[17.5px] min-h-px min-w-px not-italic relative text-[#1e2939] text-[14px] text-wrap break-words">Secondary background specific sections</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Text15 />
      <Paragraph5 />
    </div>
  );
}

function Text16() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-medium font-sans font-medium leading-[28px] not-italic relative text-[#1e2939] text-[18px]  text-wrap break-words">#FFE8D1</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pt-[20px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="relative border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Text16 />
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Container17 />
        <Container18 />
      </div>
    </div>
  );
}

function Colors7() {
  return (
    <div className="basis-0 bg-[#ffe8d1] grow h-[400px]  min-h-px min-w-px relative shrink-0" data-name="Colors">
      <div className="size-full">
        <div className="content-stretch flex flex-col h-full items-start justify-between p-[20px] relative w-full">
          <Text14 />
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function Colors8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Colors">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full w-full">
        <p className="basis-0 font-bold font-sans font-bold grow leading-[24px] min-h-px min-w-px not-italic relative text-[#132a26] text-[18px] tracking-[-0.45px] text-wrap break-words">Bio-Lumen Lime</p>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="content-stretch flex items-center opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="font-bold font-sans font-bold leading-[16px] not-italic relative text-[#132a26] text-[12px] uppercase whitespace-normal w-full text-wrap break-words">Usage</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-medium font-sans font-medium grow leading-[17.5px] min-h-px min-w-px not-italic relative text-[#422016] text-[14px] text-wrap break-words">Secondary buttons and icons</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Text17 />
      <Paragraph6 />
    </div>
  );
}

function Text18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-medium font-sans font-medium leading-[28px] not-italic relative text-[#132a26] text-[18px] tracking-[-0.6px] whitespace-normal w-full text-wrap break-words">#CDEF63</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex items-end justify-between pb-0 pt-[21px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="relative border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Text18 />
    </div>
  );
}

function Colors9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Colors">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Container20 />
        <Container21 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="basis-0 bg-[#cdef63] grow h-[400px]  min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col h-full items-start justify-between p-[20px] relative w-full">
          <Colors8 />
          <Colors9 />
        </div>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full w-full">
        <p className="basis-0 font-bold font-sans font-bold grow leading-[24px] min-h-px min-w-px not-italic relative text-[#1e2939] text-[18px] text-wrap break-words">Aloe Vera Soothe</p>
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="content-stretch flex items-center opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="font-bold font-sans font-bold leading-[16px] not-italic relative text-[#1e2939] text-[12px] uppercase whitespace-normal w-full text-wrap break-words">Usage</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex items-center relative w-full shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-medium font-sans font-medium grow leading-[17.5px] min-h-px min-w-px not-italic relative text-[#1e2939] text-[14px] text-wrap break-words">Secondary background specific sections</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Text20 />
      <Paragraph7 />
    </div>
  );
}

function Text21() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
      <p className="font-medium font-sans font-medium leading-[28px] not-italic relative text-[#1e2939] text-[18px]  text-wrap break-words">#E8F5D6</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="relative border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-0 pl-0 pr-0 pt-[20px] relative w-full">
          <Text21 />
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Container23 />
        <Container24 />
      </div>
    </div>
  );
}

function Colors10() {
  return (
    <div className="basis-0 bg-[#e8f5d6] grow h-[400px]  min-h-px min-w-px relative shrink-0" data-name="Colors">
      <div className="size-full">
        <div className="content-stretch flex flex-col h-full items-start justify-between p-[20px] relative w-full">
          <Text19 />
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-0 overflow-clip relative rounded-[32px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] w-full">
      <Colors className="h-full w-full" />
      <Frame1 className="h-full w-full col-span-1 md:col-span-2" />
      <Container16 className="h-full w-full" />
      <Colors7 className="h-full w-full" />
      <Container22 className="h-full w-full" />
      <Colors10 className="h-full w-full" />
    </div>
  );
}

function Interactive() {
  return (
    <div className="content-stretch flex items-center relative w-full shrink-0 w-full" data-name="Interactive">
      <p className="font-bold font-sans font-bold leading-[20px] not-italic relative text-[#99a1af] text-[14px] tracking-[0.7px] uppercase whitespace-normal w-full text-wrap break-words">Primary Colors</p>
    </div>
  );
}

function Text22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <p className="font-bold font-sans font-bold leading-[24px] not-italic relative text-[#1e2939] text-[18px]  text-wrap break-words">Oxygenated Mist</p>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="content-stretch flex items-center opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="font-bold font-sans font-bold leading-[16px] not-italic relative text-[#1e2939] text-[12px] uppercase whitespace-normal w-full text-wrap break-words">Usage</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="content-stretch flex items-center relative w-full shrink-0 w-full" data-name="Paragraph">
      <p className="font-medium font-sans font-medium leading-[17.5px] not-italic relative text-[#1e2939] text-[14px] w-full text-wrap break-words">Primary page background.</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Text23 />
      <Paragraph8 />
    </div>
  );
}

function Text24() {
  return (
    <div className=" relative shrink-0 w-[96.945px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid  relative w-[96.945px]">
        <p className="relative font-medium font-sans font-medium leading-[32px] not-italic text-[#1e2939] text-[24px] tracking-[-0.6px] whitespace-normal w-full text-wrap break-words">#F4F8FA</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className=" relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="relative border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex  items-end justify-between pb-0 pl-0 pr-0 pt-px relative w-full">
          <Text24 />
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 w-full grow flex flex-col justify-end" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full pt-[16px]">
        <Container26 />
        <Container27 />
      </div>
    </div>
  );
}

function Colors11() {
  return (
    <div className="basis-0 bg-[#f4f8fa] grow h-[400px]  min-h-px min-w-px relative shrink-0" data-name="Colors">
      <div className="size-full">
        <div className="content-stretch flex flex-col h-full items-start justify-between p-[20px] relative w-full">
          <Text22 />
          <Container28 />
        </div>
      </div>
    </div>
  );
}

function Colors12() {
  return (
    <div className="relative shrink-0" data-name="Colors">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <p className="font-bold font-sans font-bold leading-[24px] not-italic relative text-[#0f2537] text-[18px] tracking-[-0.45px] whitespace-normal w-full text-wrap break-words">Laser Scalpel Teal</p>
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="content-stretch flex items-end opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="font-bold font-sans font-bold leading-[16px] not-italic relative text-[#0f2537] text-[12px] uppercase whitespace-normal w-full text-wrap break-words">Usage</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-medium font-sans font-medium grow leading-[17.5px] min-h-px min-w-px not-italic relative text-[#0f2537] text-[14px] text-wrap break-words">Primary buttons and icons</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Text25 />
      <Paragraph9 />
    </div>
  );
}

function Text26() {
  return (
    <div className=" relative shrink-0 w-[96.945px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid  relative w-[96.945px]">
        <p className="relative font-medium font-sans font-medium leading-[32px] not-italic text-[#0f2537] text-[24px] tracking-[-0.6px] whitespace-normal w-full text-wrap break-words">#21E6C1</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className=" relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="relative border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex  items-end justify-between pb-0 pl-0 pr-0 pt-px relative w-full">
          <Text26 />
        </div>
      </div>
    </div>
  );
}

function Colors13() {
  return (
    <div className="relative shrink-0 w-full grow flex flex-col justify-end" data-name="Colors">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full pt-[16px]">
        <Container29 />
        <Container30 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="basis-0 bg-[#21e6c1] grow h-[400px]  min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col h-full items-start justify-between p-[20px] relative w-full">
          <Colors12 />
          <Colors13 />
        </div>
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <p className="font-bold font-sans font-bold leading-[24px] not-italic relative text-[#1e2939] text-[16px]  text-wrap break-words">Saline Solution</p>
      </div>
    </div>
  );
}

function Text28() {
  return (
    <div className="content-stretch flex items-center opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="font-bold font-sans font-bold leading-[16px] not-italic relative text-[#1e2939] text-[12px] uppercase whitespace-normal w-full text-wrap break-words">Usage</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-medium font-sans font-medium grow leading-[17.5px] min-h-px min-w-px not-italic relative text-[#1e2939] text-[14px] text-wrap break-words">Secondary background for specific sections.</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Text28 />
      <Paragraph10 />
    </div>
  );
}

function Text29() {
  return (
    <div className=" relative shrink-0 w-[96.945px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid  relative w-[96.945px]">
        <p className="relative font-medium font-sans font-medium leading-[32px] not-italic text-[#1e2939] text-[24px] tracking-[-0.6px] whitespace-normal w-full text-wrap break-words">#D0F5F0</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className=" relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="relative border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex  items-end justify-between pb-0 pl-0 pr-0 pt-px relative w-full">
          <Text29 />
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 w-full grow flex flex-col justify-end" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full pt-[16px]">
        <Container32 />
        <Container33 />
      </div>
    </div>
  );
}

function Colors14() {
  return (
    <div className="basis-0 bg-[#d0f5f0] grow h-[400px]  min-h-px min-w-px relative shrink-0" data-name="Colors">
      <div className="size-full">
        <div className="content-stretch flex flex-col h-full items-start justify-between p-[20px] relative w-full">
          <Text27 />
          <Container34 />
        </div>
      </div>
    </div>
  );
}

function Text30() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <p className="font-bold font-sans font-bold leading-[24px] not-italic relative text-[16px] text-white whitespace-normal w-full text-wrap break-words">Deep Scrub Navy</p>
      </div>
    </div>
  );
}

function Text31() {
  return (
    <div className="opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="relative font-bold font-sans font-bold leading-[16px] not-italic text-[12px] text-white uppercase whitespace-normal w-full text-wrap break-words">Usage</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="content-stretch flex  items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-medium font-sans font-medium grow leading-[17.5px] min-h-px min-w-px not-italic relative text-[14px] text-white text-wrap break-words">Hero section and footer</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Text31 />
      <Paragraph11 />
    </div>
  );
}

function Text32() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-medium font-sans font-medium leading-[28px] not-italic relative text-[18px] text-white whitespace-normal w-full text-wrap break-words">#0F2537</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col  items-start pb-0 pt-[17px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="relative border-[1px_0px_0px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none" />
      <Text32 />
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0 w-full grow flex flex-col justify-end" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full pt-[16px]">
        <Container35 />
        <Container36 />
      </div>
    </div>
  );
}

function Colors15() {
  return (
    <div className="basis-0 bg-[#0f2537] grow h-[400px]  min-h-px min-w-px relative shrink-0" data-name="Colors">
      <div className="size-full">
        <div className="content-stretch flex flex-col h-full items-start justify-between p-[20px] relative w-full">
          <Text30 />
          <Container37 />
        </div>
      </div>
    </div>
  );
}

function PrimaryColors() {
  return (
    <div
      className="grid gap-0 h-auto overflow-clip relative rounded-[32px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] w-full"
      style={{ gridTemplateColumns: 'repeat(8, minmax(0, 1fr))' }}
      data-name="Primary Colors"
    >
      <Colors11 />
      <Colors15 />
      <Container31 />
      <Colors14 />
      <Container46 />
      <Colors21 />
      <Container40 />
      <Colors18 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Interactive />
      <PrimaryColors />
    </div>
  );
}

function Interactive1() {
  return (
    <div className="content-stretch flex items-center relative w-full shrink-0 w-full" data-name="Interactive">
      <p className="font-bold font-sans font-bold leading-[20px] not-italic relative text-[#99a1af] text-[14px] tracking-[0.7px] uppercase whitespace-normal w-full text-wrap break-words">Secondary Colors</p>
    </div>
  );
}

function Colors16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Colors">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full w-full">
        <p className="basis-0 font-bold font-sans font-bold grow leading-[24px] min-h-px min-w-px not-italic relative text-[#422016] text-[18px] tracking-[-0.45px] text-wrap break-words">Vitamin C Burst</p>
      </div>
    </div>
  );
}

function Text33() {
  return (
    <div className="content-stretch flex items-center opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="font-bold font-sans font-bold leading-[16px] not-italic relative text-[#422016] text-[12px] uppercase whitespace-normal w-full text-wrap break-words">Usage</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-medium font-sans font-medium grow leading-[17.5px] min-h-px min-w-px not-italic relative text-[#422016] text-[14px] text-wrap break-words">Tertiary buttons, icons and horizontal rules</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Text33 />
      <Paragraph12 />
    </div>
  );
}

function Text34() {
  return (
    <div className=" relative shrink-0 w-[96.945px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid  relative w-[96.945px]">
        <p className="relative font-medium font-sans font-medium leading-[28px] not-italic text-[#422016] text-[18px] tracking-[-0.6px] whitespace-normal w-full text-wrap break-words">#FF9F29</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className=" relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="relative border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex  items-end justify-between pb-0 pl-0 pr-0 pt-px relative w-full">
          <Text34 />
        </div>
      </div>
    </div>
  );
}

function Colors17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Colors">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Container38 />
        <Container39 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="basis-0 bg-[#ff9f29] grow h-[400px] h-full min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col h-full items-start justify-between p-[20px] relative w-full">
          <Colors16 />
          <Colors17 />
        </div>
      </div>
    </div>
  );
}

function Text35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full w-full">
        <p className="basis-0 font-bold font-sans font-bold grow leading-[24px] min-h-px min-w-px not-italic relative text-[#1e2939] text-[18px] text-wrap break-words">Epidermal Glow</p>
      </div>
    </div>
  );
}

function Text36() {
  return (
    <div className="content-stretch flex items-center opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="font-bold font-sans font-bold leading-[16px] not-italic relative text-[#1e2939] text-[12px] uppercase whitespace-normal w-full text-wrap break-words">Usage</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="content-stretch flex items-center relative w-full shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-medium font-sans font-medium grow leading-[17.5px] min-h-px min-w-px not-italic relative text-[#1e2939] text-[14px] text-wrap break-words">Tertiary background for specific sections</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Text36 />
      <Paragraph13 />
    </div>
  );
}

function Text37() {
  return (
    <div className=" relative shrink-0 w-[96.945px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid  relative w-[96.945px]">
        <p className="relative font-medium font-sans font-medium leading-[32px] not-italic text-[#1e2939] text-[24px] tracking-[-0.6px] whitespace-normal w-full text-wrap break-words">#FFE8D1</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className=" relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="relative border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex  items-end justify-between pb-0 pl-0 pr-0 pt-px relative w-full">
          <Text37 />
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Container41 />
        <Container42 />
      </div>
    </div>
  );
}

function Colors18() {
  return (
    <div className="basis-0 bg-[#ffe8d1] grow h-[400px] h-full min-h-px min-w-px relative shrink-0" data-name="Colors">
      <div className="size-full">
        <div className="content-stretch flex flex-col h-full items-start justify-between p-[20px] relative w-full">
          <Text35 />
          <Container43 />
        </div>
      </div>
    </div>
  );
}

function Colors19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Colors">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full w-full">
        <p className="basis-0 font-bold font-sans font-bold grow leading-[24px] min-h-px min-w-px not-italic relative text-[#132a26] text-[18px] tracking-[-0.45px] text-wrap break-words">Bio-Lumen Lime</p>
      </div>
    </div>
  );
}

function Text38() {
  return (
    <div className="content-stretch flex items-center opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="font-bold font-sans font-bold leading-[16px] not-italic relative text-[#132a26] text-[12px] uppercase whitespace-normal w-full text-wrap break-words">Usage</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-medium font-sans font-medium grow leading-[17.5px] min-h-px min-w-px not-italic relative text-[#422016] text-[14px] text-wrap break-words">Secondary buttons and icons</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Text38 />
      <Paragraph14 />
    </div>
  );
}

function Text39() {
  return (
    <div className=" relative shrink-0 w-[96.945px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid  relative w-[96.945px]">
        <p className="relative font-medium font-sans font-medium leading-[28px] not-italic text-[#132a26] text-[18px] tracking-[-0.6px] whitespace-normal w-full text-wrap break-words">#CDEF63</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className=" relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="relative border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex  items-end justify-between pb-0 pl-0 pr-0 pt-px relative w-full">
          <Text39 />
        </div>
      </div>
    </div>
  );
}

function Colors20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Colors">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Container44 />
        <Container45 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="basis-0 bg-[#cdef63] grow h-[400px] h-full min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col h-full items-start justify-between p-[20px] relative w-full">
          <Colors19 />
          <Colors20 />
        </div>
      </div>
    </div>
  );
}

function Text40() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full w-full">
        <p className="basis-0 font-bold font-sans font-bold grow leading-[24px] min-h-px min-w-px not-italic relative text-[#1e2939] text-[18px] text-wrap break-words">Aloe Vera Soothe</p>
      </div>
    </div>
  );
}

function Text41() {
  return (
    <div className="content-stretch flex items-center opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="font-bold font-sans font-bold leading-[16px] not-italic relative text-[#1e2939] text-[12px] uppercase whitespace-normal w-full text-wrap break-words">Usage</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="content-stretch flex items-center relative w-full shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-medium font-sans font-medium grow leading-[17.5px] min-h-px min-w-px not-italic relative text-[#1e2939] text-[14px] text-wrap break-words">Secondary background for specific sections</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Text41 />
      <Paragraph15 />
    </div>
  );
}

function Text42() {
  return (
    <div className=" relative shrink-0 w-[96.945px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid  relative w-[96.945px]">
        <p className="relative font-medium font-sans font-medium leading-[32px] not-italic text-[#1e2939] text-[24px] tracking-[-0.6px] whitespace-normal w-full text-wrap break-words">#E8F5D6</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className=" relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="relative border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex  items-end justify-between pb-0 pl-0 pr-0 pt-px relative w-full">
          <Text42 />
        </div>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Container47 />
        <Container48 />
      </div>
    </div>
  );
}

function Colors21() {
  return (
    <div className="basis-0 bg-[#e8f5d6] grow h-[400px] h-full min-h-px min-w-px relative shrink-0" data-name="Colors">
      <div className="size-full">
        <div className="content-stretch flex flex-col h-full items-start justify-between p-[20px] relative w-full">
          <Text40 />
          <Container49 />
        </div>
      </div>
    </div>
  );
}

function SecondaryColors() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 h-auto overflow-clip relative rounded-[32px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] w-full" data-name="Secondary Colors">
      <Container40 className="h-full w-full" />
      <Colors18 className="h-full w-full" />
      <Container46 className="h-full w-full" />
      <Colors21 className="h-full w-full" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Interactive1 />
      <SecondaryColors />
    </div>
  );
}

function DetailedPrimaryColors() {
  return (
    <div className="flex flex-col gap-[16px] w-full pt-[32px]">
      <div className="flex flex-col gap-[8px]">
        <h3 className="font-bold font-sans font-bold text-[#99a1af] text-[14px] tracking-[0.7px] uppercase">Primary Colors</h3>
        <p className="font-medium font-sans text-[#1e2939] text-[14px]">This is the main colour that make up the majority of the colours used in the design system.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 overflow-clip rounded-[32px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] w-full">
        <Colors11 />
        <Container31 />
        <Colors14 />
        <Colors15 />
      </div>
    </div>
  );
}

function DetailedSecondaryColors() {
  return (
    <div className="flex flex-col gap-[16px] w-full pt-[32px]">
      <div className="flex flex-col gap-[8px]">
        <h3 className="font-bold font-sans font-bold text-[#99a1af] text-[14px] tracking-[0.7px] uppercase">Secondary Colors</h3>
        <p className="font-medium font-sans text-[#1e2939] text-[14px]">Along with primary colour, it's helpful to have a secondary colour to use in components such as icons. This secondary colour should be used sparingly or as accents, while the primary colour should take precedence.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-clip rounded-[32px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] w-full">
        <Container46 />
        <Colors21 />
      </div>
    </div>
  );
}

function DetailedTertiaryColors() {
  return (
    <div className="flex flex-col gap-[16px] w-full pt-[32px]">
      <div className="flex flex-col gap-[8px]">
        <h3 className="font-bold font-sans font-bold text-[#99a1af] text-[14px] tracking-[0.7px] uppercase">Tertiary Colors</h3>
        <p className="font-medium font-sans text-[#1e2939] text-[14px]">Along with primary and secondary colours, it's helpful to have a selection of complementary colours to use in components such as pills and labels. This tertiary colour should be used sparingly, while the primary colour should take precedence.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-clip rounded-[32px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] w-full">
        <Container40 />
        <Colors18 />
      </div>
    </div>
  );
}

export default function Colors22() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-start relative size-full" data-name="Colors">
      <Frame5 />
      <Frame4 />
      <div className="flex flex-col w-full gap-[32px]">
        <DetailedPrimaryColors />
        <DetailedSecondaryColors />
        <DetailedTertiaryColors />
      </div>
    </div>
  );
}