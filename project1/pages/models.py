from django.db import models
from django.core.files.storage import FileSystemStorage
from django.conf import settings

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
    '''
    Muda o comportamento padrão do Django e o faz sobrescrever arquivos de
    mesmo nome que foram carregados pelo usuário ao invés de renomeá-los.
    '''
    def get_available_name(self, name):
        if self.exists(name):
            os.remove(os.path.join(settings.MEDIA_ROOT, "media"))
        return name


class Document(models.Model):
    description = models.CharField(max_length=255, blank=True)
    document = models.FileField(upload_to='documents/',storage = OverwriteStorage())
    uploaded_at = models.DateTimeField(auto_now_add=True)