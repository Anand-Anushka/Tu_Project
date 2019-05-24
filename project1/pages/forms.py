# from django import forms
from .models import Document
from django.forms import ModelForm, modelformset_factory
  
class DocumentForm(ModelForm): 
	class Meta: 
		model = Document
		fields = ['document']

# DocumentFormSet = modelformset_factory(Document, form=DocumentForm, max_num=2)