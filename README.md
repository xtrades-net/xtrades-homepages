

# Environment installation:

1) for node, best use NVM - node version manager: https://github.com/nvm-sh/nvm
1a) easier option - install node.js (version 14.16): https://nodejs.org/es/download/
2) install angular CLI: `npm install @angular/cli`
3) install ionic: `npm install -g @ionic/cli`

# Start local project

ionic serve -o --port 5001 --ssl

# IOS development

https://ionicframework.com/docs/developing/ios#running-with-the-ionic-cli

Copy artifacts to xcode: `ionic capacitor copy ios --configuration=development`
Open xcode: `ionic capacitor open ios`


# KNOWN ISSUES:

1) `Browser SSL error on localhost start`
fix: install certificate from ./ssl folder: https://www.youtube.com/watch?v=BFM_3e720Oc
