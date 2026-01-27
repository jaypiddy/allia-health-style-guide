import svgPaths from "./svg-m81oak7oo5";

function Frame1() {
  return (
    <div className="absolute h-[48.36px] left-[75.66px] top-[9.53px] w-[130.02px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 130.02 48.3604">
        <g id="Frame 743">
          <path d={svgPaths.p2052c200} fill="var(--fill-0, #0F2537)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[67.094px] left-0 top-0 w-[67.002px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67.0024 67.0938">
        <g id="Frame 742">
          <path d={svgPaths.p1ba1e980} fill="url(#paint0_radial_103_1303)" id="Vector" />
          <path d={svgPaths.p106cb900} fill="url(#paint1_radial_103_1303)" id="Vector_2" />
          <path d={svgPaths.p3ce96000} fill="url(#paint2_radial_103_1303)" id="Vector_3" />
          <path d={svgPaths.p3aa60c00} fill="url(#paint3_radial_103_1303)" id="Vector_4" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-32.9937 32.9937 -80.5575 -103.415 75.0892 -8.08841)" gradientUnits="userSpaceOnUse" id="paint0_radial_103_1303" r="1">
            <stop offset="0.65" stopColor="#21E6C1" />
            <stop offset="1" stopColor="#CDEF63" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-32.9937 -32.9937 -80.5575 103.415 75.0892 75.1814)" gradientUnits="userSpaceOnUse" id="paint1_radial_103_1303" r="1">
            <stop offset="0.65" stopColor="#21E6C1" />
            <stop offset="1" stopColor="#CDEF63" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(32.9937 32.9937 80.5575 -103.415 -8.08721 -8.08841)" gradientUnits="userSpaceOnUse" id="paint2_radial_103_1303" r="1">
            <stop offset="0.65" stopColor="#21E6C1" />
            <stop offset="1" stopColor="#CDEF63" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(32.9937 -32.9937 80.5575 103.415 -8.08721 75.1814)" gradientUnits="userSpaceOnUse" id="paint3_radial_103_1303" r="1">
            <stop offset="0.65" stopColor="#21E6C1" />
            <stop offset="1" stopColor="#CDEF63" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[67.094px] left-0 top-0 w-[205.68px]">
      <Frame1 />
      <Frame />
    </div>
  );
}

export default function SymbolAndAhgMonogramBlack() {
  return (
    <div className="relative size-full" data-name="Symbol and AHG Monogram - Black 4">
      <Frame2 />
    </div>
  );
}