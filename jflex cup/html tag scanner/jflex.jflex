%%

%standalone

%{
	int
	tags=
	0;
	
	int
	table_tags=
	0;
	
	int
	[]
	h_tags
	=
	new
	int
	[6];
	
	void
	visible_tag_found()
	{
		++
		tags;
		
		System.out.print
		(yytext());
	}
%}

letter
=
[a-z]
|
[A-Z]

identifier
=
{letter}
(
	{letter}
	|
	[0-9]
)
*

%state comment

rest_of_opening_tag
=
(
	" "
	{identifier}
	"=\""
	[^\"\n]
	*
	"\""
)
*
"/"
?
">"

%%

<YYINITIAL>
{
	"<!--"
	{
		yybegin
		(comment);
	}
	
	"<h"
	[1-6]
	{rest_of_opening_tag}
	{
		++
		h_tags
		[
			yycharat(2)
			-
			49
		];
		
		visible_tag_found();
	}
	
	"<table"
	{rest_of_opening_tag}
	{
		++
		table_tags;
		
		visible_tag_found();
	}

	"<"
	{identifier}
	{rest_of_opening_tag}
	{
		visible_tag_found();
	}
}

<comment>
{
	"-->"
	{
		yybegin
		(YYINITIAL);
	}
	
	[^]
	{}
}

<<EOF>>
{
	System.out.println
	(
		"\n\nNumber of tags - "
		+
		tags
		+
		"\nNumber of table tags - "
		+
		table_tags
	);
	
	for
	(
		int
		number=
		1;
		
		number
		<=
		h_tags.length;
		
		++
		number
	)
	System.out.println
	(
		"Number of h"
		+
		number
		+
		" tags - "
		+
		h_tags
		[
			number
			-
			1
		]
	);
	
	return
	0;
}