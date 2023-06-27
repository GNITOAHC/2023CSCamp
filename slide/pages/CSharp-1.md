# C# basics
## C# 基礎教學
---

## Write a Hello World program
```cs
using System;
Console.WriteLine("Hello World!");
```

---

## Basic Programming Concepts 基礎程式觀念

<Toc listClass="toc" minDepth="2" mode="onlyCurrentTree" />

---

### Comments 註解
- Doesn't affect the functionality of programs
- Written for the purpose of explaining codes to developers
```cs {all|5,6}
using System;
Console.WriteLine("Hello World!");
// This line outputs "Hello World!" to screen
```

---

### Variables & Data types 變數與資料型態

|type   |function||
|-------|--------------------------------|----|
|int    |32-bit signed integer           |整數|
|double |64-bit floating point type      |浮點數|
|float  |32-bit floating point type      |浮點數|
|char   |16-bit single Unicode character |字元|
|string |A sequence of Unicode characters|字串|
|bool   |8-bit logical true/false value  |布林值|

---

#### int, float & double
- int 整數
- float, double 浮點數
```cs {all|3,4|6,7|9,10}
using System;

int integer = 5;
Console.WriteLine(integer);

float f_num = 1.5f;
Console.WriteLine(f_num);

double d_num = 3.14;
Console.WriteLine(d_num);
```
output
```cs
5
1.5
3.14
```

---

#### char & string
- char 字元
- string 字串
```cs {all|3,4|6,7}
using System;
		
char gender = 'm';
Console.WriteLine(gender);

string name = "Alex";
Console.WriteLine(name);
```
output
```cs
m
Alex
```

---

#### boolean
- bool 布林值
```cs {all|3|4,5|6,7}
using System;

bool is_student = true;
if(is_student)
	Console.WriteLine("Yes");
else
	Console.WriteLine("No");
```
output
```cs
Yes
```

---

## Array 陣列
What is an array?
- An array is a collection of items of same data type stored at contiguous memory locations

What is the purpose of using arrays?
- To store multiple pieces of data of the same type together

---

### Array

Declaration
```cs
type[] arrayName;
// all elements are initialized with the default value
```

---

### Array
Example
```cs{all|1-3|5,6|8,9|11-14|16,17}
// Declare a single-dimensional array of 5 integers.
int[] arr = new int[5];
// arr[0] = 0, arr[1] = 0, arr[2] = 0, ..., arr[4] = 0

// Declare and set array element values
int[] arr = new int[] {1, 2, 3, 4, 5};

// You can also do in this way :
int[] arr = {1, 2, 3, 4, 5};

// Declare a two dimensional array
int[,] 2DArr = new int[2, 3];
//[0, 0] [0, 1] [0, 2]
//[1, 0] [1, 1] [1, 2]

// Declare and set array element values
int[,] 2DArr = {{1, 2, 3}, {4, 5, 6}};
```
---

## Loops 迴圈

<Toc listClass="toc" minDepth="2" maxDepth="3" mode="onlyCurrentTree" />

---

### while

```cs
while(condition){
	statement
}
```
example
```cs {all|4,7|4-7}
using System;

int i = 0;
while(i < 3){
	Console.WriteLine(i);
	i++;
}
```
output
```cs
0
1
2
```

---

### do while

```cs
do{
		statement
} while(condition);
```
example
```cs {all|4,7|4-7}
using System;

int i = 0;
do{
	Console.WriteLine(i);
	i++;
} while(i < 3);
```
output
```cs
0
1
2
```

---

### for

```cs
for(init-state; condition; expression){
	statement
}
```
example
```cs {all|3,5|3-5}
using System;
		
for(int i = 0; i < 3; i++){
	Console.WriteLine(i);
}
```
output
```cs
0
1
2
```

---

## A Number Guessing Game
- Given an unknown number. Whenever the player makes a guess, the program should tell if it is correct or wrong.
- More specifically, the program should tell the player if the answer is higher or lower.

---

## A Number Guessing Game
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

## A Number Guessing Game

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

## A Number Guessing Game

Lastly, we put all the components in a do while loop
```cs {all|3,4|6,7|9-11|18|6,7|9-11|12-14|18|6,7|9-11|12-14|15-17|18}
using System;
		
int answer = 20;
int guess = answer + 1;
while(guess != answer){
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
}
```

---

## A Number Guessing Game
### Advanced Gameplay
- Set limit on guessing tries
- Choose the answer randomly

---

## Function
What is a function?
- A technique of wrapping code to perform a certain task

Why do we use functions?
- Same code can be reused over and over
- Enables reusability and reduces redundancy
- The program becomes easy to understand and manage

---

## Function
- How to declare a function?
```cs
<Access Specifiers> <return type> <name of the function>(< function parameters>)
{
	<function code>
	return;
}
```

---

## Function
How to use it?
```cs{all|8,9|2|2-6}
using System;
void square(int num)
{
    int sq = num * num;
    Console.WriteLine(sq);
}

square(5);
// Calling the method
```
output
```cs
25
```

---

## Function
- return type : defines and constrains the data type of the value returned from a function
---

## Function
- return type : void
- doesn't return any value
```cs{all|9|2|2-7|5,6}
using System;
void square(int num)
{
    int sq = num * num;
    Console.WriteLine(sq);
    // Doesn’t provide any return statement
}

square(5);
```
output
```cs
25
```

---

## Function
- return type : int(or any datatype you want)
- returns a value
```cs{all|8|2|4,5|8}
using System;
int square(int num)
{
    return num * num;
    // return statement
}

Console.WriteLine(square(5));
```
output
```cs
25
```

---

## Function
- parameters參數 : the data you give to a function

---

## Function
- example
```cs{all|1-4|6-9|11-14|16-21}
//addition function : 2 parameters
int plus(int num1, int num2){
	return num1 + num2;
}

//subtraction function : 2 parameters
int minus(int num1, int num2){
	return num1 - num2;
}

//square function : 1 parameters
int square(int num){
	return num * num;
}

//print function : 1 parameters
void print(int times){
	for(int i = 0; i < times; ++i){
		Console.WriteLine("Hi");
	}
}
```

---
