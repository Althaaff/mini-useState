export function render(reactElement, rootElement) {
    function createDOMElement(reactElement) {
      if (!reactElement) {
        return null;
      }
      if (typeof reactElement.type === "function") {
        return createDOMElement(reactElement.type(reactElement.props));
      }
  
      if (Array.isArray(reactElement)) {
        return reactElement.map((el) => createDOMElement(el));
      }
  
      if (typeof reactElement === "string" || typeof reactElement === "number") {
        return document.createTextNode(reactElement);
      }
  
      if (typeof reactElement !== "object" || !reactElement.type) {
        return null;
      }
  
      const { type, props } = reactElement;
      const DOMElement = document.createElement(type);
  
      if (props) {
        // console.log(props)
        Object.entries(props).forEach(([key, value]) => {
          if (key === "children") return; // Children are handled separately
  
          if (key === "style") {
            Object.entries(value).forEach(([style, value]) => {
              console.log(style, value);
              DOMElement.style[style] = value;
            });
          } else {
            DOMElement[key] = value;
          }
        });
  
        if (props.children) {
          props.children.forEach((child) => {
            if (Array.isArray(child)) {
              DOMElement.append(...child.map((el) => createDOMElement(el)));
            } else {
              const childElement = createDOMElement(child);
              if (childElement) {
                DOMElement.append(childElement);
              }
            }
          });
        }
      }
  
      return DOMElement;
    }
    const DOMElement = createDOMElement(reactElement);
    rootElement.innerHTML = "";
    if (Array.isArray(DOMElement)) {
      rootElement.append(...DOMElement);
    } else if (DOMElement) {
      rootElement.append(DOMElement);
    }
  }
  
  export default {
    render,
  };