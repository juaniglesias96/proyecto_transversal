import re
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django import forms

# Define the custom registration form that inherits from UserCreationForm
class RegistroForm(UserCreationForm):
    email = forms.EmailField(required=True)
   
    class Meta:
        model = User
        fields = ('username', 'email', 'password1', 'password2')

    def clean_email(self):
        email = self.cleaned_data.get('email')
        if User.objects.filter(email=email).exists():
            raise forms.ValidationError("Email is already in use.")
        return email

    def clean_username(self):
        username = self.cleaned_data.get('username')
        if User.objects.filter(username=username).exists():
            raise forms.ValidationError("Username is already in use.")
        return username

    def save(self, commit=True):
        user = super(RegistroForm, self).save(commit=False)  # type: ignore
        user.email = self.cleaned_data['email']
        if commit:
            user.save()
        return user
