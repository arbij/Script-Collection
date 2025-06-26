%%

%standalone

%state found

%%

<YYINITIAL>
ab
{
	yybegin
	(found)
	;
}

<found>
<<EOF>>
{
	System.out.println
	(
		"true - "
		+
		yytext()	
	)
	;
	
	System.exit
	(
		0
	)
	;
}

[^]
{
	System.out.println
	(
		"false - "
		+
		yytext()
	)
	;
	
	System.exit
	(
		0
	)
	;
}