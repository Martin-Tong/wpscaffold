const Generator = require('yeoman-generator')
const List = require('./src/utils').List
const Confirm = require('./src/utils').Confirm
const Input = require('./src/utils').Input

module.exports = class WebpackGenerator extends Generator {
    constructor(args, opts) {
        super(args, opts)
        opts.env.configuration = {
            config: {
                webpackOptions: {}
            }
        }
    }

    prompting() {
        const done = this.async();
      console.log(
`
    ready to create config file
    ---------------------------
    choose features to start
`);
        this.prompt(
            [
                List('package', 'package manager', ['npm', 'yarn', 'bower'], 'npm'),
                List('buildin', 'choose build-ins', ['base', 'vue', 'electron'], 'base'),
                Input('filename', 'generated filename')
            ]
        )
        .then((answer) => {
            let filename = answer.filename ? answer.filename : answer.buildin
            switch (answer.buildin) {
                case 'base':
                    const options = require('./src/template').base
                    this.options.env.configuration.config.webpackOptions = options.webpackOptions
                    this.options.env.configuration.config.topScope = options.topScope
                    this.options.env.configuration.config.configName = filename
                    break
                case 'vue':
                    break
                case 'electron':
                    break
            }
            done()
        })    
    }

    writing() {
        this.config.set('configuration', this.options.env.configuration)
    }

    /* install() {
        this.installDependencies();
      } */
      
}