# Exercise

We’re going to build an audio editor for editing wave (.wav) files. We’re planning to ship this application with a bunch of standard filters that users can apply on their audio files, such as:
- Noise reduction
- Reverb
- Normalize

We want other developers to be able to create new filters in the form of plugins that can be imported into our application.

Look at **visitor/WavFile** class.

- What are the problems with this implementation?

*Violets the open close principle and is not very extensible, it could not satified the requirements for plugin development*

- Can the visitor pattern solve these problems? Why?

*Yes, it  would make the code a lot more extensible and the developers would only have to deal with development of operations for a limited amount of segment types*

- Refactor the code and apply the visitor pattern.