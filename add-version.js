const fs = require('fs');
const path = require('path');

const buildDir = path.resolve(__dirname);
const htmlPath = path.join(buildDir, 'index.html');

if (!fs.existsSync(htmlPath)) {
  console.error('index.html을 찾을 수 없습니다:', htmlPath);
  process.exit(1);
}

let html = fs.readFileSync(htmlPath, 'utf8');
const now = Date.now();

// href/src 속성 중 로컬 .css/.js 파일만 (?v=) 붙이기
html = html.replace(
  /(href|src)=["'](?!https?:\/\/|\/\/)([^"']+\.(?:css|js))(?:\?v=\d+)?(["'])/gi,
  `$1="$2?v=${now}$3`
);

fs.writeFileSync(htmlPath, html, 'utf8');
console.log(`index.html에 로컬 파일 버전 추가 완료: ${now}`);
