using
System;

using
System.Windows.Forms;

Form
form
=
new
Form
{
	WindowState
	=
	FormWindowState
	.Maximized
};

Label
label
=
new
Label{
	Text=
	"this is a label"
};

form
.Controls
.Add(
	label
);

void
random_color
(){
	Random
	random
	=
	new
	Random
	();
	
	label
	.BackColor
	=
	System
	.Drawing
	.Color
	.FromArgb(
		random
		.Next(
			256
		),
		
		random
		.Next(
			256
		),
		
		random
		.Next(
			256
		)
	);
};

Button
x_button
=
new
Button{
	Text=
	"X",
	
	Left=
	200,
	
	Top=
	50
};

Button
y_button
=
new
Button{
	Text=
	"Y",
	
	Left=
	50,
	
	Top=
	200
};

x_button
.Click
+=(
	_,
	_
)=>{
	label
	.Left
	+=
	100;
	
	if(
		label
		.Right
		>
		form
		.Width
	)
	label
	.Left
	-=
	form
	.Width;
	
	random_color();
};

y_button
.Click
+=(
	_,
	_
)=>{
	label
	.Top
	+=
	100;
	
	if(
		label
		.Bottom
		>
		form
		.Height
	)
	label
	.Top
	-=
	form
	.Height;
	
	random_color();
};

form
.Controls
.Add(
	x_button
);

form
.Controls
.Add(
	y_button
);

Application
.EnableVisualStyles();

Application
.Run(
	form
);