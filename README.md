# Translucent

**Translucent** is a very lightweight wrapper for vanilla custom `HTMLElement`.

## Usage

You can directly include the `scripts` folder into a project and extend the class from the file `scripts/TranslucentElement.js` or use a CDN that interface Github like jsDelivr : [https://cdn.jsdelivr.net/gh/louis-parent/Translucent@main/scripts/TranslucentElement.js](https://cdn.jsdelivr.net/gh/louis-parent/Translucent@main/scripts/TranslucentElement.js).

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

`TranslucentElement` have a method `createReferencedElement(ref, tag, attributes)` that work like `createElement(tag, attributes)` but add a getter named `ref + "Element"` that allow to directly access the element.
The method `reference(ref, element)` allow to create a reference like with `createReferencedElement(ref, tag, attributes)` but on an existing element.
