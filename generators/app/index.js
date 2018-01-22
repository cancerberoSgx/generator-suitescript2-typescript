var Generator = require('yeoman-generator')
const shell = require('shelljs')
const path = require('path')

module.exports = class extends Generator {
  constructor (args, opts) {
    super(args, opts)
  }

  prompting () {
    return this.prompt([
      {
        type: 'input',
        name: 'projectName',
        message: 'Your project name',
        default: this.appname // Default to current folder name
      }
    ]).then(answers => {
      this.templateContext = answers
    })
  }

  writing () {
    shell.ls('-R', path.join(__dirname, 'templates')).forEach(file => {
      this.fs.copyTpl(
        this.templatePath(file),
        this.destinationPath(file),
        this.templateContext
      )
    })
  }
}
