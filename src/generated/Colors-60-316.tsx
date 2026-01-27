function Text() {
  return (
    <div className="bg-[#21e6c1] relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[32px]">
        <p className="font-['Inter:Bold','PP_Neue_Montreal'] font-bold leading-[20px] not-italic relative shrink-0 text-[#0f2537] text-[14px] text-nowrap whitespace-pre">01</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-['Nunito:Bold','PP_Neue_Montreal'] font-bold leading-[36px] relative shrink-0 text-[#101828] text-[30px] text-nowrap whitespace-pre">Color Palette</p>
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

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container1 />
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#1e2939] text-[18px] text-nowrap whitespace-pre">Oxygenated Mist</p>
      </div>
    </div>
  );
}

function Text2() {
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
    <div className="content-stretch flex h-[20.5px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#1e2939] text-[18px] text-nowrap whitespace-pre">#F4F8FA</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[45px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[45px] items-start pb-0 pl-0 pr-[170.141px] pt-[20.5px] relative w-full">
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
    <div className="bg-[#f4f8fa] content-stretch flex flex-col h-[878px] items-start justify-between p-[20px] relative shrink-0 w-[350px]" data-name="Colors">
      <Text1 />
      <Container4 />
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

function Text4() {
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
    <div className="h-[32px] relative shrink-0 w-[96.945px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[32px] relative w-[96.945px]">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#0f2537] text-[24px] text-nowrap top-0 tracking-[-0.6px] whitespace-pre">#21E6C1</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[49px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex h-[49px] items-end justify-between pb-0 pl-0 pr-[149.055px] pt-px relative w-full">
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

function Text6() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#1e2939] text-[16px] text-nowrap whitespace-pre">Saline Solution</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex items-center opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#1e2939] text-[12px] text-nowrap uppercase whitespace-pre">Usage</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[17.5px] min-h-px min-w-px not-italic relative shrink-0 text-[#1e2939] text-[14px]">Secondary background specific sections.</p>
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
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#1e2939] text-[18px] text-nowrap whitespace-pre">#D0F5F0</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pt-[20px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
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
    <div className="basis-0 bg-[#d0f5f0] grow h-[224px] min-h-px min-w-px relative shrink-0" data-name="Colors">
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[224px] items-start justify-between p-[20px] relative w-full">
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
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white">Deep Scrub Navy</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex items-center opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white uppercase whitespace-pre">Usage</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[17.5px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-white">Hero section and footer</p>
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
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">#0F2537</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pt-[21px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none" />
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
    <div className="basis-0 bg-[#0f2537] grow h-[224px] min-h-px min-w-px relative shrink-0" data-name="Colors">
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[224px] items-start justify-between p-[20px] relative w-full">
          <Text9 />
          <Container13 />
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
      <Container7 />
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

function Text12() {
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
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#422016] text-[18px] text-nowrap tracking-[-0.6px] whitespace-pre">#FF9F29</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex items-end justify-between pb-0 pt-[21px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
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

function Text14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#1e2939] text-[18px]">Epidermal Glow</p>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="content-stretch flex items-center opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#1e2939] text-[12px] text-nowrap uppercase whitespace-pre">Usage</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[17.5px] min-h-px min-w-px not-italic relative shrink-0 text-[#1e2939] text-[14px]">Secondary background specific sections</p>
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
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#1e2939] text-[18px] text-nowrap whitespace-pre">#FFE8D1</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pt-[20px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
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
    <div className="basis-0 bg-[#ffe8d1] grow h-[878px] min-h-px min-w-px relative shrink-0" data-name="Colors">
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[878px] items-start justify-between p-[20px] relative w-full">
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
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#132a26] text-[18px] tracking-[-0.45px]">Bio-Lumen Lime</p>
      </div>
    </div>
  );
}

function Text17() {
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
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#132a26] text-[18px] text-nowrap tracking-[-0.6px] whitespace-pre">#CDEF63</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex items-end justify-between pb-0 pt-[21px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
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

function Text19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#1e2939] text-[18px]">Aloe Vera Soothe</p>
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="content-stretch flex items-center opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#1e2939] text-[12px] text-nowrap uppercase whitespace-pre">Usage</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[17.5px] min-h-px min-w-px not-italic relative shrink-0 text-[#1e2939] text-[14px]">Secondary background specific sections</p>
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
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#1e2939] text-[18px] text-nowrap whitespace-pre">#E8F5D6</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-0 pl-0 pr-[170.141px] pt-[20px] relative w-full">
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
    <div className="basis-0 bg-[#e8f5d6] grow h-[878px] min-h-px min-w-px relative shrink-0" data-name="Colors">
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[878px] items-start justify-between p-[20px] relative w-full">
          <Text19 />
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative rounded-[32px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] shrink-0 w-[1217px]">
      <Colors />
      <Frame1 />
      <Container16 />
      <Colors7 />
      <Container22 />
      <Colors10 />
    </div>
  );
}

function Interactive() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Interactive">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] text-nowrap tracking-[0.7px] uppercase whitespace-pre">Primary Colors</p>
    </div>
  );
}

function Text22() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#1e2939] text-[18px] text-nowrap whitespace-pre">Oxygenated Mist</p>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="content-stretch flex items-center opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#1e2939] text-[12px] text-nowrap uppercase whitespace-pre">Usage</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[#1e2939] text-[14px] w-[235px]">Primary page background.</p>
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
    <div className="content-stretch flex h-[20.5px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#1e2939] text-[18px] text-nowrap whitespace-pre">#F4F8FA</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[45px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[45px] items-start pb-0 pl-0 pr-[170.141px] pt-[20.5px] relative w-full">
          <Text24 />
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Container26 />
        <Container27 />
      </div>
    </div>
  );
}

function Colors11() {
  return (
    <div className="basis-0 bg-[#f4f8fa] grow h-[400px] min-h-px min-w-px relative shrink-0" data-name="Colors">
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[400px] items-start justify-between p-[20px] relative w-full">
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
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#0f2537] text-[18px] text-nowrap tracking-[-0.45px] whitespace-pre">Laser Scalpel Teal</p>
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="content-stretch flex items-end opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#0f2537] text-[12px] text-nowrap uppercase whitespace-pre">Usage</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[17.5px] min-h-px min-w-px not-italic relative shrink-0 text-[#0f2537] text-[14px]">Primary buttons and icons</p>
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
    <div className="h-[32px] relative shrink-0 w-[96.945px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[32px] relative w-[96.945px]">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#0f2537] text-[24px] text-nowrap top-0 tracking-[-0.6px] whitespace-pre">#21E6C1</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[49px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex h-[49px] items-end justify-between pb-0 pl-0 pr-[149.055px] pt-px relative w-full">
          <Text26 />
        </div>
      </div>
    </div>
  );
}

function Colors13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Colors">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Container29 />
        <Container30 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="basis-0 bg-[#21e6c1] grow h-[400px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[400px] items-start justify-between p-[20px] relative w-full">
          <Colors12 />
          <Colors13 />
        </div>
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#1e2939] text-[16px] text-nowrap whitespace-pre">Saline Solution</p>
      </div>
    </div>
  );
}

function Text28() {
  return (
    <div className="content-stretch flex items-center opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#1e2939] text-[12px] text-nowrap uppercase whitespace-pre">Usage</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[17.5px] min-h-px min-w-px not-italic relative shrink-0 text-[#1e2939] text-[14px]">Secondary background specific sections.</p>
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
    <div className="content-stretch flex h-[20.5px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#1e2939] text-[18px] text-nowrap whitespace-pre">#D0F5F0</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[45px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[45px] items-start pb-0 pl-0 pr-[170.141px] pt-[20.5px] relative w-full">
          <Text29 />
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Container32 />
        <Container33 />
      </div>
    </div>
  );
}

function Colors14() {
  return (
    <div className="basis-0 bg-[#d0f5f0] grow h-[400px] min-h-px min-w-px relative shrink-0" data-name="Colors">
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[400px] items-start justify-between p-[20px] relative w-full">
          <Text27 />
          <Container34 />
        </div>
      </div>
    </div>
  );
}

function Text30() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Deep Scrub Navy</p>
      </div>
    </div>
  );
}

function Text31() {
  return (
    <div className="h-[16px] opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[12px] text-nowrap text-white top-[0.5px] uppercase whitespace-pre">Usage</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[17.5px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-white">Hero section and footer</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[37.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Text31 />
      <Paragraph11 />
    </div>
  );
}

function Text32() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">#0F2537</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col h-[45px] items-start pb-0 pt-[17px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none" />
      <Text32 />
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[98.5px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] h-[98.5px] items-start relative w-full">
        <Container35 />
        <Container36 />
      </div>
    </div>
  );
}

function Colors15() {
  return (
    <div className="basis-0 bg-[#0f2537] grow h-[400px] min-h-px min-w-px relative shrink-0" data-name="Colors">
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[400px] items-start justify-between p-[20px] relative w-full">
          <Text30 />
          <Container37 />
        </div>
      </div>
    </div>
  );
}

function PrimaryColors() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative rounded-[32px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Primary Colors">
      <Colors11 />
      <Container31 />
      <Colors14 />
      <Colors15 />
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
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Interactive">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] text-nowrap tracking-[0.7px] uppercase whitespace-pre">Secondary Colors</p>
    </div>
  );
}

function Colors16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Colors">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#422016] text-[18px] tracking-[-0.45px]">Vitamin C Burst</p>
      </div>
    </div>
  );
}

function Text33() {
  return (
    <div className="content-stretch flex items-center opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#422016] text-[12px] text-nowrap uppercase whitespace-pre">Usage</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[17.5px] min-h-px min-w-px not-italic relative shrink-0 text-[#422016] text-[14px]">Secondary buttons and icons</p>
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
    <div className="h-[32px] relative shrink-0 w-[96.945px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[32px] relative w-[96.945px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[#422016] text-[18px] text-nowrap top-0 tracking-[-0.6px] whitespace-pre">#FF9F29</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[49px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex h-[49px] items-end justify-between pb-0 pl-0 pr-[149.055px] pt-px relative w-full">
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
    <div className="basis-0 bg-[#ff9f29] grow h-full min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start justify-between p-[20px] relative size-full">
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
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#1e2939] text-[18px]">Epidermal Glow</p>
      </div>
    </div>
  );
}

function Text36() {
  return (
    <div className="content-stretch flex items-center opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#1e2939] text-[12px] text-nowrap uppercase whitespace-pre">Usage</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[17.5px] min-h-px min-w-px not-italic relative shrink-0 text-[#1e2939] text-[14px]">Secondary background specific sections</p>
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
    <div className="content-stretch flex h-[20.5px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#1e2939] text-[18px] text-nowrap whitespace-pre">#FFE8D1</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[45px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[45px] items-start pb-0 pl-0 pr-[170.141px] pt-[20.5px] relative w-full">
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
    <div className="basis-0 bg-[#ffe8d1] grow h-full min-h-px min-w-px relative shrink-0" data-name="Colors">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start justify-between p-[20px] relative size-full">
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
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#132a26] text-[18px] tracking-[-0.45px]">Bio-Lumen Lime</p>
      </div>
    </div>
  );
}

function Text38() {
  return (
    <div className="content-stretch flex items-center opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#132a26] text-[12px] text-nowrap uppercase whitespace-pre">Usage</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[17.5px] min-h-px min-w-px not-italic relative shrink-0 text-[#422016] text-[14px]">Secondary buttons and icons</p>
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
    <div className="h-[32px] relative shrink-0 w-[96.945px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[32px] relative w-[96.945px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[#132a26] text-[18px] text-nowrap top-0 tracking-[-0.6px] whitespace-pre">#CDEF63</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[49px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex h-[49px] items-end justify-between pb-0 pl-0 pr-[149.055px] pt-px relative w-full">
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
    <div className="basis-0 bg-[#cdef63] grow h-full min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start justify-between p-[20px] relative size-full">
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
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#1e2939] text-[18px]">Aloe Vera Soothe</p>
      </div>
    </div>
  );
}

function Text41() {
  return (
    <div className="content-stretch flex items-center opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#1e2939] text-[12px] text-nowrap uppercase whitespace-pre">Usage</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[17.5px] min-h-px min-w-px not-italic relative shrink-0 text-[#1e2939] text-[14px]">Secondary background specific sections</p>
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
    <div className="content-stretch flex h-[20.5px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#1e2939] text-[18px] text-nowrap whitespace-pre">#E8F5D6</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[45px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[45px] items-start pb-0 pl-0 pr-[170.141px] pt-[20.5px] relative w-full">
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
    <div className="basis-0 bg-[#e8f5d6] grow h-full min-h-px min-w-px relative shrink-0" data-name="Colors">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start justify-between p-[20px] relative size-full">
          <Text40 />
          <Container49 />
        </div>
      </div>
    </div>
  );
}

function SecondaryColors() {
  return (
    <div className="content-stretch flex h-[400px] items-center overflow-clip relative rounded-[32px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Secondary Colors">
      <Container40 />
      <Colors18 />
      <Container46 />
      <Colors21 />
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

export default function Colors22() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-start relative size-full" data-name="Colors">
      <Frame5 />
      <Frame2 />
      <Frame4 />
      <Frame3 />
    </div>
  );
}