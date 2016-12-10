function Assert( outcome, description ) { 
  var output = document.getElementById('output');  
  var te = document.createElement('div'); 
    te.className = outcome ? 'pass' : 'fail'; 
    te.innerHTML = description;
    output.appendChild(te); 
}


function Expect(actual_){
    var self = this;
    self.actual = actual_;

    return {
        toEqual: function(expected_){
            return self.actual === expected_;
        },
        toNotEqual: function(expected_){
            return self.actual !== expected_;
        }
    }
}


function RunTestFor(param_){

	var testParam = param_.testParam;
	var expected = param_.expected;
	var actual = param_.functionToExecute(testParam); // getDisplayTime();

	Assert(Expect(actual).toEqual(expected), 
		   '&nbsp;<strong>' + param_.description + '</strong><br /><br />' +
		   '<code>' + param_.functionToExecute.name + '(' + testParam + ')</code> returns ' +
		   '<code>' + expected +  '</code>.<br /><br />' + 
		   'What we expected:&nbsp;<highlight>' + 
		   expected + 
		   '</highlight><br />What we got:&nbsp;<highlight>' + 
		   actual + 
		   '</highlight>');	

}
