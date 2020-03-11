

const bob =  popmotion.styler(document.querySelector('.johnny'))

  popmotion.tween({
	from:{
		scale: .7,
		opacity:0
		
	},
	to:{
		scale: 1,
		opacity:1


	},
	duration: 1000
}).start(bob.set)


const wrapper =  popmotion.styler(document.querySelector('.wrapper'))

popmotion.tween({
	from:{
		scale: .7,
		opacity:0
		
	},
	to:{
		scale: 1,
		opacity:1


	},
	duration: 1000
}).start(wrapper.set)

function myMove(){
	const textOne = document.querySelector('.carousel-caption-one')
    textOne.classList.add('animated', 'bounceInLeft', 'delay-1s')

    const textTwo = document.querySelector('.carousel-caption-two')
    textTwo.classList.add('animated', 'bounceInLeft', 'delay-1s')

    const textThree = document.querySelector('.carousel-caption-three')
    textThree.classList.add('animated', 'bounceInLeft', 'delay-1s')
}
myMove();

 

 const brandTitle = document.querySelector('.title-items')
    brandTitle.classList.add('animated', 'bounceInLeft', 'delay-1s')

brandTitle.addEventListener('animationend', function() { 
	document.getElementById("feedback").innerHTML = 5 + 6;
});



