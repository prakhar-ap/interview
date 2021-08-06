import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import Book from './Book';

configure({adapter: new Adapter()});
const book = {
  "title": "JavaScript Creativity",
  "subtitle": "Exploring the Modern Capabilities of JavaScript and HTML5",
  "isbn13": "9781430259442",
  "price": "$30.64",
  "image": "https://itbook.store/img/books/9781430259442.png",
  "url": "https://itbook.store/books/9781430259442"
};

describe('Book Component', () => {
  it('should render without erros', () => {
    const wrapper = mount(
      <Book data={book}/>
    );
    expect(wrapper.find('Book')).toHaveLength(1);
  });
})
