package com.codingdojo.mvc.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.codingdojo.mvc.models.Book;
import com.codingdojo.mvc.services.BookService;

@RestController
public class BooksApi {
	private final BookService bookService;
	
	public BooksApi(BookService bookService) {
		this.bookService = bookService;
	}
	
	@RequestMapping("/api/books")
	public List<Book> index(){
		return bookService.allBooks();
	}
	
	@PostMapping("/api/books")
	public Book create(@RequestParam(value="title") String title, @RequestParam(value="description") String desc, @RequestParam(value="language") String lang, @RequestParam(value="pages") Integer numPages) {
		Book book = new Book(title, desc, lang, numPages);
		return bookService.createBook(book);
	}
	
	@RequestMapping("/api/books/{id}")
	public Book show(@PathVariable("id") Long id) {
		Book book = bookService.findBook(id);
		return book;
	}
	
//	@PostMapping("/api/books/{id}")
//	public Book update(@RequestParam(value="title") String title, @RequestParam(value="description") String desc, @RequestParam(value="language") String lang, @RequestParam(value="pages") Integer numPages, @PathVariable("id") Long id) {
//		Book book = bookService.findBook(id);
//		book.setTitle(title);
//		book.setDescription(desc);
//		book.setLanguage(lang);
//		book.setNumberOfPages(numPages);
//		bookService.updateBook(book);
//		return book;
//	}
	
//	@DeleteMapping("/api/books/{id}")
//	public Book delete(@PathVariable("id") Long id) {
//		Book book = bookService.findBook(id);
//		if(book != null) {
//			bookService.deleteBook(id);
//		}
//		return book;
//	}

}
