function setTitle(element) {
    const text = element.innerText;
  
    document.title = `${text} - SMKN 1 PURWOSARI`;
  }

function resetTitle() {
  document.title = "Welcome to SMKN 1 Purwosari";
}
document.querySelector(".btn a").addEventListener("click", resetTitle);
 
// Cek apakah pengguna telah memberikan nama sebelumnya di localStorage
const storedName = localStorage.getItem('user');
if (storedName) {
    document.getElementById("name").innerHTML = storedName;
} else {
    // Jalankan replaceName jika nama belum ada
    replaceName();
}

// Fungsi untuk mengganti nama
function replaceName() {
    let name = prompt("What's your name?", "");
    if (name !== null && name.trim() !== "") {
        document.getElementById("name").innerHTML = name;
        // Simpan nama di localStorage agar bisa digunakan pada kunjungan berikutnya
        localStorage.setItem('user', name);
    }
}

// Tambahkan event listener ke tombol
document.getElementById('tombol').addEventListener("click", function() {
    replaceName();
});

// typed.js
var typed = new Typed(".typing",{
  strings:["People! ","Teacher! ","Student! "],
  typeSpeed:100,
  BakSpeed:60,
  loop:true
})