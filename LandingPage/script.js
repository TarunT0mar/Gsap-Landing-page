let tl = gsap.timeline()



tl.from("#small-img-div",{

height: 0,
duration: 1

})

gsap.from("#part2",{
    width: 0,
    duration: 1
})

gsap.from("#text",{
  height: 0,
  width:0,
   duration: 1,
    fontSize: 0
})

tl.from("#vertical-text",{
y: 1000,
duration: 1
})
