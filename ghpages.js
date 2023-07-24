const ghpages = require('gh-pages');

ghpages.publish('out', {
    src: ['**/*','.nojekyll'],
    dotfiles: true
}, () => console.log("Done!"));