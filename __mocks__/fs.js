const fs = jest.genMockFromModule("fs");
const path = require("path");

let mockFiles = Object.create(null);

function __createMockFiles(newMockFiles) {
  mockFiles = Object.create(null);
  for (const file in newMockFiles) {
    const dir = path.dirname(file);

    if (!mockFiles[dir]) {
      mockFiles[dir] = [];
    }
    mockFiles[dir].push(path.basename(file));
    mockFiles[dir][path.basename(file)] = newMockFiles[file];
  }
}

function existsSync(pathToDirectory){
  return mockFiles[pathToDirectory];
}

fs.existsSync = existsSync
fs.__createMockFiles = __createMockFiles;


module.exports = fs;