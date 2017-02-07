const { spy, createStubInstance } = require('sinon');

module.exports = (klass, stubs, opts = {}) => {
  const instanceName = opts.instanceName || klass.name.toLowerCase();
  const stubReference = {
    [instanceName]: {},
  };

  const stubbedInstance = spy(() => {
    stubReference[instanceName] = createStubInstance(klass);
    Object.keys(stubs).forEach((stubKey) => {
      stubReference[instanceName][stubKey] = stubs[stubKey];
    });

    return stubReference[instanceName];
  });

  return [stubbedInstance, stubReference];
};
