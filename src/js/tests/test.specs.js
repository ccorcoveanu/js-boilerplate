import test from '../modules/test/test'

describe('Test Test module', () => {
  let _testModule;
  beforeEach(() => _testModule = test)

  it('should return test ok', () => {
    expect(test()).toBe('test ok')
  })
})