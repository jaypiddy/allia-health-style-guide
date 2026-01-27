function GradientSystem() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[1.67772e+07px] shrink-0" data-name="GradientSystem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] py-[4px] relative">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#0f2537] text-[12px] text-nowrap tracking-[0.6px] uppercase whitespace-pre">Secondary Gradient</p>
      </div>
    </div>
  );
}

export default function Colors() {
  return (
    <div className="relative rounded-[32px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)] size-full" data-name="Colors">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start justify-between pb-0 pl-[20px] pr-0 pt-[20px] relative size-full">
          <GradientSystem />
        </div>
      </div>
    </div>
  );
}