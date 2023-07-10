---
layout: center
---

# C# - 2 Class

---

## Class (類別)

- What is a class?

```cs
using System;        
public class Cat
{
    int age;
	double health;
    string name;
    
    public Cat(string name,int age)
    {
		this.name = name;
        this.age = age;
        this.health = age*100;
    }
    
    public void Meow()
    {
        Console.WriteLine("Cat " + name + " with age:" + age +" said meow~");
    }
}
```


---

## Class (類別)
- Classes are like Data Types, but with more functionality
```cs 
    
class Program
{
    static void Main()
    {
        
        Cat cat1 = new Cat("Leo", 10);
        Cat cat2 = new Cat("Steven", 20);
        cat1.Meow();
    }
}


```


---

## Class (類別)
- Properties
```cs{4-6}
using System;        
public class Cat
{
    int age;
	double health;
    string name;
    
    public Cat(string name,int age)
    {
		this.name = name;
        this.age = age;
        this.health = age*100;
    }
    
    public void Meow()
    {
        Console.WriteLine("Cat " + name + " with age:" + age +" said meow~");
    }
}
```

---

## Class(類別)
- Class Methods
```cs{15-18}
using System;        
public class Cat
{
    int age;
	double health;
    string name;
    
    public Cat(string name,int age)
    {
		this.name = name;
        this.age = age;
        this.health = age*100;
    }
    
    public void Meow()
    {
        Console.WriteLine("Cat " + name + " with age:" + age +" said meow~");
    }
}
```

---

## Class(類別)
- Class Constructor (構造器)
```cs{8-13}
using System;        
public class Cat
{
    int age;
	double health;
    string name;
    
    public Cat(string name,int age)
    {
		this.name = name;
        this.age = age;
        this.health = age*100;
    }
    
    public void Meow()
    {
        Console.WriteLine("Cat " + name + " with age:" + age +" said meow~");
    }
}

class Program
{
    static void Main()
    {
        Cat cat = new Cat("Steven", 10);
        cat.Meow();
    }
}
```

---

## Class(類別)
- public private modifiers
1. Public 會使 Property 跟 Method 變成任何人都可觀看與修改
2. Private 會使 Property 跟 Method 變成只有Class內可觀看與修改
```cs
class User{
    public string name;
    private string password;
    
    public User(string name, string password){
        this.name = name;
        this.password = password;
    }
    
    public void SetPassword(string password){
        this.password = password;
    }
    
    private string GetPassword(){
        return password;
    }
}
class Program
{
    static void Main()
    {
        User user = new User("brian","SuperSecretPassword");
        Console.WriteLine(user.name); //Works
        Console.WriteLine(user.password); //Error: password is private
        user.SetPassword("123456"); //Works
        user.GetPassword(); //Error: GetPassword method is private
    }
}
```

---

## Lab
- Make the following code work.

```cs
class Program
{
    static void Main()
    {   
        string type = "strawberry";
        Food food = new Food(type); //創建一個type為strawberry的食物
        string name = "Jeffery"; 
        Person person = new Person(name); //創建一個名字叫Jeffery的人
        person.Feed(food); //餵食物給Jeffery
    }
}
```

Output
```
Jeffery ate a strawberry
```
---

## Answer

```cs

class Food{
    public string type;
    public Food(string type){
        this.type = type;
    }
}

class Person{
    private string name;
    
    public Person(string name){
        this.name = name;
    }
    
    public void Feed(Food food){
        
    }
    
}

```
