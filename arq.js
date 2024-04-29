function selectCursor() {
    const fileInput = document.getElementById('fileInput');

    fileInput.addEventListener('change', function() {
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = function() {
            const cursorUrl = reader.result;
            setCustomCursor(cursorUrl);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    });
}

function setCustomCursor(cursorUrl) {
    document.body.style.cursor = `url(${cursorUrl}), auto`;
}
