import svgPaths from "./svg-qidn0wgfgz";

function Frame3() {
  return (
    <div className="absolute h-[54.527px] left-[131.35px] top-[20.41px] w-[344.01px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 344.01 54.5266">
        <g id="Frame 758">
          <path d={svgPaths.p23116d40} fill="var(--fill-0, black)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[17.433px] left-[265.36px] top-[83.14px] w-[76px]">
      <div className="absolute inset-[0_-176.96%_0_-176.99%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 345 17.4326">
          <g id="Frame 757">
            <path d={svgPaths.p36edd200} fill="var(--fill-0, black)" id="Union" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[117.779px] left-0 top-0 w-[117.787px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 117.787 117.779">
        <g id="Frame 756">
          <path d={svgPaths.p1c0e00} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p375e1500} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p33e85080} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p332b32f0} fill="var(--fill-0, black)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[117.779px] left-0 top-0 w-[475.363px]">
      <Frame3 />
      <Frame2 />
      <Frame1 />
    </div>
  );
}

export default function SymbolAndLogoBlack() {
  return (
    <div className="relative size-full" data-name="Symbol and Logo - Black 2">
      <Frame />
    </div>
  );
}