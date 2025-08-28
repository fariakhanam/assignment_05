1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementByID : It returns one element by matches the given id and id name must be unique . 
getElementsByClassName : it returns the collection of elements that have the same class name. it basically a array like object .
querySelector : it returns the first element of selector. It is mainly works like a CSS selector .
 querySelectorAll : it returns all the matches elements and returns a nodelist which is a array like object.
 
2. How do you create and insert a new element into the DOM?

To create a new element and insert a new element we just follow the belowing step :
for create using : document.createElement("tag_name")
for adding content use : innerText/ innerHTML
insert into DOM with : appenchild

3.What is Event Bubbling and how does it work?
Event bubbling means when we add any event happend like click or others it firstly works the inside of it and it  spreads from the inside to the outside. 
it works:
When  clicked the child button, the event starts at the child element 
Then the event bubbles up to the parent div 
It can continue to bubble up to the body, document.

4.What is Event Delegation in JavaScript? Why is it useful?
Event Delegation is a technique in JavaScript where instead of attaching event listeners to multiple child elements, attach a single listener on a parent element. Then  use (event.target)
to determine which child triggered the event.
it is useful because of simpler code, less memory usages and dynamic elements.

5.What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() : It 	stops the browser’s default action but not stop bubblings
stopPropagation() : It stops the event from reaching parent elements that's mean it prevents bubbling but does not prevent the default browser behavior.

