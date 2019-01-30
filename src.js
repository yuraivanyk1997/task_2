 window.onload = function() {
     const button = document.getElementById("openModal"),
         close = document.getElementById("modalArea");
     button.addEventListener("click", function() {
         let count = parseInt(document.getElementById("countWindows").value),
             area = document.getElementById("modalArea");
             area.innerHTML = "";
         makeWindows(area, 0, count);
         area.children[0].style.opacity="0";
         setTimeout(() => area.children[0].style.opacity="1", 10);
     });
     close.addEventListener("click", function(event) {
     	 event.target.parentNode.style.opacity = "0";
         setTimeout(()=>event.target.parentNode.remove(), 1000);
     });




     function makeWindows(parent, i, count) {
         if (i === count) return;
         let modalContent = document.createElement("div");
         modalContent.setAttribute("class", "modal-content");
         let exit = document.createElement("span");
         exit.setAttribute("class", "close");
         exit.innerHTML = "&times";
         let text = document.createElement("p");
         text.innerHTML = "Модальне вікно";
         modalContent.appendChild(exit);
         modalContent.appendChild(text);
         parent.appendChild(modalContent);
         makeWindows(modalContent, ++i, count);
     }
 };