from django.shortcuts import render
from .forms import BugReportForm

# Create your views here.

def dashboard(request):
    return render(request, 'dashboard.html')

def about(request):
    return render(request, 'about.html')

def support(request):
    if request.method == 'POST':
        form = BugReportForm(request.POST)
        if form.is_valid():
            form.save()
            return render(request, 'support.html', {'form': form, 'submitted': True})
    else:
        form = BugReportForm()
    return render(request, 'support.html', {'form': form})

def feedback(request):
    return render(request, 'donation.html')