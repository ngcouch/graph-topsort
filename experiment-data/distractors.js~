var calcium = {type: "survey-multi-choice",
	       questions: [{prompt: "<p style='text-align:left;max-width:800px'>The recommended daily calcium intake for a 20-year-old is 1,000 milligrams (mg). One cup of milk contains 299 mg of calcium and one cup of juice contains 261 mg of calcium. Which of the following inequalities represents the possible number of cups of milk m and cups of juice j a 20-year-old could drink in a day to meet or exceed the recommended daily calcium intake from these drinks alone?</p>",
			    options: ["299m + 261j ≥ 1000","299m + 261j > 1000", "299/m + 261/j ≥ 1000", "299/m + 261/j > 1000"]}],
	       data: {answer: "0"}
	      }


var hotel = {type: "survey-multi-choice",
	     questions: [{prompt: "<p style='text-align:left;max-width:800px'>Aaron is staying at a hotel that charges $99.95 per night plus tax for a room. A tax of 8% is applied to the room rate, and an additional onetime untaxed fee of $5.00 is charged by the hotel. Which of the following represents Aaron’s total charge, in dollars, for staying x nights?</p>",
			  options: ["(99.5 + 0.08x)+5","1.08(99.95x) + 5", "1.08(99.95x +5)", "1.08(99.95 + 5)x"]}],
	     data: {answer: "1"}
	    }

var profit = {type: "survey-multi-choice",
	      questions: [{prompt: "<p style='text-align:left;max-width:800px'>A company’s manager estimated that the cost C, in dollars, of producing n items is C equals 7 n plus 350. The company sells each item for $12. The company makes a profit when total income from selling a quantity of items is greater than the total cost of producing that quantity of items. Which of the following inequalities gives all possible values of n for which the manager estimates that the company will make a profit?</p>",
			   options: ["n<70","n<84","n>70","n>84"]}],
	      data: {answer: "2"}
	     }

var primates = {type: "survey-multi-choice",
		questions: [{prompt: "<p style='text-align:left;max-width:800px'>At a primate reserve, the mean age of all the male primates is 15 years, and the mean age of all female primates is 19 years. Which of the following must be true about the mean age m of the combined group of male and female primates at the primate reserve?</p>",
			     options: ["m=17", "m > 17", "m < 17", "15 < m < 19"]}],
		data: {answer: "3"}
	       }


var gas = {type: "survey-multi-choice",
	   questions: [{prompt: "<p style='text-align:left;max-width:800px'>The gas mileage for Peter’s car is 21 miles per gallon when the car travels at an average speed of 50 miles per hour. The car’s gas tank has 17 gallons of gas at the beginning of a trip. If Peter’s car travels at an average speed of 50 miles per hour, which of the following functions f models the number of gallons of gas remaining in the tank t hours after the trip begins?</p>",
			options: ["f(t) = 17 - 21/(50t)", "f(t) = 17 - (50t)/21", "f(t) = (17 - 21t)/50", "f(t) = (17 - 50t)/21"]}],
	   data: {answer: "1"}
	  }

var mars = {type: "survey-multi-choice",
	    questions: [{prompt: "<p style='text-align:left;max-width:800px'> A typical image taken of the surface of Mars by a camera is 11.2 gigabits in size. A tracking station on Earth can receive data from the spacecraft at a data rate of 3 megabits per second for a maximum of 11 hours each day. If 1 gigabit equals 1,024 megabits, what is the maximum number of typical images that the tracking station could receive from the camera each day?</p>",
			 options: ["3", "10" , "56" , "144"]}],
	    data: {answer: "1"}
	   }

var distractor_questions = [calcium, hotel, profit, primates, gas, mars]

distractor_questions = jsPsych.randomization.shuffle(distractor_questions)
// Divide the distractor questions into two sets
distractor_questions = [[distractor_questions[0], distractor_questions[1], distractor_questions[2]],
			[distractor_questions[3], distractor_questions[4], distractor_questions[5]]]


var intermediate_intro = {type: "html-keyboard-response",
			  stimulus: "<p style='text-align:left;max-width:800px'>In this portion of the experiment, you will complete a few more math problems. Again, use whatever tools you deem necessary. Please take your time and ensure your answers reflect your best guess.</p> <p>Press spacebar to continue. </p>",
			  choices: [32]
			 }

var intermediate1 = {type: "survey-multi-choice",
	    questions: [{prompt: "<p style='text-align:left;max-width:800px'>On Saturday afternoon, Armand sent <i>m</i> text messages each hour for 5 hours, and Tyrone sent text <i>p</i> messages each hour for 4 hours. Which of the following represents the total number of messages sent by Armand and Tyrone on Saturday afternoon?</p>",
			 options: ["9<i>mp</i>", "20<i>mp</i>" , "5<i>m</i> + 4<i>p</i>" , "4<i>m</i> + 5<i>p</i>"]}],
	    data: {answer: "3"}
	   }


var intermediate2 = {type: "survey-multi-choice",
	    questions: [{prompt: "<p style='text-align:left;max-width:800px'>If 16 + 4<i>x</i> is 10 more than 14, waht is the value of 8<i>x</i>?</p>",
			 options: ["2", "6" , "16" , "80"]}],
	    data: {answer: "3"}
	   }

var intermediate_trials = [intermediate_intro, intermediate1, intermediate2]
