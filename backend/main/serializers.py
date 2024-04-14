from rest_framework  import serializers
from . import models

class ExpertsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Expert
        fields = ['first_name','last_name','email','password']