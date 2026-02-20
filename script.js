function addImage() {
    const input = document.getElementById("imageInput");
    const imageUrl = input.value.trim();

    if (imageUrl === "") {
        alert("Please enter an image URL");
        return;
    }

    const gallery = document.getElementById("gallery");

    const container = document.createElement("div");
    container.classList.add("image-container");

    const img = document.createElement("img");
    img.src = imageUrl;

    const removeBtn = document.createElement("button");
    removeBtn.innerText = "X";
    removeBtn.classList.add("remove-btn");

    removeBtn.onclick = function () {
        gallery.removeChild(container);
    };

    container.appendChild(img);
    container.appendChild(removeBtn);
    gallery.appendChild(container);

    input.value = "";
}
