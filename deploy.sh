#!/bin/bash
cd gatsby-site
yarn build
cd ../cra-site
yarn build
rm -rf ../gatsby-site/public/cra
mv build ../gatsby-site/public/cra
cd ../gatsby-site
cp ../_redirects public/
netlify deploy --dir=public --prod