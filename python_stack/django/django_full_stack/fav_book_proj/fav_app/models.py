from django.db import models
from log_reg_app.models import Users
# Create your models here.

class BooksManager(models.Manager):
    def validator(self, postData):
        errors = {}
        if len(postData['title']) == 0:
            errors['title'] = 'Please fill out the title field.'
        if len(postData['desc']) < 5:
            errors['desc'] = 'Description has to be at least 5 characters long.'
        
        return errors

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
