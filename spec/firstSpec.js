const helpers = require('yeoman-test')
const path = require('path')
const shell = require('shelljs')
describe('first', () => {
    let dir
    beforeEach((done) => {
        helpers
            .run(path.join(__dirname, '../generators/app'))
            .inTmpDir((tmpDir) => {
                dir = tmpDir
            })
            .withPrompts({ projectName: 'my-project1' })
            .on('error', (err)=>{fail(err), done()})
            .on('end', done)
    })

    it('package.json name', () => {
        expect(JSON.parse(shell.cat(`${dir}/package.json`).toString()).name).toBe('my-project1')
    })
})
