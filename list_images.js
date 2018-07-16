const fs = require("fs");

const nameGallery = (process.argv[2] !== '') ? process.argv[2] : "agnieszka-i-andrzej-plener"

const name = nameGallery;

const test = [];

fs.readdir(`./source/images/gallery/${nameGallery}/`, function (err, files) {
    if (err)
        throw err;
    for (let index in files) {
        let path = `
    {
        "items": {
            "path":"images\/gallery\/${nameGallery}\/",
            "img":"${files[index]}",
            "alt":""
        }
    }`;
        test.push("" + path);
    }

    const template = (`[${test}
]`);

    fs.writeFile(`./source/data/${name}.json`, template, function (err) {});
});