function calculateSem1GPA()
{
	const sub1 = document.getElementById("S1").value;
	const sub2 = document.getElementById("S2").value;
	const sub3 = document.getElementById("S3").value;
	const sub4 = document.getElementById("S4").value;
	const sub5 = document.getElementById("S5").value;
	const sub6 = document.getElementById("S6").value;
	const sub7 = document.getElementById("S7").value;
	const sub8 = document.getElementById("S8").value;
	const sub9 = document.getElementById("S9").value;

	const credits = [3, 3, 3, 3, 1.5, 1.5, 3, 1.5, 0];
	let grades = [sub1, sub2, sub3, sub4, sub5, sub6, sub7, sub8, sub9];

	const SGPAoutput = document.getElementById("SGPAoutput");
	const CGPAoutput = document.getElementById("CGPAoutput");
	const ErrorOutput = document.getElementById("ErrorOutput");
	
	let SGPA = 0;
	let tot_cred = 0;
	
	for(i=0; i<credits.length; i++)
	{
		tot_cred += credits[i];
		SGPA += grades[i] * credits[i];
	}
	
	SGPA /= tot_cred;

	if(SGPA < 0)
		ErrorOutput.innerHTML = "**Select Your Grades**";

	else
	{
		let CGPA = SGPA;
		
		ErrorOutput.innerHTML = "";
		SGPAoutput.innerHTML = Math.round(SGPA * 100) / 100;
		CGPAoutput.innerHTML = Math.round(CGPA * 100) / 100;
	}
}

function calculateSem2GPA(Sem)
{
	const sub1 = document.getElementById("S1").value;
	const sub2 = document.getElementById("S2").value;
	const sub3 = document.getElementById("S3").value;
	const sub4 = document.getElementById("S4").value;
	const sub5 = document.getElementById("S5").value;
	const sub6 = document.getElementById("S6").value;
	const sub7 = document.getElementById("S7").value;
	const sub8 = document.getElementById("S8").value;
	const sub9 = document.getElementById("S9").value;
	const sub10 = document.getElementById("S10").value;
	
	const SGPAoutput = document.getElementById("SGPAoutput");
	const CGPAoutput = document.getElementById("CGPAoutput");
	const PreviousCGPA = document.getElementById("CGPA").value;
	const ErrorOutput = document.getElementById("ErrorOutput");
	
	const credits = [3, 3, 3, 3, 2, 1.5, 1, 1.5, 1.5, 0]
	const grades = [sub1, sub2, sub3, sub4, sub5, sub6, sub7, sub8, sub9, sub10]
	
	let SGPA = 0;
	let tot_cred = 0;

	for(i=0; i<credits.length; i++)
	{
		tot_cred += credits[i];
		SGPA += grades[i] * credits[i];
	}

	SGPA /= tot_cred;

	if(SGPA < 0)
		ErrorOutput.innerHTML = "**Select Your Grades**";

	else if(PreviousCGPA == "")
		ErrorOutput.innerHTML = "**Enter Your Previous CGPA**";

	else if(PreviousCGPA < 0 || PreviousCGPA > 10)
		ErrorOutput.innerHTML = "**Invalid CGPA**"

	else
	{
		let CGPA = (parseFloat(PreviousCGPA) * (Sem-1) + SGPA)/Sem;
		
		ErrorOutput.innerHTML = "";
		SGPAoutput.innerHTML = Math.round(SGPA * 100) / 100;
		CGPAoutput.innerHTML = Math.round(CGPA * 100) / 100;
	}
}

function calculateSem3GPA(Sem)
{
	const sub1 = parseFloat(document.getElementById("S1").value);
	const sub2 = parseFloat(document.getElementById("S2").value);
	const sub3 = parseFloat(document.getElementById("S3").value);
	const sub4 = parseFloat(document.getElementById("S4").value);
	const sub5 = parseFloat(document.getElementById("S5").value);
	const sub6 = parseFloat(document.getElementById("S6").value);
	const sub7 = parseFloat(document.getElementById("S7").value);
	const sub8 = parseFloat(document.getElementById("S8").value);
	const sub9 = parseFloat(document.getElementById("S9").value);
	const sub10 = parseFloat(document.getElementById("S10").value);
	
	const SGPAoutput = document.getElementById("SGPAoutput");
	const CGPAoutput = document.getElementById("CGPAoutput");
	const PreviousCGPA = document.getElementById("CGPA").value;
	const ErrorOutput = document.getElementById("ErrorOutput");
	
	const credits = [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2, 0]
	const grades = [sub1, sub2, sub3, sub4, sub5, sub6, sub7, sub8, sub9, sub10]
	
	let SGPA = 0;
	let tot_cred = 0;
	
	for(i=0; i<credits.length; i++)
	{
		tot_cred += credits[i];
		SGPA += grades[i] * credits[i];
	}
	
	SGPA /= tot_cred;
	
	if(SGPA < 0)
		ErrorOutput.innerHTML = "**Select Your Grades**";

	else if(PreviousCGPA == "")
		ErrorOutput.innerHTML = "**Enter Your Previous CGPA**";

	else if(PreviousCGPA < 0 || PreviousCGPA > 10)
		ErrorOutput.innerHTML = "**Invalid CGPA**"

	else
	{
		let CGPA = (parseFloat(PreviousCGPA) * (Sem-1) + SGPA)/Sem;
		
		ErrorOutput.innerHTML = "";
		SGPAoutput.innerHTML = Math.round(SGPA * 100) / 100;
		CGPAoutput.innerHTML = Math.round(CGPA * 100) / 100;
	}
}

function calculateSem4GPA(Sem)
{
	const sub1 = parseFloat(document.getElementById("S1").value);
	const sub2 = parseFloat(document.getElementById("S2").value);
	const sub3 = parseFloat(document.getElementById("S3").value);
	const sub4 = parseFloat(document.getElementById("S4").value);
	const sub5 = parseFloat(document.getElementById("S5").value);
	const sub6 = parseFloat(document.getElementById("S6").value);
	const sub7 = parseFloat(document.getElementById("S7").value);
	const sub8 = parseFloat(document.getElementById("S8").value);
	const sub9 = parseFloat(document.getElementById("S9").value);
	const sub10 = parseFloat(document.getElementById("S10").value);
	
	const SGPAoutput = document.getElementById("SGPAoutput");
	const CGPAoutput = document.getElementById("CGPAoutput");
	const PreviousCGPA = document.getElementById("CGPA").value;
	const ErrorOutput = document.getElementById("ErrorOutput");
	
	const credits = [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2, 0]
	const grades = [sub1, sub2, sub3, sub4, sub5, sub6, sub7, sub8, sub9, sub10]
	
	let SGPA = 0;
	let tot_cred = 0;
	
	for(i=0; i<credits.length; i++)
	{
		tot_cred += credits[i];
		SGPA += grades[i] * credits[i];
	}
	
	SGPA /= tot_cred;
	
	if(SGPA < 0)
		ErrorOutput.innerHTML = "**Select Your Grades**";

	else if(PreviousCGPA == "")
		ErrorOutput.innerHTML = "**Enter Your Previous CGPA**";

	else if(PreviousCGPA < 0 || PreviousCGPA > 10)
		ErrorOutput.innerHTML = "**Invalid CGPA**"

	else
	{
		let CGPA = (parseFloat(PreviousCGPA) * (Sem-1) + SGPA)/Sem;
		
		ErrorOutput.innerHTML = "";
		SGPAoutput.innerHTML = Math.round(SGPA * 100) / 100;
		CGPAoutput.innerHTML = Math.round(CGPA * 100) / 100;
	}
}

function calculateSem5GPA(Sem)
{
	const sub1 = parseFloat(document.getElementById("S1").value);
	const sub2 = parseFloat(document.getElementById("S2").value);
	const sub3 = parseFloat(document.getElementById("S3").value);
	const sub4 = parseFloat(document.getElementById("S4").value);
	const sub5 = parseFloat(document.getElementById("S5").value);
	const sub6 = parseFloat(document.getElementById("S6").value);
	const sub7 = parseFloat(document.getElementById("S7").value);
	const sub8 = parseFloat(document.getElementById("S8").value);
	const sub9 = parseFloat(document.getElementById("S9").value);
	
	const SGPAoutput = document.getElementById("SGPAoutput");
	const CGPAoutput = document.getElementById("CGPAoutput");
	const PreviousCGPA = document.getElementById("CGPA").value;
	const ErrorOutput = document.getElementById("ErrorOutput");
	
	const credits = [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2]
	const grades = [sub1, sub2, sub3, sub4, sub5, sub6, sub7, sub8, sub9]
	
	let SGPA = 0;
	let tot_cred = 0;
	
	for(i=0; i<credits.length; i++)
	{
		tot_cred += credits[i];
		SGPA += grades[i] * credits[i];
	}
	
	SGPA /= tot_cred;
	
	if(SGPA < 0)
		ErrorOutput.innerHTML = "**Select Your Grades**";

	else if(PreviousCGPA == "")
		ErrorOutput.innerHTML = "**Enter Your Previous CGPA**";

	else if(PreviousCGPA < 0 || PreviousCGPA > 10)
		ErrorOutput.innerHTML = "**Invalid CGPA**"

	else
	{
		let CGPA = (parseFloat(PreviousCGPA) * (Sem-1) + SGPA)/Sem;
		
		ErrorOutput.innerHTML = "";
		SGPAoutput.innerHTML = Math.round(SGPA * 100) / 100;
		CGPAoutput.innerHTML = Math.round(CGPA * 100) / 100;
	}
}

function calculateSem6GPA(Sem)
{
	const sub1 = parseFloat(document.getElementById("S1").value);
	const sub2 = parseFloat(document.getElementById("S2").value);
	const sub3 = parseFloat(document.getElementById("S3").value);
	const sub4 = parseFloat(document.getElementById("S4").value);
	const sub5 = parseFloat(document.getElementById("S5").value);
	const sub6 = parseFloat(document.getElementById("S6").value);
	const sub7 = parseFloat(document.getElementById("S7").value);
	const sub8 = parseFloat(document.getElementById("S8").value);
	const sub9 = parseFloat(document.getElementById("S9").value);
	
	const SGPAoutput = document.getElementById("SGPAoutput");
	const CGPAoutput = document.getElementById("CGPAoutput");
	const PreviousCGPA = document.getElementById("CGPA").value;
	const ErrorOutput = document.getElementById("ErrorOutput");
	
	const credits = [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2]
	const grades = [sub1, sub2, sub3, sub4, sub5, sub6, sub7, sub8, sub9]
	
	let SGPA = 0;
	let tot_cred = 0;
	
	for(i=0; i<credits.length; i++)
	{
		tot_cred += credits[i];
		SGPA += grades[i] * credits[i];
	}
	
	SGPA /= tot_cred;
	
	if(SGPA < 0)
		ErrorOutput.innerHTML = "**Select Your Grades**";

	else if(PreviousCGPA == "")
		ErrorOutput.innerHTML = "**Enter Your Previous CGPA**";
		
	else if(PreviousCGPA < 0 || PreviousCGPA > 10)
		ErrorOutput.innerHTML = "**Invalid CGPA**"

	else
	{
		let CGPA = (parseFloat(PreviousCGPA) * (Sem-1) + SGPA)/Sem;
		
		ErrorOutput.innerHTML = "";
		SGPAoutput.innerHTML = Math.round(SGPA * 100) / 100;
		CGPAoutput.innerHTML = Math.round(CGPA * 100) / 100;
	}
}

function calculateSem7GPA(Sem)
{
	const sub1 = parseFloat(document.getElementById("S1").value);
	const sub2 = parseFloat(document.getElementById("S2").value);
	const sub3 = parseFloat(document.getElementById("S3").value);
	const sub4 = parseFloat(document.getElementById("S4").value);
	const sub5 = parseFloat(document.getElementById("S5").value);
	const sub6 = parseFloat(document.getElementById("S6").value);
	const sub7 = parseFloat(document.getElementById("S7").value);
	const sub8 = parseFloat(document.getElementById("S8").value);
	
	const SGPAoutput = document.getElementById("SGPAoutput");
	const CGPAoutput = document.getElementById("CGPAoutput");
	const PreviousCGPA = document.getElementById("CGPA").value;
	const ErrorOutput = document.getElementById("ErrorOutput");
	
	const credits = [3, 3, 3, 3, 3, 3, 3, 2]
	const grades = [sub1, sub2, sub3, sub4, sub5, sub6, sub7, sub8]
	
	let SGPA = 0;
	let tot_cred = 0;
	
	for(i=0; i<credits.length; i++)
	{
		tot_cred += credits[i];
		SGPA += grades[i] * credits[i];
	}
	
	SGPA /= tot_cred;
	
	if(SGPA < 0)
		ErrorOutput.innerHTML = "**Select Your Grades**";

	else if(PreviousCGPA == "")
		ErrorOutput.innerHTML = "**Enter Your Previous CGPA**";

	else if(PreviousCGPA < 0 || PreviousCGPA > 10)
		ErrorOutput.innerHTML = "**Invalid CGPA**"

	else
	{
		let CGPA = (parseFloat(PreviousCGPA) * (Sem-1) + SGPA)/Sem;
		
		ErrorOutput.innerHTML = "";
		SGPAoutput.innerHTML = Math.round(SGPA * 100) / 100;
		CGPAoutput.innerHTML = Math.round(CGPA * 100) / 100;
	}
}

function calculateSem8GPA(Sem)
{
	const sub1 = parseFloat(document.getElementById("S1").value);
	
	const SGPAoutput = document.getElementById("SGPAoutput");
	const CGPAoutput = document.getElementById("CGPAoutput");
	const PreviousCGPA = document.getElementById("CGPA").value;
	const ErrorOutput = document.getElementById("ErrorOutput");
	
	const credits = [12]
	const grades = [sub1]
	
	let SGPA = 0;
	let tot_cred = 0;
	
	for(i=0; i<credits.length; i++)
	{
		tot_cred += credits[i];
		SGPA += grades[i] * credits[i];
	}
	
	SGPA /= tot_cred;
	
	if(SGPA < 0)
		ErrorOutput.innerHTML = "**Select Your Grades**";

	else if(PreviousCGPA == "")
		ErrorOutput.innerHTML = "**Enter Your Previous CGPA**";

	else if(PreviousCGPA < 0 || PreviousCGPA > 10)
		ErrorOutput.innerHTML = "**Invalid CGPA**"

	else
	{
		let CGPA = (parseFloat(PreviousCGPA) * (Sem-1) + SGPA)/Sem;
		
		ErrorOutput.innerHTML = "";
		SGPAoutput.innerHTML = Math.round(SGPA * 100) / 100;
		CGPAoutput.innerHTML = Math.round(CGPA * 100) / 100;
	}
}