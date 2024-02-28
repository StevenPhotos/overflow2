let projects = document.querySelectorAll('.project');
projects.forEach(project =>{
  let randomNum = Math.floor(Math.random() * 20) - 10;
  project.style.rotate = `${randomNum}deg`;
})

let bodyHeight = document.documentElement.scrollHeight;
console.log(bodyHeight);
let viewportHeight = document.documentElement.clientHeight;
console.log(viewportHeight);
let scrollTop = document.documentElement.scrollTop;
let percentage = scrollTop / (bodyHeight - viewportHeight);

window.addEventListener('scroll', ()=>{
  scrollTop = document.documentElement.scrollTop;

  percentage = scrollTop / (viewportHeight) * 100;
  console.log(percentage);

  changeStyle(0, 88, '.text-skew-1', 'transform', 120, 0, 'skew(-5deg) translate(','%, 0)');
  changeStyle(25, 88, '.text-skew-2', 'transform', -120, 0, 'skew(-2deg) translate(','%, 0)');
})

function changeStyle(firstPerc, secPerc, element, attr, firstVal, secVal, preVal='', postVal=''){
  let newElement = document.querySelector(element);
  if(percentage > firstPerc && percentage < secPerc){
    newElement.style[attr] = preVal + (firstVal - ((firstVal - secVal) * ((percentage - firstPerc) / (secPerc - firstPerc)))) + postVal;
  }
  else if(percentage > secPerc){
    newElement.style[attr] = preVal + secVal + postVal;
  }
}