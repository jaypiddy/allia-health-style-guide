import svgPaths from "./svg-dk3tskomy6";

function Text() {
  return (
    <div className="bg-[#21e6c1] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#0f2537] text-[14px]">01</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="css-ew64yg font-['PP_Museum',sans-serif] font-normal leading-[36px] relative shrink-0 text-[#101828] text-[30px]">Color Palette</p>
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

function Frame3() {
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
        <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[24px] min-h-px min-w-px not-italic relative text-[#1e2939] text-[18px]">Oxygenated Mist</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex items-center opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#1e2939] text-[12px] uppercase">Usage</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] min-h-px min-w-px not-italic relative text-[#1e2939] text-[14px]">Primary page background.</p>
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
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#1e2939] text-[18px]">#F4F8FA</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[45px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pr-[170.141px] pt-[20.5px] relative size-full">
        <Text3 />
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
    <div className="bg-[#f4f8fa] flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Colors">
      <div className="content-stretch flex flex-col items-start justify-between p-[20px] relative size-full">
        <Text1 />
        <Container4 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[24px] min-h-px min-w-px not-italic relative text-[18px] text-white">Deep Scrub Navy</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex items-center opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-white uppercase">Usage</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] min-h-px min-w-px not-italic relative text-[14px] text-white">Hero section and footer</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Text5 />
      <Paragraph1 />
    </div>
  );
}

function Text6() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[18px] text-white">#0F2537</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[21px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <Text6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Container5 />
        <Container6 />
      </div>
    </div>
  );
}

function Colors1() {
  return (
    <div className="bg-[#0f2537] flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Colors">
      <div className="content-stretch flex flex-col items-start justify-between p-[20px] relative size-full">
        <Text4 />
        <Container7 />
      </div>
    </div>
  );
}

function Colors2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Colors">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[24px] min-h-px min-w-px not-italic relative text-[#0f2537] text-[18px] tracking-[-0.45px]">Laser Scalpel Teal</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex items-end opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#0f2537] text-[12px] uppercase">Usage</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] min-h-px min-w-px not-italic relative text-[#0f2537] text-[14px]">Primary buttons and icons</p>
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
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#0f2537] text-[18px] tracking-[-0.6px]">#21E6C1</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[49px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between pr-[149.055px] pt-px relative size-full">
          <Text8 />
        </div>
      </div>
    </div>
  );
}

function Colors3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Colors">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Container8 />
        <Container9 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#21e6c1] flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-col items-start justify-between p-[20px] relative size-full">
        <Colors2 />
        <Colors3 />
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[24px] min-h-px min-w-px not-italic relative text-[#1e2939] text-[18px]">Saline Solution</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex items-center opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#1e2939] text-[12px] uppercase">Usage</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] min-h-px min-w-px not-italic relative text-[#1e2939] text-[14px]">Secondary background for specific sections.</p>
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
    <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#1e2939] text-[18px]">#D0F5F0</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t inset-0 pointer-events-none" />
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
    <div className="bg-[#d0f5f0] flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Colors">
      <div className="content-stretch flex flex-col items-start justify-between p-[20px] relative size-full">
        <Text9 />
        <Container13 />
      </div>
    </div>
  );
}

function Colors5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Colors">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[24px] min-h-px min-w-px not-italic relative text-[#132a26] text-[18px] tracking-[-0.45px]">Bio-Lumen Lime</p>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex items-center opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#132a26] text-[12px] uppercase">Usage</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] min-h-px min-w-px not-italic relative text-[#422016] text-[14px]">Secondary buttons and icons</p>
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
        <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#132a26] text-[18px] tracking-[-0.6px]">#CDEF63</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex items-end justify-between pt-[21px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t inset-0 pointer-events-none" />
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
    <div className="bg-[#cdef63] flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-col items-start justify-between p-[20px] relative size-full">
        <Colors5 />
        <Colors6 />
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[24px] min-h-px min-w-px not-italic relative text-[#1e2939] text-[18px]">Aloe Vera Soothe</p>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="content-stretch flex items-center opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#1e2939] text-[12px] uppercase">Usage</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] min-h-px min-w-px not-italic relative text-[#1e2939] text-[14px]">{`Secondary background for  specific sections`}</p>
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
    <div className="content-stretch flex items-start relative shrink-0" data-name="Text">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#1e2939] text-[18px]">#E8F5D6</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pr-[170.141px] pt-[20px] relative w-full">
        <Text16 />
      </div>
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
    <div className="bg-[#e8f5d6] flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Colors">
      <div className="content-stretch flex flex-col items-start justify-between p-[20px] relative size-full">
        <Text14 />
        <Container19 />
      </div>
    </div>
  );
}

function Colors8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Colors">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[24px] min-h-px min-w-px not-italic relative text-[#422016] text-[18px] tracking-[-0.45px]">Vitamin C Burst</p>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="content-stretch flex items-center opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#422016] text-[12px] uppercase">Usage</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] min-h-px min-w-px not-italic relative text-[#422016] text-[14px]">Tertiary buttons, icons and horizontal rules</p>
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
        <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#422016] text-[18px] tracking-[-0.6px]">#FF9F29</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex items-end justify-between pt-[21px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t inset-0 pointer-events-none" />
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
    <div className="bg-[#ff9f29] flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-col items-start justify-between p-[20px] relative size-full">
        <Colors8 />
        <Colors9 />
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[24px] min-h-px min-w-px not-italic relative text-[#1e2939] text-[18px]">Epidermal Glow</p>
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="content-stretch flex items-center opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#1e2939] text-[12px] uppercase">Usage</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] min-h-px min-w-px not-italic relative text-[#1e2939] text-[14px]">{`Tertiary background for  specific sections`}</p>
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
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#1e2939] text-[18px]">#FFE8D1</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Text21 />
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
    <div className="bg-[#ffe8d1] flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Colors">
      <div className="content-stretch flex flex-col items-start justify-between p-[20px] relative size-full">
        <Text19 />
        <Container25 />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex h-[500px] items-center overflow-clip relative rounded-[32px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] shrink-0 w-[1217px]">
      <Colors />
      <Colors1 />
      <Container10 />
      <Colors4 />
      <Container16 />
      <Colors7 />
      <Container22 />
      <Colors10 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-start relative shrink-0 w-full">
      <Frame3 />
      <Frame />
    </div>
  );
}

function Interactive() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center leading-[20px] not-italic relative shrink-0 text-[14px] w-full" data-name="Interactive">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#99a1af] tracking-[0.7px] uppercase">Primary Colors</p>
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium min-w-full relative shrink-0 text-[#0f2537] w-[min-content]">This is the main colour that make up the majority of the colours used in the design system.</p>
    </div>
  );
}

function Text22() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#1e2939] text-[18px]">Oxygenated Mist</p>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="content-stretch flex items-center opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#1e2939] text-[12px] uppercase">Usage</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] not-italic relative shrink-0 text-[#1e2939] text-[14px] w-[235px]">Primary page background.</p>
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
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#1e2939] text-[18px]">#F4F8FA</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pr-[170.141px] pt-[20.5px] relative w-full">
        <Text24 />
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
    <div className="bg-[#f4f8fa] flex-[1_0_0] h-[400px] min-h-px min-w-px relative" data-name="Colors">
      <div className="content-stretch flex flex-col items-start justify-between p-[20px] relative size-full">
        <Text22 />
        <Container28 />
      </div>
    </div>
  );
}

function Colors12() {
  return (
    <div className="relative shrink-0" data-name="Colors">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#0f2537] text-[18px] tracking-[-0.45px]">Laser Scalpel Teal</p>
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="content-stretch flex items-end opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#0f2537] text-[12px] uppercase">Usage</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] min-h-px min-w-px not-italic relative text-[#0f2537] text-[14px]">Primary buttons and icons</p>
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
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[#0f2537] text-[18px] top-0 tracking-[-0.6px]">#21E6C1</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[49px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between pr-[149.055px] pt-px relative size-full">
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
    <div className="bg-[#21e6c1] flex-[1_0_0] h-[400px] min-h-px min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-col items-start justify-between p-[20px] relative size-full">
        <Colors12 />
        <Colors13 />
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#1e2939] text-[18px]">Saline Solution</p>
      </div>
    </div>
  );
}

function Text28() {
  return (
    <div className="content-stretch flex items-center opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#1e2939] text-[12px] uppercase">Usage</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] min-h-px min-w-px not-italic relative text-[#1e2939] text-[14px]">Secondary background specific sections.</p>
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
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#1e2939] text-[18px]">#D0F5F0</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pr-[170.141px] pt-[20.5px] relative w-full">
        <Text29 />
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
    <div className="bg-[#d0f5f0] flex-[1_0_0] h-[400px] min-h-px min-w-px relative" data-name="Colors">
      <div className="content-stretch flex flex-col items-start justify-between p-[20px] relative size-full">
        <Text27 />
        <Container34 />
      </div>
    </div>
  );
}

function Text30() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-white">Deep Scrub Navy</p>
      </div>
    </div>
  );
}

function Text31() {
  return (
    <div className="h-[16px] opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[12px] text-white top-[0.5px] uppercase">Usage</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="content-stretch flex h-[17.5px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] min-h-px min-w-px not-italic relative text-[14px] text-white">Hero section and footer</p>
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
        <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[18px] text-white">#0F2537</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[17px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <Text32 />
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[98.5px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Container35 />
        <Container36 />
      </div>
    </div>
  );
}

function Colors15() {
  return (
    <div className="bg-[#0f2537] flex-[1_0_0] h-[400px] min-h-px min-w-px relative" data-name="Colors">
      <div className="content-stretch flex flex-col items-start justify-between p-[20px] relative size-full">
        <Text30 />
        <Container37 />
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

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Interactive />
      <PrimaryColors />
    </div>
  );
}

function Interactive1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center leading-[20px] not-italic relative shrink-0 text-[14px] w-full" data-name="Interactive">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#99a1af] tracking-[0.7px] uppercase">Secondary Colors</p>
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium min-w-full relative shrink-0 text-[#0f2537] w-[min-content]">{`Along with primary colour, it's helpful to have a secondary colour to use in components such as icons. This secondary colour should be used sparingly or as accents, while the primary colour should take precedence.`}</p>
    </div>
  );
}

function Colors16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Colors">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[24px] min-h-px min-w-px not-italic relative text-[#132a26] text-[18px] tracking-[-0.45px]">Bio-Lumen Lime</p>
      </div>
    </div>
  );
}

function Text33() {
  return (
    <div className="content-stretch flex items-center opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#132a26] text-[12px] uppercase">Usage</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] min-h-px min-w-px not-italic relative text-[#422016] text-[14px]">Secondary buttons and icons</p>
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
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#132a26] text-[18px] tracking-[-0.6px]">#CDEF63</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[49px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between pr-[149.055px] pt-px relative size-full">
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
    <div className="bg-[#cdef63] flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-col items-start justify-between p-[20px] relative size-full">
        <Colors16 />
        <Colors17 />
      </div>
    </div>
  );
}

function Text35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[24px] min-h-px min-w-px not-italic relative text-[#1e2939] text-[18px]">Aloe Vera Soothe</p>
      </div>
    </div>
  );
}

function Text36() {
  return (
    <div className="content-stretch flex items-center opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#1e2939] text-[12px] uppercase">Usage</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] min-h-px min-w-px not-italic relative text-[#1e2939] text-[14px]">Secondary background specific sections</p>
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
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#1e2939] text-[18px]">#E8F5D6</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pr-[170.141px] pt-[20.5px] relative w-full">
        <Text37 />
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
    <div className="bg-[#e8f5d6] flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Colors">
      <div className="content-stretch flex flex-col items-start justify-between p-[20px] relative size-full">
        <Text35 />
        <Container43 />
      </div>
    </div>
  );
}

function SecondaryColors() {
  return (
    <div className="content-stretch flex h-[300px] items-center overflow-clip relative rounded-[32px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Secondary Colors">
      <Container40 />
      <Colors18 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Interactive1 />
      <SecondaryColors />
    </div>
  );
}

function Interactive2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center leading-[20px] not-italic relative shrink-0 text-[14px] w-full" data-name="Interactive">
      <p className="css-ew64yg font-['Inter:Bold','PP_Neue_Montreal'] font-bold relative shrink-0 text-[#99a1af] tracking-[0.7px] uppercase">Tertiary Colors</p>
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium min-w-full relative shrink-0 text-[#0f2537] w-[min-content]">{`Along with primary and secondary colours, it's helpful to have a selection of complementary colours to use in components such as pills and labels. This tertiary colour should be used sparingly, while the primary colour should take precedence.`}</p>
    </div>
  );
}

function Colors19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Colors">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[24px] min-h-px min-w-px not-italic relative text-[#422016] text-[18px] tracking-[-0.45px]">Vitamin C Burst</p>
      </div>
    </div>
  );
}

function Text38() {
  return (
    <div className="content-stretch flex items-center opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#422016] text-[12px] uppercase">Usage</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] min-h-px min-w-px not-italic relative text-[#422016] text-[14px]">Tertiary buttons, icons and horizontal rules</p>
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
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#422016] text-[18px] tracking-[-0.6px]">#FF9F29</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[49px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between pr-[149.055px] pt-px relative size-full">
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
    <div className="bg-[#ff9f29] flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-col items-start justify-between p-[20px] relative size-full">
        <Colors19 />
        <Colors20 />
      </div>
    </div>
  );
}

function Text40() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[24px] min-h-px min-w-px not-italic relative text-[#1e2939] text-[18px]">Epidermal Glow</p>
      </div>
    </div>
  );
}

function Text41() {
  return (
    <div className="content-stretch flex items-center opacity-60 relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#1e2939] text-[12px] uppercase">Usage</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] min-h-px min-w-px not-italic relative text-[#1e2939] text-[14px]">Tertiary background for specific sections</p>
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
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#1e2939] text-[18px]">#FFE8D1</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pr-[170.141px] pt-[20.5px] relative w-full">
        <Text42 />
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
    <div className="bg-[#ffe8d1] flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Colors">
      <div className="content-stretch flex flex-col items-start justify-between p-[20px] relative size-full">
        <Text40 />
        <Container49 />
      </div>
    </div>
  );
}

function SecondaryColors1() {
  return (
    <div className="content-stretch flex h-[200px] items-center overflow-clip relative rounded-[32px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Secondary Colors">
      <Container46 />
      <Colors21 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Interactive2 />
      <SecondaryColors1 />
    </div>
  );
}

function Interactive3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Interactive">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] tracking-[0.7px] uppercase">Colour Proportion across the Allia Health Website (60-30-10 Rule)</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[407.5px]">
      <div className="bg-[#f4f8fa] flex-[1_0_0] min-h-px min-w-px w-full" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative">
      <div className="bg-[#d0f5f0] flex-[1_0_0] min-h-px min-w-px w-full" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative">
      <div className="bg-[#e8f5d6] flex-[1_0_0] h-full min-h-px min-w-px" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative">
      <div className="bg-[#ffe8d1] flex-[1_0_0] h-full min-h-px min-w-px" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0 w-[407.5px]">
      <Frame7 />
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative">
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[150px]">
      <div className="bg-[#21e6c1] flex-[1_0_0] min-h-px min-w-px w-full" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[150px]">
      <div className="bg-[#0f2537] flex-[1_0_0] min-h-px min-w-px w-full" />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0">
      <Frame5 />
      <Frame8 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0 w-[80px]">
      <div className="bg-[#cdef63] flex-[1_0_0] h-full min-h-px min-w-px" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0">
      <div className="bg-[#ff9f29] h-full shrink-0 w-[20px]" />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0">
      <Frame6 />
      <Frame11 />
    </div>
  );
}

function Component603010ColourRule() {
  return (
    <div className="content-stretch flex h-[407.5px] items-center overflow-clip relative rounded-[32px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] shrink-0 w-[1215px]" data-name="60-30-10 Colour Rule">
      <Frame17 />
      <Frame14 />
      <Frame15 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[red] content-stretch flex flex-col items-center justify-center p-[4px] relative rounded-[2px] shrink-0">
      <p className="css-ew64yg font-['Monaco:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-center text-white uppercase">60%</p>
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[815px]" data-name="60%">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-2.89px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 815 5.7735">
            <path d={svgPaths.pad52100} fill="var(--stroke-0, #FF0000)" id="Arrow 3" />
          </svg>
        </div>
      </div>
      <Frame19 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[red] content-stretch flex flex-col items-center justify-center p-[4px] relative rounded-[2px] shrink-0">
      <p className="css-ew64yg font-['Monaco:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-center text-white uppercase">30%</p>
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[300px]" data-name="30%">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-2.89px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 300 5.7735">
            <path d={svgPaths.p3e554700} fill="var(--stroke-0, #FF0000)" id="Arrow 3" />
          </svg>
        </div>
      </div>
      <Frame20 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[red] content-stretch flex flex-col items-center justify-center p-[4px] relative rounded-[2px] shrink-0">
      <p className="css-ew64yg font-['Monaco:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[12px] text-center text-white uppercase">10%</p>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[100px]" data-name="10%">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-2.89px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 5.7735">
            <path d={svgPaths.p1b3a4b00} fill="var(--stroke-0, #FF0000)" id="Arrow 3" />
          </svg>
        </div>
      </div>
      <Frame21 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Component2 />
      <Component1 />
      <Component />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Interactive3 />
      <Component603010ColourRule />
      <Frame18 />
    </div>
  );
}

export default function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-start relative size-full">
      <Frame22 />
      <Frame2 />
      <Frame1 />
      <Frame4 />
      <Frame16 />
    </div>
  );
}