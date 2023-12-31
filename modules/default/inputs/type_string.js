import Node from "/js/editor/Node.js";
import { createElement } from "/js/Utils.js";

export default
class StringInputNode extends Node
{
	renderContents()
	{
		const resizeObserver = new ResizeObserver(() =>
		{
			this.updateHandlePositions();
			this.attributes.width = this.textBox.clientWidth;
			this.attributes.height = this.textBox.clientHeight;
		});
		
		this.textBox = createElement("textarea",
			{
				style: `width: ${ this.attributes.width || 200 }px; height: ${ this.attributes.height || 50 }px`
			},
			{
				input: () =>
				{
					this.attributes.value = this.textBox.value;
				},
				blur: () =>
				{
					this.attributes.value = this.textBox.value;
					this.sendUpdate();
				},
				mouseup: () =>
				{
					this.attributes.value = this.textBox.value;
					this.sendUpdate();
				},
				mousedown: e => e.stopPropagation()
			}
		);

		this.nodeContents.style.gridTemplateColumns = "auto";

		this.textBox.innerHTML = this.attributes.value || "";

		resizeObserver.observe(this.textBox);

		this.nodeContents.append(
			this.outputsContainer
		);

		this.addOutput("value", "string", this.textBox, "");
	}
}