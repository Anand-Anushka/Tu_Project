def handle_uploaded_file(f):  
	import pdb; pdb.set_trace()
    with open('pages/static/upload/'+f.name, 'wb+') as destination:  
        for chunk in f.chunks():  
            destination.write(chunk)  