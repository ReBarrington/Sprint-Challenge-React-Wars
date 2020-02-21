# Answers
1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

2. What does it mean to think in react?

One of the many great parts of React is how it makes you think about apps as you build them. The thought process is: mock design, break UI into a component hierarchy, build a static version (no interactivity, no state), set up state, identify where state should live.

3. Describe state.

State is managed within the component (similar to variables declared within a function).

props (short for “properties”) and state are both plain JavaScript objects. While both hold information that influences the output of render, they are different in one important way: props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function).

4. Describe props.

Props get passed to the component (similar to function parameters)

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

A "side effect" is anything that affects something outside the scope of the function being executed. These can be, say, a network request, which has your code communicating with a third party (and thus making the request, causing logs to be recorded, caches to be saved or updated, all sorts of effects that are outside the function. Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects. The Effect Hook lets you perform side effects in function components.