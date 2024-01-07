function calculateSem1GPA()
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
	
	const output = document.getElementById("sgpa");
	
	const credits = [3, 3, 3, 3, 1.5, 1.5, 3, 1.5, 0]
	const grades = [sub1, sub2, sub3, sub4, sub5, sub6, sub7, sub8, sub9]
	
	let GPA = 0;
	let tot_cred = 0;
	
	for(i=0; i<credits.length; i++)
	{
		tot_cred += credits[i];
		GPA += grades[i] * credits[i];
	}
	
	GPA /= tot_cred;
	
	output.innerHTML = GPA;
}

function calculateSem2GPA()
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
	
	const output = document.getElementById("sgpa");
	
	const credits = [3, 3, 3, 3, 2, 1.5, 1, 1.5, 1.5, 0]
	const grades = [sub1, sub2, sub3, sub4, sub5, sub6, sub7, sub8, sub9, sub10]
	
	let GPA = 0;
	let tot_cred = 0;
	
	for(i=0; i<credits.length; i++)
	{
		tot_cred += credits[i];
		GPA += grades[i] * credits[i];
	}
	
	GPA /= tot_cred;
	
	output.innerHTML = GPA;
}

function calculateSem3GPA()
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
	
	const output = document.getElementById("sgpa");
	
	const credits = [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2, 0]
	const grades = [sub1, sub2, sub3, sub4, sub5, sub6, sub7, sub8, sub9, sub10]
	
	let GPA = 0;
	let tot_cred = 0;
	
	for(i=0; i<credits.length; i++)
	{
		tot_cred += credits[i];
		GPA += grades[i] * credits[i];
	}
	
	GPA /= tot_cred;
	
	output.innerHTML = GPA;
}

function calculateSem4GPA()
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
	
	const output = document.getElementById("sgpa");
	
	const credits = [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2, 0]
	const grades = [sub1, sub2, sub3, sub4, sub5, sub6, sub7, sub8, sub9, sub10]
	
	let GPA = 0;
	let tot_cred = 0;
	
	for(i=0; i<credits.length; i++)
	{
		tot_cred += credits[i];
		GPA += grades[i] * credits[i];
	}
	
	GPA /= tot_cred;
	
	output.innerHTML = GPA;
}

function calculateSem5GPA()
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
	
	const output = document.getElementById("sgpa");
	
	const credits = [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2]
	const grades = [sub1, sub2, sub3, sub4, sub5, sub6, sub7, sub8, sub9]
	
	let GPA = 0;
	let tot_cred = 0;
	
	for(i=0; i<credits.length; i++)
	{
		tot_cred += credits[i];
		GPA += grades[i] * credits[i];
	}
	
	GPA /= tot_cred;
	
	output.innerHTML = GPA;
}

function calculateSem6GPA()
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
	
	const output = document.getElementById("sgpa");
	
	const credits = [3, 3, 3, 3, 3, 1.5, 1.5, 1.5, 2]
	const grades = [sub1, sub2, sub3, sub4, sub5, sub6, sub7, sub8, sub9]
	
	let GPA = 0;
	let tot_cred = 0;
	
	for(i=0; i<credits.length; i++)
	{
		tot_cred += credits[i];
		GPA += grades[i] * credits[i];
	}
	
	GPA /= tot_cred;
	
	output.innerHTML = GPA;
}

function calculateSem7GPA()
{
	const sub1 = parseFloat(document.getElementById("S1").value);
	const sub2 = parseFloat(document.getElementById("S2").value);
	const sub3 = parseFloat(document.getElementById("S3").value);
	const sub4 = parseFloat(document.getElementById("S4").value);
	const sub5 = parseFloat(document.getElementById("S5").value);
	const sub6 = parseFloat(document.getElementById("S6").value);
	const sub7 = parseFloat(document.getElementById("S7").value);
	const sub8 = parseFloat(document.getElementById("S8").value);
	
	const output = document.getElementById("sgpa");
	
	const credits = [3, 3, 3, 3, 3, 3, 3, 2]
	const grades = [sub1, sub2, sub3, sub4, sub5, sub6, sub7, sub8]
	
	let GPA = 0;
	let tot_cred = 0;
	
	for(i=0; i<credits.length; i++)
	{
		tot_cred += credits[i];
		GPA += grades[i] * credits[i];
	}
	
	GPA /= tot_cred;
	
	output.innerHTML = GPA;
}

function calculateSem8GPA()
{
	const sub1 = parseFloat(document.getElementById("S1").value);
	
	const output = document.getElementById("sgpa");
	
	const credits = [12]
	const grades = [sub1]
	
	let GPA = 0;
	let tot_cred = 0;
	
	for(i=0; i<credits.length; i++)
	{
		tot_cred += credits[i];
		GPA += grades[i] * credits[i];
	}
	
	GPA /= tot_cred;
	
	output.innerHTML = GPA;
}