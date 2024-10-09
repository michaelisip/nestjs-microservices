import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BookDto } from './dto/book.dto';

@Injectable()
export class BooksService {
  private books: BookDto[] = [
    {
      id: 1,
      title: 'Lorem',
      author: 'John Doe',
      rating: 4,
    },
    {
      id: 2,
      title: 'Ipsum',
      author: 'Jane Doe',
      rating: 5,
    },
  ];

  create(createBookDto: CreateBookDto) {
    const newBook: BookDto = {
      id: this.books.length + 1,
      ...createBookDto,
    };

    this.books.push(newBook);
    return this.books;
  }

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    return this.books.find((book) => book.id === id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.books.map((book) => {
      if (book.id === id) {
        book.title = updateBookDto.title;
        book.author = updateBookDto.author;
        book.rating = updateBookDto.rating;
      }

      return book;
    });
  }

  remove(id: number) {
    return this.books.filter((book) => book.id !== id);
  }
}
