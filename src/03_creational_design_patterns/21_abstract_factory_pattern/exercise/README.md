# Exercise

You’re building a weight loss app. Your app currently supports two kinds of goals: Weight Loss and Build Muscle. There’s a plan to support other kinds of goals like Strength Training, Getting Active and so on in the near future.

Look at the implementation of the **HomePage** class in the **abstractFactory** package of the **Exercises** project. Depending on the goal the user selects, they’ll see a different mean plan and workout routine.

What are the problems with this design? Refactor this design using the abstract factory pattern. 

*It violates the open/close principle and is promp to posible errors by initializing the wrong class*.