from django.db import models

# Create your models here.


class Setting(models.Model):
    """
    This model represents the settings of the application
    """
    name = models.CharField(max_length=20)
    content = models.TextField()

    def __str__(self):
        return self.name


class Message(models.Model):
    """
    This model represent the message that send by visitior
    """
    fullname = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()

    def __str__(self):
        return self.email
