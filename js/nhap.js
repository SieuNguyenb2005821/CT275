const validate1 = document.querySelector("#form-login1");
const validate2 = document.querySelector("#form-login2");

const handleValidate = (value, type) => {
  const isValid = (item, min) => new RegExp(`.{${min},}`).test(item);

  switch (type) {
    case "password":
      return isValid(value, 8);
    case "email":
      const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (value && emailReg.test(value)) {
        return true;
      }
      return false;
    case "text":
      return isValid(value, 4);
    case "textarea":
      return isValid(value, 10);
    default:
      throw new Error(value, type);
  }
};

const handleSubmit = (e, form) => {
  e.preventDefault();
  let isValid = true;

  for (let i = 0; i < form.length - 1; i++) {
    if (!handleValidate(form[i].value, form[i].type)) {
      alert(`${form[i].type} không hợp lệ!`);
      form[i].focus();
      isValid = false;
      break;
    }
  }

  if (isValid) {
    alert("Thành công");
    form.submit();
    for (let i = 0; i < form.length - 1; i++) {
      $(form[i]).val("");
    }
  }
};

validate1.addEventListener("submit", function (e) {
  handleSubmit(e, this);
});
validate2.addEventListener("submit", function (e) {
  handleSubmit(e, this);
});
//
$(".eye").click(function () {
  if ($(this).prev().attr("type") === "password") {
    $(this).prev().attr("type", "text");
    $(this).children().removeClass("fa-eye-slash");
    $(this).children().addClass("fa-eye");
  } else {
    $(this).prev().attr("type", "password");
    $(this).children().addClass("fa-eye-slash");
    $(this).children().removeClass("fa-eye");
  }
});
