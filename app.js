textEditor.document.designMode = "On";

const saveBtn = document.getElementById('saveBtn');
saveBtn.addEventListener('click', save);

function save() {
    let frameContent = textEditor.document.body.innerHTML;
    let frameString = JSON.stringify(`{"body": " ${String(frameContent)}"}`);
    let jsonFile = JSON.parse(frameString);
    let a = document.createElement('a');

    a.href = URL.createObjectURL(new Blob([jsonFile], { type: `json` }));
    a.download = 'editorFile.json';
    a.click();
}

async function loadFile(file) {
    let text = await file.text();
    let object = JSON.parse(text.replace('style=""', ''));

    textEditor.document.body.innerHTML = object.body;
}
