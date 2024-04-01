#!/usr/bin/env node
const fs =  require('fs');

const projectStructure = {
    'src' : ['script.js'],
    'public' : ['index.html' , 'style.css'],
    'db' :['connect.js'],
};

function generateHTMLBoilerplate() {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        
    </body>
    </html>`;
  }

Object.entries(projectStructure).forEach(([dir , files]) => {
    fs.mkdirSync(dir , {recursive : true});
    files.forEach(file => {
        if(file.endsWith('.html')){
        fs.writeFileSync(`${dir}/${file} `, generateHTMLBoilerplate());
        }
        else{
        fs.writeFileSync(`${dir}/${file}` , '');
        }
    })
});


console.log("Project structure created!");
