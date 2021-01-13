// create a pair of trials, one that displays the stim and one that displays feedback
var learning_trial = {
    timeline: [
	{type: "html-keyboard-response",
	 stimulus: function() {

	     // Retrieve the relation
	     var X = jsPsych.timelineVariable('X', true)
	     var Y = jsPsych.timelineVariable('Y', true)

	     // assign a relation or null
	     if (condition == "causal") {var relation = "causes the production of"}
	     else if (condition == "geneological") {var relation = "is the parent of"}
	     else {var relation = ""}

	     // Apply the labels 
	     X = assignments[X]
	     Y = assignments[Y]
	     
	     return network_stim(X, Y, relation)

	 },
	 prompt: function() {
	     if (condition == "causal" || condition == "geneological")
	     {
		 return "<small>Press F for TRUE and J for FALSE.</small>"
	     }
	     else {
		 return "<small>Press F if special and J if not.</small>"
	     }
	 },
	 data: {label: "learning",
		sub: function() {return jsPsych.timelineVariable('X', true)},
		obj: function() {return jsPsych.timelineVariable('Y', true)},
	       },
	 choices: [70, 74],
	 on_finish: function(data) {
	     
	     var response = data.key_press
	     var valence = jsPsych.timelineVariable('valence', true)
	     
	     if (response == 70 && valence==true) {
		 
		 cum_response.push(true)
		 data.correct = true
		 
	     }
	     
	     else if (response == 74 && valence==false) {
		 
		 cum_response.push(true)
		 data.correct = true
		 
	     }
	     
	     else {
		 
		 cum_response.push(false)
		 data.correct = false
		 
	     }
	 }
	},
	{type: "html-keyboard-response",
	 data: {label: "feedback"},
	 stimulus: function() {

	     var X = jsPsych.timelineVariable('X', true)
	     var Y = jsPsych.timelineVariable('Y', true)
	     
	     // assign a relation or null
	     if (condition == "causal") {var relation = "causes the production of"}
	     else if (condition == "geneological") {var relation = "is the parent of"}
	     else {var relation = ""}
	     
	     // Apply the labels 
	     X = assignments[X]
	     Y = assignments[Y]
	     
	     var stim = network_stim(X, Y, relation)

	     var valence = jsPsych.timelineVariable('valence', true)

	     if (condition == "meaningless") {

		 if (valence) {valence = "special"}
		 else {valence = "not special"}

	     }

	     if(jsPsych.data.get().last(1).values()[0].correct) {

		 return `<p style='color:blue'>Correct!</p><p>${stim} is ${valence}.</p>`

	     }
	     else {

		 return `<p style='color:red'>Incorrect!</p><p>${stim} is ${valence}.</p>`
		 
	     } 

	 },
	 data: {label: "feedback"},
	 trial_duration: function() {

	     if(jsPsych.data.get().last(1).values()[0].correct) {
		 
		 return 2000

	     }
	     else {

		 return 3000
		 
	     }

	 },
	 response_ends_trial: false,
	 choices: jsPsych.NO_KEYS
	}
    ]
}

// Set them up in a block and randomize the order of presentation
var block = {
    timeline: [learning_trial],
    timeline_variables: network,
    randomize_order: true
}


// Set the blocks up in a looping structure, and only advance when
// the responses are perfect.
var block_loop = {

    timeline: [block],
    loop_function: function() {

	var last_block = cum_response.slice((cum_response.length-network.length), cum_response.length)
	var sum = last_block.reduce((a, b) => a+b, false)
	
	if (sum < network.length) {
	    
	    return true
	}
	
	else {
	    
	    return false
	    
	}
    }

}


// create final block of test trials
var test_trial = {
    type: "html-keyboard-response",
    stimulus: function() {
	
	X = jsPsych.timelineVariable('X', true)
	Y = jsPsych.timelineVariable('Y', true)

	// assign a relation or null
	if (condition == "causal") {var relation = "causes the production of"}
	else if (condition == "geneological") {var relation = "is the parent of"}
	else {var relation = ""}

	// Apply the labels 
	X = assignments[X]
	Y = assignments[Y]     
	
	return network_stim(X, Y, relation)
    },
    data: {sub: function() {return jsPsych.timelineVariable('X', true)},
	   obj: function() {return jsPsych.timelineVariable('Y', true)},
	   label: "test"},
    prompt: function() {
	if (condition == "causal" || condition == "geneological")
	{
	    return "<small>Press F for TRUE and J for FALSE.</small>"
	}
	else {
	    return "<small>Press F if special and J if not.</small>"
	     }
    },
    choices: [70, 74],
    on_finish: function(data) {
	
	var response = data.key_press
	var valence = jsPsych.timelineVariable('valence', true)
	
	if (response == 70 && valence==true) {
	    
	    cum_response.push(true)
	    data.correct = true
	    
	}
	
	else if (response == 74 && valence==false) {
	    
	    cum_response.push(true)
	    data.correct = true
	    
	}
	
	else {
	    
	    cum_response.push(false)
	    data.correct = false
	    
	}
    }
}

var test = {
    timeline: [test_trial],
    timeline_variables: network,
    randomize_order: true
    
}
