
// alert("connected");
const no = document.getElementById('no');
// button.style.background = 'blue';
no.addEventListener('mouseover', function () {
    // alert('you hovered over me');
    no.style.left = `${Math.ceil(Math.random() * 90)}%`;
    no.style.top = `${Math.ceil(Math.random() * 90)}%`;
});
no.addEventListener('click', function () {
    alert("You weren't supposed to say no...")
    // location.href = "https://lolajamesw.github.io/Valentines2025/no"
})

const yes = document.getElementById('yes');

yes.addEventListener('click', function() {
    location.href = "https://lolajamesw.github.io/Valentines2025/yes"
})


