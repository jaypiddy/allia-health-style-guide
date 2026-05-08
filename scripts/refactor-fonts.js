const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const targetDir = path.join(__dirname, '../src');

walkDir(targetDir, (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    content = content.replace(/font-\['PP_Museum',sans-serif\]/g, 'font-museum');
    content = content.replace(/font-\['PP_Museum'\]/g, 'font-museum');
    content = content.replace(/font-\['PP_Neue_Montreal'\]/g, 'font-montreal');
    content = content.replace(/font-\['Nunito'\]/g, 'font-nunito');
    content = content.replace(/font-\['Rubik'\]/g, 'font-rubik');

    content = content.replace(/font-\['Inter:Bold','PP_Neue_Montreal'\]/g, 'font-bold font-montreal');
    content = content.replace(/font-\['Inter:Bold',sans-serif\]/g, 'font-bold font-sans');
    content = content.replace(/font-\['Inter:Medium',sans-serif\]/g, 'font-medium font-sans');
    content = content.replace(/font-\['Monaco:Regular',sans-serif\]/g, 'font-mono');

    content = content.replace(/font-\['Nunito:Bold',sans-serif\]/g, 'font-bold font-nunito');
    
    content = content.replace(/font-\[PP_Museum\]/g, 'font-museum');
    content = content.replace(/font-\[Nunito\]/g, 'font-nunito');
    content = content.replace(/font-\[Rubik\]/g, 'font-rubik');

    if (original !== content) {
      fs.writeFileSync(filePath, content);
      console.log('Updated', filePath);
    }
  }
});
