import svgPaths from "./svg-asud82duhu";

function Frame1() {
  return (
    <div className="absolute h-[48.36px] left-[75.67px] top-[9.53px] w-[130.02px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 130.02 48.3604">
        <g id="Frame 746">
          <path d={svgPaths.p2052c200} fill="var(--fill-0, black)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[67.407px] left-0 top-0 w-[67.412px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67.4118 67.4086">
        <g id="Frame 745">
          <path d={svgPaths.p12373100} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.pe3f8700} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p2914f040} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p36c0fa10} fill="var(--fill-0, black)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[67.407px] left-[-0.01px] top-0 w-[205.686px]">
      <Frame1 />
      <Frame />
    </div>
  );
}

export default function SymbolAndAhgMonogramBlack() {
  return (
    <div className="relative size-full" data-name="Symbol and AHG Monogram - Black 3">
      <Frame2 />
    </div>
  );
}