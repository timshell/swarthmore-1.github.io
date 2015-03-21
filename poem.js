function nextLine(line) {

	var poem = new Array("<p onClick=nextLine(1)>There once was a maintainer on github</p>",
"<p onClick=nextLine(2)>So many pull requests she did snub</p>",
"<p onClick=nextLine(3)>So I forked the repo</p>",
"<p onClick=nextLine(4)>Now they all send <em>me</em> changes, d'oh!</p>",
"<p onClick=nextLine(5)>Said the maintainer, 'Welcome to the club!'</p>");

		var haiku = new Array("<p onClick=nextLine(1)>Here is a haiku</p>",
"<p onClick=nextLine(2)>This is seven syllabus</p>",
"<p onClick=nextLine(3)>And this is the end.</p>");

	document.getElementById("line").innerHTML=poem[line];

	document.getElementById("line").innerHTML=haiku[line];
}

