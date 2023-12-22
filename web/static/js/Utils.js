/**
 * Create new HTML element
 * @param nodeName - node name
 * @param attributes - `name: value` dictionary
 * @param eventListeners - `name: value` dictionary
 */
export function createElement(nodeName, attributes = {}, eventListeners = {}) {
    let element = document.createElement(nodeName);
    for (let attribute in attributes)
        element.setAttribute(attribute, attributes[attribute]);
    for (let name in eventListeners) {
        let listenerFn = eventListeners[name];
        if (typeof listenerFn == "function")
            element.addEventListener(name, listenerFn);
        else
            for (let listener of listenerFn)
                element.addEventListener(name, listener);
    }
    return element;
}
/** Create HTML node tree */
export function createNodeTree(nodeTree) {
    let rootNode = createElement(nodeTree.name, nodeTree.attributes, nodeTree.listeners);
    for (let childNode of nodeTree.childNodes || []) {
        if (typeof childNode == "string" || childNode instanceof HTMLElement || childNode instanceof Text) {
            rootNode.append(childNode);
            continue;
        }
        // @ts-ignore
        rootNode.append(createNodeTree(childNode));
    }
    return rootNode;
}
/**
 * Converts UNIX timestamp to time date string
 */
export function unixToStr(timestamp) {
    if (!timestamp)
        return "—";
    const date = new Date(timestamp * 1000);
    return `${date.getHours()}:${date.getMinutes().toString().padStart(2, "0")} ${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
}
//# sourceMappingURL=Utils.js.map