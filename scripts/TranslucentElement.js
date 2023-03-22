class TranslucentElement extends HTMLElement
{	
	constructor(tagName)
	{
		super();
		
		this.content = this.innerHTML || new String();
		this.refs = new Object();
		
		this.initInnerHTMLObserver();
		this.initAttributesProperties();
	}
	
	initInnerHTMLObserver()
	{
		this.innerHTMLObserver = new MutationObserver((mutationsList, observer) => {
			const newContent = mutationsList[0].target.innerHTML || new String();
			this.contentChangedCallback(this.content, newContent);
			this.content = newContent;
		});
		
		this.innerHTMLObserver.observe(this, {
			characterData: false,
			childList: true,
			attributes: false
		});	
	}
	
	initAttributesProperties()
	{
		const attributes = this.constructor.observedAttributes || new Array();
		
		for(const attribute of attributes)
		{
			Object.defineProperty(this, attribute, {
				get: function() {
					return JSON.parse(this.getAttribute(attribute));
				},
				set: function(value) {
					this.setAttribute(attribute, JSON.stringify(value));
				}
			});
		}
	}
	
	contentChangedCallback(oldValue, newValue)
	{
	}
	
	createElement(tag, attributes)
	{
		const element = document.createElement(tag);
		
		for(const attribute in (attributes || new Object()))
		{
			if(attribute === "innerText")
			{
				element.innerText = attributes[attribute];
			}
			else if(attribute === "innerHTML")
			{
				element.innerHTML = attributes[attribute];
			}
			else
			{
				element.setAttribute(attribute, attributes[attribute]);
			}
		}
		
		return element;
	}
	
	createReferencedElement(ref, tag, attributes)
	{
		const element = this.createElement(tag, attributes);	
		
		this.refs[ref] = element;
		Object.defineProperty(this, ref + "Element", {
			get: function() {
				return this.refs[ref];
			}
		});
		
		return element;
	}
}

export default TranslucentElement;


