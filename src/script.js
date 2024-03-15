const $selectValue = document.querySelector(".select-value");
const $selectList = document.querySelector(".select-list");
const $selectItem = document.querySelector(".select-item#selected");
const $firstSelectItem = document.querySelector(".select-item:first-child");
const $wrapper = document.querySelector(".wrapper");

function closeSelectList() {
    $selectList.classList.remove("visible")
}

function showSelectList() {
    $selectList.classList.add("visible")
}

function updateSelectValue(text) {
    $selectValue.textContent = text;
}

if ($selectItem) {
    updateSelectValue($selectItem.textContent);
}
else {
    updateSelectValue($firstSelectItem.textContent);
}


$selectValue.addEventListener("click", () => {
    showSelectList();
});


$selectList.addEventListener("click", ({ target }) => {
    if (target instanceof HTMLLIElement) {
        if (!target.classList.contains("disabled")) {
            $selectValue.textContent = target.textContent;
            closeSelectList(); 
        }
       
    }
});

$wrapper.addEventListener("click", ({ target }) => {
    if (target instanceof HTMLElement) {
        if (target.className === "wrapper") {
            const className = target.className;
            closeSelectList();
        }
        
    }
    
});