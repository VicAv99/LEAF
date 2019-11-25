module.exports = {
  name: 'leaflet',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/leaflet',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
