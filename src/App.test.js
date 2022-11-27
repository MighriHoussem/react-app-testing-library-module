import { render, screen } from '@testing-library/react';
import App from './App';
import AddInput from './components/AddInput/AddInput';
import Header from './components/Header/Header';

//GET By Tesing components ==> Not Async

test('renders learn react link', () => {
  render(<App />);
  //get element && check not existing on UI App.js
  const linkElement = screen.queryByText('/learn-react/');
  expect(linkElement).toBeNull();
});

test('renders our React App', () => {
  render(<AddInput todos={[]} addTodos={() => { console.log('here'); }} />);
  const buttonElement = screen.getByText('Add');
  expect(buttonElement).toBeDefined();
  expect(buttonElement).toBeInTheDocument();
});

it('test Render App Header', () => {
  let title = "React App Testing";
  render(<Header title={title} />);
  //get just one heading element with level 1 h1
  const headerElement = screen.getByRole("heading", { level: 1 });
  expect(headerElement).toBeInTheDocument();
  expect(headerElement).toHaveClass("header");
  //check second heading element 
  const headerElement2 = screen.getByTestId("header-2");
  expect(headerElement2).toBeInTheDocument();
  expect(headerElement2).toHaveClass('header');
});

//Find By Testing compoenents ===> Must test with Async / await callback function 

it('test Render Header with findBy methods!', async () => {
  let title = "React App Testing";
  render(<Header title={title} />);
  //get just one heading element with level 1 h1
  const headerElement = await screen.findByRole("heading", { level: 1 });
  expect(headerElement).toBeInTheDocument();
  expect(headerElement).toHaveClass("header");
});

//Query By Testing compoenents ==> Not Async

it('test Render Header with queryBy methdos!', () => {
  let title = "React App Testing";
  render(<Header title={title} />);
  //get just one heading element with level 1 h1
  const headerElement = screen.queryByRole("heading", { level: 1 });
  expect(headerElement).toBeInTheDocument();
  expect(headerElement).toHaveClass("header");
});

it('test Render Headers count elements!', () => {
  let title = "React App Testing";
  render(<Header title={title} />);
  //get just one heading element with level 1 h1
  const headersElement = screen.getAllByRole("heading");
  expect(headersElement.length).toBe(2);
});