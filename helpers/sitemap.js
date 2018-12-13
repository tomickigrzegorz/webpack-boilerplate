const fs = require('fs');

const htmlPlace = './dist';
const ulrPart = [];

fs.readdir(`${htmlPlace}`, function(err, files) {
  if (err) throw err;
  for (let index in files) {
    let rest = files[index].split('.')[1];
    let name = files[index].split('.')[0];
    // let changeFreq = name === 'index' ? 'weekly' : 'monthly';
    let changeFreq = 'monthly';
    if (rest === 'html') {
      let path = `
  <url>
      <loc>http://blog.grzegorztomicki.pl/${files[index]}</loc>
      <changefreq>${changeFreq}</changefreq>
  </url>`;
      ulrPart.push(path);
    }
  }

  const template = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">${ulrPart.join(
              ''
            )}
</urlset>`;

  fs.writeFile('./dist/sitemap.xml', template, function(err) {});
});
