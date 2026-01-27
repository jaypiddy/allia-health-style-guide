import svgPaths from "./svg-thzt9x3oq9";

function Group() {
  return (
    <div className="absolute inset-[14.14%_0.01%_14.11%_36.78%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 130.02 48.36">
        <g id="Group">
          <path d={svgPaths.p10474680} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p244bbd00} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p2f4be300} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[0_67.23%_-0.01%_0]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67.4118 67.4086">
        <g id="Group">
          <path d={svgPaths.p12373100} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.pe3f8700} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p2914f040} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p36c0fa10} fill="var(--fill-0, black)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Layer() {
  return (
    <div className="absolute contents inset-[0_0.01%_-0.01%_0]" data-name="Layer 1">
      <Group />
      <Group1 />
    </div>
  );
}

export default function SymbolAndAhgMonogramBlack() {
  return (
    <div className="relative size-full" data-name="Symbol and AHG Monogram - Black 3">
      <Layer />
    </div>
  );
}