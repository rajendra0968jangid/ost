// function copyToClipboard1(ip) {
//   navigator.clipboard.writeText(ip).then(() => {
//     // alert("Copied: " + ip);
//   });
// }

// changes on
// List of IPs (this can come from API, backend, or config)

const ipAddresses = [
  "54.242.98.211", 
"3.91.27.207",
"54.209.79.107",
"100.54.146.66",
"3.91.7.150",
];

const v = "15:16:00";
const startTime = new Date(`2026-03-05T${v}`).getTime();
const counter = "countdown" // countdown | countdown1
////////////aws cloud
//////////////////////
const ipAddresses1 = [
  "https://449962745516.signin.aws.amazon.com/console?region=us-east-1",
  "kk_labs_user_131044",
  "aKM7cD0!Fy@g",
];
// changes off


// Render IP list into the container
// const ipGrid1 = document.getElementById("ipGrid1");
// ipAddresses1.forEach((ip) => {
//   const div = document.createElement("div");
//   div.classList.add("ip-item");
//   div.innerHTML = `
//     ${ip} 
//     <button class="copy-btn" onclick="copyToClipboard1('${ip}')">
//       <i class="fas fa-copy"></i> Copy
//     </button>
//   `;
//   ipGrid1.appendChild(div);
// });
////////////////////
///////// aws

// Render IP list into the container
const ipGrid = document.getElementById("ipGrid");
ipAddresses.forEach((ip) => {
  const div = document.createElement("div");
  div.classList.add("ip-item");
  div.innerHTML = `
    ${ip} 
    <button class="copy-btn" onclick="copyToClipboard('ssh ubuntu@${ip}')">
      <i class="fas fa-copy"></i> Copy
    </button>
  `;
  ipGrid.appendChild(div);
});

// Copy to clipboard function
function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      // alert(`Copied: ${text}`);
    })
    .catch((err) => {
      console.error("Copy failed", err);
    });
}

// Set a fixed global start time (same for everyone)
// Example: August 23, 2025 07:00 UTC

// Duration (3 hours in milliseconds)
const duration = 3 * 60 * 60 * 1000;

// Calculate end time
const endTime = startTime + duration;

function updateCountdown(ct) {
  const now = Date.now();
  const distance = endTime - now;

  if (distance <= 0) {
    document.getElementById(`${ct}`).innerHTML = "00:00:00";
    clearInterval(timer);
    return;
  }

  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById(`${ct}`).innerHTML =
    hours + "h " + minutes + "m " + seconds + "s ";
}

// Run immediately and then every second
updateCountdown(counter);
const timer = setInterval(() => updateCountdown(counter), 1000);
