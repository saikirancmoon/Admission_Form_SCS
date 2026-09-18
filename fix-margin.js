const fs = require('fs');
const path = require('path');

const dir = 'src/components/Home2';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));

files.forEach(f => {
  const p = path.join(dir, f);
  let content = fs.readFileSync(p, 'utf8');
  if (content.includes('margin: "-100px"')) {
    content = content.replace(/margin: "-100px"/g, 'amount: 0.1');
    fs.writeFileSync(p, content);
    console.log('Updated ' + f);
  }
});
