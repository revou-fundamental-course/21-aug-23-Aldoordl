function setTitle(element) {
    const text = element.innerText;
  
    document.title = `${text} - SMKN 1 PURWOSARI`;
  }

function resetTitle() {
  document.title = "Welcome to SMKN 1 Purwosari";
}
document.querySelector(".btn a").addEventListener("click", resetTitle);
 
var typed = new Typed(".typing",{
  strings:["","Aldoordl! ","People! ","Teacher! ","Student! "],
  typeSpeed:100,
  BakSpeed:60,
  loop:true
})