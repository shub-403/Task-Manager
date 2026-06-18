1. Parsing means the browser reads the HTML characters and understands their structure.
2. Tokenization breaks HTML into meaningful tokens like start tags, end tags, and text.
3. The DOM Tree is the object-based structure created from HTML.
4. The CSSOM Tree is the object-based structure created from CSS rules.
5. The Render Tree contains visible nodes with final styles used for layout and painting.
6. Event Bubbling is when we have a nested divs or elements and if we click on the child so bydefault we click on his parent and grand parent as well.
7. Event Capturing is opposite the event bubblind, in this case the click goes from grand parent to parent and child.
8. Event Delegation is that if we have multiple button in a div so we dont have to add event listner for all those buttons. instead we add event listener to the parent and target the clicked button using event.target.
