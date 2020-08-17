from django.db import models

class CourseManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}

        if len(postData['name']) < 5:
            errors['name'] = "Course name has to be minimum 5 characters."
        if len(postData['description']) < 15:
            errors['description'] = "Course description has to be minimum 15 characters."
        return errors

# Create your models here.
class Course(models.Model):
    name = models.CharField(max_length=64)
    description = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)
    objects = CourseManager()