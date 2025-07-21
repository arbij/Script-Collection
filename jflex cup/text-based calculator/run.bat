call ^
jflex ^
scanner.jflex

@echo ^
on

set ^
cup_location=^
C:\Users\Arbi\Desktop\Files\shkolle\nelda\laboratoret\cup

java ^
-jar ^
%cup_location%\java-cup-11b.jar ^
parser.cup

set ^
runtime=^
%cup_location%\java-cup-11b-runtime.jar

javac ^
 ^
-classpath ^
.;^
%runtime%^
 ^
*.java

java ^
 ^
-classpath ^
.;^
%runtime%^
 ^
Main ^
input.txt

pause