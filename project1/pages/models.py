from django.db import models

class Insert_tu(models.Model):
	subject_id = models.PositiveIntegerField()
	subject_name = models.CharField(max_length=100)
	subject_seq =  models.PositiveIntegerField()
	chapter_id = models.PositiveIntegerField()
	chapter_name = models.CharField(max_length=100)
	chapter_seq = models.PositiveIntegerField()
	goal_id = models.PositiveIntegerField()
	goal_name =  models.CharField(max_length=200)
	goal_seq = models.PositiveIntegerField()
	tu_id = models.PositiveIntegerField()
	tu_name = models.CharField(max_length=200)
	mapping_type = models.CharField(max_length=100)

