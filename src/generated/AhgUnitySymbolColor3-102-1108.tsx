import svgPaths from "./svg-gxke2chzoc";

function Group() {
  return (
    <div className="absolute inset-[0_0_-0.14%_0]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 117.783 117.943">
        <g id="Group">
          <path d={svgPaths.p1bdda100} fill="url(#paint0_radial_102_1116)" id="Vector" />
          <path d={svgPaths.p147c5440} fill="url(#paint1_radial_102_1116)" id="Vector_2" />
          <path d={svgPaths.p3a6e8200} fill="url(#paint2_radial_102_1116)" id="Vector_3" />
          <path d={svgPaths.p3efa6170} fill="url(#paint3_radial_102_1116)" id="Vector_4" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-58 58 -141.613 -181.795 132 -14.2187)" gradientUnits="userSpaceOnUse" id="paint0_radial_102_1116" r="1">
            <stop offset="0.65" stopColor="#21E6C1" />
            <stop offset="1" stopColor="#CDEF63" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-58 -58 -141.613 181.795 132 132.162)" gradientUnits="userSpaceOnUse" id="paint1_radial_102_1116" r="1">
            <stop offset="0.65" stopColor="#21E6C1" />
            <stop offset="1" stopColor="#CDEF63" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(58 58 141.613 -181.795 -14.2166 -14.2187)" gradientUnits="userSpaceOnUse" id="paint2_radial_102_1116" r="1">
            <stop offset="0.65" stopColor="#21E6C1" />
            <stop offset="1" stopColor="#CDEF63" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(58 -58 141.613 181.795 -14.2166 132.162)" gradientUnits="userSpaceOnUse" id="paint3_radial_102_1116" r="1">
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
    <div className="absolute contents inset-[0_0_-0.14%_0]" data-name="Layer 1">
      <Group />
    </div>
  );
}

export default function AhgUnitySymbolColor() {
  return (
    <div className="relative size-full" data-name="AHG Unity Symbol - Color 3">
      <Layer />
    </div>
  );
}