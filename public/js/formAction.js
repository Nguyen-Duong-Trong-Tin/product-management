const createInputHidden = (checkboxs) => {
  const ids = [];
  checkboxs.forEach(checkbox => ids.push(checkbox.value));

  const inputHidden = document.createElement("input");
  inputHidden.type = "hidden";
  inputHidden.name = "ids";
  inputHidden.value = ids;

  return inputHidden;
}

const checkboxAll = document.querySelector("input[name=checkbox-all]");
if (checkboxAll) {
  checkboxAll.addEventListener("change", (e) => {
    const checked = e.target.checked;

    const checkboxs = document.querySelectorAll("input[name=checkbox]");
    checkboxs.forEach(checkbox => {
      checkbox.checked = checked;
    });
  });
}

const formAction = document.querySelector("[form-action]");
if (formAction) {
  formAction.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = e.target.elements.action.value;


    switch (value) {
      case "delete": {
        const checkboxs = document.querySelectorAll("input[name=checkbox]:checked");
        if (!checkboxs.length) {
          return;
        }

        if (!confirm("Bạn có chắc muốn xóa?")) {
          return;
        }

        const inputHidden = createInputHidden(checkboxs);
        formAction.append(inputHidden);

        formAction.submit();
        break;
      }

      default: {
        console.log("NO");
      }
    }
  });
}