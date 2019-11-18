// ===========================================
//
//              HTML Functions
//
// ===========================================

function showInstructions()
{
	document.getElementById("instructions").style.display = 'block';
	var sound = document.getElementById("sound");
	sound.play();
}
function chooseOpponent()
{
	document.getElementById("chooseOpponent").style.display = 'block';
	document.getElementById("instructions").style.display = 'none';
}

function hideIntroduction()
{
	document.getElementById("instructions").style.display = 'none';
	document.getElementById("chooseOpponent").style.display = 'none';
	document.getElementById("title").style.display = 'none';
	document.getElementById("opponentIntroQuote").style.display = 'none';
}
function setComName(name)
{
	comName = name;
	document.getElementById("startButton").style.display = 'inline';
	document.getElementById("instructionButton").style.display = 'none';
	document.getElementById("instructions").style.display = 'none';
	document.getElementById("opponentButton").style.display = 'none';
	document.getElementById("opponentIntroQuote").innerHTML = randomIntroQuote(name);
	document.getElementById("opponentIntroQuote").style.display = 'block';
	if(name == "Cookie Monster")
	{
		document.getElementById("introShrek").style.display = 'none';
		document.getElementById("introVader").style.display = 'none';
		document.getElementById("introThanos").style.display = 'none';
	}
	else if(name == "Shrek")
	{
		document.getElementById("introCookie").style.display = 'none';
		document.getElementById("introVader").style.display = 'none';
		document.getElementById("introThanos").style.display = 'none';
	}
	else if(name == "Darth Vader")
	{
		document.getElementById("introShrek").style.display = 'none';
		document.getElementById("introCookie").style.display = 'none';
		document.getElementById("introThanos").style.display = 'none';
	}
	else if(name == "Thanos")
	{
		document.getElementById("introShrek").style.display = 'none';
		document.getElementById("introVader").style.display = 'none';
		document.getElementById("introCookie").style.display = 'none';
	}
}

// a helper function to return a random element of a list
function randomElement(list)
{
	let randomIndex = Math.floor(Math.random()*list.length);
	return list[randomIndex];
}
// fun introductory quotes
function randomIntroQuote(name)
{
	if(name == "Cookie Monster")
	{
		return randomElement(["\"C is for cookie, that's good enough for me.\"",
			                  "\"Me want cookie!!!\""]);
	}
	else if(name == "Shrek")
	{
		return randomElement(["\"WHAT are you doing IN MY SWAMP?!?!\"",
			 "\"I live in a swamp! I put up signs! I'm a terrifying ogre!" +
			 " What do I have to do to get a little privacy?!\""]);
	}
	else if(name == "Darth Vader")
	{
		return randomElement(["\"Don't make me destroy you.\"",
			                  "\"Now release your anger. Only your hatred can destroy me.\""])
	}
	else if(name == "Thanos")
	{
		return randomElement(["\"When I'm done, half of humanity will still exist. " +
				"Perfectly balanced, as all things should be. I hope they remember you.\"",
				"\"Dread it. Run from it. Destiny still arrives. Or should I say, I have.\"",
				"\"Fine. I'll do it myself.\"",
				"\"But I'll tell you now, what I'm about to do to you, I'm gonna enjoy it. Very, very much.\"",
				"\"You're not the only one cursed with knowledge.\""]);
	}
}

// When the game is over, hide the canvas and display the score
function gameOver()
{
	canvas.style.display="none";
	document.getElementById("gameOverScreen").style.display = 'block';
	document.getElementById("rematchButton").style.display = 'inline';
	document.getElementById("responseQuote").style.display = 'block';
	document.getElementById("score").innerHTML = p.getScore() + "-" + c.getScore();
	if(p.getScore() > c.getScore())
	{
		document.getElementById("resultStatement").innerHTML = "You beat " + comName + "!";
		document.getElementById("responseQuote").innerHTML = defeatQuote(comName);
	}
	else if(p.getScore() == c.getScore())
	{
		document.getElementById("resultStatement").innerHTML = "You tied " + comName;
	}
	else
	{
		document.getElementById("resultStatement").innerHTML = "You lost to " + comName;
		document.getElementById("responseQuote").innerHTML = victoryQuote(comName);
	}
	
}

function prepareRematch()
{
	document.getElementById("rematchButton").style.display = 'none';
	document.getElementById("responseQuote").style.display = 'none';
	document.getElementById("tauntQuote").style.display = 'block';
	document.getElementById("tauntQuote").innerHTML = tauntQuote(comName);
	document.getElementById("startRematch").style.display = 'inline';
}

// what the computer says after winning
function victoryQuote(name)
{
	if(name == "Thanos")
	{
		return "\"I know what it's like to lose. " +
				"To feel so desperately that you're right, yet to fail nonetheless. It's frightening.\"";
	}
	else if(name == "Darth Vader")
	{
		return "\"The circle is now complete. When I left you, I was but the learner. Now I am the master.\"";
	}
	else if(name == "Cookie Monster")
	{
		return "\"Cookie?\"";
	}
	else if(name == "Shrek")
	{
		return "";
	}
}

function defeatQuote(name)
{
	if(name == "Thanos")
	{
		return "\"You have my respect.\"";
	}
	else if(name == "Darth Vader")
	{
		return "\"Obi Wan has taught you well.\"";
	}
	else if(name == "Cookie Monster")
	{
		return "\"Cookie?\"";
	}
	else if(name == "Shrek")
	{
		return "";
	}
}

// What the computer says when the human requests a rematch
function tauntQuote(name)
{
	if(name == "Thanos")
	{
		return "\"You could not live with your failure. And where did that bring you? Back to me.\"";
	}
	else if(name == "Darth Vader")
	{
		return "\"Be careful not to choke on your aspirations.\"";
	}
	else if(name == "Shrek")
	{
		return "\"LEAVE ME ALONE!\"";
	}
	else if(name == "Cookie Monster")
	{
		return "\"Cookie!\"";
	}
}

function hideRematch()
{
	document.getElementById("tauntQuote").style.display = 'none';
	document.getElementById("startRematch").style.display = 'none';
}
// ===========================================
//
//           Background Functions
//
// ===========================================


function fillBackground()
{
	// clear around the player
	let r = p.getRadius();
	ctx.clearRect(p.getPrevX() - r, p.getPrevY() - r, 2*r, 2*r);
	ctx.fillStyle = "#bbccff";
	ctx.fillRect(p.getPrevX() - r - 1, p.getPrevY() - r - 1, 2*r + 2, 2*r + 2);
	
	// clear around the player missile
	if(activePlayerMissile)
	{
		ctx.clearRect(playerMissile.getPrevX() - 5, playerMissile.getPrevY() - 5, 10, 10);
		ctx.fillStyle = "#bbccff";
		ctx.fillRect(playerMissile.getPrevX() - 7, playerMissile.getPrevY() - 7, 14, 14);
	}
	
	// clear around the com
	r = c.getRadius();
	ctx.clearRect(c.getPrevX() - r, c.getPrevY() - r, 2*r, 2*r);
	ctx.fillStyle = "#bbccff";
	ctx.fillRect(c.getPrevX() - r - 1, c.getPrevY() - r - 1, 2*r + 2, 2*r + 2);
	
	// clear around the com missile
	if(activeComMissile)
	{
		ctx.clearRect(comMissile.getPrevX() - 5, comMissile.getPrevY() - 5, 10, 10);
		ctx.fillStyle = "#bbccff";
		ctx.fillRect(comMissile.getPrevX() - 7, comMissile.getPrevY() - 7, 14, 14);
	}
	
	// Draw the border again in case the player erased part of it
	drawBorder();
}

function refreshAll()
{
	// Make the original background
	ctx.clearRect(0, 0, width, height);
	ctx.fillStyle = "#bbccff";
	ctx.fillRect(0, 0, width, height);

	// draw the hexagons
	let l = hexagons.length;
	for(let i = 0; i < l; i++)
	{
		hexagons[i].draw();
	}
	
	// draw the player, and missile if applicable
	p.draw()
	if(activePlayerMissile)
	{
		playerMissile.draw();
	}
	
	// draw the com, and missile if applicable
	c.draw();
	if(activeComMissile)
	{
		comMissile.draw();
	}
	
	// Put the border line in
	ctx.beginPath();
	ctx.moveTo(0, height);
	ctx.strokeStyle = "black";
	ctx.lineTo(width, height);
	ctx.stroke();
}

// clears around the bottom line and draws it
function drawBorder()
{
	ctx.clearRect(0, height - 2, width, height + 2);
	ctx.fillStyle = "#bbccff";
	ctx.fillRect(0, height - 2, width, height + 2);
	ctx.beginPath();
	ctx.moveTo(0, height);
	ctx.strokeStyle = "black";
	ctx.lineTo(width, height);
	ctx.lineTo(width, 0);
	ctx.lineTo(0, 0);
	ctx.lineTo(0, height);
	ctx.stroke();
}


// choosing colors for the hexagons
function number2color(x)
{
	if(x < 10)
	{
		return "teal";
	}
	else if(x < 20)
	{
		return "teal";
	}
	else if(x < 30)
	{
		return "teal";
	}
	else if(x < 40)
	{
		return "teal";
	}
	else if(x < 50)
	{
		return "silver";
	}
	else if(x < 60)
	{
		return "silver";
	}
	else if(x < 70)
	{
		return "silver";
	}
	else if(x < 80)
	{
		return "gold";
	}
	else if(x < 90)
	{
		return "gold";
	}
	return "gold";
}

// =================================
//
//         Helper Functions
//
// =================================

// Returns the number of decimal digits that n has,
// assuming n is positive
function numDigits(n)
{
	if(n == 0)
	{
		return 1;
	}
	return Math.floor(Math.log(n)/Math.LN10) + 1;
}

function randomTwoDigit()
{
	return Math.floor(Math.random()*100);
}

//the Euclidean distance formula
function distanceFormula(x1, y1, x2, y2)
{
	return Math.sqrt((x1 - x2)*(x1 - x2) + (y1 - y2)*(y1 - y2));
}

// Returns the distance between the centers of two regular hexagons
// that share a side and both have sideLength
function hexagonCenterDistance(sideLength)
{
	// apply law of Cosines
	return sideLength*Math.sqrt(3); // that was easier than I thought
}

function isPrime(n)
{
	if(n == 1)
	{
		return false;
	}
	else if (n < 4)
	{
		return true;
	}
	for(let i = 2; i <= Math.floor(Math.sqrt(n)); i++)
	{
		if(n % i == 0)
		{
			return false;
		}
	}
	return true;
}

//Returns the directed distance between the point (m, n) and the line Ax + By + C = 0
function directedDistance(A, B, C, m, n)
{
    return Math.abs(A*m + B*n + C) / Math.sqrt(A*A + B*B);
}

//returns the distance from (px, py) to the line with slope slope passing through (x0, y0)
function distanceToLine(slope, x0, y0, px, py)
{
	if(slope == Infinity)  // vertical line
	{
		return(Math.abs(x0 - px));
	}
    let A = slope;
    let B = -1;
    let C = y0 - slope*x0;
    return directedDistance(A, B, C, px, py);
}

//Given a line determined by slope, x1, and y1, this returns the closest point
//to (px, py)
function directedIntersection(slope, x1, y1, px, py)
{
	// if it's a horizontal line, just go up or down from (px, py)
 if(slope == 0)
 {
 	return [px, y1];
 }
 // if it's a vertical line, just go left or right
 if(slope == Infinity)
 {
 	return [x1, py];
 }
 let xCoord = (py + px/slope - y1 + slope*x1) / (slope + 1/slope);
 let yCoord = slope*xCoord + y1 - slope*x1;
 return [xCoord, yCoord];
}

//Returns true if the line through (px, py) which is perpendicular to the line
//through (x1, y1) and (x2, y2) actually intersects the segment between those two.
function intersectsSegment(x1, y1, x2, y2, px, py)
{
	if(x1 == x2) // if the segment is vertical
	{
		return y1 <= py && py <= y2;
	}
	let slope = (y2 - y1) / (x2 - x1);
    let xCoord = directedIntersection(slope, x1, y1, px, py)[0];
    return x1 <= xCoord  && xCoord <= x2;
}

function intersectsLine(ln, px, py)
{
    return intersectsSegment(ln.getX1(), ln.getY1(), ln.getX2(), ln.getY2(), px, py);	
}

//Returns true if the circle specified is intersection the given wall (line segment)
function circleIntersectsLine(ln, x, y, radius)
{
    if(intersectsLine(ln, x, y) && distanceToLine(ln.getSlope(), ln.getX1(), ln.getY1(), x, y) <= radius)
    {
    	return true;
    }
    if(distanceFormula(x, y, ln.getX1(), ln.getY1()) <= radius)
    {
    	return true;
    }
    if(distanceFormula(x, y, ln.getX2(), ln.getY2()) <= radius)
    {
    	return true;
    }
    return false;
}


//helper function to get the angle from (x1, y1) to (x2, y2)
//returns an angle between 0 and 2Pi
//Just so you know, angles are measured clockwise from the normal direction
//So Q1 is bottom right, Q2 is bottom left, and so on.
function angleFrom(x1, y1, x2, y2)
{
	let xdif = x2 - x1;
	let ydif = y2 - y1;
	let angle = Math.atan(ydif / xdif);
	if(xdif == 0 && ydif == 0) // 0/0 is fun
	{
		return Infinity;
	}
	if(xdif < 0)  // since atan has a limited range
	{
		angle += Math.PI;
	}
	if(angle < 0)  // if greater than Pi, make it negative
	{
		angle += 2*Math.PI;
	}
	return angle;
}

// Returns true if the given hexagon can make one of its neighbors prime
// if it is removed
function canMakePrime(h, hexagons)
{
	let nbs = h.getNeighbors(hexagons);
	let v = h.getValue();
	for(let i = 0; i < nbs.length; i++)
    {
	    if(isPrime((v + nbs[i].getValue()) % 100))
	    {
	    	return true;
	    }
    }
	return false;
}

// How many points you can get in one turn by hitting this hexagon
function oneTurnScore(h, hexagons)
{
	if(isPrime(h.getValue()))
	{
		return h.getValue();
	}
	return 0;
}


// This returns the max that you could get in two turns by hitting
// this hexagon and then one of its neighbors
function twoTurnScore(h, hexagons)
{
	let score = 0;
	let max, nbs;
	if(isPrime(h.getValue()))
	{
		score += h.getValue();
		max = 0;
		nbs = h.getNeighbors(hexagons);
		for(let i = 0; i < nbs.length; i++)
		{
			if(isPrime(nbs[i].getValue()) && nbs[i].getValue() > max)
			{
				max = nbs[i].getValue();
			}
		}
		score += max;
	}
	else
	{
		max = 0;
		nbs = h.getNeighbors(hexagons);
		for(let i = 0; i < nbs.length; i++)
		{
			let sumScore = (nbs[i].getValue() + h.getValue()) % 100;
			if(isPrime(sumScore) && sumScore > max)
			{
				max = sumScore;
			}
		}
		score += max;
	}
	return score;
}

// This helper function returns a copy of hexagons with h removed (assuming h only occurs once)
function removeCopy(h, hexagons)
{
	let copy = [];
	for(let i = 0; i < hexagons.length; i++)
	{
		if(h != hexagons[i])
		{
			copy.push(hexagons[i]);
		}
	}
	return copy;
}

// A hexagon class just for the purpose of the AI
function fakeHexagon(x, y, value)
{
	this.x = x;
	this.y = y;
	this.value = value;
	this.getNeighbors = function(fakeHexagons)
	{
		let neighbors = [];
		for(let i = 0; i < fakeHexagons.length; i++)
		{
			let h = fakeHexagons[i];
			let distance = distanceFormula(this.getCenterX(), this.getCenterY(), h.getCenterX(), h.getCenterY());
			if(distance < hexagonCenterDistance(20) + 5 && distance > 0)
			{
				neighbors.push(h);
			}
		}
		
		return neighbors;
	}
	this.getCenterX = function()
	{
		return this.x;
	}
	this.getCenterY = function()
	{
		return this.y;
	}
	this.getValue = function()
	{
		return this.value;
	}
	this.incrementValue = function(amount)
	{
		this.value = (this.value + amount) % 100;
	}
}

// This is the same as twoTurnScore, but it looks 3 in advance
function threeTurnScore(h, hexagons)
{
	let score = 0;
	let max, nbs, tts;
	if(isPrime(h.getValue()))
	{
		score += h.getValue();
		max = 0;
		nbs = h.getNeighbors(hexagons);
		for(let i = 0; i < nbs.length; i++)
		{
			tts = twoTurnScore(nbs[i], removeCopy(h, hexagons));
			if(tts > max)
			{
				max = tts;
			}
		}
		score += max;
	}
	else
	{
		return twoTurnScore(h, hexagons);
		// This doesn't work!
		/*max = 0;
		let fakeHexagons = [];
		for(let i = 0; i < hexagons.length; i++)
		{
			let h2 = hexagons[i];
			if(distanceFormula(h.getCenterX(), h.getCenterY(), h2.getCenterX(), h2.getCenterY()) 
					< hexagonCenterDistance(20) + 5 && h != h2)
			{
				fakeHexagons.push(new fakeHexagon(h2.getCenterX(), h2.getCenterY(), h2.getValue() + h.getValue()));
			}
			else
			{
			    fakeHexagons.push(new fakeHexagon(h2.getCenterX(), h2.getCenterY(), h2.getValue()));
			}
		}
		nbs = (new fakeHexagon(h.getCenterX(), h.getCenterY(), h.getValue())).getNeighbors(fakeHexagons);
		for(let i = 0; i < nbs.length; i++)
		{
		    tts = twoTurnScore(nbs[i], fakeHexagons);
			if(tts > max)
			{
				max = tts;
			}
		}
		score += max;*/
	}
	return score;
}

// Returns true if the two line segments intersect
function lineIntersectsLine(line1, line2)
{
	let m1 = line1.getSlope(), m2 = line2.getSlope();
	let b1 = line1.getB(), b2 = line2.getB();
	// if the lines are parallel
	if(m1 == m2)
	{
		return false;
	}
	let x = (b2 - b1) / (m1 - m2);
	if(line1.getX1() <= x && x <= line1.getX2() && line2.getX1() <= x && x <= line2.getX2())
	{
		return true;
	}
	return false;
}

// returns [boolean, boolean, boolean].  first entry is whether the top is blocked,
// and 2nd is whether bottom is blocked, 3rd is whether someone blocks directly right
function isUpDownCenterBlocked(h, hexagons)
{
	let upblocked = false;   // if other hexagons half block this one
	let downblocked = false;
	let centerblocked = false;
    let s = h.getSideLength();
    let l = hexagons.length;
	for(let j = 0; j < l; j++)
	{
		let h2 = hexagons[j];
		if(h != h2) // don't check the current hexagon itself
		{
			
			// if h2 is to the right of h
			if(h2.getCenterX() > h.getCenterX())
			{
				// if h2 is directly right of h
				if(h2.getCenterY() <= h.getCenterY() + 5
					&& h2.getCenterY() >= h.getCenterY() - 5)
			    {
				    centerblocked = true;
				    break;    
			    }
				else if(h2.getCenterY() <= h.getCenterY() + s*Math.sqrt(3)/2+ 5
						&& h2.getCenterY() >= h.getCenterY() + s*Math.sqrt(3)/2 - 5)
				{
					downblocked = true;
				}
				else if(h2.getCenterY() <= h.getCenterY() - s*Math.sqrt(3)/2+ 5
						&& h2.getCenterY() >= h.getCenterY() - s*Math.sqrt(3)/2 - 5)
				{
					upblocked = true;
				}
			}
		}
	}
	return [upblocked, downblocked, centerblocked];
}



//returns true if the given ray hits a hexagon in hexagons
function lineIntersectsHexagon(x0, m, b, hexagons)
{
	// the segment goes to the vertical line where the COM is
	let ray = new line(x0, x0*m + b, width-100, (width-100)*m + b);
	for(let i = 0; i < hexagons.length; i++)
	{
		let lines = hexagons[i].getLines();
		for(let j = 0; j < 6; j++)
		{
			if(lineIntersectsLine(ray, lines[j]))
			{
				return true;
			}
		}
	}
    return false;
}

// returns a y-value if h has a line to the right side that doesn't hit another hexagon
// checks up and down 30 degrees from the center. the y value it returns is where the
// com should move to to aim there
function hasLineOfSight(h, hexagons)
{
	let x0 = h.getCenterX();
	let m = .5;
	let y0 = h.getCenterY();
	let b = y0 - m*x0;
	let otherHexagons = removeCopy(h, hexagons);
	if(!lineIntersectsHexagon(x0, m, b, otherHexagons))
	{
		if((width - 100)*m + b < height - 30) // make sure the angle doesn't put us off the bottom
		{
			return (width - 100)*m + b;
		}
		else
		{
			return false;
		}
	}
	m = -.5;
	b = y0 - m*x0;
	if(!lineIntersectsHexagon(x0, m, b, otherHexagons))
	{
		if((width - 100)*m + b > 30)
		{
			return (width - 100)*m + b;
		}
		else
		{
			return false;
		}
	}
	return false;
}


// Returns an array of tuples of [hexagon, y] where hexagon is exposed, and
// y is the coordinate the AI should shoot from to hit it
function exposedHexagons(hexagons)
{
	let l = hexagons.length;
	if(l == 0)
	{
		return [];
	}
	let exposed = [];
	for(let i = 0; i < l; i++)
	{
		let h = hexagons[i];
		let hy = h.getCenterY();
		let blockBooleans = isUpDownCenterBlocked(h, hexagons);
		let centerBlocked = blockBooleans[2];
		let downBlocked = blockBooleans[1];
		let upBlocked = blockBooleans[0];
		if(!centerBlocked && !(upBlocked || downBlocked))
		{
			exposed.push([h, hy]);
		}
		else if(!upBlocked && !centerBlocked)
		{
			exposed.push([h, hy - 8]);
		}
		else if(!downBlocked && !centerBlocked)
		{
			exposed.push([h, hy + 8]);
		}
		/*else 
		{
			diagonalLineOfSight = hasLineOfSight(h, hexagons);
			if(diagonalLineOfSight != false)
			{
				exposed.push([h, diagonalLineOfSight]);
			}
		}*/
	}
	return exposed;
}



// Returns a tuple [besthexagon, twoturnscore, y]
// Unless the intelligence is low, in which case we
// return oneTurnScore
function bestComTarget(hexagons, intelligence)
{
    let exposed = exposedHexagons(hexagons);
    let maxScore = 0;
    let bestHexagon;
    let bestY;
    for(let i = 0; i < exposed.length; i++)
    {
    	let score;
    	let h = exposed[i][0];
    	let y = exposed[i][1];
    	if(intelligence >= .7)
    	{
    		score = threeTurnScore(h, hexagons);
    	}
    	else if(intelligence >= .4)
    	{
    		score = twoTurnScore(h, hexagons);
    	}
    	else if(intelligence > .1)
    	{
    		score = oneTurnScore(h, hexagons);
    	}
    	else
    	{
    		score = 1;
    	}
    	if(score >= maxScore)
    	{
    		maxScore = score;
    		bestHexagon = h;
    		bestY = y;
    	}
    }
    return [bestHexagon, maxScore, bestY];
}

//=================================
//
//             Lines
//
// =================================
// We need lines for the borders of the hexagons to detect collisions
function line(x1, y1, x2, y2)
{
	this.x1 = x1;
	this.y1 = y1;
	this.x2 = x2;
	this.y2 = y2;
	this.getSlope = function()
	{
		return (this.y2 - this.y1) / (this.x2 - this.x1);
	}
	this.getX1 = function()
	{
		return this.x1;
	}
	this.getY1 = function()
	{
		return this.y1;
	}
	this.getX2 = function()
	{
		return this.x2;
	}
	this.getY2 = function()
	{
		return this.y2;
	}
	// the y-intercept of the line
	this.getB = function()
	{
		return this.y1 - this.getSlope()*this.x1;
	}
}




// =================================
//
//            Hexagons
//
// =================================

function hexagon(x, y, sideLength, value)
{
	this.x = x;
	this.y = y;
	this.sideLength = sideLength;
	this.value = value;   // the number on the hexagon
	this.color = number2color(this.value);
	
	// define the 6 points
	this.x2 = this.x + sideLength; this.y2 = this.y + 0;
	this.x3 = this.x + sideLength + cos60*sideLength; this.y3 = this.y + sin60*sideLength;
	this.x4 = this.x + sideLength; this.y4 = this.y + 2*sin60*sideLength;
	this.x5 = this.x; this.y5 = this.y + 2*sin60*sideLength;
	this.x6 = this.x - cos60*sideLength; this.y6 = this.y + sin60*sideLength;
	
	this.lines = [];      // a list of the 6 segments that are the border
	this.lines.push(new line(this.x, this.y, this.x2, this.y2));
	this.lines.push(new line(this.x2, this.y2, this.x3, this.y3));
	this.lines.push(new line(this.x4, this.y4, this.x3, this.y3));
	this.lines.push(new line(this.x5, this.y5, this.x4, this.y4));
	this.lines.push(new line(this.x6, this.y6, this.x5, this.y5));
	this.lines.push(new line(this.x6, this.y6, this.x, this.y));
	
	// Draw a Hexagon with a flat top and bottom, starting at the left side of the top segment
	this.draw = function()
	{
		// hexagon
		ctx.beginPath();
	    ctx.moveTo(this.x, this.y);
	    ctx.lineTo(this.x2, this.y2);
	    ctx.lineTo(this.x3, this.y3);
	    ctx.lineTo(this.x4, this.y4);
	    ctx.lineTo(this.x5, this.y5);
	    ctx.lineTo(this.x6, this.y6);
	    ctx.lineTo(this.x, this.y);
	    ctx.lineWidth = 3;
	    ctx.fillStyle = this.color;
	    ctx.fill();
	    ctx.strokeStyle = "white";
	    ctx.stroke();
	    
	    // number
	    let numLength = numDigits(this.value);
	    ctx.fillStyle = 'white';
        ctx.font = sideLength.toString() + "px Arial";
        ctx.fillText(this.value.toString(), this.x + sideLength/2 - numLength*sideLength/3.75,
        		this.y + sideLength*(1 + Math.sqrt(3))/2.25);
	}
	
	// get the coordinates of the center of the hexagon
	this.getCenterX = function()
	{
		return this.x + this.sideLength/2;
	}
	this.getCenterY = function()
	{
		return this.y + this.sideLength*sin60;
	}
	this.getValue = function()
	{
		return this.value;
	}
	this.getSideLength = function()
	{
		return this.sideLength;
	}
	this.setValue = function(newValue)
	{
		this.value = newValue;
		this.color = number2color(this.value);
	}
	this.getLines = function()
	{
		return this.lines;
	}
	
	
	// a neighbor is someone with a close enough center (with a tolerance of 5)
	this.getNeighbors = function(hexagons)
	{
		let neighbors = [];
		for(let i = 0; i < hexagons.length; i++)
		{
			let h = hexagons[i];
			let distance = distanceFormula(this.getCenterX(), this.getCenterY(), h.getCenterX(), h.getCenterY());
			if(distance < hexagonCenterDistance(this.sideLength) + 5 && distance > 0)
			{
				neighbors.push(h);
			}
		}
		
		return neighbors;
	}
	
	this.remove = function(hexagons)
	{
		for(let i = 0; i < hexagons.length; i++)
		{
			if(hexagons[i] == this)
			{
				hexagons.splice(i, 1);
			}
		}
		if(!isPrime(this.value))
		{
			let nb = this.getNeighbors(hexagons);
			for(let i = 0; i < nb.length; i++)
			{
				nb[i].setValue((nb[i].getValue() + this.value) % 100);
			}
		}
	}
}


// the initial creation of the hexagons
function makeHexagons(hexagons, numColumns, sideLength)
{
	// there will be 2*numColumns - 1 columns of hexagons
	for(let i = 1; i < numColumns + 1; i++)
	{
		let startingX = width/2 - 3*sideLength/2*(numColumns + 1 - i) + 1;
		let startingY = height/2 - (numColumns+i-3)*sideLength*Math.sqrt(3)/2 - sideLength*Math.sqrt(3);
		for(let j = 1; j < numColumns + i; j++)
		{
			hexagons.push(new hexagon(startingX, startingY, sideLength, randomTwoDigit()));
			startingY += sideLength*Math.sqrt(3);
		}
    }
	for(let i = 1; i < numColumns; i++)
	{
		let startingX = width/2 + 3*sideLength/2*(numColumns - .95 - i) - 1;
		let startingY = height/2 - (numColumns+i-3)*sideLength*Math.sqrt(3)/2 - sideLength*Math.sqrt(3);
		for(let j = 1; j < numColumns + i; j++)
		{
			hexagons.push(new hexagon(startingX, startingY, sideLength, randomTwoDigit()));
			startingY += sideLength*Math.sqrt(3);
		}
    }		
}

// According to the seed, makes the hexagons' numbers predetermined
function makeHexagonsSeed(hexagons, numColumns, sideLength, seed)
{
	let currentValue = seed;
	
	// there will be 2*numColumns - 1 columns of hexagons
	for(let i = 1; i < numColumns + 1; i++)
	{
		let startingX = width/2 - 3*sideLength/2*(numColumns + 1 - i) + 1;
		let startingY = height/2 - (numColumns+i-3)*sideLength*Math.sqrt(3)/2 - sideLength*Math.sqrt(3);
		for(let j = 1; j < numColumns + i; j++)
		{
			currentValue = (currentValue + 2341) % 100;
			hexagons.push(new hexagon(startingX, startingY, sideLength, currentValue));
			startingY += sideLength*Math.sqrt(3);
		}
    }
	for(let i = 1; i < numColumns; i++)
	{
		let startingX = width/2 + 3*sideLength/2*(numColumns - .95 - i) - 1;
		let startingY = height/2 - (numColumns+i-3)*sideLength*Math.sqrt(3)/2 - sideLength*Math.sqrt(3);
		for(let j = 1; j < numColumns + i; j++)
		{
			currentValue = (currentValue + 2341) % 100;
			hexagons.push(new hexagon(startingX, startingY, sideLength, currentValue));
			startingY += sideLength*Math.sqrt(3);
		}
    }		
}

// =================================
//
//             Player
//
// =================================
function player()
{
	// private variables
	this.x = 100;
	this.y = height/2;
	this.radius = 30;
	
	// store previous location for background filling
	this.prevX = this.x + 0;
	this.prevY = this.y + 0;
	
	this.score = 0;
	
	// adjust the coordinates by the amount specified
	// this is to be used when the wasd keys are pressed
	this.moveUp = function(distance)
	{
		this.prevY = this.y + 0;
		this.y -= distance;
		if(this.y <= this.radius)
		{
			this.y = this.radius;
		}
	}
	this.moveDown = function(distance)
	{
		this.prevY = this.y + 0;
		this.y += distance;
		if(this.y >= height - this.radius)
		{
			this.y = height - this.radius;
		}
	}
	
	this.draw = function()
    {
		ctx.drawImage(playerIcon, this.x - this.radius, this.y - this.radius, 60, 60);
    }
	
	// getters
	this.getX = function()
	{
		return this.x;
	}
	this.getY = function()
	{
		return this.y;
	}
	this.getRadius = function()
	{
		return this.radius;
	}
	this.getPrevX = function()
	{
		return this.prevX;
	}
	this.getPrevY = function()
	{
		return this.prevY;
	}
	this.getScore = function()
	{
		return this.score;
	}
	
	this.incrementScore = function(amount)
	{
		this.score += amount;
	}
}


// ================================
//
//            Missile
//
// ================================

function missile(x, y, speed, angle, owner)
{
	this.x = x;
	this.y = y;
	this.speed = speed;
	this.angle = angle;
	if(this.angle > Math.PI) // want angles from -Pi to Pi
	{
		this.angle -= 2*Math.PI;
	}
	this.dx = speed * Math.cos(angle);
	this.dy = speed * Math.sin(angle);
	
	// keep track of previous positions for clearing the canvas
	this.prevX = this.x + 0;
	this.prevY = this.y + 0;
	
	// Either p or c. Must be a player or com object
	this.owner = owner;
    
	this.draw = function()
	{
		ctx.beginPath();
        ctx.arc(this.x, this.y, 5, 0, 2*Math.PI, false);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "white";  
        ctx.stroke();
	}

	this.update = function(hexagons)
	{
		this.prevX = this.x + 0;
		this.prevY = this.y + 0;
		this.x += this.dx;
		this.y += this.dy;
		
		// check if we're out of bounds
		if(this.x <= 0 || this.x >= width || this.y <= 0 || this.y >= height - 2)
		{
			fillBackground();           // to get rid of the missile's image
			this.deactivate();
		}
		
		// check if we're hitting a circle
		if(distanceFormula(this.x, this.y, p.getX(), p.getY()) <= p.getRadius() + 5)
		{
			fillBackground();
			this.deactivate();
			if(this.owner == c && p.getScore() > c.getScore())
			{
				let transfer = Math.floor((p.getScore() - c.getScore()) / 3);
				p.incrementScore(-transfer);
				c.incrementScore(transfer);
			}
		}
		if(distanceFormula(this.x, this.y, c.getX(), c.getY()) <= c.getRadius() + 5)
		{
			fillBackground();
			this.deactivate();
			if(this.owner == p && c.getScore() > p.getScore())
			{
				let transfer = Math.round((c.getScore() - p.getScore()) / 3);
				c.incrementScore(-transfer);
				p.incrementScore(transfer);
			}
		}
		
		// check if the missiles hit each other
		if(this.owner == p && activeComMissile)
		{
			if(distanceFormula(this.x, this.y, comMissile.getX(), comMissile.getY()) <= 10)
			{
				fillBackground();
				this.deactivate();
				comMissile.deactivate();
			}
		}
		if(this.owner == c && activePlayerMissile)
		{
			if(distanceFormula(this.x, this.y, playerMissile.getX(), playerMissile.getY()) <= 10)
			{
				fillBackground();
				this.deactivate();
				playerMissile.deactivate();
			}
		}
		
		// check if we're hitting a hexagon
		let l = hexagons.length;
		for(let i = 0; i < l; i++)
		{
			let h = hexagons[i];
			if(distanceFormula(this.x, this.y, h.getCenterX(), h.getCenterY()) < 2*h.getSideLength())
			{
				let lines = h.getLines();
				for(let j = 0; j < lines.length; j++)
				{
					if(circleIntersectsLine(lines[j], this.x, this.y, 5))
					{
						if(isPrime(h.getValue()))
						{
							this.owner.incrementScore(h.getValue());
						}
						h.remove(hexagons);          // hexagon disappears on contact
						this.deactivate();           // missile disappears on contact						
						refreshAll();                // to redraw the hexagons
						fillBackground();           // to get rid of the missile's image
						return;
					}
				}
			}
		}
	}
	
	this.moveClockwise = function()
	{
		this.angle += 1/90;
		this.dx = this.speed * Math.cos(this.angle);
		this.dy = this.speed * Math.sin(this.angle);
	}
	this.moveCounterClockwise = function()
	{
		this.angle -= 1/90;
		this.dx = this.speed * Math.cos(this.angle);
		this.dy = this.speed * Math.sin(this.angle);
	}
	
	// getters
	this.getX = function()
	{
		return this.x;
	}
	this.getY = function()
    {
		return this.y;
    }
	this.getPrevX = function()
	{
		return this.prevX;
	}
	this.getPrevY = function()
	{
		return this.prevY;
	}
	this.getRadius = function()
	{
		return 5;
	}
	this.getOwner = function()
	{
		return this.owner;
	}
	this.getdx = function()
	{
		return this.dx;
	}
	this.getdy = function()
	{
		return this.dy;
	}
	this.getAngle = function()
	{
		return this.angle;
	}
	
	this.deactivate = function()
	{
		if(this.owner == p)
		{
			activePlayerMissile = false;
		}
		else if(this.owner == c)
		{
			c.resetMission();
			activeComMissile = false;
		}
		c.setDefenseLaunched(false);
	}
}


// =============================
//
//         The COM
//
// =============================
function com(aggression, hexagonIntelligence, defenseSense, name)
{
	// private variables
	this.x = width - 100;
	this.y = height/2;
	this.radius = 30;
	
	// store previous location for background filling
	this.prevX = this.x + 0;
	this.prevY = this.y + 0;
	
	// simply how many points the com has
	this.score = 0;
	
	// personality
	this.aggression = aggression;                       // how often it attacks
	this.hexagonIntelligence = hexagonIntelligence;     // how wisely it chooses hexagons
	this.defenseSense = defenseSense;                   // how accurately it defends
	this.name = name;
	// will be either false, "attack", "defend", or "hexagon"
	this.mission = false;
	
	// The optimal hexagon to hit
	this.targetHexagon;
	this.targetTwoTurnScore;
	
	// Boolean. Is a playerMissile approaching?
	this.underAttack = false;
	this.underImminentAttack = false;
	this.defenseLaunched = false;    // are we shooting the approaching missile down?
	
	// This is true when we should attack the player
	this.shouldAttack = false;
	
	// adjust the coordinates by the amount specified
	this.moveUp = function(distance)
	{
		this.prevY = this.y + 0;
		this.y -= distance;
		if(this.y <= this.radius)
		{
			this.y = this.radius;
		}
	}
	this.moveDown = function(distance)
	{
		this.prevY = this.y + 0;
		this.y += distance;
		if(this.y >= height - this.radius)
		{
			this.y = height - this.radius;
		}
	}
	
	this.update = function()
	{
		// Start by collecting all external information we need about hexagons, player locations,
		// and player missiles
		
		// Update the hexagon information
		let bestHexagon = bestComTarget(hexagons, this.hexagonIntelligence);      // a tuple
		this.targetHexagon = bestHexagon[0];            // a hexagon object
		this.targetTwoTurnScore = bestHexagon[1];       // the best score see in two turns
		let targetX = this.targetHexagon.getCenterX();  // the target x for the best hexagon
		//let targetY = this.targetHexagon.getCenterY();  // the target y for the best hexagon
		let targetY = bestHexagon[2];
		
		// alter the target y depending on whether we need to come from above or below
		/*let blockedBooleans = isUpDownCenterBlocked(this.targetHexagon, hexagons);
		if(blockedBooleans[0] && targetY < height - 20)
		{		
		    targetY += 8;
		}
		else if(blockedBooleans[1] && targetY > 20)
		{
			targetY -= 8;
		}*/
		// make sure we don't try targetting too high or low
		if(targetY < this.radius + 2)
		{
			targetY = this.radius + 2;
		}
		else if(targetY > height - this.radius - 2)
		{
			targetY = height - this.radius - 2;
		}
		
		// if we can't get too many points at the moment and the player has way too much
		this.shouldAttack = twoTurnScore < 90 && (playerPoints - this.score)/2 > 120;
				             
		let mx, my;      // location of player missiles
		let startAngle;  // for launching missiles
		
        // Start with the coordinates of the player missile
		// if it is close, set the attack warning variables
		if(activePlayerMissile)
		{
			mx = playerMissile.getX(), my = playerMissile.getY();
			this.setUnderAttack(mx, my);
			this.setUnderImminentAttack(mx, my);
		}
		else  // if there's no player missile, we're definitely not being attacked
		{
			this.underAttack = false;
			this.underImminentAttack = false;
			this.defenseLaunched = false;
		}
		
		// If a player missile is too close, launch a counter missile
		if(this.underImminentAttack && this.mission != "defend")
		{
			fillBackground();
			startAngle = angleFrom(this.x, this.y, mx, my);
		    let xLoc = this.x + (this.radius+6)*Math.cos(startAngle);  
		    let yLoc = this.y + (this.radius+6)*Math.sin(startAngle);
		    comMissile = new missile(xLoc, yLoc, 2, startAngle, this);
		    activeComMissile = true;
		    this.mission = "defend";
		    return;
		}
		// If a player missile is too close but we've already launched a defense, do nothing
		else if(this.underImminentAttack && this.mission == "defend")
		{
			return;
		}
		// If the player missile is close, but not too close, move away from it
		else if(this.underAttack)
		{
			if(my < this.y)
			{
				this.moveDown(2);
			}
			else
			{
				this.moveUp(2);
			}
			// If we were aiming at a hexagon, return so we don't then move toward the hexagon
			// and undo this fleeing movement
			return;
		}
		
		// If we aren't under attack and we don't currently have a mission, choose either to attack
		// or go for hexagons
		if(this.mission == false)
		{
			// If we choose to attack
			if((this.shouldAttack && Math.random() < this.aggression) 
					|| Math.random() < this.aggression*this.aggression)
			{
				if(this.y > height/2)  // shoot underneath the hexagons
				{
					startAngle = angleFrom(this.x, this.y, width/2, height - 1);
				}
				else                   // shoot over the hexagons
				{
					startAngle = angleFrom(this.x, this.y, width/2, 1);
				}
				let xLoc = this.x + (this.radius+6)*Math.cos(startAngle);  
				let yLoc = this.y + (this.radius+6)*Math.sin(startAngle);
				comMissile = new missile(xLoc, yLoc, 2, startAngle, this);
			    activeComMissile = true;
			    this.mission = "attack";
			}
			// otherwise, we go for a hexagon
			else
			{
				// Move toward the target hexagon
			    if(this.y < targetY - 1)
				{
					this.moveDown(2);
				}
				else if(this.y > targetY + 1)
				{
					this.moveUp(2);
				}
			    // Launch a missile toward it if we are close enough
			    if(!activeComMissile && Math.abs(this.y - targetY) <= 10)
			    {
					startAngle = angleFrom(this.x, this.y, targetX, targetY);
				    let xLoc = this.x + (this.radius+6)*Math.cos(startAngle);  
				    let yLoc = this.y + (this.radius+6)*Math.sin(startAngle);
				    comMissile = new missile(xLoc, yLoc, 2, startAngle, this);
				    activeComMissile = true;
				    
			    }
			    this.mission = "hexagon";
			}
		}
		// If we are already on a mission
		else
		{
			if(this.mission == "attack")
			{
				this.steerMissileTowardPlayer();
				if(this.y <= height/2 && this.y > this.radius + 10)
				{
					this.moveUp(2);
				}
				else if(this.y > height/2 && this.y < height - this.radius - 10)
				{
					this.moveDown(2);
				}
			}
			else
			{
				// Move toward the target hexagon
			    if(this.y < targetY - 1)
				{
					this.moveDown(2);
				}
				else if(this.y > targetY + 1)
				{
					this.moveUp(2);
				}
			    if(!activeComMissile && Math.abs(this.y - targetY) <= 10)
			    {
					startAngle = angleFrom(this.x, this.y, targetX, targetY);
				    let xLoc = this.x + (this.radius+6)*Math.cos(startAngle);  
				    let yLoc = this.y + (this.radius+6)*Math.sin(startAngle);
				    comMissile = new missile(xLoc, yLoc, 2, startAngle, this);
				    activeComMissile = true;
				}
			    this.curveTowardHexagon(targetX, targetY, hexagons);
			}
		}
	}
	
	// based on the location of a player missile, determine what the threat is
	this.setUnderAttack = function(mx, my)
	{
		this.underAttack = distanceFormula(this.x, this.y, mx, my) < this.radius + 120;
	}
	// if defense sense is close to 1, it won't defend until the last minute
	this.setUnderImminentAttack = function(mx, my)
	{
		this.underImminentAttack = distanceFormula(this.x, this.y, mx, my) < 
		                           this.radius + 130*(1-this.defenseSense) + 20;
	}
	
	// Can we curve the missile up or down to make sure we hit the target?
	this.curveTowardHexagon = function(hx, hy, hexagons)
	{
		if(!activeComMissile)
		{
			return;
		}
		let x = comMissile.getX(), y = comMissile.getY();
		if(x - hx < 50)
		{
			if(y > hy)
			{
				comMissile.moveClockwise();
			}
			else if(y < hy)
			{
				comMissile.moveCounterClockwise();
			}
			return;
		}
		// If there's a better target first, go for it instead
		let l = hexagons.length;
		for(let i = 0; i < l; i++)
		{
			let h2 = hexagons[i];
			if(isPrime(h2.getValue()) && h2.getValue() > this.targetTwoTurnScore)
			{
				let h2x = h2.getCenterX(), h2y = h2.getCenterY();
				if(x - h2x > 5 && x - h2x < 60 && Math.abs(y - h2y) < 40)
				{
					if(y > h2y)
					{
						comMissile.moveClockwise();
					}
					else if(y < h2y)
					{
						comMissile.moveCounterClockwise();
					}
				}
			}
		}
		
	}
		
	// if the missile is not aimed for a hexagon, steer it toward the player
	this.steerMissileTowardPlayer = function()
	{
		let x = comMissile.getX(), y = comMissile.getY();
		let dx = comMissile.getdx(), dy = comMissile.getdy();
		let targetX = p.getX(), targetY = p.getY();
		let angle = comMissile.getAngle();
		
		// avoid the top and bottom walls
		if(y > height - 20 && dy >= 0)
		{
			comMissile.moveClockwise();
		}
		else if(y < 20 && dy <= 0)
		{
			comMissile.moveCounterClockwise();
		}
		else if(dx < 0 && x < width/3)
		{
			if(y < targetY)
			{
				comMissile.moveCounterClockwise();
			}
			else
			{
				comMissile.moveClockwise();
			}
		}
		else if(dx > 0 && x < width/3)
		{
			if(y < targetY)
			{
				comMissile.moveClockwise();
			}
			else
			{
				comMissile.moveCounterClockwise();
			}
		}
	}
	
	this.draw = function()
    {
		ctx.drawImage(img, this.x - this.radius, this.y - this.radius, 60, 60);
    }
	
	// getters
	this.getX = function()
	{
		return this.x;
	}
	this.getY = function()
	{
		return this.y;
	}
	this.getRadius = function()
	{
		return this.radius;
	}
	this.getPrevX = function()
	{
		return this.prevX;
	}
	this.getPrevY = function()
	{
		return this.prevY;
	}
	this.getScore = function()
	{
		return this.score;
	}
	this.getName = function()
	{
		return this.name;
	}
	
	// setters
	this.incrementScore = function(amount)
	{
		this.score += amount;
	}
	this.setDefenseLaunched = function(bool)
	{
		this.defenseLaunched = bool;
	}
	this.resetMission = function()
	{
		this.mission = false;
	}
}


//=====================================
//
//          Keeping Score
//
// =====================================


function displayScore()
{
	// Player Score
	ctx.clearRect(0, height + 3, 300, height + 50);
	ctx.fillStyle = "#bbccff";
	ctx.fillRect(0, height + 3, 300, height + 50);
	ctx.fillStyle = "black";
	ctx.font = "30px Arial";
	ctx.fillText("Player: " + p.getScore().toString(), 40, height + 40);
	
	// Com score
	ctx.clearRect(width - 300, height + 3, width, height + 50);
	ctx.fillStyle = "#bbccff";
	ctx.fillRect(width - 300, height + 3, width, height + 50);
	ctx.fillStyle = "black";
	ctx.font = "30px Arial";
	ctx.fillText(c.getName() + ": " + c.getScore().toString(), width - 300, height + 40);
}

//=====================================
//
//       Responding to User Input
//
// =====================================

window.onkeydown = window.onkeyup = function(e)
{
    e = e || event; // to deal with IE
    map[e.keyCode] = e.type == 'keydown'; 
}


// This moves the player according to the arrow keys. If the player is too close
// to the edge, we move the walls instead
function movePlayer()
{
	let thisPlayer = p;
	if(map[83])
	{
		thisPlayer.moveDown(2);
	}
	else if(map[87])
    {
		thisPlayer.moveUp(2);
    }
	if(map[68] && activePlayerMissile)
	{
		playerMissile.moveClockwise();
	}
	else if(map[65] && activePlayerMissile)
	{
		playerMissile.moveCounterClockwise();
	}
}

//Makes the turret shoot a missile when the mouse button is up
window.onmouseup = function()
{
    if(frameNumber >= frameLimit) // If the game is over, don't do anything
    {
        return;
    }
    c.setDefenseLaunched(false);
    activePlayerMissile = true;
    let xLoc = event.offsetX;
    let yLoc = event.offsetY;
    let startAngle = angleFrom(p.getX(), p.getY(), xLoc, yLoc);
    
    // scale the x and y coords so that the missile start right from the turret,
    // not actually where the mouse is clicked
    xLoc = p.getX() + (p.radius+6)*Math.cos(startAngle);  
    yLoc = p.getY() + (p.radius+6)*Math.sin(startAngle);
    playerMissile = new missile(xLoc, yLoc, 2, startAngle, p);
    refreshAll(); // to get rid of the previous missile's image if you clicked too soon

}



// ================================
//
//            Animation
//
// ================================

function animate()
{
	if(hexagons.length > 0)
	{
		requestAnimationFrame(animate);
	}
	else
	{
		gameOver();
	}
	
	// Make the background, only replacing moving things	
	fillBackground();
		
	// update and draw the missiles
	if(activePlayerMissile)
	{
		playerMissile.update(hexagons);
	}
	if(activePlayerMissile) // missile could get deactivated during update()
	{
		playerMissile.draw();
	}
	if(activeComMissile)
	{
		comMissile.update(hexagons);
	}
	if(activeComMissile)
	{
		comMissile.draw();
	}
	
	displayScore();
	
	
	p.draw();
	movePlayer();
	c.draw();
	c.update();
		
	frameNumber++;
}
//animate();

function doEverything()
{
	hideIntroduction();
	hideRematch();
	canvas = document.createElement("canvas");
	width = 800;
	height = 400;
	canvas.width = width;
	canvas.height = height + 50;   // make it extra tall to display the score at bottom
	document.body.insertBefore(this.canvas, document.body.childNodes[0]);
	ctx = canvas.getContext("2d");
	
	
	sin60 = Math.sqrt(3) / 2;
	cos60 = 1/2;
	
	hexagons = [];
	makeHexagons(hexagons, 6, 20);
	
	p = new player();
	activePlayerMissile = false;
	var playerMissile;
	activeComMissile = false;
	var comMissile;
	img = new Image();
	playerIcon = new Image();
	playerIcon.src = "ironman.png";
	var aggression, hexagonIntelligence, defenseSense;
	if(comName == "Thanos")
	{
		aggression = .1;
		hexagonIntelligence = 1;
		defenseSense = .8;
		img.src = 'thanos.png';
	}
	else if(comName == "Darth Vader")
	{
		aggression = .6;
		hexagonIntelligence = .6;
		defenseSense = .4;
		img.src = 'vader.png';
	}
	else if(comName == "Shrek")
	{
		aggression = .1;
		hexagonIntelligence = .3;
		defenseSense = .6;
		img.src = 'shrek.png';
	}
	else if(comName == "Cookie Monster")
	{
		aggression = .5;
		hexagonIntelligence = 0;
		defenseSense = .3;
		img.src = 'cookie.png';
	}
	c = new com(aggression, hexagonIntelligence, defenseSense, comName);
	map = {}; // You could also use an array
	frameLimit = 50000;
	frameNumber = 0;
	ctx.clearRect(0, 0, width, height);
	ctx.fillStyle = "#bbccff";
	ctx.fillRect(0, 0, width, height);
	let l = hexagons.length;
	for(let i = 0; i < l; i++)
	{
		hexagons[i].draw();
	}
	drawBorder();
	animate();
}
doEverything();
