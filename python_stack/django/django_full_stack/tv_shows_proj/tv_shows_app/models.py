from django.db import models
from datetime import datetime

# Create your models here.
class ShowManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}

        if len(postData["title"]) == 0 or len(postData["network"]) == 0 or len(postData["release_date"]) == 0:
            errors["empty_field"] = "All fields have to be filled out. (Description optional)"
        else:
            if len(postData["title"]) < 2:
                errors["title"] = "Title name should be at least 2 characters."
            if len(postData["network"]) < 3:
                errors["network"] = "Network name should be at least 3 characters."
            if len(postData["desc"]) < 10:
                errors["desc"] = "Description should be at least 10 characters."
            release_date = datetime.strptime(postData["release_date"], '%Y-%m-%d').date()
            if release_date >= datetime.date(datetime.now()):
                errors["release_date"] = "The release date must be in the past."
        return errors

class Shows(models.Model):
    title = models.CharField(max_length=255)
    network = models.CharField(max_length=64)
    release_date = models.DateField()
    description = models.TextField()
    objects = ShowManager()

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)