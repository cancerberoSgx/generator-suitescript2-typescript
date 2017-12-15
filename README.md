yeoman generator to generate projects for fast SuiteScript 2 development using TypeScript, file change watching and auto-deploy

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
