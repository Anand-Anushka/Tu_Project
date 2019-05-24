
import csv, io
import json
import pandas as pd
from django.shortcuts import render
from django.core.files.storage import FileSystemStorage
from django.contrib import messages
# from .models import mapping, tu_video, tu_lo
from django.db import models
from django.http import HttpResponse
from django.http import JsonResponse
from django.views.generic.edit import FormView
from .forms import DocumentForm
from django.forms import modelformset_factory
from .models import Document
# from django_cleanup import cleanup

# from .forms import UploadFileForm
# from somewhere import handle_uploaded_file

def home(request):
	return render(request,'home.html',{})



def upload_file(request):
	
	DocumentFormSet = modelformset_factory(Document,fields=('document',), extra = 3)
	#formset = DocumentFormSet(queryset=Document.objects.none())
	print(request.method)
	if request.method=='POST':
		f = DocumentFormSet(request.POST, request.FILES)
		print(f)
		f.save()
	else:
		f = DocumentFormSet(queryset=Document.objects.none())

	return render(request,'simple_upload.html',{'format':f})





def subject(request):
	mapping = pd.read_csv('./media/mapping.csv')
	video = pd.read_csv('./media/tu_video.csv')
	qus = pd.read_csv('./media/tu_lo.csv')
	merge1 = pd.merge(mapping,video, on='tu_id')
	merge2 = pd.merge(merge1,qus, on='tu_id')

	j = (merge2.groupby(['subject_id','subject_name','chapter_id','chpater_name','goal_id','goal_name','tu_id','tu_name',], as_index=False)
         .apply(lambda x: x[['video_id','video_name','yt_link','lo_id','lo_q_link']].to_dict('r'))
         .reset_index()
         .rename(columns={0:'id'}))
         # .to_json(orient='records')) 
# preformattedJson = JSON.stringify(j, null, 2)
	# return render(request,'subject.html',{})
	return render(request,'subject.html',{'map':j.to_json})







def chapter(request):
	mapping = pd.read_csv('./media/test.csv')
	video = pd.read_csv('./media/tu_video.csv')
	qus = pd.read_csv('./media/tu_lo.csv')
	merge1 = pd.merge(mapping,video, on='tu_id')
	merge2 = pd.merge(merge1,qus, on='tu_id')

	j = (merge2.groupby(['subject_id','subject_name','chapter_id','chpater_name','goal_id','goal_name','tu_id','tu_name',], as_index=False)
         .apply(lambda x: x[['video_id','video_name','yt_link','lo_id','lo_q_link']].to_dict('r'))
         .reset_index()
         .rename(columns={0:'id'}))

# preformattedJson = JSON.stringify(j, null, 2)
	return render(request,'chapter.html')







def goal(request):
	return render(request,'goal.html',{})



def question(request):
	return render(request,'question.html',{})


# def upload(request):
# 	if request.method == "post":
# 		upload_file = request.FILES['document']
# 		fs = FileSystemStorage()
# 		fs.save(uploaded_file.name,uploaded_file)
# 	return render(request,'upload.html')

# def upload_mapping(request):
	
# 	template = "upload_mapping.html"
# 	if request.method == "GET":
# 		return render(request,template,{})

# 	csv_file = request.FILES['file1']

# 	if not csv_file.name.endswith('.csv'):
# 		messages.error(request,'This is not a csv a file')

# 	data_set = csv_file.read().decode('UTF-8')
# 	io_string =  io.StringIO(data_set)
# 	next(io_string) 

# 	for column in csv.reader(io_string, delimiter=',', quotechar = "|"):
# 		import pdb; pdb.set_trace()
# 		obj, created =  mapping.objects.update_or_create(
# 			subject_id = column[0],
# 			subject_name = column[1],
# 			subject_seq =  column[2],
# 			chapter_id = column[3],
# 			chapter_name = column[4],
# 			chapter_seq = column[5],
# 			goal_id = column[6],
# 			goal_name =  column[7],
# 			goal_seq = column[8],
# 			tu_id = column[9],
# 			tu_name = column[10],
# 			mapping_type = column[11]
# 		)
		
# 		# subject_id = column[0]
# 		# subject_name = column[1]
# 		# print (subject_id + " " + subject_name + "\n")
# 		# mp =  mapping(
# 		# 	subject_id = column[0],
# 		# 	subject_name = column[1],
# 		# 	subject_seq =  column[2],
# 		# 	chapter_id = column[3],
# 		# 	chapter_name = column[4],
# 		# 	chapter_seq = column[5],
# 		# 	goal_id = column[6],
# 		# 	goal_name =  column[7],
# 		# 	goal_seq = column[8],
# 		# 	tu_id = column[9],
# 		# 	tu_name = column[10],
# 		# 	mapping_type = 'syllabus'
# 		# )
# 		# mp.save()
# 	context = {}

# 	return render(request, template, context)


# # Second file upload
# #tu_video upload



# def upload_tu_video(request):
# 	template = "upload_tu_video.html"
# 	if request.method == "GET":
# 		return render(request,template,{})

# 	csv_file = request.FILES['file2']

# 	if not csv_file.name.endswith('.csv'):
# 		messages.error(request,'This is not a csv a file')

# 	data_set = csv_file.read().decode('UTF-8')
# 	io_string =  io.StringIO(data_set)
# 	next(io_string) 

# 	for column in csv.reader(io_string, delimiter=',', quotechar = "|"):
# 		_, created =  tu_video.objects.update_or_create(
# 			tu_id = column[0],
# 			video_id = column[1],
# 			video_name = column[2],
# 			yt_link = column[3]
# 		)
# 	context = {}
# 	return render(request, template, context)


# # Third file upload
# #tu_lo upload



# def upload_tu_lo(request):
# 	template = "upload_tu_lo.html"
# 	if request.method == "GET":
# 		return render(request,template,{})

# 	csv_file = request.FILES['file3']

# 	if not csv_file.name.endswith('.csv'):
# 		messages.error(request,'This is not a csv a file')

# 	data_set = csv_file.read().decode('UTF-8')
# 	io_string =  io.StringIO(data_set)
# 	next(io_string) 

# 	for column in csv.reader(io_string, delimiter=',', quotechar = "|"):
# 		# import pdb; pdb.set_trace()
# 		_, created =  tu_lo.objects.update_or_create(
# 			tu_id = column[0],
# 			lo_id = column[1],
# 			lo_q_link = column[2]
# 		)
# 	context = {}
# 	return render(request, template, context)

# def upload_file(request):

#     if request.method == 'POST':

#         form = UploadFileForm(request.POST, request.FILES)
#         if form.is_valid():

#             handle_uploaded_file(request.FILES['file'])
#             print(form)
#             return HttpResponseRedirect('/success/url/')
#     else:
#         form = UploadFileForm()
#     return render(request, 'upload.html', {'form': form})




