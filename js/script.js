//Remember you cases

var doSomeCoolShit = function (){
	var currentClassName = document.getElementById('cool').className;
	document.getElementById('cool');
	cool.className = 'cool red';

	if (currentClassName == 'cool' ) {
		document.getElementById('cool').className = 'cool red';
	} else { 
		document.getElementById('cool').className = 'cool';
	}

}


var makeAceConfused = function () {
	alert('fishy fishy fishyyyyyy')
}


var car = {
			make: 'Lexus',
			model: 'GS-300',
			color: 'gold',
			isTurnedOn: false,
			numberOfWheels: 4,
			seats:
			 ['seat 1', 'seat 2', 'seat 3', 'seat 4', 'center seat'],
			 turnOn: function () {
			 	this.isTurnedOn = true;
			 },
			 fly: function () {
			 	alert('fly');
			 },
			 switchCar: function (isOn) {
			 console.log('turn car'+isOn);
			 	if (isOn == true) {
			 		this.isTurnedOn = true;
			 		} else {
			 			this.isTurnedOn = false
			 		}

			 	}
			 };