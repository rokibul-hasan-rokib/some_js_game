const elements = document.querySelectorAll('.element');
const combinationArea = document.getElementById('combination-area');
const output = document.getElementById('output');
const combinations = {
    "water+fire": "steam",
    "earth+water": "mud",
    "air+fire": "smoke",
    "earth+fire": "lava"
};

// Drag and drop logic
elements.forEach(el => {
    el.draggable = true;
    el.addEventListener('dragstart', e => {
        e.dataTransfer.setData('text', e.target.dataset.type);
    });
});

combinationArea.addEventListener('dragover', e => e.preventDefault());
combinationArea.addEventListener('drop', e => {
    const el1 = e.dataTransfer.getData('text');
    const el2 = combinationArea.dataset.lastElement || "";
    const result = combineElements(el1, el2);
    output.textContent = result;
    combinationArea.dataset.lastElement = result || el1;
});

function combineElements(el1, el2) {
    const key = [el1, el2].sort().join("+");
    return combinations[key] || "unknown";
}
