// add-version.js
const fs = require('fs');
const path = require('path');

const buildDir = path.resolve(__dirname); // index.html이 루트에 있다면
const htmlPath = path.join(buildDir, 'index.html');

if (!fs.existsSync(htmlPath)) {
  console.error('index.html을 찾을 수 없습니다:', htmlPath);
  process.exit(1);
}

let html = fs.readFileSync(htmlPath, 'utf8');
const now = Date.now(); // 타임스탬프 사용(또는 빌드 번호)

// css, js 파일 경로에 ?v= 추가 (이미 있으면 교체)
html = html.replace(/(\.(?:css|js))(?:\?v=\d+)?/g, `$1?v=${now}`);

fs.writeFileSync(htmlPath, html, 'utf8');
console.log('index.html에 버전 추가 완료:', now);