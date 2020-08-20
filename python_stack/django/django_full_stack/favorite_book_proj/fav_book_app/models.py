from django.db import models
import re

# Create your models here.
class UserManager(models.Manager):
    def validator(self, postData):
        errors = {}
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

        if (len(postData['registered_first_name']) == 0 or
        len(postData['registered_last_name']) == 0 or
        len(postData['registered_email']) == 0 or
        len(postData['registered_password']) == 0):
            errors['empty_field'] = "All fields must be completed for registration."

        if len(postData['registered_first_name']) < 2:
            errors['first_name_error'] = 'The first name has to be at least 2 characters.'
        if len(postData['registered_last_name']) < 2:
            errors['last_name_error'] = 'The last name has to be at least 2 characters.'
        if not EMAIL_REGEX.match(postData['registered_email']):         
            errors['email'] = "Invalid email address!"
        if postData['registered_password'] != postData['registered_confirm_pw']:
            errors['password_no_match'] = 'Your passwords do not match.'
        if len(postData['registered_password']) < 8:
            errors['short_password'] = 'The password has to be at least 8 characters.'
        
        return errors

class BooksManager(models.Manager):
    def validator(self, postData):
        errors = {}
        if len(postData['title']) == 0:
            errors['title'] = 'Please fill out the title field.'
        if len(postData['desc']) < 5:
            errors['desc'] = 'Description has to be at least 5 characters long.'
        
        return errors

class Users(models.Model):
    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)
    email = models.EmailField()
    password = models.CharField(max_length=64)

    objects = UserManager()

class Books(models.Model):
    title = models.CharField(max_length=255)
    desc = models.TextField()
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    uploaded_by = models.ForeignKey(
        Users,
        related_name="book_uploaded",
        on_delete=models.CASCADE
    )
    users_who_like = models.ManyToManyField(
        Users,
        related_name="liked_books"
    )
    
    objects = BooksManager()
