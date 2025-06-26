import
java_cup.runtime.*;

%%

// %debug

%cup

number
=
(
	"0"
	|
	[1-9]
	[0-9]
	*
)
(
	"."
	[0-9]
	*
	[1-9]
)
?

%%

[eE]
{
	return new Symbol
	(sym.exponent);
}

"^"
{
	return new Symbol
	(sym.power);
}

"+"
{
	return new Symbol
	(sym.plus);
}

"-"
{
	return new Symbol
	(sym.minus);
}

"*"
{
	return new Symbol
	(sym.multiply);
}

"/"
{
	return new Symbol
	(sym.divide);
}

{number}
{
	return new Symbol
	(
		sym.number,
		
		Double.valueOf
		(yytext())
	);
}

[a-z]
{
	return new Symbol
	(
		sym.scalar_variable,
		
		yycharat
		(0)
		-
		'a'
	);
}

[A-Z]
{
	return new Symbol
	(
		sym.vector_variable,
		
		yycharat
		(0)
		-
		'A'
	);
}

";"
{
	return new Symbol
	(sym.semicolon);
}

"="
{
	return new Symbol
	(sym.equal);
}

"["
{
	return new Symbol
	(sym.left_square_bracket);
}

"]"
{
	return new Symbol
	(sym.right_square_bracket);
}

"?"
{
	return new Symbol
	(sym.question_mark);
}

","
{
	return new Symbol
	(sym.coma);
}

"."
{
	return new Symbol
	(sym.dot);
}

[^]
{}