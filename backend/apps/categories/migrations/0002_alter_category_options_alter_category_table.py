# Generated by Django 4.0.4 on 2022-06-08 05:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('categories', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='category',
            options={'verbose_name': 'Categorie'},
        ),
        migrations.AlterModelTable(
            name='category',
            table='category',
        ),
    ]
