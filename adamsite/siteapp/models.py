from django.db import models

# Create your models here.

class BugReport(models.Model):
    title = models.CharField(max_length=100)
    email = models.EmailField()
    description = models.TextField()
    severity = models.TextChoices("severity", "Minor Major Critial N/A")

    def __str__(self):
        return self.title