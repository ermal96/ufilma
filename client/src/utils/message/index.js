import "./index.scss";

const dom = document.createElement("div");

function Message() {
  dom.classList.add("ufilma-message");
  window.onload = () => document.getElementById("root").appendChild(dom);
}

Message.prototype.show = function (content, duration = 3000, type = "info", onClose = Function.prototype) {
  const contentBox = document.createElement("div");
  const contentDom = document.createElement("span");
  const icon = document.createElement("i");
  icon.classList.add(type);
  icon.classList.add("ufilma-message-icon");
  contentDom.innerText = content;
  contentBox.classList.add("ufilma-content-box");
  contentBox.classList.add("animate-in");
  contentBox.appendChild(icon);
  contentBox.appendChild(contentDom);
  contentBox.style.top = `${this.count * 50}px`;
  dom.appendChild(contentBox);

  this.count++;

  // remove message box after duration
  setTimeout(() => {
    contentBox.classList.add("animate-out");
    setTimeout(() => {
      dom.removeChild(contentBox);

      const boxs = document.querySelectorAll(".ufilma-content-box");
      for (let i = 0; i < boxs.length; i++) {
        boxs[i].style.top = `${parseInt(boxs[i].style.top, 10) - 50}px`;
      }
      this.count--;

      if (typeof onClose === "function") onClose();
    }, 300);
  }, duration);
};

// API
["success", "error", "warn", "info"].forEach((method) => {
  Message.prototype[method] = function (content, duration, onClose) {
    this.show(content, duration, method, onClose);
  };
});

// the count of messages already exist
Message.prototype.count = 0;

export default new Message();
