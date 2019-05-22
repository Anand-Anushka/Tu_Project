

from django.urls import path
from . import views

urlpatterns = [
  path('',views.home,name='home'),
  path('upload/',views.simple_upload,name='simple_upload'),
  path('map/',views.map,name='map'),
  # path('upload_mapping/',views.upload_mapping,name='upload_mapping'),
  # path('upload_tu_video/',views.upload_tu_video,name='upload_tu_video'),
  # path('upload_tu_lo/',views.upload_tu_lo,name='upload_tu_lo'),
  # path('upload_file/',views.upload_file,name='upload_file'),
  # path('simple_upload/',views.simple_upload,name='simple_upload'),
]

