function toggleClick() {
  const button = document.querySelector(".button");
  const notificationWrapper = document.querySelectorAll(".notification");
  const notificationNumber = document.querySelector(".notification__number");
  const newMessageTag = document.querySelectorAll(".new");

  notificationWrapper.forEach((notification) => {
    if (notification.style.backgroundColor !== "hsl(0, 0%, 100%)") {
      notification.style.backgroundColor = "hsl(0, 0%, 100%)";
      notificationNumber.textContent = "0";
    } else {
      notification.style.backgroundColor = "hsl(211, 68%, 94%)";
      newMessageTag.style.display = "block";
    }
  });
  newMessageTag.forEach((newMessage) => {
    if (newMessage.style.display != "none") {
      newMessage.style.display = "none";
    }
  });
}

const button = document.querySelector(".button");
button.addEventListener("click", toggleClick);
