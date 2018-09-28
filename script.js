const fs = require('fs');

if(!fs.existsSync('./testFolder')){
    console.log('Folder not found');
}
else{
    console.log('Folder Found');
}