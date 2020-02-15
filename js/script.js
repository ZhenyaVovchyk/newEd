////----------Code mirror, theme and lines number----------////

var delay;

var delay;
// Initialize CodeMirror editor with a nice html5 canvas demo.
var editor = CodeMirror.fromTextArea(document.getElementById('code'), {
    mode: 'text/html',
    tabMode: 'indent'
});
editor.on("change", function () {
    clearTimeout(delay);
    delay = setTimeout(updatePreview, 300);
});

function updatePreview() {
    var previewFrame = document.getElementById('preview');
    var preview = previewFrame.contentDocument || previewFrame.contentWindow.document;
    preview.open();
    preview.write(editor.getValue());
    preview.close();
}
setTimeout(updatePreview, 300);

//////-------//////
var input = document.getElementById("select");
function selectTheme() {
    var theme = input.options[input.selectedIndex].textContent;
    editor.setOption("theme", theme);
    location.hash = "#" + theme;
}
var choice = (location.hash && location.hash.slice(1)) ||
    (document.location.search &&
        decodeURIComponent(document.location.search.slice(1)));
if (choice) {
    input.value = choice;
    editor.setOption("theme", choice);
}
CodeMirror.on(window, "hashchange", function () {
    var theme = location.hash.slice(1);
    if (theme) { input.value = theme; selectTheme(); }
});

////----------   ----------////




