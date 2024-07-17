
from django.shortcuts import render,redirect,HttpResponse
from Reserva.models import Cancha,Persona,Horario,Reserva
from django.views.generic import TemplateView
from Reserva.forms import RegistroForm
from django.contrib.auth import login,authenticate,logout
from django.contrib import messages
from .forms import RegistroForm
from django.contrib.auth.forms import AuthenticationForm
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
# Create your views here.


def getInfoCanchaById(request, id_cancha):
    cancha = Cancha.objects.get(id=id_cancha)
    horarios = Horario.objects.filter(cancha__id=cancha.id)
    return render(request, "canchas.html", {'nombre': cancha.nombre,'descripcion': cancha.descripcion, 'horarios': horarios})

def getInfoPersonaById(request, id_persona):
 persona = Persona.objects.get(id=id_persona)
 resultado_layout= f"<h3>Nombre:{persona.nombre} Apellido:{persona.apellidos} Cedula:{persona.cedula} telefono:{persona.telefono} <h3>"
 return HttpResponse(resultado_layout)

class MainView(TemplateView):
    template_name = "index.html"

class Navbar(TemplateView):
    template_name = "navbar.html"

def getListadoCanchas(request):
    canchas = Cancha.objects.all()
    nombre_canchas = []
    for cancha in canchas:
        nombre_canchas.append((cancha.id,cancha.nombre))
    return render(request, "canchas.html",{'listado': nombre_canchas})

# def registro_request(request):
#     if request.method == 'POST':
#         form = RegistroForm(request.POST)
#         print(f"{form}")
#         if form.is_valid():
#             user = form.save(commit=True)
#             user.email = form['email']
#             user.username = form['username']
#             user.save()
#             return JsonResponse({'message': 'Register in successfully!'}, status=201)
#         else:
#             print(form.errors)
#             return JsonResponse({'errors': form.errors}, status=400)
#     else:     
#         return JsonResponse({'message': 'Error in registre!'}, status=405)

def registro_request(request):
    if request.method == 'POST':      
        data = json.loads(request.body)
        form = RegistroForm(data)
        if form.is_valid():
            form.save()
            return JsonResponse({'message': 'Registered successfully!'}, status=201)
        else:
            return JsonResponse({'errors': form.errors}, status=400)
    else:     
        return JsonResponse({'error': 'Invalid request method'}, status=405)

def login_request(request):
    if request.method == 'POST':
        body = json.loads(request.body)
        username = body.get('username')
        password = body.get('password')
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({'message': 'Logged in successfully!'}, status=200)
        else:
            messages.error(request, 'Error al autenticarse')
            return JsonResponse({'message': 'Error al autenticarse'}, status=400)
            
    return  JsonResponse({'message': 'Invalid request method'}, status=405)


def logout_request(request):
    logout(request)
    messages.info(request, "Has cerrado sesión")
    return redirect("login")

def reservarCancha(request, id_horario):
    if request.method == 'POST':
        user =request.user.id
        persona = Persona.objects.get(user__id=user)
        horario = Horario.objects.get(id=id_horario)
        new_reserva = Reserva(horario=horario, persona=persona)
        new_reserva.save()
        messages.info(request, 'Se ha realizado su reserva')
        return redirect(f'/getInfoCanchaById/{horario.cancha.id}')




