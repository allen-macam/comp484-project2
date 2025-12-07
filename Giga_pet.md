# Project Gigapet (JavaScript)

## Purpose

Create the functionality and UI for a simple Giga Pet game. The purpose of this project is to
ensure you understand JavaScript arrays, objects, DOM event handling (click events), and how
to update element properties on the page.

## Requirements

You will extend the starter code provided. You may edit the HTML and CSS to match your style.
This project uses the jQuery library (already included in the starter). You may reference lecture
slides or past homework for ideas, but the final code must be your own.

- Create a `pet_info` object with keys `name`, `weight`, and `happiness`, and assign it to the
	variable `pet_info` with sensible initial values.
- Add behaviors triggered by the action buttons:
	- **Treat:** increase the pet's happiness and weight.
	- **Play:** increase the pet's happiness and reduce its weight.
	- **Exercise:** reduce the pet's happiness and weight.
- Prevent key values (weight, happiness) from going below zero using conditionals.
- Add at least one new action button and implement a corresponding behavior. (Tip: put the
	new status output below the happiness text in the HTML.)
- Show a visual notification (not `console.log()` or `alert()`) after each button press with a
	short comment from your pet (e.g. "Yay! More treats!").
- Review jQuery documentation and pick two methods not covered in class or starter code.
	Use both methods in your project and include comments explaining how they are used.

## Grading Criteria

- **Implementation:** All requirements implemented.
- **Code quality:** JavaScript, HTML, and CSS properly formatted with appropriate comments.
- **Rendering:** Web page renders correctly in Chrome.
- **Assets:** Replace the provided image with one of your choosing.

To earn full credit, show creativity and go beyond the basic requirements.

## Suggestions / Ideas (optional enhancements)

- Add animations and/or sound effects for specific pet states.
- Use object constructors to create multiple pets.
- Refactor to remove jQuery if you want to demonstrate pure JavaScript.
- Any other creative additions you can discuss with the instructor.

## Academic Integrity

This is an individual project. You may discuss ideas with classmates, but you must not share
source code. Submissions with significant source-code similarity will be penalized. If you
provide your code to someone else, that also violates the rules.

## Quick checklist

- [ ] Create `pet_info` object and initialize values
- [ ] Implement Treat / Play / Exercise behaviors
- [ ] Add at least one new action + behavior
- [ ] Ensure values never drop below zero
- [ ] Add visual notifications (not console/alert)
- [ ] Use two extra jQuery methods and document them with comments

Good luck — have fun building your Giga Pet!
