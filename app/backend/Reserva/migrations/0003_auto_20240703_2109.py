# Generated by Django 3.1.2 on 2024-07-04 02:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Reserva', '0002_auto_20240701_2222'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cancha',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
