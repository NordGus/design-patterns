# Exercise 

In the **Exercises** project, look at the **command/VideoEditor** class. This class represents the operations we can perform on a video, such as adding a label to it or changing its contrast. 

We need to allow the user to undo any changes he/she makes to a video.

What pattern would you use to implement this feature? The memento or the command pattern? Why?

*I would use the command pattern because, the application been a Video Editor, storing a snapshot of a video to implement an Undo Mechanism is impractical because videos are large files*

Write the necessary code to implement the undo feature. 