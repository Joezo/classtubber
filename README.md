# classtubber
Stubs a class and returns references to methods on instances of said class

This is useful when stubbing a class before it's instanciated and you don't have access to it from the test itself.
I would anticipate you'd usually use this with injectr/mockery/proxyquire.

```javascript
class TestClass {
  testMethod() {
    // does something
  }
  anotherTestMethod() {
    // does something else
  }
}

[
  stubbedTestClass,
  stubReference,
] = createStubbedClass(TestClass, { testMethod: myCustomStub })
```

stubbedTestClass is now a stubbed function/class.
When stubbedTestClass is instanciated it will modify
the `testclass` property on the `stubReference` to be the instance.

All methods on the class will be stubbed. You can pass in your own
stubs if you'd like specific behaviour.
You can then access methods on the instance and assert against them.
e.g. `expect(stubReference.testclass.testMethod).to.have.been.called()``

You can also make assertions against the class itself as that is a spy.
This is useful for checking a class has been instanciated correctly.
e.g. `expect(stubbedTestClass).to.have.been.calledWith({foo: 'bar'})``
