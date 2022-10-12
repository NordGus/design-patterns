# Exercise

Look at the **Logger** class in the **singleton** package of the **Exercises** project. With the current implementation, we can create multiple loggers writing to the same log file in parallel.

Use the singleton pattern to ensure only a single logger can be instantiated for a given file.