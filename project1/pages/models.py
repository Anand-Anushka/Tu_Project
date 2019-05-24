from django.db import models
from django.core.files.storage import FileSystemStorage
from django.conf import settings
import os



# class mapping(models.Model):
# 	subject_id = models.PositiveIntegerField()
# 	subject_name = models.CharField(max_length=100)
# 	subject_seq =  models.PositiveIntegerField()
# 	chapter_id = models.PositiveIntegerField()
# 	chapter_name = models.CharField(max_length=100)
# 	chapter_seq = models.PositiveIntegerField()
# 	goal_id = models.PositiveIntegerField()
# 	goal_name =  models.CharField(max_length=200)
# 	goal_seq = models.PositiveIntegerField()
# 	tu_id = models.PositiveIntegerField()
# 	tu_name = models.CharField(max_length=200)
# 	mapping_type = models.CharField(max_length=100)

# class tu_video(models.Model):
# 	tu_id = models.PositiveIntegerField()
# 	video_id = models.PositiveIntegerField()
# 	video_name = models.CharField(max_length=100)
# 	yt_link = models.URLField(max_length=200)


# class tu_lo(models.Model):
# 	tu_id = models.PositiveIntegerField()
# 	lo_id = models.PositiveIntegerField()
# 	lo_q_link = models.URLField(max_length=300)

class OverwriteStorage(FileSystemStorage):

    def get_available_name(self, name,max_length=None):
        if self.exists(name):
            os.remove(os.path.join(settings.MEDIA_ROOT, name))
        return name


class Document(models.Model):
	# title = models.CharField(max_length=100)
	document = models.FileField(storage=OverwriteStorage())

def document_path(instance, filename):
    return os.path.join('./media/documnent', str(instance.some_identifier), 'filename.ext')