const helpers = require('yeoman-test')
const path = require('path')
const shell = require('shelljs')

shell.config.silent = true

describe('first', () => {

    let dir
    let templateContext = { projectName: 'my-project' + new Date().getTime() }

    it('initialize sample project', (done) => {
        helpers
            .run(path.join(__dirname, '../generators/app'))
            .inTmpDir((tmpDir) => {
                dir = tmpDir
                console.log('sample project generated at: ', dir)
            })
            .withPrompts(templateContext)
            .on('error', (err) => { fail(err), done() })
            .on('end', done)
    })

    it('project name', () => {
        expect(JSON.parse(shell.cat(`${dir}/package.json`)).name).toBe(templateContext.projectName)
        expect(shell.cat(`${dir}/spec/firstSpec.js`)).toContain(`describe('first spec of ${templateContext.projectName}`)
    })

    it('npm install npm test shound not fail', () => {
        var currentDir = shell.pwd()
        shell.cd(dir)
        expect(shell.exec('npm install').code).toBe(0)
        expect(shell.exec('npm test').code).toBe(0)

        expect(shell.exec('npm run build').code).toBe(0)

        expect(shell.cat(`${dir}/output/otherone.js`)).toContain(`return 'hello from project ${templateContext.projectName}'`)

    })

    it('clean up', ()=>{
        shell.rm('-rf',  dir)
    })
})
