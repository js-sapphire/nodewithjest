const fs = jest.genMockFromModule("fs");

function existsSync(pathToDirectory){
    return true;
}

fs.existsSync = existsSync

module.exports = fs;