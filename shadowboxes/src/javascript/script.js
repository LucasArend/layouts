// const nodeList = document.querySelectorAll(".itemflex");
// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry =>{
//         if(entry.isIntersecting){
//             console.log(entry.isIntersecting);
//             for (let i = 0; i < nodeList.length; i++) {
//                 if(i%2 === 0){
//                     setTimeout(() => {  nodeList[i].classList.add("fadeInLeft") }, 250 * (i+1));
                    
//                 }
//                 else{
//                     setTimeout(() => {  nodeList[i].classList.add("fadeInRight") }, 250 * i);
//                 }
//             }
//         }
//     })
// }) 


// observer.observe(document.querySelector(".gridflex"))

const animationLeft = (entries) => {
    entries.forEach(entry => {
         entry.target.classList.toggle("fadeInLeft", entry.isIntersecting);
    });
  };
  
  const ObsLeft = new IntersectionObserver(animationLeft);
  const obsOptions = {}; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options
  
  // Attach observer to every [data-inviewport] element:
  const ELs_inViewport = document.querySelectorAll('.itemflex');
  ELs_inViewport.forEach(EL => {
            ObsLeft.observe(EL, obsOptions);
    
  });
  