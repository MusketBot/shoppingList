 const list = document.querySelector("ul");
 const input = document.querySelector("input");
 const btn = document.querySelector("button");
 btn.addEventListener("click", () => {
  const item = input.value.trim();
  if (!item) {
    return;
  }
  input.value = "";
  const listItem = document.createElement("li");
  const listText = document.createElement("span");
  const listBtn = document.createElement("button");
  listItem.appendChild(listText);
  listText.textContent = item;
  listItem.appendChild(listBtn);
  listBtn.textContent = "Delete";
  list.appendChild(listItem);
  listBtn.addEventListener("click", () => {
    list.removeChild(listItem);
  });
  input.focus();
 });