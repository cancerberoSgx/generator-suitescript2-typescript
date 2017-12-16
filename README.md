[![Build Status](https://travis-ci.org/cancerberoSgx/generator-suitescript2-typescript.png?branch=master)](https://travis-ci.org/cancerberoSgx/generator-suitescript2-typescript)
[![Dependencies](https://david-dm.org/cancerberosgx/generator-suitescript2-typescript.svg)](https://david-dm.org/cancerberosgx/generator-suitescript2-typescript)
[![devDependencies Status](https://david-dm.org/cancerberosgx/generator-suitescript2-typescript/dev-status.svg)](https://david-dm.org/cancerberosgx/generator-suitescript2-typescript?type=dev)

# What's this?

yeoman project generator for fast SuiteScript 2 development using TypeScript, file watch and auto-deploy.

# Install

```sh
sudo npm install -g generator-suitescript2-typescript
```
# Usage

```sh
mkdir my-project1
cd my-project1
yo suitescript2-typescript
```

You will be asked some questions, like the project name, after that you are ready to execute:

```sh
npm install
npm test
npm run dev
```

This last command will watch for typescript file changes and automatically upload scripts to netsuite FileCabinet.
The first time you run it you will be asked for your netsuite credentials, and target folder where scripts will be uploaded.

# Technologies used

 * typescript and @hitc/netsuite-types for SuiteScript 2 interfaces
 * gulp, gulp-watch for agile development
 * netsuite-uploader-util for netsuite deploy
 * jasmine for unit-test / TDD
