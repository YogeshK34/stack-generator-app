from django.urls import path
from .views import GenerateCard

urlpatterns = [
    path('generate-card/',GenerateCard.as_view(), name='generate-card')
]