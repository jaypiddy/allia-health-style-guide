import svgPaths from "./svg-40mw2103vt";

function Frame3() {
  return (
    <div className="absolute h-[54.527px] left-[131.05px] top-[20.41px] w-[344.01px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 344.01 54.5266">
        <g id="Frame 754">
          <path d={svgPaths.p23116d40} fill="var(--fill-0, #0F2537)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[17.433px] left-[131.05px] top-[83.14px] w-[344px]">
      <div className="absolute inset-[0_-0.15%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 345 17.4326">
          <g id="Frame 753">
            <path d={svgPaths.p1a6ad600} fill="var(--fill-0, #0F2537)" id="Union" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[118.164px] left-0 top-0 w-[117.003px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 117.004 118.164">
        <g id="Frame 752">
          <path d={svgPaths.p31aac200} fill="url(#paint0_radial_104_1456)" id="Vector" />
          <path d={svgPaths.p176ffa00} fill="url(#paint1_radial_104_1456)" id="Vector_2" />
          <path d={svgPaths.p3f951880} fill="url(#paint2_radial_104_1456)" id="Vector_3" />
          <path d={svgPaths.p38fbb100} fill="url(#paint3_radial_104_1456)" id="Vector_4" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-57.6159 58.1083 -140.675 -182.134 131.126 -14.2453)" gradientUnits="userSpaceOnUse" id="paint0_radial_104_1456" r="1">
            <stop offset="0.65" stopColor="#21E6C1" />
            <stop offset="1" stopColor="#CDEF63" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-57.6159 -58.1083 -140.675 182.134 131.126 132.409)" gradientUnits="userSpaceOnUse" id="paint1_radial_104_1456" r="1">
            <stop offset="0.65" stopColor="#21E6C1" />
            <stop offset="1" stopColor="#CDEF63" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(57.6159 58.1083 140.675 -182.134 -14.1224 -14.2453)" gradientUnits="userSpaceOnUse" id="paint2_radial_104_1456" r="1">
            <stop offset="0.65" stopColor="#21E6C1" />
            <stop offset="1" stopColor="#CDEF63" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(57.6159 -58.1083 140.675 182.134 -14.1224 132.409)" gradientUnits="userSpaceOnUse" id="paint3_radial_104_1456" r="1">
            <stop offset="0.65" stopColor="#21E6C1" />
            <stop offset="1" stopColor="#CDEF63" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[118.164px] left-0 top-0 w-[475.06px]">
      <Frame3 />
      <Frame2 />
      <Frame1 />
    </div>
  );
}

export default function SymbolAndLogoColour() {
  return (
    <div className="relative size-full" data-name="Symbol and Logo  - COLOUR 2">
      <Frame />
    </div>
  );
}