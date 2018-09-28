
// Pehla Tareeka

jest.mock('fs')

// test('NO FOLDER FOUND TEST', () => {
//     const spy = jest.spyOn(console, "log");
//     require('./script');
//     expect(spy.mock.calls).toEqual([['Folder not found']]);
// })

test('FOLDER FOUND TEST', () => {
    const spy = jest.spyOn(console, "log");
    require('./script');
    expect(spy.mock.calls).toEqual([['Folder Found']]);
})

// Dusra Tareeka

// const fs = require('fs');

// test('FOLDER FOUND TEST', () => {
//     jest.resetModules();
//     const spy = jest.spyOn(console, "log");
//     fs.existsSync = jest.fn();
//     fs.existsSync.mockReturnValue(true);
//     require('./script');
//     expect(spy.mock.calls).toEqual([['Folder Found']]);
// })