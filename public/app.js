let textcontent = document.getElementById('textcontent');
let itemsBoxs = document.getElementById('itemsBoxs');

let img = document.getElementById('img');
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img4 = document.getElementById('img4');
let img3 = document.getElementById('img3');

const animate = () => {
let view = textcontent.getBoundingClientRect()
let viewPoint = itemsBoxs.getBoundingClientRect()
let check = view.top < innerHeight && view.bottom > 10
let checkPoint = viewPoint.top < innerHeight && viewPoint.bottom > 10
if(check){

    let aisX = window.scrollY;
    let aisY = window.scrollY;
    let rotateVal = aisY ;  
    let screen = innerWidth / 2
    let imag = img.offsetWidth / 2
    let imag1 = img3.offsetWidth / 2
    let imag2 = img4.offsetWidth / 2
    let imag3 = img2.offsetWidth / 2
    let set  = screen - imag  
    let set1  = (screen - imag1) + 180  
    let set2  = (screen - imag2 ) + 180 
    let set3  = (screen - imag3 ) - 200
    if (aisX < 500) {
        img.style.transform =
            `translateX(${aisX < 300 ? -aisX  :  -set + 80}px) translateY(${(aisY * 1.5)+80}px) rotate(${rotateVal < 180 ? rotateVal / 2 * 2.5 : '360' }deg)`;
            img1.style.transform =
            `translateX(${aisX < 300 ? -aisX  :  -set +80}px) translateY(${(aisY * 1.5)+200}px)  rotate(${rotateVal < 180 ? rotateVal / 2 * 2.5 : '360' }deg)`;
            img3.style.transform =
            `translateX(${aisX < 300 ? aisX  :  set1}px) translateY(${(aisY * 1.5 )+ 150}px) skewX(${aisX < 300? rotateVal / 5 : 0}deg) rotate(${rotateVal < 180 ? rotateVal / 2 * 2.5 : '45' }deg)`;
            img2.style.transform =
            `translateX(${aisX < 300 ? aisX  :  set3}px) translateY(${aisY < 300 ? aisY * 1.5 : set3 + 220}px) rotate(${rotateVal < 180 ? rotateVal / 2 * 2.5 : '45' }deg)`;
            img4.style.transform =
            `translateX(${aisX < 300 ? -aisX  :  -set2}px) translateY(${(aisY * 1.5)+140}px) rotate(${rotateVal < 180 ? rotateVal / 2 * 2.5 : '360' }deg)`;
        }
        
    }
    else if(checkPoint){
        let aisX = window.scrollY;
    let aisY = window.scrollY;
    let screenSecion = innerWidth / 2
    let itemsWidth = itemsBoxs.offsetWidth / 2
    let saveData = screenSecion - itemsWidth 
    
    if (aisX < 800) {
        img.style.transform =
            `translateX(${aisX < 480 ? aisX  :  saveData+10}px) translateY(${(aisY * 1.5)-110}px)`;
            img1.style.transform =
            `translateX(${aisX < 480 ? aisX  :  saveData+70}px) translateY(${(aisY * 1.5)-110}px)`;
                   
    }   
    }

}

animate();
window.addEventListener("scroll", animate);
window.addEventListener("resize", animate);

const newAnimate = ()=>{
    let one = document.getElementById('oneOne');
let two = document.getElementById('twoTwo');
    let view = itemsBoxs.getBoundingClientRect()
    let checke = view.top < innerHeight -100 && view.bottom > 0
    if(checke){
        one.classList.add('showOne')
        two.classList.add('showTwo')
        console.log('run');
        
    }else{
        one.classList.remove('showOne')
        two.classList.remove('showTwo')
    }
}
newAnimate()

window.addEventListener('scroll' , newAnimate)




