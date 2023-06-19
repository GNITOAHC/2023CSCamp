# C# basics
## C# 基礎教學
---

# Write a Hello World program
```cs
using System;
class Hello {
		static void Main()
		{
				Console.WriteLine("Hello World!");
		}
}
```

---

# Basic Programming Concepts

<Toc listClass="toc" minDepth="2" mode="onlyCurrentTree" />

---

## Comments
- Doesn't affect the functionality of programs
- Written for the purpose of explaining codes to developers
```cs {all|5,6}
using System;
class Hello {         
    	static void Main()
    	{
        		Console.WriteLine("Hello World!");
						// This line outputs "Hello World!" to screen
    	}
}
```

---

## Variables & Data types

---

### int, float & double
- int 整數
- float, double 浮點數
```cs {all|5,6|8,9|11,12}
using System;
class Example {
		static void Main()
		{
				int integer = 5;
				Console.WriteLine(integer);
		
				float f_num = 1.5f;
				Console.WriteLine(f_num);
	
				double d_num = 3.14;
				Console.WriteLine(d_num);
		}
}
```
output
```cs
5
1.5
3.14
```

---

### char & string
- char 字元
- string 字串
```cs {all|5,6|8,9}
using System;
class Example {
		static void Main()
		{
				char gender = 'm';
				Console.WriteLine(gender);

				string name = "Alex";
				Console.WriteLine(name);
		}
}
```
output
```cs
m
Alex
```

---

### boolean
- bool 布林值
```cs {all|5|6,7,8,9}
using System;
class Example {
		static void Main()
		{
				bool is_student = true;
				if(is_student)
						Console.WriteLine("Yes");
				else
						Console.WriteLine("No");
		}
}
```
output
```cs
Yes
```

---

# Loops

<Toc listClass="toc" minDepth="2" maxDepth="3" mode="onlyCurrentTree" />

---

## while
```cs {all|6,9|6,7,8,9}
using System;
class Example {
		static void Main()
		{
				int i = 0;
				while(i < 3){							// while(condition){
					Console.WriteLine(i);		//		statement	
					i++;
				}													// }
		}
}
```
output
```cs
0
1
2
```

---

## do while
```cs {all|6,9|6,7,8,9}
using System;
class Example {
		static void Main()
		{
				int i = 0;
				do{												// do{
					Console.WriteLine(i);		//		statement
					i++;
				} while(i < 3);						// } while(condition);
		}
}
```
output
```cs
0
1
2
```

---

## for 
```cs {all|5,7|5,6,7}
using System;
class Example {
		static void Main()
		{	
				for(int i = 0; i < 3; i++){		// for(init-state; condition; expression){
						Console.WriteLine(i);			// 			statement
				}															// }
		}
}
```
output
```cs
0
1
2
```

---

# A Number Guessing Game
- Given an unknown number. Whenever the player makes a guess, the program should tell if it is correct or wrong.
- More specifically, the program should tell the player if the answer is higher or lower.

---

# A Number Guessing Game
Let's start from game message and input
```cs
Console.WriteLine("Enter your guess: ");
```

we have to convert the input to INT datatype
```cs
int guess;
guess = Console.Convert.ToInt32(Console.ReadLine());
```
---

# A Number Guessing Game

Now we check if the number is correct

```cs
if(guess > answer)
		Console.WriteLine("Smaller");
else if(guess < answer)
		Console.WriteLine("Bigger");
else
		Console.WriteLine("BINGO!!!");
```

---

# A Number Guessing Game

Lastly, we put all the components in a do while loop
```cs {all|5,6|8,9|11,12,13|20|8,9|11,12,13|14,15,16|20|8,9|11,12,13|14,15,16|17,18,19|20}
using System;
class NumberGuessingGame {
		static void Main()
		{
				int answer = 15;
				int guess;
				do{
						Console.WriteLine("Enter your guess: "); // user input
						guess = Convert.ToInt32(Console.ReadLine()); // convert string to int
	
						if(guess > answer){
								Console.WriteLine("Smaller");
						}
						else if(guess < answer){
								Console.WriteLine("Bigger");
						}
						else{
								Console.WriteLine("BINGO!!!");
						}
				} while(guess != answer);
		}
}
```

---

# A Number Guessing Game
## Advanced Gameplay
- Set limit on guessing tries
- Choose the answer randomly
