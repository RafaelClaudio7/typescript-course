/* eslint-disable */

// Type Assertion
const body = document.querySelector('body') as HTMLBodyElement;
body.classList.add('odd');

// chaining
const input = document.querySelector('input');
input?.focus();

// conditional
const button = document.querySelector('button');
if (button) button.classList.remove('disable');
