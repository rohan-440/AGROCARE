from django.db import models

# Create your models here.
class Expert(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    specialty = models.CharField(max_length=100)  # Represents the expertise area of the expert

class Farmer(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    location = models.CharField(max_length=100)  # Represents the location of the farmer

