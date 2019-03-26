# Text Editor & IDE setup

The following instructions detail how to setup your text editor to apply our linting and formatting rules automatically upon save. It is highly recommended you do this as it will save you a lot of time and headaches.

## VSCode

You will need to install the following extensions:

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [StyleLint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [MarkdownLint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)

Nice to have

- [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)

Apply the following to your `settings.json` file. You can access this by pressing `cmd + ,` on your mac, or by clicking on `Code > Preferences > Settings` from he menu bar. In the settings screen that appears, in the upper right hand corner you will see `{}`. This will allow you to modify your settings via json and is the preferred method. Add the following:

```json
{
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "[scss]": {
    "editor.formatOnSave": false
  },
  "[typescript]": {
    "editor.formatOnSave": false
  },
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    {
      "language": "vue",
      "autoFix": true
    },
    {
      "language": "typescript",
      "autoFix": true
    }
  ],
  "prettier.disableLanguages": ["javascript"],
  "prettier.stylelintIntegration": true
}
```
