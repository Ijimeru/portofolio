from . import views
from django.urls import path

urlpatterns = [
    path('settings/', views.get_settings),
    path('send-message/', views.sendMessage)
]
