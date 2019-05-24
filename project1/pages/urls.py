

from django.urls import path
from . import views

urlpatterns = [
  path('',views.home,name='home'),
  path('upload/',views.upload_file,name='simple_upload'),
  path('subject/',views.subject,name='subject'),
  path('chapter/',views.chapter,name='chapter'),
  path('goal/',views.goal,name='goal'),
  path('question/',views.question,name='question'),
  # path('simple_upload/',views.simple_upload,name='simple_upload'),
]

