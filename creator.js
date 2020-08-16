const Generator = require('yeoman-generator')
const List = require('@webpack-cli/webpack-scaffold').List
const Confirm = require('@webpack-cli/webpack-scaffold').Confirm

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
    webpack-scaffold-my
    -----------------------
    <my-custom-scaffold>
`);
        Confirm(this, "start", "Do you want to scaffold? ")
        .then((answer) => {
            if (answer.start) {
                console.log("Let's start scaffolding!");
                this.options.env.configuration.config.webpackOptions = {
                    mode: "development"
                }
                this.options.env.configuration.config.topScope = [
                    'const path = require("path")',
                    'const webpack = require("webpack")'
                  ];
                this.options.env.configuration.config.configName = "dev"
                done();
            }
            done(); // to end questioning
        })    
    }

    writing() {
        this.config.set('configuration', this.options.env.configuration)
    }

    /* install() {
        this.installDependencies();
      } */
}