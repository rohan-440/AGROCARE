from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from rest_framework import generics
from rest_framework import permissions
from django.http import JsonResponse, HttpResponse

from .serializers import ExpertSerializer  # Assuming you have an ExpertSerializer defined
from . import models

# Create your views here.
class ExpertList(generics.ListCreateAPIView):
    queryset = models.Expert.objects.all()
    serializer_class = ExpertSerializer
    permission_classes = [permissions.IsAuthenticated]

class ExpertDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Expert.objects.all()
    serializer_class = ExpertSerializer

@csrf_exempt
def expert_login(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        try:
            expert = models.Expert.objects.get(email=email, password=password)
            return JsonResponse({'bool': True})
        except models.Expert.DoesNotExist:
            return JsonResponse({'bool': False})
    return HttpResponse(status=405)  # Method Not Allowed for other HTTP methods
