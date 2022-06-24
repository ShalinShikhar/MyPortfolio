from http.client import HTTPResponse
from django.shortcuts import render
from datetime import datetime
from contact.models import Contact
# Create your views here.
def contact(request):
    return render(request,"Contact.html")

def message(request):
    if request.method=='POST':
        name=request.POST.get('fullname')
        email=request.POST.get('emailid')
        phone=request.POST.get('phone')
        desc=request.POST.get('message')
        contact=Contact(name=name,email=email,phone=phone,desc=message,date=datetime.today())
        contact.save()
    context={
        'fullname' : name
    }
    return render(request,"message.html",context)