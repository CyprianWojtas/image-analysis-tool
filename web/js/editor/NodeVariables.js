import { createElement, createNodeTree } from "../Utils.js";
class VarDragEvent extends Event {
    constructor(eventName, variable, nodeId = null) {
        super(eventName, { bubbles: true });
        this.variable = variable;
        this.variableId = variable.id;
        this.nodeId = nodeId;
    }
    get nodeVarId() {
        return this.nodeId + "?" + this.variableId;
    }
}
export class VariableDragStartEvent extends VarDragEvent {
    constructor(variable, nodeId = null) {
        super("variable_drag_start", variable, nodeId);
    }
}
export class VariableDragEndEvent extends VarDragEvent {
    constructor(variable, nodeId = null) {
        super("variable_drag_end", variable, nodeId);
    }
}
export class NodeVariable extends EventTarget {
    constructor(id, type, name = null, description = null) {
        super();
        this.posX = null;
        this.posY = null;
        this.id = id;
        this.type = type;
        this.name = name;
        this.description = description;
        this.handleEl = createElement("div", { class: "handle" });
    }
    getHandleBoundingClientRect() {
        return this.handleEl.getBoundingClientRect();
    }
    onDragStartEvent(e) {
        if (e.button != 0)
            return;
        e.stopPropagation();
        this.dispatchEvent(new VariableDragStartEvent(this));
    }
    onDragEndEvent(e) {
        this.dispatchEvent(new VariableDragEndEvent(this));
    }
    get connectedTo() {
        return this._connectedTo;
    }
    set connectedTo(newValue) {
        if (!newValue)
            this.element.classList.remove("connected");
        else
            this.element.classList.add("connected");
        this._connectedTo = newValue;
    }
}
export class NodeInput extends NodeVariable {
    constructor(id, type, name = null, description = null) {
        super(id, type, name, description);
        this.input = true;
        this.element = createNodeTree({
            name: "div",
            class: `nodeInput nodeVariableType_${type}`,
            title: description || "",
            childNodes: [
                {
                    name: "div",
                    class: "name",
                    childNodes: [
                        this.name || this.id || ""
                    ]
                },
                this.handleEl
            ],
            listeners: {
                mousedown: e => this.onDragStartEvent(e),
                mouseup: e => this.onDragEndEvent(e)
            }
        });
    }
}
export class NodeOutput extends NodeVariable {
    constructor(id, type, name = null, description = null) {
        super(id, type, name, description);
        this.input = false;
        this.element = createNodeTree({
            name: "div",
            class: `nodeOutput nodeVariableType_${type}`,
            title: description || "",
            childNodes: [
                {
                    name: "div",
                    class: "name",
                    childNodes: [
                        this.name || this.id || ""
                    ]
                },
                this.handleEl
            ],
            listeners: {
                mousedown: e => this.onDragStartEvent(e),
                mouseup: e => this.onDragEndEvent(e)
            }
        });
    }
}
//# sourceMappingURL=NodeVariables.js.map