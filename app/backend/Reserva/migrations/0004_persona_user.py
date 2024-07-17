# Generated by Django 3.1.2 on 2024-07-04 02:14

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('Reserva', '0003_auto_20240703_2109'),
    ]

    operations = [
        migrations.AddField(
            model_name='persona',
            name='user',
            field=models.OneToOneField(default=None, on_delete=django.db.models.deletion.PROTECT, related_name='user', to=settings.AUTH_USER_MODEL),
        ),
    ]
