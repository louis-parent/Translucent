# Translucent

**Translucent** is a very lightweight wrapper for vanilla custom `HTMLElement`.

## Documentation

To use **Translucent**, you must extend `TranslucentElement` in your custom elements.
It offers some facility in using custom elements.

### Observed Attributes

The vanilla `HTMLElement` offer a callback for attribute change declared in `observedAttributes()` getter. So **Translucent** add getter and setter for each attribute declared this way.

### Inner HTML

**Translucent** add a callback method `contentChangedCallback(oldValue, newValue)` that can be redefined in subclass which is called on element content change, the same way as the vanilla `attributeChangedCallback(name, oldValue, newValue)` callback do.

### Create Element

`TranslucentElement` have a method `createElement(tag, attributes)` that allow to create new element and initialize its attributes with the key-values pair contains in `attributes`.

### Referenced Element

`TranslucentElement` have a method `createReferencedElement(ref, tag, attributes)` that work like `createElement(tag, attributes)` but add a getter named `ref` that allow to directly access the element.
