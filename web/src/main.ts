import Settings from "./Settings.js";
import SettingsPage from "./SettingsPage.js";
import SocketConnection from "./SocketConnection.js";
import AssetLoader from "./editor/AssetLoader.js";
import NodeEditor from "./editor/NodeEditor.js";
import Wiki from "./Wiki.js";
import FilePicker, { FileOpenEvent } from "./FilePicker.js";

(async () =>
{
	await AssetLoader.loadNodeTypes();
	SocketConnection.init();
	SettingsPage.init();
	Wiki.init();

	if (Settings.get("editor.lightMode"))
		document.body.classList.add("lightMode");

	Settings.addSettingsChangedListener("editor.lightMode", e =>
	{
		if (e.value)
			document.body.classList.add("lightMode");
		else
			document.body.classList.remove("lightMode");
	});

	const editor = new NodeEditor();
	const filePicker = new FilePicker();
	editor.filePicker = filePicker;

	const editorStyles = editor.createEditorStyles();

	document.head.append(editorStyles);

	document.body.append(editor.element);
	
	// @ts-ignore
	window.editor = editor;
	// @ts-ignore
	window.Settings = Settings;
	// @ts-ignore
	window.SocketConnection = SocketConnection;

	if (window.location.hash)
	{
		editor.openFile(decodeURIComponent(window.location.hash.substring(1)));
	}
	else
	{
		filePicker.open();
	}

	filePicker.addEventListener("file_open", async (e: FileOpenEvent) =>
	{
		editor.openFile(e.path);
		window.location.hash = e.path;
	});
})();
