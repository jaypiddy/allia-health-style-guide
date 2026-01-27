function Text() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#1e2939] text-[18px] text-nowrap whitespace-pre">Oxygenated Mist</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex items-center opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#1e2939] text-[12px] text-nowrap uppercase whitespace-pre">Usage</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[#1e2939] text-[14px] w-[235px]">Primary page background.</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Text1 />
      <Paragraph />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex h-[20.5px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#1e2939] text-[18px] text-nowrap whitespace-pre">#F4F8FA</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[45px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[45px] items-start pb-0 pl-0 pr-[170.141px] pt-[20.5px] relative w-full">
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Container />
        <Container1 />
      </div>
    </div>
  );
}

function Colors() {
  return (
    <div className="bg-[#f4f8fa] content-stretch flex flex-col h-[878px] items-start justify-between p-[20px] relative shrink-0 w-[350px]" data-name="Colors">
      <Text />
      <Container2 />
    </div>
  );
}

function Colors1() {
  return (
    <div className="relative shrink-0" data-name="Colors">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#0f2537] text-[18px] text-nowrap tracking-[-0.45px] whitespace-pre">Laser Scalpel Teal</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex items-end opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#0f2537] text-[12px] text-nowrap uppercase whitespace-pre">Usage</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[17.5px] min-h-px min-w-px not-italic relative shrink-0 text-[#0f2537] text-[14px]">Primary buttons and icons</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Text3 />
      <Paragraph1 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[32px] relative shrink-0 w-[96.945px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[32px] relative w-[96.945px]">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#0f2537] text-[24px] text-nowrap top-0 tracking-[-0.6px] whitespace-pre">#21E6C1</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[49px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex h-[49px] items-end justify-between pb-0 pl-0 pr-[149.055px] pt-px relative w-full">
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Colors2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Colors">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#21e6c1] h-[654px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[654px] items-start justify-between p-[20px] relative w-full">
          <Colors1 />
          <Colors2 />
        </div>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#1e2939] text-[16px] text-nowrap whitespace-pre">Saline Solution</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex items-center opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#1e2939] text-[12px] text-nowrap uppercase whitespace-pre">Usage</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[17.5px] min-h-px min-w-px not-italic relative shrink-0 text-[#1e2939] text-[14px]">Secondary background to highlight specific sections.</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Text6 />
      <Paragraph2 />
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex h-[20.5px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#1e2939] text-[18px] text-nowrap whitespace-pre">#D0F5F0</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[45px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[45px] items-start pb-0 pl-0 pr-[170.141px] pt-[20.5px] relative w-full">
          <Text7 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Container6 />
        <Container7 />
      </div>
    </div>
  );
}

function Colors3() {
  return (
    <div className="basis-0 bg-[#d0f5f0] grow h-[224px] min-h-px min-w-px relative shrink-0" data-name="Colors">
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[224px] items-start justify-between p-[20px] relative w-full">
          <Text5 />
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Deep Scrub Navy</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[16px] opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[12px] text-nowrap text-white top-[0.5px] uppercase whitespace-pre">Usage</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[17.5px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-white">Hero section and footer</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[37.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Text9 />
      <Paragraph3 />
    </div>
  );
}

function Text10() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">#0F2537</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col h-[45px] items-start pb-0 pt-[17px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none" />
      <Text10 />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[98.5px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] h-[98.5px] items-start relative w-full">
        <Container9 />
        <Container10 />
      </div>
    </div>
  );
}

function Colors4() {
  return (
    <div className="basis-0 bg-[#0f2537] grow h-[224px] min-h-px min-w-px relative shrink-0" data-name="Colors">
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[224px] items-start justify-between p-[20px] relative w-full">
          <Text8 />
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Colors3 />
      <Colors4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[300px]">
      <Container5 />
      <Frame />
    </div>
  );
}

function Colors5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Colors">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#422016] text-[18px] tracking-[-0.45px]">Vitamin C Burst</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch flex items-center opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#422016] text-[12px] text-nowrap uppercase whitespace-pre">Usage</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[17.5px] min-h-px min-w-px not-italic relative shrink-0 text-[#422016] text-[14px]">Secondary buttons and icons</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Text11 />
      <Paragraph4 />
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[32px] relative shrink-0 w-[96.945px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[32px] relative w-[96.945px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[#422016] text-[18px] text-nowrap top-0 tracking-[-0.6px] whitespace-pre">#FF9F29</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[49px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex h-[49px] items-end justify-between pb-0 pl-0 pr-[149.055px] pt-px relative w-full">
          <Text12 />
        </div>
      </div>
    </div>
  );
}

function Colors6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Colors">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Container12 />
        <Container13 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="basis-0 bg-[#ff9f29] grow h-[878px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[878px] items-start justify-between p-[20px] relative w-full">
          <Colors5 />
          <Colors6 />
        </div>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#1e2939] text-[18px]">Epidermal Glow</p>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="content-stretch flex items-center opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#1e2939] text-[12px] text-nowrap uppercase whitespace-pre">Usage</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[17.5px] min-h-px min-w-px not-italic relative shrink-0 text-[#1e2939] text-[14px]">Secondary background to highlight specific sections</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Text14 />
      <Paragraph5 />
    </div>
  );
}

function Text15() {
  return (
    <div className="content-stretch flex h-[20.5px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#1e2939] text-[18px] text-nowrap whitespace-pre">#FFE8D1</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[45px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[45px] items-start pb-0 pl-0 pr-[170.141px] pt-[20.5px] relative w-full">
          <Text15 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Container15 />
        <Container16 />
      </div>
    </div>
  );
}

function Colors7() {
  return (
    <div className="basis-0 bg-[#ffe8d1] grow h-[878px] min-h-px min-w-px relative shrink-0" data-name="Colors">
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[878px] items-start justify-between p-[20px] relative w-full">
          <Text13 />
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Colors8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Colors">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#132a26] text-[18px] tracking-[-0.45px]">Bio-Lumen Lime</p>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="content-stretch flex items-center opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#132a26] text-[12px] text-nowrap uppercase whitespace-pre">Usage</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[17.5px] min-h-px min-w-px not-italic relative shrink-0 text-[#422016] text-[14px]">Secondary buttons and icons</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Text16 />
      <Paragraph6 />
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[32px] relative shrink-0 w-[96.945px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[32px] relative w-[96.945px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[#132a26] text-[18px] text-nowrap top-0 tracking-[-0.6px] whitespace-pre">#CDEF63</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[49px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex h-[49px] items-end justify-between pb-0 pl-0 pr-[149.055px] pt-px relative w-full">
          <Text17 />
        </div>
      </div>
    </div>
  );
}

function Colors9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Colors">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Container18 />
        <Container19 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="basis-0 bg-[#cdef63] grow h-[878px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[878px] items-start justify-between p-[20px] relative w-full">
          <Colors8 />
          <Colors9 />
        </div>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#1e2939] text-[18px]">Aloe Vera Soothe</p>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="content-stretch flex items-center opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#1e2939] text-[12px] text-nowrap uppercase whitespace-pre">Usage</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[17.5px] min-h-px min-w-px not-italic relative shrink-0 text-[#1e2939] text-[14px]">Secondary background to highlight specific sections</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Text19 />
      <Paragraph7 />
    </div>
  );
}

function Text20() {
  return (
    <div className="content-stretch flex h-[20.5px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#1e2939] text-[18px] text-nowrap whitespace-pre">#E8F5D6</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[45px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[45px] items-start pb-0 pl-0 pr-[170.141px] pt-[20.5px] relative w-full">
          <Text20 />
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Container21 />
        <Container22 />
      </div>
    </div>
  );
}

function Colors10() {
  return (
    <div className="basis-0 bg-[#e8f5d6] grow h-[878px] min-h-px min-w-px relative shrink-0" data-name="Colors">
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[878px] items-start justify-between p-[20px] relative w-full">
          <Text18 />
          <Container23 />
        </div>
      </div>
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative rounded-[32px] size-full">
      <Colors />
      <Frame1 />
      <Container14 />
      <Colors7 />
      <Container20 />
      <Colors10 />
    </div>
  );
}