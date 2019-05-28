

from django.urls import path
from django.conf.urls import url 
from . import views

urlpatterns = [
  path('',views.home,name='home'),
  path('upload/',views.upload_file,name='simple_upload'),
  path('subject/',views.subject,name='subject'),
  # url(r'^chapter/(?P<subject_name>[\w-]+)/$', views.chapter, name='urlname'),
  # path('goal/',views.goal,name='goal'),
  # path('tu/',views.tu,name='tu'),
  # path('question/',views.question,name='question'),
  # path('simple_upload/',views.simple_upload,name='simple_upload'),
]

