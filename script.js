const textarea = document.querySelector("textarea"),
    fileNameInput = document.querySelector(".file-name input"),
    selectMenu = document.querySelector(".save-as select"),
    saveBtn = document.querySelector(".save-btn")

selectMenu.addEventListener("change", () => {
    let selectedOption = selectMenu.options[selectMenu.selectedIndex].text;
    saveBtn.innerHTML = `Save As ${selectedOption.split(" ")[0]} File`
})

saveBtn.addEventListener("click", () => {
    const blob = new Blob([textarea.value], { type: selectMenu.value });
    //URL.createObjectURL creates a url that represent passed object
    const fileUrl = URL.createObjectURL(blob);
    const link = document.createElement("a"); // creating <a> tag
    link.download = fileNameInput.value; // passing filename as download
    link.href = fileUrl; // passing fileUrl as href valu of link
    link.click() // clicking link so the file download
})