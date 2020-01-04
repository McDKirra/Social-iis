## social-iis

This is where you include your WebPart documentation.

### Building the code

```bash
git clone the repo
npm i
npm shirnkwrap
gulp serve --nowbrowser
npm install @pnp/logging @pnp/common @pnp/odata @pnp/sp --save  ( Required to get list items from web )
npm install @microsoft/sp-page-context
npm install @pnp/spfx-property-controls
npm install @pnp/spfx-controls-react --save --save-exact
npm install --save @pnp/polyfill-ie11 ( Required for Internet Explorer Expand/Select calls )
npm install @pnp/sp  (Web still not showing as available)
npm install @pnp/logging @pnp/common @pnp/odata @pnp/sp --save (Web still not available on pnp/sp)
npm install @microsoft/sp-webpart-base (Required for all Prop Pane Panel files)
npm install @microsoft/sp-core-library (Required for base web part.ts)

npm uninstall @pnp/sp
npm i @pnp/sp@1.3.8 (Web was not avaialble.... had to roll back)
npm unistall @pnp/logging @pnp/common @pnp/odata 
npm i @pnp/logging@1.3.8 @pnp/common@1.3.8 @pnp/odata@1.3.8


```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options

gulp clean - TODO
gulp test - TODO
gulp serve - TODO
gulp bundle - TODO
gulp package-solution - TODO
