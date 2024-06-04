const todoInput = document.querySelector(".input");
const addButton = document.querySelector(".add-button");
const todoList = document.querySelector(".todo-list");
const deleteAll = document.querySelector(".delete-all");

addButton.addEventListener("click", () => {
	const content = todoInput.value;

	const newItem = document.createElement("li");

	newItem.textContent = content;
	if (todoInput.value === "") confirm("Vui lòng nhập nội dung")
	else {
		todoList.appendChild(newItem);

		const newDelete = document.createElement("button");
		newDelete.textContent = "Xóa";
		newItem.appendChild(newDelete);
		newDelete.style.marginLeft = "10px";

		const newComplete = document.createElement("button");
		newComplete.textContent = "Hoàn Thành";
		newItem.appendChild(newComplete);
		newComplete.style.marginLeft = "10px";

		newDelete.addEventListener("click", () => {
			newItem.remove();
		});

		newComplete.addEventListener("click", () => {
			newItem.classList.toggle("complete");
		});

		deleteAll.addEventListener("click", () => {
			newItem.remove();
		});

		todoInput.value = "";
	}
});