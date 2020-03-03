import { getNames, getComponentTemplate, getSpecTemplate } from './createComponent';

describe('getNames', () => {
  it('should throw if no argument', () => {
    expect(() => {
      getNames();
    }).toThrow('Invalid name');
  });

  it('should throw if empty string', () => {
    expect(() => {
      getNames('');
    }).toThrow('Invalid name');
  });

  it('should return an object containing componentName and className', () => {
    const names = getNames('foo');
    expect(names).toHaveProperty('componentName');
    expect(names).toHaveProperty('className');
  });

  it('should return componentName as start case with no space', () => {
    expect(getNames('foo').componentName).toEqual('Foo');
    expect(getNames('foo bar').componentName).toEqual('FooBar');
    expect(getNames('foo-bar').componentName).toEqual('FooBar');
    expect(getNames('foo bar foo').componentName).toEqual('FooBarFoo');
  });

  it('should return className as kebab case', () => {
    expect(getNames('foo').className).toEqual('foo');
    expect(getNames('foo bar').className).toEqual('foo-bar');
    expect(getNames('fooBar').className).toEqual('foo-bar');
    expect(getNames('foo bar foo').className).toEqual('foo-bar-foo');
  });
});

describe('getComponentTemplate', () => {
  it('matches snapshot', async () => {
    const names = { componentName: 'FooBar', className: 'foo-bar' };

    await expect(getComponentTemplate(names)).resolves.toMatchSnapshot();
  });
});

describe('getSpecTemplate', () => {
  it('matches snapshot', async () => {
    const names = { componentName: 'FooBar', className: 'foo-bar' };

    await expect(getSpecTemplate(names)).resolves.toMatchSnapshot();
  });
});
