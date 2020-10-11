package com.codingdojo.howardshin.productscategories.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.codingdojo.howardshin.productscategories.models.Product;
import com.codingdojo.howardshin.productscategories.repositories.ProductRepository;

@Service
public class ProductService {
	private final ProductRepository repo;
	
	public ProductService(ProductRepository repo) {
		this.repo = repo;
	}
	
	public List<Product> allProducts() {
		return repo.findAll();
	}
	
	public Product createProduct(Product product) {
		return repo.save(product);
	}
	
	public Product findProduct(Long id) {
		Optional<Product> optionalProduct = repo.findById(id);
		if(optionalProduct.isPresent()) {
			return optionalProduct.get();
		}
		else {
			return null;
		}
	}
	
	public Product updateProduct(Product prod) {
		return this.repo.save(prod);
	}
}
