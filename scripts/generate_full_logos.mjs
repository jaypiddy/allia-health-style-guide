
import fs from 'fs';
import path from 'path';

// Helper to extract paths from the TS file content (simple regex)
function extractPaths(content) {
    const paths = {};
    const regex = /([a-z0-9]+):\s*"([^"]+)"/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        paths[match[1]] = match[2];
    }
    return paths;
}

const generatedDir = path.join(process.cwd(), 'src/generated');
const outputDir = path.join(process.cwd(), 'public/assets/logos');

// 1. Full Logo Black
const blackContent = fs.readFileSync(path.join(generatedDir, 'svg-qidn0wgfgz.ts'), 'utf8');
const blackPaths = extractPaths(blackContent);
// Log keys for debugging
// console.log('Black Keys:', Object.keys(blackPaths));

// Keys mapping based on LogoAssets.tsx:
// p1c0e00 -> Unity Symbol petals
// p375e1500 -> Unity Symbol petals
// p33e85080 -> Unity Symbol petals
// p332b32f0 -> Unity Symbol petals
// p23116d40 -> ALLIA HEALTH
// p36edd200 -> GROUP

const blackSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 475.06 118.164" fill="none">
  <g>
    <path d="${blackPaths['p1c0e00']}" fill="black" />
    <path d="${blackPaths['p375e1500']}" fill="black" />
    <path d="${blackPaths['p33e85080']}" fill="black" />
    <path d="${blackPaths['p332b32f0']}" fill="black" />
    <g transform="translate(131.05, 20.41)">
      <path d="${blackPaths['p23116d40']}" fill="black" />
    </g>
    <g transform="translate(131.05, 83.14)">
      <path d="${blackPaths['p36edd200']}" fill="black" />
    </g>
  </g>
</svg>`;

fs.writeFileSync(path.join(outputDir, 'full-logo-black.svg'), blackSvg);
console.log('Generated full-logo-black.svg');

// 2. Full Logo White
const whiteContent = fs.readFileSync(path.join(generatedDir, 'svg-ojqowbrxrk.ts'), 'utf8');
const whitePaths = extractPaths(whiteContent);

const whiteSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 475.06 118.164" fill="none">
  <g>
    <path d="${whitePaths['p1c0e00']}" fill="white" />
    <path d="${whitePaths['p375e1500']}" fill="white" />
    <path d="${whitePaths['p33e85080']}" fill="white" />
    <path d="${whitePaths['p332b32f0']}" fill="white" />
    <g transform="translate(131.05, 20.41)">
      <path d="${whitePaths['p23116d40']}" fill="white" />
    </g>
    <g transform="translate(131.05, 83.14)">
      <path d="${whitePaths['p36edd200']}" fill="white" />
    </g>
  </g>
</svg>`;

fs.writeFileSync(path.join(outputDir, 'full-logo-white.svg'), whiteSvg);
console.log('Generated full-logo-white.svg');

// 3. Full Logo Color
const colorContent = fs.readFileSync(path.join(generatedDir, 'svg-40mw2103vt.ts'), 'utf8');
const colorPaths = extractPaths(colorContent);

const colorSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 475.06 118.164" fill="none">
  <g>
    <path d="${colorPaths['p31aac200']}" fill="url(#paint0_radial_full_color)" />
    <path d="${colorPaths['p176ffa00']}" fill="url(#paint1_radial_full_color)" />
    <path d="${colorPaths['p3f951880']}" fill="url(#paint2_radial_full_color)" />
    <path d="${colorPaths['p38fbb100']}" fill="url(#paint3_radial_full_color)" />
    <g transform="translate(131.05, 20.41)">
      <path d="${colorPaths['p23116d40']}" fill="#0F2537" />
    </g>
    <g transform="translate(131.05, 83.14)">
      <path d="${colorPaths['p1a6ad600']}" fill="#0F2537" />
    </g>
  </g>
  <defs>
    <radialGradient cx="0" cy="0" gradientTransform="matrix(-57.6159 58.1083 -140.675 -182.134 131.126 -14.2453)" gradientUnits="userSpaceOnUse" id="paint0_radial_full_color" r="1">
      <stop offset="0.65" stopColor="#21E6C1" />
      <stop offset="1" stopColor="#CDEF63" />
    </radialGradient>
    <radialGradient cx="0" cy="0" gradientTransform="matrix(-57.6159 -58.1083 -140.675 182.134 131.126 132.409)" gradientUnits="userSpaceOnUse" id="paint1_radial_full_color" r="1">
      <stop offset="0.65" stopColor="#21E6C1" />
      <stop offset="1" stopColor="#CDEF63" />
    </radialGradient>
    <radialGradient cx="0" cy="0" gradientTransform="matrix(57.6159 58.1083 140.675 -182.134 -14.1224 -14.2453)" gradientUnits="userSpaceOnUse" id="paint2_radial_full_color" r="1">
      <stop offset="0.65" stopColor="#21E6C1" />
      <stop offset="1" stopColor="#CDEF63" />
    </radialGradient>
    <radialGradient cx="0" cy="0" gradientTransform="matrix(57.6159 -58.1083 140.675 182.134 -14.1224 132.409)" gradientUnits="userSpaceOnUse" id="paint3_radial_full_color" r="1">
      <stop offset="0.65" stopColor="#21E6C1" />
      <stop offset="1" stopColor="#CDEF63" />
    </radialGradient>
  </defs>
</svg>`;

// Note: p23116d40 in color map seems missing compared to black map? 
// Let's re-verify the keys in color file in Step 568.
// Step 568 output: p176ffa00, p1a6ad600, p23116d40, p31aac200, p38fbb100, p3f951880
// My parser should pick them up. p23116d40 is indeed there.

fs.writeFileSync(path.join(outputDir, 'full-logo-color.svg'), colorSvg);
console.log('Generated full-logo-color.svg');
