import svgPaths from "./svg-k4rbq5ifh3";

function Group() {
  return (
    <div className="absolute inset-[14.14%_0.01%_14.11%_36.78%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 130.02 48.36">
        <g id="Group">
          <path d={svgPaths.p10474680} fill="var(--fill-0, #0F2537)" id="Vector" />
          <path d={svgPaths.p244bbd00} fill="var(--fill-0, #0F2537)" id="Vector_2" />
          <path d={svgPaths.p2f4be300} fill="var(--fill-0, #0F2537)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[0_67.43%_0.45%_0]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67.002 67.093">
        <g id="Group">
          <path d={svgPaths.p1ba1e980} fill="url(#paint0_radial_102_1187)" id="Vector" />
          <path d={svgPaths.p106cb900} fill="url(#paint1_radial_102_1187)" id="Vector_2" />
          <path d={svgPaths.p3ce96000} fill="url(#paint2_radial_102_1187)" id="Vector_3" />
          <path d={svgPaths.p3aa60c00} fill="url(#paint3_radial_102_1187)" id="Vector_4" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-32.9937 32.9937 -80.5575 -103.415 75.0892 -8.08841)" gradientUnits="userSpaceOnUse" id="paint0_radial_102_1187" r="1">
            <stop offset="0.65" stopColor="#21E6C1" />
            <stop offset="1" stopColor="#CDEF63" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-32.9937 -32.9937 -80.5575 103.415 75.0892 75.1814)" gradientUnits="userSpaceOnUse" id="paint1_radial_102_1187" r="1">
            <stop offset="0.65" stopColor="#21E6C1" />
            <stop offset="1" stopColor="#CDEF63" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(32.9937 32.9937 80.5575 -103.415 -8.08721 -8.08841)" gradientUnits="userSpaceOnUse" id="paint2_radial_102_1187" r="1">
            <stop offset="0.65" stopColor="#21E6C1" />
            <stop offset="1" stopColor="#CDEF63" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(32.9937 -32.9937 80.5575 103.415 -8.08721 75.1814)" gradientUnits="userSpaceOnUse" id="paint3_radial_102_1187" r="1">
            <stop offset="0.65" stopColor="#21E6C1" />
            <stop offset="1" stopColor="#CDEF63" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function Layer() {
  return (
    <div className="absolute contents inset-[0_0.01%_0.45%_0]" data-name="Layer 1">
      <Group />
      <Group1 />
    </div>
  );
}

export default function SymbolAndAhgMonogramBlack() {
  return (
    <div className="relative size-full" data-name="Symbol and AHG Monogram - Black 4">
      <Layer />
    </div>
  );
}