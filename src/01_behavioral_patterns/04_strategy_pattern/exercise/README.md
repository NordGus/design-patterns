# Exercise 

In the **Exercises** project, look at the **strategy/ChatClient** class. This class uses an encryption algorithm to encrypt a message before sending it out.

What are the problems in this implementation? 

*The class breaks the single responsability principle and throws an exception when the encription algorithm is not implemented, this is something that the main class doesn´t need to know about*

Refactor the code using the strategy pattern. What are the benefits of the new implementation?