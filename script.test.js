
// Pehla Tareeka

jest.mock('fs')

const NO_FOLDER_CONFIG = {};
const FOLDER_PRESENT_CONFIG = {
    "./testFolder/testFile.txt": "Hello There"
}

beforeEach( () => {
    jest.resetModules();
    jest.resetAllMocks();
})

test('NO FOLDER FOUND TEST', () => {
    require("fs").__createMockFiles(NO_FOLDER_CONFIG);
    const spy = jest.spyOn(console, "log");
    require('./script');
    expect(spy.mock.calls).toEqual([['Folder not found']]);
})

test('FOLDER FOUND TEST', () => {
    require("fs").__createMockFiles(FOLDER_PRESENT_CONFIG);
    const spy = jest.spyOn(console, "log");
    require('./script');
    expect(spy.mock.calls).toEqual([['Folder Found']]);
})