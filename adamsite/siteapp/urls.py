from django.urls import path

from . import views

urlpatterns = [
    path("", views.dashboard, name="dashboard"),
    path("about/", views.about, name="about"),
    path("support/", views.support, name="support"),
    path("donation/", views.feedback, name="donation")
]
