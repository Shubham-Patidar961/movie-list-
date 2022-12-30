// selacting element//
const listitem = document.querySelectorAll(".list-item");
console.log(listitem.length);
console.log(listitem);

// selacting multiple elemnet //
i = 0;
setInterval(() => {
  const first = document.querySelector(".change");
  first.classList.remove("change");
  if (i >= listitem.length) {
    i = 0;
    listitem[0].classList.add("change");
  } else {
    listitem[i].classList.add("change");
  }
  i++;
}, 2000);
