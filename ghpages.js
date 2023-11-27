const ghpages = require('gh-pages');

// Triggers predeploy task to be run prior to publishing
ghpages.publish('out', {
    src: ['**/*','.nojekyll'],
    dotfiles: true
}, () => console.log("Done!"));