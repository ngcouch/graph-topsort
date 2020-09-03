var distractor_int = {type: "html-keyboard-response",
		      stimulus: "<p style='text-align:left'>In this portion of the experiment, you will complete a few short math problems. These problems do not require the use of a calculator, though you may use one if you wish, along with a pen or pencil and some paper. Do not use the Internet. Take your time, and make sure your answers reflect your best effort.</p><p>Press spacebar to continue.</p>",
		      choices: [32],
		      data: {label:"instructions"}
		     }

var calcium = {type: "survey-multi-choice",
	       questions: [{prompt: "<p style='text-align:left;max-width:800px'>The recommended daily calcium intake for a 20-year-old is 1,000 milligrams (mg). One cup of milk contains 299 mg of calcium and one cup of juice contains 261 mg of calcium. Which of the following inequalities represents the possible number of cups of milk <i>m</i> and cups of juice <i>j</i> a 20-year-old could drink in a day to meet or exceed the recommended daily calcium intake from these drinks alone?</p>",
			    options: ["299<i>m</i> + 261<i>j</i> ≥ 1000","299<i>m</i> + 261<i>j</i> > 1000", "299/<i>m</i> + 261/<i>j</i> ≥ 1000", "299/<i>m</i> + 261/<i>j</i> > 1000"]}],
	       data: {label:"distractor",
		      answer: "0"}
	      }


var hotel = {type: "survey-multi-choice",
	     questions: [{prompt: "<p style='text-align:left;max-width:800px'>Aaron is staying at a hotel that charges $99.95 per night plus tax for a room. A tax of 8% is applied to the room rate, and an additional onetime untaxed fee of $5.00 is charged by the hotel. Which of the following represents Aaron’s total charge, in dollars, for staying <i>x</i> nights?</p>",
			  options: ["(99.5 + 0.08<i>x</i>)+5","1.08(99.95<i>x</i>) + 5", "1.08(99.95<i>x</i> +5)", "1.08(99.95 + 5)<i>x</i>"]}],
	     data: {label:"distractor",
		    answer: "1"}
	    }

var profit = {type: "survey-multi-choice",
	      questions: [{prompt: "<p style='text-align:left;max-width:800px'>A company’s manager estimated that the cost C, in dollars, of producing n items is C equals 7 n plus 350. The company sells each item for $12. The company makes a profit when total income from selling a quantity of items is greater than the total cost of producing that quantity of items. Which of the following inequalities gives all possible values of <i>n</i> for which the manager estimates that the company will make a profit?</p>",
			   options: ["<i>n</i> < 70","<i>n</i> < 84","<i>n</i> > 70","<i>n</i> > 84"]}],
	      data: {label:"distractor",
		     answer: "2"}
	     }

var primates = {type: "survey-multi-choice",
		questions: [{prompt: "<p style='text-align:left;max-width:800px'>At a primate reserve, the mean age of all the male primates is 15 years, and the mean age of all female primates is 19 years. Which of the following must be true about the mean age <i>m</i> of the combined group of male and female primates at the primate reserve?</p>",
			     options: ["<i>m</i> = 17", "<i>m</i> > 17", "<i>m</i> < 17", "15 < <i>m</i> < 19"]}],
		data: {label:"distractor",
		       answer: "3"}
	       }

var gas = {type: "survey-multi-choice",
	   questions: [{prompt: "<p style='text-align:left;max-width:800px'>The gas mileage for Peter’s car is 21 miles per gallon when the car travels at an average speed of 50 miles per hour. The car’s gas tank has 17 gallons of gas at the beginning of a trip. If Peter’s car travels at an average speed of 50 miles per hour, which of the following functions <i>f</i> models the number of gallons of gas remaining in the tank t hours after the trip begins?</p>",
			options: ["<i>f</i>(<i>t</i>) = 17 - 21/(50<i>t</i>)", "f(<i>t</i>) = 17 - (50<i>t</i>)/21", "<i>f</i>(<i>t</i>) = (17 - 21<i>t</i>)/50", "<i>f</i>(<i>t</i>) = (17 - 50<i>t</i>)/21"]}],
	   data: {label:"distractor",
		  answer: "1"}
	  }

var city = {type: "survey-multi-choice",
	    questions: [{prompt: "<p style='text-align:left;max-width:800px'>In planning maintenance for a city’s infrastructure, a civil engineer estimates that, starting from the present, the population of the city will decrease by 10 percent every 20 years. If the present population of the city is 50,000, which of the following expressions represents the engineer’s estimate of the population of the city <i>t</i> years from now?</p>",
			 options: ["50,000(0.1)^(20<i>t</i>)", "50,000(0.1)^(20/<i>t</i>)" , "50,000(0.9)^(20<i>t</i>)" , "50,000(0.9)^(20/<i>t</i>)"]}],
	    data: {answer: "1",
		   label: "distractor"}
	   }

var distractor_questions = [calcium, hotel, profit, primates, gas, city]

var distractor_block = [distractor_int,
		   jsPsych.randomization.shuffle(distractor_questions).slice(0,2)
		   ]
