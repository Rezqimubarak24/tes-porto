initBattery()

function initBattery(){
          batteryPercentage = document.querySelector('.battery__percentage')
    navigator.getBattery().then((batt) =>{
        updateBattery = () =>{
            let level = Math.floor(batt.level * 100)
            batteryPercentage.innerHTML = level+ '%'
        }
        updateBattery()
    })
}

setInterval (() =>{
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = h >= 12 ? "PM" : "AM";
    if (h > 12){
      h = h -12;}
    h = (h <10 ) ? "0" + h : h;
    m = (m <10 ) ? "0" + m : m;
    s = (s <10 ) ? "0" + s : s;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am
})

function selected(){
    return document.getElementsByClassName('select')
}
function cColor() {
    let all = selected ();
    for (let i = 0; i < 1; i++) {
        let color = all[i].classList;
        if (color.contains('bg1')) {
            all[i].classList.add('bg2');
            all[i].classList.remove('bg1');
        }
        else if (color.contains('bg2')) {
            all[i].classList.add('bg3');
            all[i].classList.remove('bg2');
        }
        else if (color.contains('bg3')) {
            all[i].classList.add('bg4');
            all[i].classList.remove('bg3');
        }
        else if (color.contains('bg4')) {
            all[i].classList.add('bg5');
            all[i].classList.remove('bg4');
        }
        else if (color.contains('bg5')) {
            all[i].classList.add('bg6');
            all[i].classList.remove('bg5');
        }
        else if (color.contains('bg6')) {
            all[i].classList.add('bg7');
            all[i].classList.remove('bg6');
        }
        else if (color.contains('bg7')) {
            all[i].classList.add('bg8');
            all[i].classList.remove('bg7');
        }
        else if (color.contains('bg8')) {
            all[i].classList.add('bg1');
            all[i].classList.remove('bg8');
        }
    }
}
