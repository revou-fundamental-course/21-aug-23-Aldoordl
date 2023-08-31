// Set Title
function setTitle(element) {
  const text = element.innerText;

  document.title = `${text} - SMKN 1 PURWOSARI`;
}

// Reset
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

window.addEventListener('scroll', function() {

  // Cek apakah pengguna berada di bagian header
  const headerRect = document.querySelector('header').getBoundingClientRect();
  if (headerRect.top >= 0 && headerRect.bottom <= window.innerHeight) {
      // Kembalikan judul halaman ke judul default
      resetTitle();
  }
});

// Form
const form = document.getElementById("myForm");

// Fungsi untuk mengonversi tanggal menjadi format dd/mm/yyyy
function convertDateToDDMMYYYY(inputDate) {
    const dateParts = inputDate.split("-");
    if (dateParts.length === 3) {
      const year = dateParts[0];
      const month = dateParts[1];
      const day = dateParts[2];
      return `${day}/${month}/${year}`;
    } else {
      return inputDate; // Kembalikan tanggal asli jika format tidak sesuai
    }
  }
  

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman formulir

    // Validasi email
    const email = document.getElementById("email");
    if (!isValidEmail(email.value)) {
      alert("Email tidak valid");
      email.focus();
      return;
    }

    // Validasi tanggal
  const date = document.getElementById("date");
  const inputDate = date.value;
  const formattedDate = convertDateToDDMMYYYY(inputDate); // Konversi format tanggal
  if (!isValidDate(formattedDate)) {
    alert("Tanggal tidak valid");
    date.focus();
    return;
  }

    // Validasi gender
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
      alert("Pilih jenis kelamin");
      return;
    }

    // Validasi pesan
    const message = document.getElementById("message");
    if (message.value.trim() === "") {
      alert("Isi pesan tidak boleh kosong");
      message.focus();
      return;
    }

    // Jika semua validasi berhasil, formulir dapat dikirim
    alert("Formulir berhasil dikirim!");

    // Mendapatkan tanggal dan waktu saat ini
    const currentDateTime = new Date();

    // Mengonversi tanggal dan waktu menjadi format dd/mm/yyyy hh:mm:ss
    const day = currentDateTime.getDate().toString().padStart(2, '0');
    const month = (currentDateTime.getMonth() + 1).toString().padStart(2, '0'); // Bulan dimulai dari 0, jadi perlu ditambah 1
    const year = currentDateTime.getFullYear();
    const hours = currentDateTime.getHours().toString().padStart(2, '0');
    const minutes = currentDateTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentDateTime.getSeconds().toString().padStart(2, '0');

    const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

    // Menampilkan tanggal dan waktu saat ini dalam elemen
    document.getElementById("sender-current-datetime").textContent = formattedDateTime;


    // Menampilkan data yang diinputkan ke dalam elemen-elemen
    document.getElementById("sender-email").textContent = document.getElementById("email").value;
    document.getElementById("sender-bday-date").textContent = document.getElementById("date").value;
    const selectedGender = document.querySelector('input[name="gender"]:checked').value;
    document.getElementById("sender-gender").textContent = selectedGender;
    document.getElementById("sender-msg").textContent = document.getElementById("message").value;

    form.reset(); // Reset formulir setelah pengiriman
  });

  // Fungsi validasi email sederhana
  function isValidEmail(email) {
    // Anda dapat menambahkan logika validasi email sesuai kebutuhan
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function isValidDate(date) {
    // Anda dapat menambahkan logika validasi tanggal sesuai kebutuhan
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    return dateRegex.test(date);
  }
  