// TODO:
	// function clickBox: Click box as "X" or "O" pending currentPlayer
	// function stopClickingBox = Alert user box is already selected
	// function winner = Stops game. Displays winning player.
	// function draw = Stops game when all boxes are filled & no winner
	// function reset = Clears all boxes in table
	// function playerBox = Change color & currentPlayer

$(function() {

	var turnCount = 0;

	/**
	 * On click, adds X or O pending turnCount.
	 * Then, checksVictory after click.
	 * After, checkVictory adds +1 to turnCount.
	 */
	$('#board').find('td').on('click', function() {

		if (turnCount % 2 === 0) {
			$(this).text('X');
			$('#current-player').text('Player 2');
			$(this).css('color', 'black');
			$('#current-player').css('color', 'blue')
			checkVictory('X');
		} else {
			$(this).text('O');
			$('#current-player').text('Player 1');
			$(this).css('color', 'blue');
			$('#current-player').css('color', 'black')
			checkVictory('O');
		}

		turnCount++;
	});


	/**
	 * Checks if there's a match in a row
	 * @param player - Checks if player 1 or player 2
	 */
	function checkVictory(player) {

		// top row check
		if ($('#box1').text() !== '') {
			if ($('#box1').text() == $('#box2').text()) {
				if ($('#box1').text() == $('#box3').text()) {
					alert("Game over!");
				}
			}
		}

		// middle row check
		if ($('#box4').text() !== '') {
			if ($('#box4').text() == $('#box5').text()) {
				if ($('#box4').text() == $('#box6').text()) {
					alert("Game over!");
				}
			}
		}

		// bottom row check
		if ($('#box7').text() !== '') {
			if ($('#box7').text() == $('#box8').text()) {
				if ($('#box7').text() == $('#box9').text()) {
					alert("Game over!");
				}
			}
		}

		// top left to bottom right diagonal check
		if ($('#box1').text() !== '') {
			if ($('#box1').text() == $('#box5').text()) {
				if ($('#box1').text() == $('#box9').text()) {
					alert("Game over!");
				}
			}
		}

		// top right to bottom left diagonal check
		if ($('#box3').text() !== '') {
			if ($('#box3').text() == $('#box5').text()) {
				if ($('#box3').text() == $('#box7').text()) {
					alert("Game over!");
				}
			}
		}

		// left column check
		if ($('#box1').text() !== '') {
			if ($('#box1').text() == $('#box4').text()) {
				if ($('#box1').text() == $('#box7').text()) {
					alert("Game over!");
				}
			}
		}

		//middle column check
		if ($('#box2').text() !== '') {
			if ($('#box2').text() == $('#box5').text()) {
				if ($('#box1').text() == $('#box8').text()) {
					alert("Game over!");
				}
			}
		}

		//right column check
		if ($('#box3').text() !== '') {
			if ($('#box3').text() == $('#box6').text()) {
				if ($('#box3').text() == $('#box9').text()) {
					alert("Game over!");
				}
			}
		}

	};

	$('#reset').on('click', function() {
		$('td').text('');
	});


});