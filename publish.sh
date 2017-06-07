#!/bin/sh -x

yarn release
VERSION=`node -e "console.log(require('./package.json').version);"`
NODE_ENV=production __VERSION__=$VERSION yarn transpile
git commit -a -m $VERSION
git push --follow-tags origin master
npm publish
