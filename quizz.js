var kansen = 3;
var correct = 0;

function startquiz(){
if (kansen == 0){
	alert('U heeft geen kansen meer over\nU bent af!')
}
	else if (prompt('Hoeveel is 10+32?') == 42){
		console.log('Dat was het goede antwoord!')
		alert('Dat was het goede antwoord!')
		correct++;
		document.getElementById('vragen').innerHTML= correct;
			if (prompt('Hoeveel is 7 x 8?') == 56){
				console.log('Dat was het goede antwoord!')
				alert('Dat was het goede antwoord!')
				correct++;
				document.getElementById('vragen').innerHTML= correct;
					if (prompt('Wat zit er in een zee naast water?') == 'zout'){
						console.log('Dat was het goede antwoord!')
						alert('Dat was het goede antwoord!')
						correct++;
						document.getElementById('vragen').innerHTML= correct;
							if(prompt('Hoe oud ben ik?') == 17){
								console.log('Dat was het goede antwoord!')
								alert('Dat was het goede antwoord!')
								correct++;
								document.getElementById('vragen').innerHTML= correct;
									if (prompt('Wanneer is vincent van gogh geboren?') == 1853){
										console.log('Dat was het goede antwoord!')
										alert('Dat was het goede antwoord!')
										correct++;
										document.getElementById('vragen').innerHTML= correct;
											if (prompt('Wat doe ik graag in mijn vrije tijd?') == 'anime kijken'){
												console.log('Dat was het goede antwoord!')
												alert('Dat was het goede antwoord!')
												correct++;
												document.getElementById('vragen').innerHTML= correct;
													if (prompt('hoelang heb ik aan deze quiz gewerkt?\nIn uren.') == 2){
														console.log('Dat was het goede antwoord!')
														alert('Dat was het goede antwoord!')
														correct++;
														document.getElementById('vragen').innerHTML= correct;
															if(prompt('Welke kleur heeft een goudvis meestal?') == 'oranje'){
																console.log('Dat was het goede antwoord!')
																alert('Dat was het goede antwoord!')
																correct++;
																document.getElementById('vragen').innerHTML= correct;
																	if (prompt('Hoelang duurt een voetbal wedstrijd meestal?\nIn minuten.') == 90){
																		console.log('Dat was het goede antwoord!')
																		alert('Dat was het goede antwoord!')
																		correct++;
																		document.getElementById('vragen').innerHTML= correct;
																			if (prompt(' Bij welke sport horen de termen strike en spare?') == 'bowlen'){
																				console.log('Dat was het goede antwoord!')
																				alert('Dat was het goede antwoord!')
																				correct++;
																				document.getElementById('vragen').innerHTML= correct;
																				alert('U heeft de quiz succesvol afgerond!')
}
else{
	this.wrong();
}
}
else{
	this.wrong();
}
}
else{
	this.wrong();
}
}
else{
	this.wrong();
}
}
else{
	this.wrong();
}
}
else{
	this.wrong();
}
}
else{
	this.wrong();
}
}
else{
	this.wrong();
}
}
else{
	this.wrong();
}
}
else{
	this.wrong();
}
}

function wrong(){
		if (kansen <= 3){
		kansen--;
		correct = 0;
		alert('Fout!\nU heeft nog ' + kansen + ' kansen over.')
		console.log('Fout! U heeft nog ' + kansen + ' kansen over.')
		this.startquiz();
		document.getElementById('vragen').innerHTML= correct;
}
}
