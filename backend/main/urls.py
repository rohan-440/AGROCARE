from django.urls import path
from . import views

urlpatterns = [
    path('expert/', views.ExpertList.as_view()),  # URL for listing all experts
    path('expert/<int:pk>/', views.ExpertDetail.as_view()),  # URL for retrieving a specific expert
    path('expert-login/', views.expert_login),  # URL for expert login
    
    path('farmer/', views.FarmerList.as_view()),  # URL for listing all farmers
    path('farmer/<int:pk>/', views.FarmerDetail.as_view()),  # URL for retrieving a specific farmer
    path('farmer-login/', views.farmer_login),  # URL for farmer login
]
